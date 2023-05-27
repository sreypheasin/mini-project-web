import React from 'react'
import ProductCardDetail from '@/components/ProductCardDetail'

export async function getProductsDetails(id){
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    const ProductDetails = res.json();
    return ProductDetails;
}

export async function generateStaticParams(){
    const products = await fetch("https://api.escuelajs.co/api/v1/products?limit=20")
    .then(res=> res.json())

    return products.map(products =>(
        {
            params: {
                id: products.id.toString(),
            }
        }
    ))
}
// generate metadata
export async function generateMetadata({ params }) {
    const { id } = params;
    const product = await getProductsDetails(id);
    return {
      title: product.title,
      description: product.description,
      metadataBase: new URL("https://istad.co"),
      alternates: {
        canonical: "/", // canonical mean the original page
        languages: {
          "en-US": "/en-US", 
          "de-DE": "/de-DE",
        }, 
      },
      openGraph: {
        images: product.images[0],
        title: product.description,
      },
    };
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
