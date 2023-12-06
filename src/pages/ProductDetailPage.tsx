import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

    const fetchProduct = () => {
        const product0 = mockdata.products.find((product) => product.id === productId);
        setProduct({
            ...product,
            id: product0?.id ?? 0,
            name: product0?.name ?? '',
            image: product0?.image ?? '',
            price: product0?.price ?? 0,
        });
    }

    useEffect(fetchProduct, [])

    console.log(product);
    return (
        <div className="product-detail">
            <h2>{product?.name} Detail</h2>
            <img src={product?.image} alt={product?.name} />
            <p>{product?.price}</p>

        </div>
    )
}

// interface IProduct{
//     id:number;
//     name:string;
//     price:number;
//     image:string;
// }