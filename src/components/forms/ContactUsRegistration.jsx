"use client";

import { Button, Stack, TextField } from "@mui/material";

const ContactUsRegistration = ({ themeColor = "primary" }) => {
  return (
    <form onSubmit={() => alert("submitted")}>
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
            // error={!!formErrors.name}
            // helperText={formErrors.name}
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
            // error={!!formErrors.name}
            // helperText={formErrors.name}
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
          //   error={!!formErrors.email}
          //   helperText={formErrors.email}
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
          //   error={!!formErrors.phone}
          //   helperText={formErrors.phone}
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
          //   error={!!formErrors.message}
          //   helperText={formErrors.message}
        />
        <Button
          color={themeColor}
          disableElevation
          variant="contained"
          type="submit"
          //   loading={formLoading}
          loadingIndicator="Submitting..."
        >
          Contact Us
        </Button>
      </Stack>
    </form>
  );
};

export default ContactUsRegistration;
