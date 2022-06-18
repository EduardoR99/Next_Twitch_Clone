import React from 'react'
import Image from 'next/image';


const LiveChannelItem = ({img, profile_img, title, user, game}) => {
  return (
    <div className='p-2'>
        <Image src={img} alt='/'/>
        <div className='flex pt-2'>
            <div>
                <Image className='rounded-full' src={profile_img} alt='/' width='60' height='60'/>
            </div>
            <div>
                <p className='text-sm font-bold'>{title}</p>
                <p className='text-sm text-gray-500'>{user}</p>
                <p className='text-sm text-gray-500'>{game}</p>
            </div>
        </div>
    </div>
  )
}

export default LiveChannelItem