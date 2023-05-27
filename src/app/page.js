import Categories from '@/components/Categories';
import MoreProfile from '@/components/MoreProfile'
import ProductCard from '@/components/ProductCard'
import Profile from '@/components/Profile'

export const metadata ={
  title : "home - odinn"
}

export async function getProducts (){
  const res = await fetch ('https://api.escuelajs.co/api/v1/products?limit=20&offset=1')
  const products = await res.json();
  return products;
}

export async function getUsers (){
  const res = await fetch ('https://api.escuelajs.co/api/v1/users?limit=8')
  const users = await res.json();
  return users;
}

export async function getCategories (){
  const res = await fetch ('https://api.escuelajs.co/api/v1/categories')
  const categories = await res.json();
  return categories;
}

export default async function Home() {
  const products = await getProducts();
  const users = await getUsers();
  const categories = await getCategories();
  // console.log(products)
    
  return (
   <div  className='p-4 mt-10 mb-5'>
    <div className='flex gap-10 justify-center mb-4 flex-wrap'>
      {
        users.map((users)=>(
          <Profile
            key={users.id}
            id= {users.id}
            avatar= {users.avatar}
            name = {users.name}
          />
        ))

    
      }
     {
        users.slice(0,1).map((users)=>(
          <MoreProfile  
            key={users.id}
            id= {users.id}
            avatar= {users.avatar}
          />
        ))
      }
    </div>
    <h1 className='text-3xl font-bold  text-white ms-5'>Products</h1>
    <div className='flex justify-evenly flex-wrap mt-10'>
      {
        products.map((products)=>(
          <ProductCard
            key={products.id}
            id= {products.id}
            image={products.images[0]}
            title={products.title}
            price={products.price}
          />
        ))}
    </div>
    <h1 className='text-3xl font-bold  text-white ms-5'>Categories</h1>
    {/* Categories */}
    <div className='flex justify-evenly flex-wrap mt-10'>
      {
        categories.map((categories)=>(
          <Categories
            key={categories.id}
            id= {categories.id}
            image={categories.image}
            name = {categories.name}
          />
        ))
      }
    </div>
   </div>
  )
}
