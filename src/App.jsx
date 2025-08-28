import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills'
import Learning from './pages/Learning'
import Activism from './pages/Activism'
import MediaGallery from './pages/MediaGallery'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/activism" element={<Activism />} />
      <Route path="/media" element={<MediaGallery />} />
    </Routes>
  )
}