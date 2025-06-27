import { Button as MuiButton, type ButtonProps } from "@mui/joy";

export const ActionButton = ({ children, ...props }: ButtonProps) => {
  return <MuiButton {...props}>{children}</MuiButton>
}