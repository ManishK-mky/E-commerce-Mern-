import React, { useContext } from 'react'
import Breadcrum from '../Components/Breadcrum'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts';

function Product() {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts product={product}/>
    </div>
  )
}

export default Product
