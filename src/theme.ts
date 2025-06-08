import { extendTheme } from "@mui/joy";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#2E7D32',        // Main CTA background
          solidHoverBg: '#1B5E20',   // Darker hover state
          solidActiveBg: '#1B5E20',  // Active state
          plainColor: '#2E7D32',     // Text or icons
          outlinedBorder: '#60AD5E', // Outline buttons or accents
          outlinedHoverBg: '#A5D6A7',// Subtle hover fill
          softColor: '#2E7D32',      // Soft variant
          softBg: '#F5FDF7',         // Soft background
        },
        background: {
          body: '#F5FDF7',           // Main background
        },
        text: {
          primary: '#212121',        // Main text
          secondary: '#4E6B5F',      // Subtle/descriptive text
        },
      },
    },
  },
  fontFamily: {
    body: "Inter, system-ui, sans-serif",
    display: "Poppins, system-ui, sans-serif",
  },
  radius: {
    sm: "4px",
    md: "8px",
  },
});

export default theme;