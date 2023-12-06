import { Link } from 'react-router-dom';
import mockdata from '../../db.json';

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import ProductList from '../components/ProductList';

// const Home = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products from your mock API here (e.g., using fetch or axios)
//     // Update the products state with the fetched data
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ProductList products={products} />
//     </div>
//   );
// };

// export default Home;

export default function Products(){
    const products = mockdata.products;
    console.log(products);
    const productsList = products.map(product => {
        return (
            <li key={product.id}><Link to={`${product.id}`}>{product.title}</Link></li>
        )
    })

    
    return (
        <div className="products">
            <h1>Products List</h1>
            <ul>
                {productsList}
            </ul>
        </div>
    )
}
