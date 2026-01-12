"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Alert, Box, Button, Stack, TextField } from "@mui/material";

import { useAuth } from "@/contexts/AuthContext";

const AdminLoginRegistration = () => {
  const router = useRouter();
  const { login, isLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/admin/dashboard");
    }
  }, [isLoggedIn, router]);

  if (isLoggedIn) {
    return (
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"80vh"}
      >
        Redirecting to dashboard...
      </Box>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      login(data.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          variant="outlined"
          color="primary"
          type="email"
          id="email"
          name="email"
          label="Email"
          placeholder="admin@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <TextField
          variant="outlined"
          color="primary"
          type="password"
          id="password"
          name="password"
          label="Password"
          placeholder="**********"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />

        {error ? <Alert severity="error">{error}</Alert> : null}

        <Button
          variant="contained"
          color="primary"
          disableElevation
          type="submit"
          loading={loading}
          loadingIndicator="Logging in..."
          sx={{ cursor: loading ? "not-allowed" : "pointer" }}
        >
          Login
        </Button>
      </Stack>
    </form>
  );
};

export default AdminLoginRegistration;
