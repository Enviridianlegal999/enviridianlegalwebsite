import { Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import ProcessStepsLeftToRight from "@/components/ui/ProcessStepsLeftToRight";
import ProcessStepRightToLeft from "@/components/ui/ProcessStepRightToLeft";

const ProcessPageSteps = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.stepsSection}>
      <Container>
        <Stack spacing={4}>
          <ProcessStepsLeftToRight
            stepTitle={"Initial Consultation"}
            stepDescription={
              "Understand your matter, conduct conflict check, discuss objectives."
            }
            stepImage={"initial-consultation"}
            isImage={false}
            isVideo={true}
          />
          <ProcessStepRightToLeft
            stepTitle={"Strategy & Scope"}
            stepDescription={
              "Present options, timelines, and fee structure in writing."
            }
            stepImage={"strategy"}
            isImage={false}
            isVideo={true}
          />
          <ProcessStepsLeftToRight
            stepTitle={"Execution"}
            stepDescription={
              "Partner-led delivery with regular progress updates."
            }
            stepImage={"execution"}
            isImage={false}
            isVideo={true}
          />
          <ProcessStepRightToLeft
            stepTitle={"Review & Adjust"}
            stepDescription={"Adapt strategy based on developments."}
            stepImage={"review"}
            isImage={false}
            isVideo={true}
          />
          <ProcessStepsLeftToRight
            stepTitle={"Resolution"}
            stepDescription={
              "Achieve objectives, document outcomes, plan next steps."
            }
            stepImage={"resolution"}
            isImage={false}
            isVideo={true}
          />
        </Stack>
      </Container>
    </section>
  );
};

export default ProcessPageSteps;
