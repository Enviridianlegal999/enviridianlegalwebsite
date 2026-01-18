"use server";

import dbConnect from "@/lib/dbConnect";
import AIAssist from "@/models/AIAssist";

export async function aiAssistRegistrationAction(data) {
  await dbConnect();

  const { name, userType, interest, email, phone, message } = data;

  const aiAssist = new AIAssist({
    name,
    userType,
    interest,
    email,
    phone,
    message,
  });

  await aiAssist.save();
  return { success: true, message: "AI Assistance Registration successful!" };
}
