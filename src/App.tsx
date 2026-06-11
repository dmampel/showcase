import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Benticuaga from './pages/Benticuaga'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benticuaga" element={<Benticuaga />} />
      </Routes>
    </BrowserRouter>
  )
}
