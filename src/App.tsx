import {BrowserRouter, Route, Routes  } from 'react-router-dom';
import Products from './pages/Home';
import ProductDetailPage from './pages/ProductDetailPage';

// import Home from './pages/Home';
// import ProductDetailPage from './pages/ProductDetailPage';
// import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetailPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
