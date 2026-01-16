import { Box } from "@mui/material";

import Container from "@/components/layout/Container";

import styles from "@/styles/pages/Common.module.css";

export default function TermsAndConditionsPage() {
  return (
    <section id="document" className={styles.termsAndConditionsPage}>
      <Container>
        <Box
          sx={{
            minHeight: "80vh",
          }}
        >
          <h2>Terms & Conditions</h2>
          <p>
            <em>Last updated: [DD Month YYYY]</em>
          </p>
          <p>
            Welcome to the website of Enveridian Legal (“we”, “us”, “our”). By
            accessing or using this website (“Site”), you agree to be bound by
            these Terms &amp; Conditions (“Terms”). If you do not agree, please
            do not use this Site.
          </p>
          <p>
            <strong>1. No Solicitation or Advertisement</strong>
          </p>
          <p>
            This Site is intended solely to provide general information about
            Enveridian Legal and our areas of practice. It does not constitute,
            and should not be construed as, solicitation, advertisement, or
            inducement to engage legal services, in accordance with applicable
            Bar Council of India rules.
          </p>
          <p>
            <strong>2. No Legal Advice</strong>
          </p>
          <p>
            The content on this Site is for general informational purposes only.
            It does not constitute legal advice, opinion, or recommendation. You
            should not act, or refrain from acting, based on any information on
            this Site without obtaining appropriate legal or professional advice
            specific to your situation.
          </p>
          <p>
            <strong>3. No Lawyer–Client Relationship</strong>
          </p>
          <p>
            Your use of this Site, including sending any communication or
            enquiry through it, does not create a lawyer–client relationship
            between you and Enveridian Legal or any of its lawyers. A
            lawyer–client relationship is established only after we accept an
            engagement in writing and agree on the scope of work.
          </p>
          <p>
            <strong>4. Accuracy and Updates</strong>
          </p>
          <p>
            While we endeavour to keep the information on this Site accurate and
            up to date, we do not make any representations or warranties,
            express or implied, about its completeness, reliability, or
            suitability. Laws and regulations change, and the content may not
            reflect the most current legal developments. We may modify, update,
            or remove content at any time without prior notice.
          </p>
          <p>
            <strong>5. Limitation of Liability</strong>
          </p>
          <p>
            To the fullest extent permitted by law, Enveridian Legal, its
            partners, associates, employees, and agents shall not be liable for
            any loss, damage, or consequences arising from your use of, or
            reliance on, any information on this Site. This limitation applies
            to all types of loss or damage, whether direct, indirect,
            incidental, consequential, or otherwise.
          </p>
          <p>
            <strong>6. Third-Party Links</strong>
          </p>
          <p>
            This Site may contain links to third-party websites or resources.
            These links are provided for convenience only. We do not endorse and
            are not responsible or liable for the content, accuracy, or
            availability of such external sites or resources. Accessing any
            third-party links is at your own risk and subject to the terms and
            policies of those websites.
          </p>
          <p>
            <strong>7. Intellectual Property</strong>
          </p>
          <p>
            All content on this Site, including text, graphics, logos, and other
            materials, is owned by or licensed to Enveridian Legal, unless
            otherwise stated. You may view and print pages for your personal,
            non-commercial use only. Any reproduction, modification,
            distribution, or republication of content without our prior written
            consent is prohibited.
          </p>
          <p>
            <strong>8. Confidentiality of Communications</strong>
          </p>
          <p>
            Information transmitted over the internet may not be fully secure.
            Do not send confidential or sensitive information through this Site
            or by email unless specifically requested by us in the context of an
            established engagement. We are not responsible for unauthorized
            access to information transmitted electronically.
          </p>
          <p>
            <strong>9. Privacy</strong>
          </p>
          <p>
            Our use of any personal information collected through this Site is
            governed by our Privacy Policy, which should be read together with
            these Terms. By using this Site, you consent to such processing in
            accordance with the Privacy Policy.
          </p>
          <p>
            <strong>10. Compliance with Local Laws</strong>
          </p>
          <p>
            This Site is intended for use in accordance with the laws of India.
            If you access this Site from other jurisdictions, you are
            responsible for compliance with local laws, if and to the extent
            applicable.
          </p>
          <p>
            <strong>11. Changes to These Terms</strong>
          </p>
          <p>
            We may revise these Terms from time to time. The updated version
            will be posted on this page with a revised “Last updated” date.
            Continued use of the Site after changes are posted will constitute
            your acceptance of the revised Terms.
          </p>
          <p>
            <strong>12. Governing Law and Jurisdiction</strong>
          </p>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of India. Any dispute arising out of or in connection with
            these Terms or the use of this Site shall be subject to the
            exclusive jurisdiction of the courts at [New Delhi], India.
          </p>
          <p>
            <strong>13. Contact</strong>
          </p>
          <p>
            If you have any questions regarding these Terms, please contact us
            at:
          </p>
          <p>
            Email: [contact@enveridianlegal.com]
            <br /> Address: [Full office address, New Delhi, India]
          </p>
        </Box>
      </Container>
    </section>
  );
}
