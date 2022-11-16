import React from 'react';
import { AiFillFire, AiFillCaretDown } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='bg-white shadow-2xl h-[8%] w-[100%] p-3 m-0'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row items-center gap-2'>
                    <p><AiFillFire className='text-orange-400 font-bold text-2xl' /></p>
                    <p className='text-black text-xl font-bold' >MeetYou</p>
                </div>
                <div className='flex flex-row gap-2 items-center font-bold'>
                    <p><FaUserCircle className='text-2xl font-bold' /></p>
                    <div className='flex flex-row gap-2 items-center'>
                        <p>User Name</p>
                        <p><AiFillCaretDown /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;