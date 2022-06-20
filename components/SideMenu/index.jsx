import React from 'react'
import { rec_chanels, top_chanels } from '../../data/mock-data'
import {RiMovieLine} from 'react-icons/ri';
import {BsDot} from 'react-icons/bs'
import Image from 'next/image';

const SideMenu = () => {
  return (
    <div className='fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2  bg-[#0e0e10]'>
        <div>
            <p className='hidden xl:flex uppercase font-bold text-sm pb-4'>Recommended Chanels</p>
            <p><RiMovieLine className='xl:hidden justify-center w-full'/></p>
        </div>
        {rec_chanels.map((item, index)=> (
            <div className='inline-flex items-center w-full py-[2px] transition ease-out hover:scale-105 cursor-pointer' key={index}>
                <div>
                    <Image src={item.avatar} alt={item.username} width='40' height='40'/>
                </div>
                <div className='hidden xl:flex justicy-between w-full'>
                    <div>
                        <p>{item.username}</p>
                        <p className='text-gray-400'>{item.game_name}</p>
                    </div>
                    <p className='flex items-center'><BsDot color='red' size={20}/>{item.rank}k</p>
                </div>
            </div>
        ))}
        <div>
            <p className='hidden xl:flex uppercase font-bold text-sm py-4'>Top Channels</p>
            <p><RiMovieLine className='xl:hidden justify-center w-full'/></p>
        </div>
        {top_chanels.map((item, index)=> (
            <div className='inline-flex items-center w-full py-[2px] transition ease-out hover:scale-105 cursor-pointer' key={index}>
                 <div>
                    <Image src={item.avatar} alt={item.username} width='40' height='40'/>
                </div>
                <div className='hidden xl:flex justicy-between w-full'>
                    <div>
                        <p>{item.username}</p>
                        <p className='text-gray-400'>{item.game_name}</p>
                    </div>
                    <p className='flex items-center'><BsDot color='red' size={20}/>{item.rank}k</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default SideMenu