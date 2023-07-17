import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import JobBenefits from "./JobBenefits.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  outline: 0,
  maxHeight: 500,
};

const OrangeButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  "&:hover": {
    backgroundColor: orange[700],
  },
}));

export default function DetailModal({ name, benefits }) {
  const [open, setOpen] = React.useState(false);
  const { token } = useAuth();

  const navigate = useNavigate();
  const handleOpen = () => {
    if (Object.keys(token).length === 0) {
      navigate("/login");
    } else {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <OrangeButton sx={{ mt: 1, mb: 1 }} onClick={handleOpen}>
        More Details
      </OrangeButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Company: {name}
          </Typography>

          <Typography>Company Benefits:</Typography>
          <Typography>
            <JobBenefits benefits={benefits} />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
