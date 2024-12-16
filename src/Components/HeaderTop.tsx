import React from 'react'
import Image from 'next/image'

const HeaderTop = () => {
  return (
    <div>
       
       <div className='border-b-2 border-black w-full h-[45px] bg-[#272343] flex justify-between items-center'>
         <div className='flex items-center ml-72 m-20'>
            <Image
            src={"/Images/check 1.svg"}
            alt={"logo"}
            width={16}
            height={16}>
            </Image>
            <h1 className='text-[13px] text-[#FFFFFF] pl-2'>Free shipping on all orders over $50</h1>
            </div>
             <div className='flex items-center mr-72'> 
            <h1 className='text-[13px] text-[#FFFFFF] pr-2'>Eng</h1>
            <Image
             src={"/Images/Vector.svg"}
             alt={"logo"}
             width={7}
             height={3.5}
             ></Image>
             <a href="FAQ">
             <button className='text-[13px] text-[#FFFFFF] pl-6 pr-6'>Faqs</button>
             </a>
             <Image
             src={"/Images/alert-circle 1.svg"}
             alt={"logo"}
             width={16}
             height={16}></Image>
            <a href="ContactUs">
              <button>
            <h1 className='text-[13px] text-[#FFFFFF] pl-2'>Need Help</h1>
            </button>
            </a>
         </div>
       </div>


    </div>
  )
}

export default HeaderTop
 