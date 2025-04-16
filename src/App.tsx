// Packages
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Pages
import Home from './pages/home/Home.tsx'
import PageNotFound from './pages/PageNotFound/NotFound.tsx';
import { Resume } from './data/constants.ts';
import { useEffect } from 'react';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={(() => {useEffect(() => {window.location.replace(Resume);}, []);return null;})()} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  )
}


export default App
