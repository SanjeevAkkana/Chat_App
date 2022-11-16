import React from 'react';
import India from './India.png';
import { TbCircle } from 'react-icons/tb';
import { BsChatSquare } from 'react-icons/bs';
import { BiDotsVerticalRounded, BiCheckDouble } from 'react-icons/bi';
import { AiOutlineSearch, AiOutlineLink } from 'react-icons/ai';
import { BsEmojiSmile } from 'react-icons/bs';
import { MdKeyboardVoice } from 'react-icons/md';

const Chatbar = () => {
    return (
        <div className='bg-[#ededed] w-[100%] h-screen'>
            <div className=' w-[100%] h-[100%] mt-3'>
                <div className='flex flex-row h-[100%] justify-center'>
                    <div className=' h-[82%] w-[30%] flex-col'>
                        <div className='p-3 flex flex-row justify-between items-center'>
                            <div>
                                <img src={India} className="h-10 w-10 rounded-3xl" />
                            </div>
                            <div className='hidden md:flex flex-row gap-5 items-center'>
                                <TbCircle className='text-black text-xl' />
                                <BsChatSquare className="text-black text-md" />
                                <BiDotsVerticalRounded className="text-black text-xl" />
                            </div>
                        </div>
                        <div className='border-r-2 bg-white border-black h-[98%]'>
                            <div className='p-1 flex justify-center items-center bg-[#ededed] w-[100%]'>
                                <div className='w-[100%] m-1 bg-white h-auto flex flex-row justify-start gap-3 items-center p-1 rounded-xl'>
                                <AiOutlineSearch className='text-black text-xl' />
                                    <input type="text" className='w-[100%]' placeholder="Search Here"/>
                                </div>
                            </div>
                            <div className='bg-white h-[100%] shadow-3xl'>
                                {/* 1 Chat */}
                                <div className='flex border-b-2 flex-row justify-between p-2'>
                                    <div className='flex items-center flex-row gap-3 justify-start'>
                                        <img src={India} className="h-10 w-10 rounded-3xl" />
                                        <div className='hidden md:flex flex-col justify-start'>
                                            <p className=''>Brahmandham</p>
                                            <div className='flex flex-row items-center'>
                                                <BiCheckDouble className='text-blue-800' />
                                                <p className=''>I love You ...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='hidden sm:flex flex-col items-center justify-center'>
                                        <p className='font-semibold  sm:text-xsm'>17:46</p>
                                        <p className='font-semibold  sm:text-xsm bg-green-500 rounded-3xl w-5 h-5 justify-center flex items-center text-center'>2</p>
                                    </div>
                                </div>
                                {/* 2 Chat */}
                                <div className='flex border-b-2 flex-row p-2 justify-between'>
                                    <div className='flex items-center flex-row gap-3 justify-start'>
                                        <img src={India} className="h-10 w-10 rounded-3xl" />
                                        <div className='hidden md:flex flex-col justify-start'>
                                            <p>Ali</p>
                                            <div className='flex flex-row items-center'>
                                                <BiCheckDouble />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='hidden sm:flex flex-col items-center justify-center'>
                                        <p className='text-md text-gray-700'>17:46</p>
                                    </div>
                                </div>
                                {/* 3 Chat */}
                                <div className='flex border-b-2 p-2 flex-row justify-between'>
                                    <div className='flex items-center flex-row gap-3 justify-start'>
                                        <img src={India} className="h-10 w-10 rounded-3xl" />
                                        <div className='hidden md:flex flex-col justify-start'>
                                            <p>M.S.Narayana</p>
                                            <div className='flex flex-row items-center'>
                                                <BiCheckDouble />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='hidden sm:flex flex-col items-center justify-center'>
                                        <p className='text-md text-gray-700'>17:46</p>
                                    </div>
                                </div>
                                {/* 4 Chat */}
                                <div className='flex border-b-2 p-2 flex-row justify-between'>
                                    <div className='flex items-center flex-row gap-3 justify-start'>
                                        <img src={India} className="h-10 w-10 rounded-3xl" />
                                        <div className='hidden md:flex flex-col justify-start'>
                                            <p>Sunil</p>
                                            <div className='flex flex-row items-center'>
                                                <BiCheckDouble />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='hidden sm:flex flex-col items-center justify-center'>
                                        <p className='text-md text-gray-700'>17:46</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Chat Screen  */}
                    <div className='w-[67%]'>
                        <div className='flex flex-row mt-3 w-[100%] justify-between items-center'>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <div>
                                    <img className='h-10 w-10 rounded-3xl' src={India} />
                                </div>
                                <div className='hidden md:flex flex-col'>
                                    <p className='font-bold text-sm'>Venu Madhav</p>
                                    <p className='text-sm text-gray-700'>Seen at: 00:00</p>
                                </div>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <AiOutlineSearch className='text-xl' />
                                <AiOutlineLink className='text-xl' />
                                <BiDotsVerticalRounded className='text-xl' />
                            </div>
                        </div>
                        <div className='bg-white w-[100%] flex justify-center items-center mt-5 h-[78%]'>
                        </div>
                        <div className='flex flex-row gap-3 items-center justify-start w-[100%] p-3 mb-5'>
                            <div>
                                <BsEmojiSmile className='text-xl' />
                            </div>
                            <div className='w-[97%]'>
                                <input placeholder='Type Message Here!!' input="text" className='md:text-md font-thin p-2 rounded-3xl bg-white w-[100%]'/>
                            </div>
                            <div>
                                <MdKeyboardVoice className='text-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chatbar;