import React from 'react';
import Image from 'next/image';
import Remote from '../../public/assets/remote.png';
import Mic from '../../public/assets/mic.png';
import HeadPhones from '../../public/assets/headphones.png';
import Trophy from '../../public/assets/trophy.png';
import Paint from '../../public/assets/Paint.png'

const IconBar = () => {
  return (
    <div className='p-2 md:p-8'>
        <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-700 py-8'>
            <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded'>
                <p className='text-2xl font-bold'>Games</p>
                <Image src={Remote} width={50} height={50} alt='/'/>
            </div>
            <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded'>
                <p className='text-2xl font-bold'>IRL</p>
                <Image src={Mic} width={50} height={50} alt='/'/>
            </div>
            <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded'>
                <p className='text-2xl font-bold'>Music</p>
                <Image src={HeadPhones} width={50} height={50} alt='/'/>
            </div>
            <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded'>
                <p className='text-2xl font-bold'>E-sports</p>
                <Image src={Trophy} width={50} height={50} alt='/'/>
            </div>
            <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded'>
                <p className='text-2xl font-bold'>Creative</p>
                <Image src={Paint} width={50} height={50} alt='/'/>
            </div>
        </div>
        
    </div>
  )
}

export default IconBar