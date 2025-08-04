import { Button as MuiButton, type ButtonProps } from "@mui/joy";

export const MutedButton = ({ children, selected = false, ...props }: ButtonProps & { selected?: boolean }) => {
  return (
    <MuiButton 
      sx={{ 
        backgroundColor: selected ? 'background.level1' : 'background.surface',
        color: 'primary.plainColor',
        '&:hover': {
          backgroundColor: 'background.level1',
          border: 'transparent',
        },
        '&:active': {
          backgroundColor: 'background.level2',
          border: 'transparent',

        },  
        '&:focus': {
          backgroundColor: 'background.level1',
          border: 'transparent',
        },
        borderRadius: '10px',
        borderColor: 'transparent',
        margin: '5px',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
      }} 

      {...props}
    >
      {children}
    </MuiButton>
  )
}