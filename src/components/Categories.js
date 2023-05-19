import React from 'react'
import Link from 'next/link'

export default function Categories({image,name}) {
  return (

<div class="w-80 max-w-sm bg-white border mb-10 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-70 hover:opacity-100">
    <a href="#">
        <img class="rounded-t-lg h-80 w-80 object-cover" src={image? image: 'https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg'} alt="" />
    </a>
    <div class="p-5">
        <Link href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name?name :'unknow'}</h5>
        </Link>
    </div>
</div>


  )
}
