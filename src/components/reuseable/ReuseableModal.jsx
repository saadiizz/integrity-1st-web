import { Modal, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#FFFFFF",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};
const ReuseableModal = ({ children, handleClose, open, width, height }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        sx={style}
        spacing="1em"
        width={width || "fit-content"}
        height={height || "inherit"}
        alignItems={"center"}
      >
        {children}
      </Stack>
    </Modal>
  );
};

export default ReuseableModal;
