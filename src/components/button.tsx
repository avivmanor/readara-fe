import { Button as MuiButton, type ButtonProps } from "@mui/joy";

export const Button = ({ children, ...props }: ButtonProps) => {
  return <MuiButton {...props}>{children}</MuiButton>
}