import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/AuthProvider'
import { Layout } from './containers/layout/layout'
import { QueryClientProvider } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        {/* <AppRoutes /> */}
        <Layout />
      </AuthProvider>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
