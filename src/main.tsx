import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import LandingPage from './pages/LandingPage.tsx'
import CreateBeyPage from './pages/CreateBeyPage.tsx'
import SummaryPage from './pages/SummaryPage.tsx'
import ComparePage from './pages/ComparePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateBeyPage />} />
        <Route path="/summary" element={<SummaryPage/>} />
        <Route path="/compare" element={<ComparePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
