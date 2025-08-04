import { Button as MuiButton, type ButtonProps } from "@mui/joy";

export const ActionButton = ({ children, ...props }: ButtonProps) => {
  return <MuiButton sx={{
        fontSize: '16px',
        fontWeight: 'bold',
        borderColor: 'transparent',
        // textTransform: 'uppercase',
        textAlign: 'center',
        '&:active': {
          backgroundColor: 'primary.solidBg',
          borderColor: 'transparent',
          color: 'primary.solidColor',
          
        },
        '&:hover': {
          backgroundColor: 'primary.solidBg',
          borderColor: 'transparent',
          color: 'primary.solidColor',

        },
      }} {...props}>{children}</MuiButton>
}