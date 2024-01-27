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
import { useRouter } from "next/router";

import { useCurrentElement } from "@/entities/element/api";
import { Link } from "@/shared/ui";
import { getErrorMessage } from "@/shared/util/error";

export const ElementDialog = ({ ...props }: Omit<DialogProps, "open">) => {
  const element = useCurrentElement();
  const router = useRouter();
  const closeHref = `/elements/${router?.query?.page || 1}`;
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      aria-labelledby="customized-dialog-title"
      open
      {...props}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {element?.error ? "Ошибка" : element?.data?.name}
      </DialogTitle>
      <IconButton
        aria-label="close"
        component={Link}
        href={closeHref}
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
        <Typography>
          {element?.error
            ? getErrorMessage(element?.error)
            : element?.data?.text}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus component={Link} href={closeHref}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};
