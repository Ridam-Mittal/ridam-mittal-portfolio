import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "./context/ThemeContext";
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-right" reverseOrder={false} toastOptions={{
      style: {
        background: "#0f172a",
        color: "#fff",
      },
    }} />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
