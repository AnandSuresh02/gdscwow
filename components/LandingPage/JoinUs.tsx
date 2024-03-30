import React from 'react'

const JoinUs = () => {
  return (
    <div className='h-[75vh] w-full flex  first-letter:justify-evenly items-center px-6'>
      <div className='h-[90%] rounded-2xl relative w-[75%] mx-4  border-2 p-10'>
        <h1 className='text-3xl font-bold googleFont'>Join a community group</h1>
        <p className='w-1/2 py-2 text-lg'>Meet developers, discover local groups, and build your global network.</p>
        <button className='px-8 py-4 border-2 rounded-full border-accentcolor  hover:bg-accentcolor ease-in-out duration-300 my-6'>Get Started</button>
        <img src="/assets/images/com.svg" className='absolute bottom-0 right-0' alt="" />
      </div>
      <div className='h-[90%] relative rounded-2xl w-1/3 mx-4 border-2 p-10'>
      <h1 className='text-3xl font-bold googleFont'>Join a community group</h1>
        <p className='w-1/2 py-2 text-lg'>Meet developers, discover local groups, and build your global network.</p>
        <button className='px-8 py-4 border-2 rounded-full border-accentcolor  hover:bg-accentcolor ease-in-out duration-300 my-6'>Get Started</button>
        <img src="/assets/images/comunity.webp" className='absolute w-3/5 rounded-2xl bottom-0 right-0' alt="" />
      </div>
    </div>
  )
}

export default JoinUs
