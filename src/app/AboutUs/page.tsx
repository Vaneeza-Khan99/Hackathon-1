import React from 'react'
import Image from 'next/image'
import Footer from '@/Components/Footer'

const page = () => {
  return (
    <div>
        <div className='container w-[1321px] h-[478px] my-20 mx-auto flex justify-between gap-12'> 
        {/*Right Side Div*/}
        <div className='w-1/2 container w-[672px] h-[478px] p-20 bg-[#007580]'>
        
       <h1 className='text-[32px] font-bold text-[#F9F9F9]'>About Us - Comforty</h1>
       <p className='text-[18px] text-[#F9F9F9] w-[460px] h-[110px] pt-4'>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
        <button className='bg-[#F9F9F926] text-white w-[179px] h-[56px] mt-28'>View Collection</button>
        </div>
        
         {/*Left Side Div*/}
         <div className='w-1/2 '>
            <Image
            src={'/Images/Image Block.svg'}
            alt={'Image'}
            width={619}
            height={478}
            ></Image>
         </div>
        </div>

        <h1 className='text-[32px] font-semibold mb-12 text-center'>What makes our Brand Different </h1>
          <div className='container mx-auto w-[1320px] h-[244px] mb-32'>
            <div className='grid grid-cols-4 gap-6'>
                <div className='bg-[#F9F9F9] p-12'>
                    <Image 
                    src={'/Images/Delivery.svg'}
                    alt={'Image'}
                    width={24}
                    height={24}
                    ></Image>
                    <h1 className='text-[20px] text-[#007580] pt-4' >Next day as standard</h1>
                    <p className='text-[#007580] pt-2 text-[16px]'>Order before 3pm and get your order the next day as standard</p>
                </div>

                <div className='bg-[#F9F9F9] p-12'>
                    <Image 
                    src={'/Images/Checkmark--outline.svg'}
                    alt={'Image'}
                    width={24}
                    height={24}
                    ></Image>
                    <h1 className='text-[20px] text-[#007580] pt-4' >Made by true artisans</h1>
                    <p className='text-[#007580] pt-2 text-[16px]'>Handmade crafted goods made with real passion and craftmanship</p>
                </div>
                
                <div className='bg-[#F9F9F9] p-12'>
                    <Image 
                    src={'/Images/Purchase.svg'}
                    alt={'Image'}
                    width={24}
                    height={24}
                    ></Image>
                    <h1 className='text-[20px] text-[#007580] pt-4' >Unbeatable prices</h1>
                    <p className='text-[#007580] pt-2 text-[16px]'>For our materials and quality you won’t find better prices anywhere</p>
                </div>
                
                <div className='bg-[#F9F9F9] p-12'>
                    <Image 
                    src={'/Images/Sprout.svg'}
                    alt={'Image'}
                    width={24}
                    height={24}
                    ></Image>
                    <h1 className='text-[20px] text-[#007580] pt-4' >Recycled packaging</h1>
                    <p className='text-[#007580] pt-2 text-[16px]'>We use 100% recycled to ensure our footprint is more manageable</p>
                </div>

            </div>
          </div>
      
              <h1 className='text-[32px] font-semibold ml-72 mb-14'>Our Popular Products </h1> 
               <div className='container mx-auto w-[1321px] h-[462px] gap-10 flex mb-32'>
                <div className='container w-[630px] h-[462px] '>
                    <Image 
                    src={'/Images/Sofa.svg'}
                    alt={'Image'}
                    width={630}
                    height={375}
                    ></Image>
                    <h1 className='text-[20px] pt-4 text-[#2A254B]'>The Poplar suede sofa</h1>
                     <h2 className='text-[18px] text-[#2A254B] pt-3'>$99.00</h2>
                </div>
                
                <div className='container w-[305px] h-[462px]'>
                    <Image
                    src={'/Images/Photo.svg'}
                    alt={'Image'}
                    width={305}
                    height={375}
                    ></Image>
                    <h1 className='text-[20px] pt-4 text-[#2A254B]'>The Dandy chair</h1>
                    <h2 className='text-[18px] text-[#2A254B] pt-3'>$99.00</h2>
                </div>
                
                <div className='container w-[305px] h-[462px]'>
                <Image
                    src={'/Images/Photo (1).svg'}
                    alt={'Image'}
                    width={305}
                    height={375}></Image>
                    <h1 className='text-[20px] pt-4 text-[#2A254B]'>The Dandy chair</h1>
                    <h2 className='text-[18px] text-[#2A254B] pt-3'>$99.00</h2>    
                </div>
                
               </div>
     
      <Footer></Footer>
    </div>
  )
}

export default page
