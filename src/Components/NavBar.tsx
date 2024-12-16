import React from 'react'
import Link from 'next/link'


const NavBar = () => {
  return (
    <div>
        
        <div className='w-full h-[74px] bg-[] border-b-2 border-[#F0F2F3]'>
            <nav className='ml-72 pt-6 flex justify-between items-center'>
                <ul className='flex justify-start items-center gap-8'>
                    <Link href={"/"}>
                    <li className='text-[#007580] text-[14px] flex justify-center items-center '>Home</li>
                    </Link>
                    
                    <Link href={"/SingleProductPage"}>
                    <li className='text-[#636270] text-[14px] flex justify-center items-center '>Shop</li>
                    </Link>
                    
                    <Link href={"/ProductPage"}>
                    <li className='text-[#636270] text-[14px] flex justify-center items-center '>Product</li>
                    </Link>
              
                    <Link href={"/"}>
                    <li className='text-[#636270] text-[14px] flex justify-center items-center '>Pages</li>
                    </Link>
                                  
                    <Link href={"/AboutUs"}>
                    <li className='text-[#636270] text-[14px] flex justify-center items-center '>About</li>
                    </Link>
                </ul> 
                  <div className='mr-72'>
                     <h1 className='text-[#636270]'>Contact: <span className='text-black font-medium'>(808) 555-0111</span></h1>
                  </div>
            </nav>
        </div>
            
    </div>
  )
}

export default NavBar
