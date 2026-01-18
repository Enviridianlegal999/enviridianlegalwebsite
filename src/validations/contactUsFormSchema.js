import { z } from "zod";
import { emailRegex, phoneRegex } from "@/validations/fixedRegex";

export const contactUsFormSchema = z.object({
  fname: z.string().min(1, "Full name is required."),
  lname: z.string().min(1, "Full name is required."),
  email: z.string().regex(emailRegex, "Please enter a valid email address."), // Updated email validation
  phone: z
    .string()
    .regex(phoneRegex, "Please enter a valid phone number (no +91 or 91)."),
  message: z.string().min(1, "Message is required."),
});
