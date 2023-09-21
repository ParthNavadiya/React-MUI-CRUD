import React, { useState } from "react";
import Form from "../Form/Form";
import { styled } from "@mui/material/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  display: "none",
  "@media (max-width:850px)": {
    display: "block",
  },
}));

const PopUpForm = (props) => {
  const handleClosePopUp = () => {
    props.setOpenPopUp(false);
  };
  return (
    <BootstrapDialog
      onClose={handleClosePopUp}
      aria-labelledby="customized-dialog-title"
      open={props.open}
    >
      <IconButton
        aria-label="close"
        onClick={handleClosePopUp}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Form formOpen={props.open} handleCloseFormPopUp={handleClosePopUp} />
      </DialogContent>
    </BootstrapDialog>
  );
};

export default PopUpForm;
