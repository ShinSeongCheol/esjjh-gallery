import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GalleryPage from './pages/GalleryPage';
import Signin from './pages/SigninPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
