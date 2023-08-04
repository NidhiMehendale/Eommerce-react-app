import { useParams } from "react-router-dom";
 
const ProductDetail = () => {
    const params = useParams(); 

    console.log(params.productId);
   return (
     <section>
       <h1>Product Detail</h1>
       <p>{params.title}</p>
       <p>{params.price}</p>
       <p>{params.imageUrl}</p>
     </section>
   );
};

export default ProductDetail;