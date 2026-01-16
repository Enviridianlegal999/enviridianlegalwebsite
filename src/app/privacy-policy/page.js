import { Box } from "@mui/material";

import Container from "@/components/layout/Container";

import styles from "@/styles/pages/Common.module.css";

export default function PrivacyPolicyPage() {
  return (
    <section id="document" className={styles.privacyPolicyPage}>
      <Container>
        <Box
          sx={{
            minHeight: "80vh",
            padding: "20px",
          }}
        >
          <h2>Privacy Policy</h2>
          <p>
            <em>Last updated: [DD Month YYYY]</em>
          </p>
          <p>
            Enveridian Legal ("we", "us", "our") respects your privacy and is
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, store, and protect information
            when you use our website (the "Site") and interact with our
            services.
          </p>
          <p>
            <strong>1. Information We Collect</strong>
          </p>
          <p>We collect information you voluntarily provide when:</p>
          <ul>
            <li>
              You fill out contact forms, consultation request forms, or
              subscription forms
            </li>
            <li>You send us emails or other communications</li>
            <li>
              You register for workshops, events, or newsletters (if applicable)
            </li>
          </ul>
          <p>This may include:</p>
          <ul>
            <li>
              Contact information: name, email address, phone number, WhatsApp
              number
            </li>
            <li>
              Professional information: organization, position, area of interest
            </li>
            <li>Message content: details about your legal inquiry or matter</li>
            <li>
              Technical information: IP address, browser type, pages visited
              (via cookies/analytics)
            </li>
          </ul>
          <p>
            <strong>2. How We Use Your Information</strong>
          </p>
          <p>We use your information to:</p>
          <ul>
            <li>
              Respond to your inquiries and provide information about our
              services
            </li>
            <li>Schedule consultations or meetings</li>
            <li>
              Send legal updates, newsletters, or event invitations (with your
              consent)
            </li>
            <li>Improve our Site and services</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>
            <strong>3. Legal Basis for Processing</strong>
          </p>
          <p>We process your information based on:</p>
          <ul>
            <li>Your consent (for marketing communications)</li>
            <li>
              Necessary for providing legal services or responding to inquiries
            </li>
            <li>
              Legitimate business interests (Site functionality, analytics)
            </li>
            <li>Legal obligations (anti-money laundering, court orders)</li>
          </ul>
          <p>
            <strong>4. Confidentiality & Attorney–Client Privilege</strong>
          </p>
          <p>
            Any information you share with us through this Site is treated as
            strictly confidential. Communications may be covered by
            attorney–client privilege once a formal engagement is established.
            We maintain professional secrecy in accordance with the Advocates
            Act, 1961, and Bar Council rules.
          </p>
          <p>
            <strong>5. Sharing Your Information</strong>
          </p>
          <p>
            We do not sell or rent your personal information. We may share
            information only in these limited circumstances:
          </p>
          <ul>
            <li>With your consent</li>
            <li>With law firm personnel working on your matter</li>
            <li>As required by law, court order, or regulatory authority</li>
            <li>
              With professional advisors (accountants, IT providers) under
              confidentiality agreements
            </li>
          </ul>
          <p>
            <strong>6. Data Security</strong>
          </p>
          <p>
            We implement appropriate technical and organizational measures to
            protect your information, including:
          </p>
          <ul>
            <li>SSL encryption for data transmission</li>
            <li>Secure servers and access controls</li>
            <li>Regular security audits</li>
            <li>Employee training on data protection</li>
          </ul>
          <p>
            <strong>7. Cookies & Analytics</strong>
          </p>
          <p>
            This Site uses cookies for functionality and analytics. You can
            manage cookie preferences through your browser settings. We use
            Google Analytics to understand Site usage patterns (IP addresses
            anonymized).
          </p>
          <p>
            <strong>8. Data Retention</strong>
          </p>
          <p>We retain your information only as long as necessary:</p>
          <ul>
            <li>Inquiries: 2 years after final response</li>
            <li>Newsletter subscribers: until unsubscribed</li>
            <li>Engaged clients: as required by law (typically 7 years)</li>
          </ul>
          <p>
            <strong>9. Your Rights</strong>
          </p>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Object to processing based on legitimate interests</li>
          </ul>
          <p>
            To exercise these rights, contact us at
            [contact@enveridianlegal.com].
          </p>
          <p>
            <strong>10. International Transfers</strong>
          </p>
          <p>
            Your information is stored on servers located in India. If
            transferred internationally for legal services, we ensure
            appropriate safeguards are in place.
          </p>
          <p>
            <strong>11. Third-Party Links</strong>
          </p>
          <p>
            This Site may contain links to third-party websites. We are not
            responsible for their privacy practices. Please review their
            policies before providing information.
          </p>
          <p>
            <strong>12. Children</strong>
          </p>
          <p>
            This Site is not intended for children under 18. We do not knowingly
            collect information from minors.
          </p>
          <p>
            <strong>13. Changes to This Policy</strong>
          </p>
          <p>
            We may update this Privacy Policy periodically. Changes will be
            posted here with a revised "Last updated" date. Continued use of the
            Site constitutes acceptance of changes.
          </p>
          <p>
            <strong>14. Contact Information</strong>
          </p>
          <p>For privacy questions or to exercise your rights:</p>
          <p>
            <strong>Email:</strong> [contact@enveridianlegal.com]
            <br /> <strong>Address:</strong> [Full office address, New Delhi,
            India]
            <br /> <strong>Phone:</strong> [+91‑XXXXXXXXXX]
          </p>
          <p>
            <strong>Note:</strong> This Privacy Policy does not create an
            attorney–client relationship. For confidential matters, please
            contact us directly to discuss formal engagement.
          </p>
        </Box>
      </Container>
    </section>
  );
}
