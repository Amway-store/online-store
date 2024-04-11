import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

export default function SimpleSnackbar({ state, setState, text }) {
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Snackbar
      autoHideDuration={3000}
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      message={text}
      key={vertical + horizontal}
      onClose={handleClose}
    />
  );
}
