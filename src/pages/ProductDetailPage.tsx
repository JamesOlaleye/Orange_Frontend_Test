import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import mockdata from '../../db.json';


export default function ProductDetailPage() {
    const { id } = useParams();
    const productId = Number(id);

    const [product, setProduct] = useState({
        id: 0,
        name: '',
        image: '',
        price: 0,
    });

    const getDefaultProduct = () => ({
        id: 0,
        name: '',
        image: '',
        price: 0,
    });

    const fetchProduct = () => {
        const product0 = mockdata.products.find((product) => product.id === productId);
        setProduct({
            ...getDefaultProduct(),
            ...(product0 || {}),
        });
    }

    useEffect(fetchProduct, [])

    console.log(product);
    return (
        <>
            <div className="product-detail">
                <h2 className='head'>{product?.name} Detail</h2>
                <img src={product?.image} alt={product?.name} className='img' />
                <p className='price'>Price: N {product?.price}</p>
            </div>
            <div>
                <Link to="/products">
                    <button className="back-button">Back to Products</button>
                </Link>
            </div>
        </>
    )
}
