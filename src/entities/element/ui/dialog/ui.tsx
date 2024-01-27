import { css } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

import { useElement } from "@/entities/element/model";
import { Link } from "@/shared/ui";

export const ElementDialog = ({ ...props }: Omit<DialogProps, "open">) => {
  const element = useElement();
  return (
    <Dialog
      // onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open
      {...props}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {element?.data?.name}
      </DialogTitle>
      <IconButton
        aria-label="close"
        component={Link}
        href="/"
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        dividers
        css={css`
          min-width: 20rem;
        `}
      >
        <Typography>{element?.data?.text}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          component={Link}
          href="/"
          // onClick={handleClose}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};
