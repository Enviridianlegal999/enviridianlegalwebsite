"use server";

import dbConnect from "@/lib/dbConnect";
import Consultation from "@/models/Consultation";

export async function consultationRegistrationAction(data) {
  await dbConnect();

  const { name, email, phone, city, message, time, choice } = data;

  const consultation = new Consultation({
    name,
    email,
    phone,
    city,
    message,
    time,
    choice,
  });

  await consultation.save();
  return { success: true, message: "Consultation Registration successful!" };
}
