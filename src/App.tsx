import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/ProductsListing';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
