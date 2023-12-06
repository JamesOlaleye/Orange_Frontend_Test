import { Link } from 'react-router-dom';
import mockdata from '../../db.json';


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
