import { z } from "zod";
import { emailRegex, phoneRegex } from "@/validations/fixedRegex";

export const consultationFormSchema = z.object({
  name: z.string().min(1, "Full name is required."),
  email: z.string().regex(emailRegex, "Please enter a valid email address."), // Updated email validation
  phone: z
    .string()
    .regex(phoneRegex, "Please enter a valid phone number (no +91 or 91)."),
  city: z.string().min(1, "City is required."),
  message: z.string().min(1, "Message is required."),
  time: z.string().min(1, "Please select a time slot."),
  choice: z.string().min(1, "Please select a communication method choice."),
});
