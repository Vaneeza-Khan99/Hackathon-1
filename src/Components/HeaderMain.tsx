import React from 'react'
import Image from 'next/image'


const HeaderMain = () => {
  return (
    <div>
       
       <div className='bg-[#F0F2F3] w-full h-[84px] flex justify-between items-center'>
         <Image className='ml-72'
         src={"/Images/Logo.svg"}
         alt={"Logo"}
         width={166}
         height={40}> 
         </Image>
 
         <a href="Cart">
         <button> 
         <Image className='mr-72'
         src={"/Images/Cart.svg"}
         alt={"Cart"}
         width={120}
         height={44}
         ></Image>
         </button>
         </a>
       </div>

    </div>
  )
}

export default HeaderMain
 