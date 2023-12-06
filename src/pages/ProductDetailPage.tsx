import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mockdata from '../../db.json';

// const ProductDetailPage = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Fetch product details based on the ID from your mock API
//     // Update the product state with the fetched data
//   }, [id]);

//   if (!product) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <img src={product.image} alt={product.name} />
//       <p>{product.price}</p>
//       {/* Add more details here (e.g., description, category) */}
//     </div>
//   );
// };

// export default ProductDetailPage;

export default function ProductDetailPage() {
    const { id } = useParams();
    const productId = Number(id);
    // const product = mockdata.products.find(product => product.id === productId);
    // console.log(product);
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