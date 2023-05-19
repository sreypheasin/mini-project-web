import Link from 'next/link'
import React from 'react'

export default function Profile({id,avatar,name}) {
  return (
    <div>
        <Link href='#' className="avatar online z-0">
            <div className="w-24 rounded-full ring ring-blue-700 ring-offset-base-100 ring-offset-2">
                <img className="hover:opacity-50" src={avatar?avatar: "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg"} alt='avatar'/>
            </div>
        </Link>
        <p className='text-center mt-2'>{name?name:'unknow'}</p>
    </div>
  )
}
