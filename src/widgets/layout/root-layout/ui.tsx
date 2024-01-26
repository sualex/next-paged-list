import { Container, ContainerProps } from "@mui/material";

export const RootLayout = ({ children, ...props }: ContainerProps) => {
  return (
    <>
      <Container component="main" maxWidth="sm" {...props}>
        {children}
      </Container>
    </>
  );
};
