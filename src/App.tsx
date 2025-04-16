// Packages
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Pages
import Home from './pages/home/Home.tsx'
import PageNotFound from './pages/PageNotFound/NotFound.tsx';
import { Resume } from './data/constants.ts';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Navigate to={Resume}/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  )
}


export default App
