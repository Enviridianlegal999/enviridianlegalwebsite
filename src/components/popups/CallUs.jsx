import { RiMapPinTimeFill } from "react-icons/ri";

import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import { MdOutlineRingVolume } from "react-icons/md";

import { companyOfficeTiming, companyWorkDays } from "@/constants/company";

export default function CallUs({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        endIcon={<CallRoundedIcon />}
        onClick={() => setOpen(true)}
      >
        Call Us
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle color="primary">Are you ready to call us?</DialogTitle>
        <DialogContent sx={{ pb: 4, minWidth: { lg: 512, sm: 480, xs: 320 } }}>
          <Stack spacing={2} alignItems={"center"}>
            <RiMapPinTimeFill color="var(--primary)" size={64} />
            <h6>Office</h6>
            <p>{companyWorkDays}</p>
            <p>{companyOfficeTiming}</p>
            <Button
              variant="contained"
              size="large"
              disableElevation
              endIcon={<MdOutlineRingVolume />}
              onClick={() => setOpen(true)}
              href="tel:+1234567890"
            >
              Dial
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
}
