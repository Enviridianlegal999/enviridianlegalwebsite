"use client";

import { useState } from "react";

import { Button, Stack, TextField } from "@mui/material";

import { contactUsFormSchema } from "@/validations/contactUsFormSchema";
import { contactUsRegistrationAction } from "@/actions/contactUsRegistrationAction";

const ContactUsRegistration = ({ themeColor = "primary" }) => {
  const [formErrors, setFormErrors] = useState({});
  const [formLoading, setFormLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    try {
      // Set loading state and clear previous errors at the start
      setFormLoading(true);
      setFormErrors({});

      // Validate using the imported Zod schema
      const validationResult = contactUsFormSchema.safeParse(formJson);

      if (!validationResult.success) {
        // Map Zod validation errors to formErrors state using forEach
        const validationErrors = {};
        validationResult.error.issues.forEach((issue) => {
          // Ensure path[0] exists before assigning the message
          const fieldName = issue.path[0];
          if (fieldName) {
            validationErrors[fieldName] = issue.message;
          }
        });
        setFormErrors(validationErrors);
        return;
      }

      // Proceed to server action if validation passes
      const res = await contactUsRegistrationAction(validationResult.data);

      // Check for a success flag from the server response
      if (res.success) {
        alert(res.message);
        // Reset the form and clear errors upon success
        event.target.reset();
      } else {
        // Handle server-side errors
        alert(res.message || "Registration failed! Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Alert a generic message for unexpected issues
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      // Always stop the loading state
      setFormLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3} textAlign={"center"}>
        <Stack direction={"row"} spacing={1}>
          <TextField
            color={themeColor}
            required
            margin="dense"
            id="fname"
            name="fname"
            label="First Name"
            type="text"
            variant="outlined"
            error={!!formErrors.name}
            helperText={formErrors.name}
            fullWidth
          />
          <TextField
            color={themeColor}
            required
            margin="dense"
            id="lname"
            name="lname"
            label="Last Name"
            type="text"
            variant="outlined"
            error={!!formErrors.name}
            helperText={formErrors.name}
            fullWidth
          />
        </Stack>
        <TextField
          color={themeColor}
          required
          margin="dense"
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          error={!!formErrors.email}
          helperText={formErrors.email}
        />
        <TextField
          color={themeColor}
          required
          margin="dense"
          id="phone"
          name="phone"
          label="Phone Number"
          type="text"
          variant="outlined"
          error={!!formErrors.phone}
          helperText={formErrors.phone}
        />

        <TextField
          color={themeColor}
          required
          margin="dense"
          id="message"
          name="message"
          label="Message"
          type="text"
          variant="outlined"
          placeholder="Write your message here..."
          multiline
          rows={5}
          error={!!formErrors.message}
          helperText={formErrors.message}
        />
        <Button
          color={themeColor}
          disableElevation
          variant="contained"
          type="submit"
          loading={formLoading}
          loadingIndicator="Submitting..."
        >
          Contact Us
        </Button>
      </Stack>
    </form>
  );
};

export default ContactUsRegistration;
