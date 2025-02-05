import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GalleryPage from './pages/GalleryPage';
import Signin from './pages/SigninPage';
import Signup from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
