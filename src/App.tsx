import { useState } from 'react'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Typography from '@mui/joy/Typography'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Stack from '@mui/joy/Stack'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomePage } from './containers/home-page'

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <Box
    //   sx={{
    //     minHeight: '100vh',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     gap: 4,
    //     p: 3,
    //   }}
    // >
    //   <Stack direction="row" spacing={3} alignItems="center">
    //     <Box
    //       component="a"
    //       href="https://vite.dev"
    //       target="_blank"
    //       sx={{
    //         '&:hover img': {
    //           filter: 'drop-shadow(0 0 2em #646cffaa)',
    //         },
    //       }}
    //     >
    //       <Box
    //         component="img"
    //         src={viteLogo}
    //         alt="Vite logo"
    //         sx={{ height: 100, width: 100 }}
    //       />
    //     </Box>
    //     <Box
    //       component="a"
    //       href="https://react.dev"
    //       target="_blank"
    //       sx={{
    //         '&:hover img': {
    //           filter: 'drop-shadow(0 0 2em #61dafbaa)',
    //           animation: 'spin 20s linear infinite',
    //         },
    //       }}
    //     >
    //       <Box
    //         component="img"
    //         src={reactLogo}
    //         alt="React logo"
    //         sx={{ 
    //           height: 100, 
    //           width: 100,
    //           '@keyframes spin': {
    //             from: { transform: 'rotate(0deg)' },
    //             to: { transform: 'rotate(360deg)' },
    //           },
    //         }}
    //       />
    //     </Box>
    //   </Stack>

    //   <Typography level="h1" sx={{ textAlign: 'center' }}>
    //     Vite + React + Joy UI
    //   </Typography>

    //   <Card variant="outlined" sx={{ maxWidth: 400 }}>
    //     <CardContent>
    //       <Stack spacing={2} alignItems="center">
    //         <Button
    //           size="lg"
    //           onClick={() => setCount((count) => count + 1)}
    //           sx={{ minWidth: 200 }}
    //         >
    //           count is {count}
    //         </Button>
    //         <Typography level="body-sm" sx={{ textAlign: 'center' }}>
    //           Edit <code>src/App.tsx</code> and save to test HMR
    //         </Typography>
    //       </Stack>
    //     </CardContent>
    //   </Card>

    //   <Typography level="body-sm" sx={{ color: 'text.secondary', textAlign: 'center' }}>
    //     Click on the Vite and React logos to learn more
    //   </Typography>
    // </Box>
    <HomePage />
  )
}

export default App
