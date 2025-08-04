import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CssVarsProvider, GlobalStyles } from '@mui/joy'
import theme from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssVarsProvider theme={theme}>
      <GlobalStyles styles={{
        body: {
          backgroundColor: theme.vars.palette.background.body,
        },
      }} />
    <App />
    </CssVarsProvider>
  </StrictMode>,
)
