import React from 'react'
import Image from 'next/image'
import Footer from '@/Components/Footer'

const page = () => {
  return (
    <div>
     {/*Left Side Div*/}   
     <div className='container w-[1321px] h-[664px] mx-auto my-32 flex justify-centre '>
      <div className='flex w-1/2 justify-center'>
      <Image
      src={"/Images/Chair-2.svg"}
      alt={'Image'}
      width={675}
      height={607}>
      </Image>
      </div>
      
      {/*Right Side Div*/}

     <div className='w-1/2 flex flex-col items-start pl-20'>
     <h1 className='text-[60px] font-bold w-[530px] h-[132px]'>Library Stool Chair</h1>
     <div className='pt-20 pb-10 '>
     <button className='bg-[#029FAE] text-white rounded-full w-[114px] h-[44px]'>$20.00 USD</button>
     </div>
     <div className='border-[1px] border-[#D9D9D9] w-[521px] '></div>
     <p className='text-[22px] text-[#272343] opacity-[60%] pt-10 w-[521px]  pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
     <button className='bg-[#029FAE] text-white text-[20px] rounded-lg w-[212px] h-[63px] flex justify-center items-center gap-4'>
      <Image
      src={'/Images/cart-2.svg'}
      alt={'Cart'}
      width={22}
      height={21}
      ></Image>
      Add To Cart
      </button>
     </div>
     </div>   

   {/*Featured Products*/}

  <div className='container mx-auto w-[1447px] h-[409px] mb-44'>
    
    <div className='flex justify-between items-center'>
      <h1 className='text-[28px] font-bold '>FEATURED PRODUCTS</h1>
      <button className='border-b-2 border-black w-[75px] h-[31px] text-[18px] font-bold '>View all</button>
    </div>
    <div className='grid grid-cols-5 gap-8 pt-16'>
      <div>
        <Image
          src={'/Images/Chair-5.svg'}
          alt={"Chair"}    
          width={263}
          height={263}
          ></Image>
          <div className='flex justify-between items-center pt-4'>
           <h1 className='text-[16px] '>Library Stool Chair </h1>  
           <h1 className='text-[14px] font-bold'>$99</h1>
          </div>
      </div>
      <div>
        <Image
        src={'/Images/Chair-1.svg'}
        alt={"Chair"}
        width={263}
        height={263}
        ></Image>
        <div className='flex justify-between items-center pt-4'>
           <h1 className='text-[16px] '>Library Stool Chair </h1>  
           <h1 className='text-[14px] font-bold'>$99</h1>
          </div>
      </div>
      
      <div>
      <Image
        src={'/Images/Image (3).svg'}
        alt={"Chair"}
        width={263}
        height={263}
        ></Image>
        <div className='flex justify-between items-center pt-4'>
           <h1 className='text-[16px] '>Library Stool Chair </h1>  
           <h1 className='text-[14px] font-bold'>$99</h1>
          </div>
      </div>

      <div>
      <Image
        src={'/Images/Chair-3.svg'}
        alt={"Chair"}
        width={263}
        height={270}
        ></Image>
        <div className='flex justify-between items-center pt-4'>
           <h1 className='text-[16px] '>Library Stool Chair </h1>  
           <h1 className='text-[14px] font-bold'>$99</h1>
          </div>
      </div>
      
      <div>
      <Image
        src={'/Images/Image (1).svg'}
        alt={"Chair"}
        width={263}
        height={263}
        ></Image>
       <div className='flex justify-between items-center pt-4'>
           <h1 className='text-[16px] '>Library Stool Chair </h1>  
           <h1 className='text-[14px] font-bold'>$99</h1>
          </div>
      </div>
    </div>


  </div>


  <Footer></Footer>
    </div>
  )
}

export default page