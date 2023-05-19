import React from 'react'
import ProductCardDetail from '@/components/ProductCardDetail'

async function getProductsDetails(id){
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    const ProductDetails = res.json();
    return ProductDetails;
}

export async function generateStaticParams(){
    const products = await fetch("https://api.escuelajs.co/api/v1/products?limit=20&offset=103")
    .then(res=> res.json())

    return products.map(products =>(
        {
            params: {
                id: products.id.toString(),
            }
        }
    ))
}

export default async function page({params}) {
    const {id} = params;
    const products = await getProductsDetails(id);
    console.log(products.id)
  return (
    <div>
        <ProductCardDetail 
            title = {products.title}
            description = {products.description}
            image = {products.images[0]}
            updatedAt = {products.updatedAt}
        />
    </div>
  )
}
