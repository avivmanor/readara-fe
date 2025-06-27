import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './containers/Routing/app-routes'
import { AuthProvider } from './auth/AuthProvider'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
