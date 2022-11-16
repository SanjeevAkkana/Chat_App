import React from 'react';
import {AiOutlineMenuFold} from 'react-icons/ai';
import {FaListAlt} from 'react-icons/fa';
import {FiLogOut} from 'react-icons/fi';

const Menu = () => {
    return(
        <div className='w-[100%] mt-5 h-screen'>
            <div className='flex flex-row items-center gap-2 p-2 bg-blue-200 m-3 shadow-sm'>
                <AiOutlineMenuFold className='textl-2xl text-blue-800'/>
                <p className='hidden md:flex text-md text-blue-800'>Chat</p> 
            </div>
            <div className='flex flex-row items-center gap-2 p-2 m-3 rounded-xl'>
                <FaListAlt className='textl-2xl'/>
                <p className='hidden md:flex text-md '>Feed</p> 
            </div>
            <div className='flex flex-row items-center gap-2 p-2 m-3 rounded-xl'>
                <FiLogOut className='textl-2xl '/>
                <p className='hidden md:flex text-md '>Status</p> 
            </div>
        </div>
    )
}

export default Menu;