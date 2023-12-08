import { Link } from 'react-router-dom';
import mockdata from '../../db.json';
import '../App.css'


export default function Products() {
    const products = mockdata.products;
    console.log(products);
    const productsList = products.map(product => {
        return (
            <li key={product.id} className='item-list'><Link to={`${product.id}`}>{product.title}</Link></li>
        )
    })

    return (
        <div className="products">
            <h1 className='header'>Products List</h1>
            <ul className='item-wrap'>
                {productsList}
            </ul>
        </div>
    )
}
