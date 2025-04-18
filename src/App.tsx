// Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/home/Home.tsx'
import PageNotFound from './pages/PageNotFound/NotFound.tsx';
import ResumeRedirect from './components/ResumeRedirect/ResumeRedirect.tsx';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/resume" element={<ResumeRedirect />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  )
}


export default App
