import { css } from "@emotion/react";
import { Container, ContainerProps, Toolbar } from "@mui/material";

export const RootLayout = ({ children, ...props }: ContainerProps) => {
  return (
    <Container
      component="main"
      maxWidth="sm"
      css={css`
        display: flex;
        flex-direction: column;
        gap: 1rem;
      `}
      {...props}
    >
      <Toolbar />
      {children}
    </Container>
  );
};
