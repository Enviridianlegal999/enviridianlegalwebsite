"use client";

import { useState } from "react";

import {
  Button,
  DialogActions,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";

import { consultationFormSchema } from "@/validations/consultationFormSchema";
import { consultationRegistrationAction } from "@/actions/consultationRegistrationAction";

const bestTimeToReachYou = [
  {
    label: "Morning",
    value: "morning",
  },
  {
    label: "Afternoon",
    value: "afternoon",
  },
  {
    label: "Evening",
    value: "evening",
  },
  {
    label: "Night",
    value: "night",
  },
];

const contactChoice = [
  {
    label: "Email",
    value: "email",
  },
  {
    label: "Phone",
    value: "phone",
  },
];

const GetFreeConsultationRegistration = ({ themeColor, handleClose }) => {
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
      const validationResult = consultationFormSchema.safeParse(formJson);

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
      const res = await consultationRegistrationAction(validationResult.data);

      // Check for a success flag from the server response
      if (res.success) {
        alert(res.message);
        // Reset the form and clear errors upon success
        event.target.reset();
        // Close the popup only after a successful submission
        handleClose();
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
      <Stack spacing={2} pt={1} textAlign={"center"}>
        <TextField
          color={themeColor}
          required
          margin="dense"
          id="name"
          name="name"
          label="Full Name"
          type="text"
          variant="outlined"
          error={!!formErrors.name}
          helperText={formErrors.name}
        />
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
          id="city"
          name="city"
          label="City"
          type="text"
          variant="outlined"
          error={!!formErrors.city}
          helperText={formErrors.city}
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
          rows={4}
          error={!!formErrors.message}
          helperText={formErrors.message}
        />
        <TextField
          color={themeColor}
          margin="dense"
          id="time"
          name="time"
          select
          label="Select Best Time To Contact"
          defaultValue="morning"
          error={!!formErrors.time}
          helperText={formErrors.time}
        >
          {bestTimeToReachYou.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          color={themeColor}
          margin="dense"
          id="choice"
          name="choice"
          select
          label="Select Contact Method"
          defaultValue="email"
          error={!!formErrors.choice}
          helperText={formErrors.choice}
        >
          {contactChoice.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <DialogActions>
          <Button onClick={handleClose} fullWidth>
            Cancel
          </Button>
          <Button
            color={themeColor}
            disableElevation
            variant="contained"
            type="submit"
            loading={formLoading}
            loadingIndicator="Submitting..."
            fullWidth
          >
            Submit
          </Button>
        </DialogActions>
      </Stack>
    </form>
  );
};

export default GetFreeConsultationRegistration;
