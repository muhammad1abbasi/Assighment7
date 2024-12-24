import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className="h-16 max-w-full p-3 bg-gray-500">
      <nav className="flex justify-evenly items-center space-x-5">
        <h1 className="text-[30px] text-white font-bold font-sans">Assigment 7</h1>

        <ul className=" space-x-5 hidden lg:flex">
          <li>
          <Link href="/client">
            <h1 className="text-[30px] text-white font-bold font-sans">Client-Side Fetching</h1>
          </Link>
          </li>
          <li>
          <Link href="/server">
           <h1 className="text-[30px] text-white font-bold font-sans">Server-Side Fetching</h1>
          </Link>
          </li>
        </ul>

        <button className="hidden lg:flex border bg-blue-600 py-2 px-7 rounded text-white">Login</button>
        <button className="hidden lg:flex border bg-green-600 py-2 px-7 rounded text-white">SignUp</button>


      </nav>
     </div>
  )
}

export default Header
