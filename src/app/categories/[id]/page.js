import React from 'react'
import ProductCard from '@/components/ProductCard';

async function getCategories(id,name){
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
    const products = res.json();
    return products;
}

export async function generateStaticParams(){
    const categories = await fetch(`https://api.escuelajs.co/api/v1/categories`)
    .then(res=> res.json())

    return categories.map(category =>(
        {
            params: {
                id: category.id.toString(),
            }
        }
    ))
}
export default async function Categories({params}) {
    const {id} = params;
    const products = await getCategories(id);
    console.log(products.id)
  return (
    <>
        <h1 className='text-3xl w-full flex justify-center mt-10 shadow-sm text-slate-50 '>
            All products in category  {products.length > 0 ? products[0].category.name : ''}
        </h1>
            <div className='flex justify-evenly flex-wrap mt-10'>
            {
              products.map((product)=>(
                <ProductCard
                  key={product.id}
                  id= {product.id}
                  image={product.images[0]}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </div> 
       
    </>
  )
}
