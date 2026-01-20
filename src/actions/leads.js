"use server";

import dbConnect from "@/lib/dbConnect";
import AIAssist from "@/models/AIAssist";
import Consultation from "@/models/Consultation";
import ContactUs from "@/models/ContactUs";

import { revalidatePath } from "next/cache";

export async function getLeadsData() {
  try {
    await dbConnect();

    const [aiLeads, consultations, contactInquiries] = await Promise.all([
      AIAssist.find({}).sort({ createdAt: -1 }).lean(),
      Consultation.find({}).sort({ createdAt: -1 }).lean(),
      ContactUs.find({}).sort({ createdAt: -1 }).lean(),
    ]);

    return {
      aiLeads: JSON.parse(JSON.stringify(aiLeads)),
      consultations: JSON.parse(JSON.stringify(consultations)),
      contactInquiries: JSON.parse(JSON.stringify(contactInquiries)),
    };
  } catch (error) {
    console.error("Error fetching leads:", error);
    return { aiLeads: [], consultations: [], contactInquiries: [] };
  }
}

export async function deleteLeadAction(id, source) {
  try {
    await dbConnect();

    let model;
    if (source === "ai") model = AIAssist;
    else if (source === "consultation") model = Consultation;
    else if (source === "contact") model = ContactUs;

    // Use try-catch specifically for the DB operation
    const deletedDoc = await model.findByIdAndDelete(id);

    if (!deletedDoc) {
      return { success: false, message: "Lead not found in database." };
    }

    // This ensures Next.js clears the cache for this page
    revalidatePath("/admin/leads");

    return { success: true, message: "Lead deleted successfully!" };
  } catch (error) {
    console.error("DELETE_ERROR:", error);
    // Return the error message so the toast can show it
    return {
      success: false,
      message: error.message || "Server error occurred.",
    };
  }
}
