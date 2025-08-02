import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.tsx'
import CreateBeyPage from './pages/CreateBeyPage.tsx'
import SummaryPage from './pages/SummaryPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateBeyPage />} />
        <Route path="/summary" element={<SummaryPage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
