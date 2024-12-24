import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='container mx-auto my-28'>
        <div className='flex flex-col space-y-5'>
            <div className='flex justify-center items-center'>
             <h1 className='text-[40px] font-sans font-bold text-slate-600'>Please Click to Access Data</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-5 space-y-5 lg:space-y-0 items-center justify-center'>
                <div className='flex flex-col space-y-5 justify-center items-center py-56 px-12 bg-slate-200 rounded shadow cursor-pointer'>
                    <h1 className='text-[40px] font-sans font-bold text-slate-600'>Client Side Rendering</h1>
                    <p className='text-[20px] font-sans font-bold text-slate-400'>A Store with Products and items with their <br /> rates and price Fetched from API........ </p>
                    <Link href="/client">
                       <button className="px-6 py-3 text-red-600 text-[20px] font-bold rounded ">Client-Side Fetching Data</button>
                    </Link>
                </div>
                <div className='flex flex-col space-y-5 justify-center items-center py-56 px-12 bg-slate-200 rounded shadow cursor-pointer'>
                <h1 className='text-[40px] font-sans font-bold text-slate-600'>Server Side Fetching Data</h1>
                    <p className='text-[20px] font-sans font-bold text-slate-400'>Famous Books <br /> Written by famous Writters....... </p>
                    <Link href="/server">
                     <button className="px-6 py-3 text-red-600 text-[20px] font-bold rounded ">Server-Side Fetching</button>
                    </Link>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Hero
