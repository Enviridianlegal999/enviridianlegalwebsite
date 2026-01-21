"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import {
  Box,
  Stack,
  Typography,
  Breadcrumbs,
  Paper,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  DashboardRounded,
  SmartToyRounded,
  ContactPhoneRounded,
  MailRounded,
  DeleteRounded,
} from "@mui/icons-material";

import Container from "@/components/layout/Container";
import { useAuth } from "@/contexts/AuthContext";
import { getLeadsData, deleteLeadAction } from "@/actions/leads";

import styles from "@/styles/pages/Dashboard.module.css";

export default function LeadsPage() {
  const { isLoggedIn, user, loading } = useAuth();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    aiLeads: [],
    consultations: [],
    contactInquiries: [],
  });
  const [fetching, setFetching] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const fetchLeads = async () => {
    setFetching(true);
    const result = await getLeadsData();
    setData(result);
    setFetching(false);
  };

  useEffect(() => {
    if (!loading && !isLoggedIn) router.push("/admin/login");
    else if (isLoggedIn) fetchLeads();
  }, [isLoggedIn, loading, router]);

  const handleDelete = async (id, source) => {
    if (
      !confirm(
        "Are you sure you want to delete this lead? This action cannot be undone.",
      )
    )
      return;

    setDeletingId(id);
    const res = await deleteLeadAction(id, source);

    if (res.success) {
      toast.success(res.message);
      fetchLeads(); // Refresh data
    } else {
      toast.error(res.message);
    }
    setDeletingId(null);
  };

  if (loading || !isLoggedIn) return null;

  return (
    <section className={styles.manageLeadsSection}>
      <Container>
        <Box>
          {/* Header & Breadcrumbs */}
          <Stack spacing={1} mb={4}>
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
                Leads
              </Typography>
            </Breadcrumbs>
            <Typography variant="h4" fontWeight={900}>
              Lead Management
            </Typography>
          </Stack>

          {/* Tab Navigation */}
          <Paper
            sx={{
              borderRadius: "var(--low-rounded) var(--low-rounded) 0 0",
              mb: 3,
              boxShadow: "var(--low-shadow)",
            }}
          >
            <Tabs
              value={activeTab}
              onChange={(e, val) => setActiveTab(val)}
              variant="fullWidth"
              indicatorColor="primary"
            >
              <Tab icon={<SmartToyRounded />} label="AI Assist" />
              <Tab icon={<ContactPhoneRounded />} label="Consultations" />
              <Tab icon={<MailRounded />} label="Contact Us" />
            </Tabs>
          </Paper>

          {/* Table Content */}
          <Paper
            sx={{
              borderRadius: "var(--low-rounded)",
              overflow: "hidden",
              border: "1px solid var(--bg)",
              boxShadow: "var(--low-shadow)",
            }}
          >
            <TableContainer>
              <Table>
                <TableHead sx={{ bgcolor: "var(--bg)" }}>
                  {activeTab === 0 && (
                    <TableRow>
                      <TableCell sx={{ fontWeight: 700 }}>
                        Client & Date
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>
                        Type & Interest
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>
                        Contact Details
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>
                        Message Inquiry
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700 }}>
                        Action
                      </TableCell>
                    </TableRow>
                  )}
                  {activeTab === 1 && (
                    <TableRow>
                      <TableCell sx={{ fontWeight: 700 }}>
                        Client & Date
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>
                        Contact Details
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>
                        Preferences
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>
                        Message Inquiry
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700 }}>
                        Action
                      </TableCell>
                    </TableRow>
                  )}
                  {activeTab === 2 && (
                    <TableRow>
                      <TableCell sx={{ fontWeight: 700 }}>
                        Full Name & Date
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>
                        Email Address
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>
                        Phone Number
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>Message</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700 }}>
                        Action
                      </TableCell>
                    </TableRow>
                  )}
                </TableHead>
                <TableBody>
                  {fetching ? (
                    <TableRow>
                      <TableCell colSpan={5} align="center" sx={{ py: 8 }}>
                        <CircularProgress />
                      </TableCell>
                    </TableRow>
                  ) : (
                    <>
                      {/* AI ASSIST TAB: name, userType, interest, email, phone, message */}
                      {activeTab === 0 &&
                        data.aiLeads.map((lead) => (
                          <TableRow key={lead._id} hover>
                            <TableCell>
                              <Typography variant="body2" fontWeight={700}>
                                {lead.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="var(--grey-10)"
                                display="block"
                              >
                                {new Date(lead.createdAt).toLocaleDateString()}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Stack spacing={0.5}>
                                <Chip
                                  color="primary"
                                  label={lead.userType}
                                  size="small"
                                  sx={{ fontWeight: 600 }}
                                />
                                <Chip
                                  label={lead.interest}
                                  size="small"
                                  sx={{ fontWeight: 600, bgcolor: "var(--bg)" }}
                                />
                              </Stack>
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="body2"
                                sx={{ fontSize: "0.8rem" }}
                              >
                                {lead.email}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="textSecondary"
                              >
                                {lead.phone}
                              </Typography>
                            </TableCell>
                            <TableCell sx={{ maxWidth: 250 }}>
                              <Typography
                                variant="caption"
                                sx={{
                                  fontStyle: "italic",
                                  color: "var(--grey-10)",
                                }}
                              >
                                "{lead.message}"
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              {user?.role === "superadmin" ? (
                                <Tooltip title="Delete Lead">
                                  <IconButton
                                    color="error"
                                    onClick={() =>
                                      handleDelete(
                                        lead._id,
                                        activeTab === 0
                                          ? "ai"
                                          : activeTab === 1
                                            ? "consultation"
                                            : "contact",
                                      )
                                    }
                                    disabled={deletingId === lead._id}
                                  >
                                    <DeleteRounded fontSize="small" />
                                  </IconButton>
                                </Tooltip>
                              ) : (
                                <Typography
                                  variant="caption"
                                  color="var(--grey-10)"
                                >
                                  N/A
                                </Typography>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}

                      {/* CONSULTATION TAB: name, email, phone, city, message, time, choice */}
                      {activeTab === 1 &&
                        data.consultations.map((lead) => (
                          <TableRow key={lead._id} hover>
                            <TableCell>
                              <Typography variant="body2" fontWeight={700}>
                                {lead.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="var(--grey-10)"
                                display="block"
                              >
                                {new Date(lead.createdAt).toLocaleDateString()}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="body2"
                                sx={{ fontSize: "0.8rem" }}
                              >
                                {lead.email}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="textSecondary"
                              >
                                {lead.phone}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="textSecondary"
                                display="block"
                              >
                                {lead.city}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Stack spacing={0.5} alignItems="flex-start">
                                <Chip
                                  label={lead.choice}
                                  size="small"
                                  color="primary"
                                  variant="outlined"
                                />
                                <Typography
                                  variant="caption"
                                  fontWeight={600}
                                  color="var(--primaryDark)"
                                >
                                  Time: {lead.time}
                                </Typography>
                              </Stack>
                            </TableCell>
                            <TableCell sx={{ maxWidth: 250 }}>
                              <Typography
                                variant="caption"
                                sx={{ color: "var(--grey-10)" }}
                              >
                                {lead.message}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              {user?.role === "superadmin" ? (
                                <Tooltip title="Delete Lead">
                                  <IconButton
                                    color="error"
                                    onClick={() =>
                                      handleDelete(
                                        lead._id,
                                        activeTab === 0
                                          ? "ai"
                                          : activeTab === 1
                                            ? "consultation"
                                            : "contact",
                                      )
                                    }
                                    disabled={deletingId === lead._id}
                                  >
                                    <DeleteRounded fontSize="small" />
                                  </IconButton>
                                </Tooltip>
                              ) : (
                                <Typography
                                  variant="caption"
                                  color="var(--grey-10)"
                                >
                                  N/A
                                </Typography>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}

                      {/* CONTACT US TAB: fname, lname, email, phone, message */}
                      {activeTab === 2 &&
                        data.contactInquiries.map((lead) => (
                          <TableRow key={lead._id} hover>
                            <TableCell>
                              <Typography variant="body2" fontWeight={700}>
                                {lead.fname} {lead.lname}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="var(--grey-10)"
                              >
                                {new Date(lead.createdAt).toLocaleDateString()}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2">
                                {lead.email}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2">
                                {lead.phone}
                              </Typography>
                            </TableCell>
                            <TableCell sx={{ maxWidth: 300 }}>
                              <Typography
                                variant="caption"
                                color="var(--grey-10)"
                              >
                                {lead.message}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              {user?.role === "superadmin" ? (
                                <Tooltip title="Delete Lead">
                                  <IconButton
                                    color="error"
                                    onClick={() =>
                                      handleDelete(
                                        lead._id,
                                        activeTab === 0
                                          ? "ai"
                                          : activeTab === 1
                                            ? "consultation"
                                            : "contact",
                                      )
                                    }
                                    disabled={deletingId === lead._id}
                                  >
                                    <DeleteRounded fontSize="small" />
                                  </IconButton>
                                </Tooltip>
                              ) : (
                                <Typography
                                  variant="caption"
                                  color="var(--grey-10)"
                                >
                                  N/A
                                </Typography>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                    </>
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
