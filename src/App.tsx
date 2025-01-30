// Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/home/Home.tsx'
import PageNotFound from './pages/PageNotFound/NotFound.tsx';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  )
}


export default App
