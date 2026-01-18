"use client";

import { useState } from "react";
import Image from "next/image";

import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Fab,
  Stack,
} from "@mui/material";

import { TbMessageChatbot } from "react-icons/tb";

import enviridianBot from "../../../public/assets/images/enviridianBot.webp";

import { aiAssistFormSchema } from "@/validations/aiAssistFormSchema";
import { aiAssistRegistrationAction } from "@/actions/aiAssistRegistrationAction";

import styles from "@/styles/components/Chatbox.module.css";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");
  const [interest, setInterest] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle open/close and reset
  const toggleChatbox = () => {
    setOpen((prev) => {
      if (prev) {
        resetChat();
      } else {
        initChat();
      }
      return !prev;
    });
  };

  const initChat = () => {
    setMessages([
      {
        text: `Hi, I'm ${"Lawyer Bot"}, your ${"legal assistant"}. Please enter your name to get started.`,
        sender: "bot",
      },
    ]);
    setStep(1);
    setIsSubmitted(false);
  };

  const resetChat = () => {
    setMessages([]);
    setUserInput("");
    setStep(0);
    setName("");
    setUserType("");
    setInterest("");
    setFormData({ email: "", phone: "", message: "" });
    setIsSubmitted(false);
  };

  const addMessage = (text, sender = "bot") => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const handleSendName = () => {
    if (!userInput.trim()) return;
    setName(userInput.trim());
    addMessage(userInput, "user");

    setTimeout(() => {
      addMessage(
        `Thank you, ${userInput.trim()}. Could you tell me which category best describes you as a client?`,
        "bot",
      );
      setStep(2);
    }, 500);

    setUserInput("");
  };

  const handleUserTypeSelection = (type) => {
    setUserType(type);
    addMessage(type, "user");

    setTimeout(() => {
      addMessage(
        `Understood. As a ${type}, what type of legal service are you looking for today?`,
        "bot",
      );
      setStep(3);
    }, 500);
  };

  const handleInterestSelection = (item) => {
    setInterest(item);
    addMessage(item, "user");

    setTimeout(() => {
      addMessage(
        `Noted. We can assist you with ${item} matters. Please provide your contact details so our legal team can reach out to you promptly.
`,
        "bot",
      );
      setStep(4);
    }, 500);
  };

  const handleFormSubmit = async () => {
    // Ensure required fields are filled out
    if (!formData.email || !formData.phone || !formData.message) return;

    const finalData = {
      name,
      userType,
      interest,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    // Validate form data with Zod schema
    const validationResult = aiAssistFormSchema.safeParse(finalData);

    if (!validationResult.success) {
      // If validation fails, show an alert with error messages
      const errorMessages = validationResult.error.issues.map(
        (issue) => issue.message,
      );
      alert(errorMessages.join("\n")); // Show error messages in an alert box
      return;
    }

    // Add user's form submission message
    addMessage("Submitted form", "user");

    try {
      // Call the server-side action to handle registration
      const response = await aiAssistRegistrationAction(finalData);
      setTimeout(() => {
        if (response.success) {
          addMessage(
            "Thank you for sharing your details. One of our lawyers will contact you shortly to discuss your case.",
            "bot",
          );
        }
        setIsSubmitted(true);
      }, 500);
    } catch (error) {
      console.error("Error during submission:", error);
      addMessage(
        "Apologies, something went wrong while submitting your request. Please try again or call our office directly.",
        "bot",
      );
    }
  };

  const handleFormChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="chat"
        onClick={toggleChatbox}
        className={styles.fab}
      >
        <TbMessageChatbot size={32} />
      </Fab>

      {open && (
        <Paper variant="outlined" className={styles.chatContainer}>
          <Box textAlign={"center"} pb={2}>
            <Image
              src={enviridianBot}
              alt="Enviridian Legal AI Chat Bot"
              width={128}
            />
          </Box>
          <>
            {messages.map((message, index) => (
              <Box
                key={index}
                className={
                  message.sender === "user"
                    ? styles.userMessage
                    : styles.botMessage
                }
              >
                <Typography variant="body2">{message.text}</Typography>
              </Box>
            ))}

            {/* Step 1: Ask for name */}
            {step === 1 && !isSubmitted && (
              <Stack direction={"row"} spacing={1}>
                <TextField
                  size="small"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Write your name here"
                  fullWidth
                />
                <Button
                  disableElevation
                  variant="contained"
                  onClick={handleSendName}
                >
                  Send
                </Button>
              </Stack>
            )}

            {/* Step 2: Select user type */}
            {step === 2 && (
              <Stack spacing={1}>
                {[
                  "Individual Client",
                  "Business Owner",
                  "Organization Representative",
                ].map((type) => (
                  <Button
                    key={type}
                    size="small"
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleUserTypeSelection(type)}
                  >
                    {type}
                  </Button>
                ))}
              </Stack>
            )}

            {/* Step 3: Select interest */}
            {step === 3 && (
              <Stack spacing={1}>
                {[
                  "Property Dispute",
                  "Contract Drafting",
                  "Family Law",
                  "Criminal Defense",
                  "Corporate Advisory",
                ].map((item) => (
                  <Button
                    key={item}
                    size="small"
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleInterestSelection(item)}
                  >
                    {item}
                  </Button>
                ))}
              </Stack>
            )}

            {/* Step 4: Form fields */}
            {step === 4 && !isSubmitted && (
              <Stack spacing={1}>
                <TextField
                  size="small"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  fullWidth
                  required
                />
                <TextField
                  size="small"
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  fullWidth
                  required
                />
                <TextField
                  size="small"
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  multiline
                  rows={3}
                  fullWidth
                  required
                />
                <Button
                  disableElevation
                  variant="contained"
                  onClick={handleFormSubmit}
                >
                  Submit
                </Button>
              </Stack>
            )}
          </>
        </Paper>
      )}
    </>
  );
};

export default ChatBox;
