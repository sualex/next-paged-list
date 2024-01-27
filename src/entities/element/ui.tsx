import { css } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  ListItem,
  ListItemButton,
  ListItemProps,
  ListItemText,
} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import * as React from "react";

import { useElement } from "@/entities/element/model";
import { ElementDTO } from "@/shared/api";
import { Link } from "@/shared/ui";

export const Element = ({
  element,
  ...props
}: ListItemProps & {
  element?: ElementDTO;
}) => {
  const requestedElement = useElement({
    enabled: !element,
  });

  useEffect(() => {
    console.log("xxxxxxxxxxxxxxxxxxxxxx oooooooooo ", requestedElement?.data);
  });

  return element ? (
    <ListItem disablePadding {...props}>
      <ListItemButton component={Link} href={`/element/${element?.id}`}>
        <ListItemText
          primary={element?.name}
          css={css`
            text-align: center;
          `}
        />
      </ListItemButton>
    </ListItem>
  ) : (
    <Dialog
      // onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {requestedElement?.data?.name}
      </DialogTitle>
      <IconButton
        aria-label="close"
        // onClick={handleClose}
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
        <Typography>{requestedElement?.data?.text}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          // onClick={handleClose}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};
