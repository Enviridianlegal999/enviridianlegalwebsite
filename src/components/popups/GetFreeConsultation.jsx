import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import GetFreeConsultationRegistration from "@/components/forms/GetFreeConsultationRegistration";

export default function GetFreeConsultation({
  variant,
  color,
  boxTitle= "Get Consultation",
  title = "Book a consultation",
  btnEndIcon,
  size = "medium",
  isHighRounded,
  open,
  setOpen,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        size={size}
        variant={variant}
        color={color}
        disableElevation
        onClick={() => setOpen(true)}
        endIcon={btnEndIcon}
        sx={{
          borderRadius: isHighRounded
            ? "var(--high-rounded-mui-btn)"
            : undefined,
        }}
      >
        {title}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle color="secondary">{boxTitle}</DialogTitle>
        <DialogContent sx={{ pb: 2, minWidth: { lg: 512, sm: 480, xs: 320 } }}>
          <GetFreeConsultationRegistration
            themeColor={"secondary"}
            handleClose={handleClose}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
