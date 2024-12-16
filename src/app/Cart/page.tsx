import React from 'react'
import Image from 'next/image'
import Footer from '@/Components/Footer'

const page = () => {
  return (
    <div>
 <div className='container w-[1321px] h-[632.89px] mx-auto flex items-start'>
   {/*Left Side Div*/}
  <div className='w-1/2 w-[1100px] h-[547.89px] space-y-6 pt-20'>
    <h1 className='text-[22px] font-medium'>Bag</h1>
   <div className='flex justify-between items-center'>
     <Image 
     src={"/Images/Chair-3.svg"}
     alt={'Image'}
     width={150}
     height={150}
     ></Image>
    
    <div className='container w-[780.53px] h-[163px]'> 

   <div> 
     <div className='flex justify-between items-center'>
     <h1 className='text-[16px] text-[#272343]'>Library Stool Chair</h1>
     <h1 className='pr-10' >MRP: $99</h1>
     </div>
     <h2 className='text-[15px] text-[#757575] pt-6' >Ashen Slate/Cobalt Bliss</h2>
    
     <div className='flex justify-between items-center w-[150px] pt-2'>
     <h2 className='text-[15px] text-[#757575]'>Size L </h2>
     <h2 className='text-[15px] text-[#757575]'>Quantity 1</h2>
     </div>
    
     <div className='flex items-center gap-4 pt-6'>
      <Image
      src={"/Images/Heart.svg"}
      alt={'Image'}
      width={24}
      height={24}>
      </Image>
      <Image
      src={"/Images/Delete.svg"}
      alt={'Image'}
      width={24}
      height={24}>
      </Image>
</div>
     </div>
    </div>
   </div>

    <div className='border-[1px] border-[#E5E5E5]'></div>

    <div className='flex justify-between items-center'>

    <Image 
    src={"/Images/Image (1).svg"}
    alt={'Image'}
    width={150}
    height={150}
    ></Image>
    
    <div className='container w-[780.53px] h-[163px]'> 

    <div className='flex justify-between items-center' > 
     <h1 className='text-[16px] text-[#272343]'>Library Stool Chair</h1>
     <h1 className='pr-10' >MRP: $99</h1>
    </div>   

     <h2 className='text-[15px] text-[#757575] pt-6' >Ashen Slate/Cobalt Bliss</h2>
     <div className='flex justify-between items-center w-[150px] pt-2'>
     <h2 className='text-[15px] text-[#757575]'>Size L </h2>
     <h2 className='text-[15px] text-[#757575]'>Quantity 1</h2>
    </div>
    
    <div className='flex items-center gap-4 pt-6'>
      <Image
      src={"/Images/Heart.svg"}
      alt={'Image'}
      width={24}
      height={24}>
      </Image>
      <Image
      src={"/Images/Delete.svg"}
      alt={'Image'}
      width={24}
      height={24}>
      </Image>
    </div>
  </div>  
  </div>

  <div className='border-[1px] border-[#E5E5E5]'></div>


  </div>
    {/*Right Side Div*/}
    <div className='w-1/2 container w-[350.67px] h-[295px] pt-20'>
    <h1 className='text-[21px] font-medium'>Summary</h1> 
    <div className='flex justify-between items-center pt-6 '>
      <h1 className='text-[15px]'>Subtotal</h1>
      <h1 className='text-[15px]'>$198.00</h1>
    </div>
    <div className='flex justify-between items-center pt-4 pb-4'>
      <h1 className='text-[15px]'>Estimated Delivery & Handling</h1>
      <h1 className='text-[15px]'>Free</h1>
    </div>

    <div className='border-[1px] border-[#E5E5E5]'></div>
  
    <div className='flex justify-between items-center pt-4 pb-4'>
      <h1 className='text-[15px]' >Total</h1>
      <h1 className='text-[15px]'>$198.00</h1>
    </div>

    <div className='border-[1px] border-[#E5E5E5]'></div>

   <button className='text-white text-[15px] rounded-full bg-[#029FAE] mt-12 w-[334.67px] h-[60px]'>Member Checkout</button>      
 
    </div>
 </div>

      <Footer></Footer>
    </div>
  )
}

export default page
