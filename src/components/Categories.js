import React from 'react'
import Link from 'next/link'

export default function Categories({id,image,name}) {
  return (

<div className="w-60 max-w-sm mb-10 rounded-lg shadow dark:bg-base-100 opacity-70 hover:opacity-100 shadow-md">
    <Link href={`/categories/${id}`}>
        <img className="rounded-t-lg h-32 w-80 object-cover" src={image? image: 'https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg'} alt="category" />
    </Link>
    <div className="p-4">
        <Link href="#">
            <h5 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name?name :'unknow'}</h5>
        </Link>
    </div>
</div>


  )
}
