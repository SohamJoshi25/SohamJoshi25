// Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/home/Home.tsx'
import PageNotFound from './pages/PageNotFound/NotFound.tsx';
import ResumeRedirect from './components/ResumeRedirect/ResumeRedirect.tsx';
import { useEffect } from 'react';



const App = () => {
  
  const usePreloadImage = (src: string) => {
    useEffect(() => {
      const img = new Image();
      img.src = src;
    }, [src]);
  };

  usePreloadImage("/SohamJoshiPhoto.png");

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
