import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import LandingPage from './pages/LandingPage.tsx'
import CreateBeyPage from './pages/CreateBeyPage.tsx'
import SummaryPage from './pages/SummaryPage.tsx'
import ComparePage from './pages/ComparePage.tsx'
import CollectionsPage from './pages/CollectionsPage.tsx'
import { useGLTF } from '@react-three/drei'
import BeyGifPage from "./pages/BeyGifPage.tsx"

useGLTF.preload('/models/custom.glb')
useGLTF.preload('/models/pegasus_self.glb')
useGLTF.preload('/models/leone_self.glb')
useGLTF.preload('/models/pegasus_opp.glb')
useGLTF.preload('/models/leone_opp.glb')
useGLTF.preload('/models/ldrago_self.glb')
useGLTF.preload('/models/ldrago_opp.glb')

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path="create" element={<CreateBeyPage />} />
            <Route path="summary" element={<SummaryPage />} />
            <Route path="compare" element={<ComparePage />} />
            <Route path="collection" element={<CollectionsPage />} />
            <Route path="animation" element={<BeyGifPage />} />
        </Routes>
    </BrowserRouter>
)