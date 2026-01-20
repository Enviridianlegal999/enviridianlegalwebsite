"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// MUI Components
import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  IconButton,
  Chip,
  Tooltip,
  CircularProgress,
  Alert,
  Breadcrumbs,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// MUI Icons
import {
  DashboardRounded,
  SupervisorAccountRounded,
  PersonAddRounded,
  DeleteRounded,
  LockResetRounded,
  SecurityRounded,
  VerifiedUserRounded,
} from "@mui/icons-material";

import Container from "@/components/layout/Container";
import { useAuth } from "@/contexts/AuthContext";
import {
  getAllAdmins,
  createNewAdmin,
  deleteAdminAccount,
  updateAdminPassword,
} from "@/actions/admin";
import styles from "@/styles/pages/Dashboard.module.css";

export default function AdminProfile() {
  const { user, isLoggedIn, loading } = useAuth();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [admins, setAdmins] = useState([]);
  const [loadingAdmins, setLoadingAdmins] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState("");

  const isSuperAdmin = user?.role === "superadmin";

  const fetchAdmins = async () => {
    try {
      setLoadingAdmins(true);
      const data = await getAllAdmins();
      setAdmins(data);
    } catch (err) {
      setError("Failed to load staff list.");
    } finally {
      setLoadingAdmins(false);
    }
  };

  useEffect(() => {
    if (!loading && !isLoggedIn) router.push("/admin/login");
    else if (isSuperAdmin) fetchAdmins();
  }, [isLoggedIn, loading, isSuperAdmin, router]);

  const handleCreate = async (e) => {
    e.preventDefault();
    setError("");
    setFormLoading(true);
    const formData = new FormData(e.target);
    const res = await createNewAdmin(
      formData.get("email"),
      formData.get("password"),
    );

    if (res.success) {
      e.target.reset();
      fetchAdmins();
    } else {
      setError(res.error);
    }
    setFormLoading(false);
  };

  const handleResetPassword = async (id, email) => {
    const newPass = prompt(`Enter new password for ${email}:`);
    // if (!newPass || newPass.length < 6) return alert("Password too short.");
    if (!newPass || newPass.length < 6) return toast.error("Password too short.");
    const res = await updateAdminPassword(id, newPass);
    // if (res.success) alert("Password updated.");
    if (res.success) toast.success("Password updated.");
    // else alert(res.error);
    else toast.error(res.error);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this admin account permanently?")) return;
    const res = await deleteAdminAccount(id);
    if (res.success) fetchAdmins();
    // else alert(res.error);
    else toast.error(res.error);
  };

  if (loading || !isLoggedIn) return null;

  // Access Denied State
  if (!isSuperAdmin) {
    return (
      <section className={styles.blogsSection}>
        <Container>
          <Box py={10} textAlign="center">
            <SecurityRounded
              sx={{ fontSize: 80, color: "var(--grey-10)", mb: 2 }}
            />
            <Typography variant="h4" fontWeight={900} color="error">
              Access Restricted
            </Typography>
            <Typography color="var(--grey-10)" sx={{ mt: 1, mb: 4 }}>
              Only Super Admins can manage staff accounts.
            </Typography>
            <Button
              variant="contained"
              component={Link}
              href="/admin/dashboard"
            >
              Return to Dashboard
            </Button>
          </Box>
        </Container>
      </section>
    );
  }

  return (
    <section className={styles.blogsSection}>
      <Container>
        <Box py={4}>
          {/* Breadcrumbs & Navigation */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <Stack spacing={1}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  href="/admin/dashboard"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "var(--grey-10)",
                    textDecoration: "none",
                  }}
                >
                  <DashboardRounded sx={{ mr: 0.5 }} fontSize="inherit" />
                  Dashboard
                </Link>
                <Typography color="var(--primaryDark)" fontWeight={700}>
                  Admin Profile
                </Typography>
              </Breadcrumbs>
              <Typography variant="h4" fontWeight={900}>
                Manage Staff
              </Typography>
            </Stack>
          </Stack>

          {/* Registration Form Paper */}
          <Paper
            sx={{
              p: 3,
              mb: 4,
              borderRadius: "var(--high-rounded)",
              boxShadow: "var(--low-shadow)",
              border: "1px solid var(--bg)",
            }}
          >
            <Typography
              variant="h6"
              fontWeight={800}
              mb={2}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <PersonAddRounded color="primary" /> Add New Admin
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleCreate}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  name="email"
                  label="Email Address"
                  required
                  fullWidth
                  size="small"
                  sx={{ bgcolor: "var(--white)" }}
                />
                <TextField
                  name="password"
                  label="Initial Password"
                  type="password"
                  required
                  fullWidth
                  size="small"
                  sx={{ bgcolor: "var(--white)" }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={formLoading}
                  fullWidth
                  sx={{
                    px: 4,
                    fontWeight: 700,
                    borderRadius: "var(--low-rounded)",
                    backgroundColor: "var(--primary)",
                    "&:hover": { backgroundColor: "var(--primaryDark)" },
                  }}
                >
                  {formLoading ? "Adding..." : "Add Admin"}
                </Button>
              </Stack>
            </form>
          </Paper>

          {/* Staff Table */}
          <Paper
            sx={{
              borderRadius: "var(--high-rounded)",
              overflow: "hidden",
              boxShadow: "var(--low-shadow)",
              border: "1px solid var(--bg)",
            }}
          >
            <TableContainer>
              <Table>
                <TableHead sx={{ bgcolor: "var(--bg)" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Admin User</TableCell>
                    {!isMobile && (
                      <TableCell sx={{ fontWeight: 700 }}>Role</TableCell>
                    )}
                    {!isMobile && (
                      <TableCell sx={{ fontWeight: 700 }}>Joined</TableCell>
                    )}
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loadingAdmins ? (
                    <TableRow>
                      <TableCell colSpan={4} align="center" sx={{ py: 10 }}>
                        <CircularProgress />
                      </TableCell>
                    </TableRow>
                  ) : (
                    admins.map((adm) => (
                      <TableRow key={adm._id} hover>
                        <TableCell>
                          <Typography variant="body2" fontWeight={700}>
                            {adm.email}
                          </Typography>
                          {isMobile && (
                            <Chip
                              label={adm.role}
                              size="small"
                              sx={{ height: 18, fontSize: 9, mt: 0.5 }}
                            />
                          )}
                        </TableCell>
                        {!isMobile && (
                          <TableCell>
                            <Chip
                              icon={
                                adm.role === "superadmin" ? (
                                  <VerifiedUserRounded
                                    style={{ fontSize: 14 }}
                                  />
                                ) : null
                              }
                              label={adm.role.toUpperCase()}
                              size="small"
                              variant={
                                adm.role === "superadmin"
                                  ? "filled"
                                  : "outlined"
                              }
                              color={
                                adm.role === "superadmin"
                                  ? "secondary"
                                  : "default"
                              }
                              sx={{ fontWeight: 700, fontSize: 10 }}
                            />
                          </TableCell>
                        )}
                        {!isMobile && (
                          <TableCell>
                            <Typography variant="body2" color="var(--grey-10)">
                              {new Date(adm.createdAt).toLocaleDateString()}
                            </Typography>
                          </TableCell>
                        )}
                        <TableCell align="right">
                          <Stack
                            direction="row"
                            justifyContent="flex-end"
                            spacing={1}
                          >
                            <Tooltip title="Reset Password">
                              <IconButton
                                size="small"
                                color="primary"
                                onClick={() =>
                                  handleResetPassword(adm._id, adm.email)
                                }
                              >
                                <LockResetRounded fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            {adm.role !== "superadmin" && (
                              <Tooltip title="Delete Account">
                                <IconButton
                                  size="small"
                                  color="error"
                                  onClick={() => handleDelete(adm._id)}
                                >
                                  <DeleteRounded fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            )}
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </Container>
    </section>
  );
}
