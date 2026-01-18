"use server";

import dbConnect from "@/lib/dbConnect";
import ContactUs from "@/models/ContactUs";

export async function contactUsRegistrationAction(data) {
  await dbConnect();

  const { fname, lname, email, phone, message } = data;

  const contactUs = new ContactUs({
    fname,
    lname,
    email,
    phone,
    message,
  });

  await contactUs.save();
  return { success: true, message: "Contact Us Registration successful!" };
}
