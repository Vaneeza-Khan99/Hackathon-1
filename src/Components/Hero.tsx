import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>

        <div className='w-full'>
          <div className='container mx-auto w-[1321px] h-[850px] bg-[#F0F2F3] flex items-center'>
          {/*Left Side Div */}
          <div className='w-1/2 flex flex-col items-start m-10 w-[557px] h-[337px]'>
          <h1 className='text-[14px] '>WELCOME TO CHAIRY</h1>
          <h1 className='w-[557px] h-[198px] text-[60px] font-bold '>Best Furniture Collection For Your Interior.</h1>
           <div className='pt-20'>
           <button className='w-[171px] h-[52px] rounded-lg bg-[#029FAE] text-[16px] text-white flex justify-center items-center pr-6 gap-4'>Shop Now
            <Image 
            src={"/Images/Right 24px.svg"}
            alt={'Image'}
            width={24}
            height={24}
            ></Image>
           </button>
            </div>
           </div>
          {/*Right Side Div */} 
           <div className='w-1/2 flex justify-center'>
           <Image 
           src={"/Images/Hero-Image.svg"}
           alt={'Hero Image'}
           width={434}
           height={584}></Image></div>
            
          </div>
 
        </div>
{/*Logos*/}        
        <div className='container w-[1321px] h-[139px] mx-auto mt-16'>
         <div className='flex justify-between itmes-center'>
         <Image
         src={"/Images/Logo (1).svg"}
         alt={"logo"}
         width={85}
         height={87}>
         </Image>
 
        
         <Image
         src={"/Images/Logo (2).svg"}
         alt={"logo"}
         width={107}
         height={109}>

         </Image>

         
         <Image
         src={"/Images/Logo(3).png"}
         alt={"logo"}
         width={135}
         height={139}>

         </Image>

         
         <Image
         src={"/Images/Logo (4).svg"}
         alt={"logo"}
         width={63}
         height={65}>

         </Image>

         
         <Image
         src={"/Images/Logo (5).svg"}
         alt={"logo"}
         width={98}
         height={101}>

         </Image>

        
         <Image
         src={"/Images/Logo (6).svg"}
         alt={"logo"}
         width={113}
         height={115}>

         </Image>

         
         <Image
         src={"/Images/Logo (7).svg"}
         alt={"logo"}
         width={84}
         height={87}>

         </Image>

            
         </div>  
        </div>
    
         <div className='container mx-auto w-[1321px] h-[461px] mt-6'>
          <h1 className='text-[32px] font-bold '>Featured Products</h1>
          <div className='grid grid-cols-4 gap-6 pt-8'>
{/*1st Image*/}            
            <div>
               <Image
                src={'/Images/Chair-1.svg'}
                alt={"Chair"}
                width={312}
                height={312}></Image>
              <div className='grid grid-cols-2 pt-4'>
                <div>
                  <h1 className='text-[16px] text-[#007580]'>Library Stool Chair</h1>
                  <p className='pt-2 text-[18px] font-semibold'>$ 20</p>
                </div>
                <div className='flex justify-end'>
                 <button><Image className='bg-[#029FAE] rounded-lg w-[44px] h-[44px]'
                  src={"/Images/cart-2.svg"}
                  alt={"Cart"}
                  width={18.5}
                  height={18.04}></Image></button>
                </div>
              </div>
            </div>
{/*2nd Image*/}             
            <div>
               <Image
               src={'/Images/Chair-2.svg'}
               alt={"Chair"}
               width={312}
               height={312}></Image>
               <div className='grid grid-cols-2 pt-4'>
                 <div>
                  <h1 className='text-[16px] text-[#272343]'>Library Stool Chair</h1>
                  <p className='pt-2 text-[18px] font-semibold'>$ 20</p>
                 </div>
                 <div className='flex justify-end'>
                  <button>
                  <Image className='bg-[#F0F2F3] rounded-lg w-[44px] h-[44px]'
                  src={"/Images/Buy 3.svg"}
                  alt={"Cart"}
                  width={16.96}
                  height={16.54}>
                  </Image>
                  </button>
                 </div>
                </div>
             </div>

{/*3rd Image */}      
           <div>
             <Image
             src={'/Images/Chair-3.svg'}
             alt={"Chair"}
             width={312}
             height={312}></Image>
              <div className='grid grid-cols-2 pt-4'>
                <div>
                  <h1 className='text-[16px] text-[#272343]'>Library Stool Chair</h1>
                  <p className='pt-2 text-[18px] font-semibold'>$ 20</p>
                </div>
                <div className='flex justify-end'>
                 <button><Image className='bg-[#F0F2F3] rounded-lg w-[44px] h-[44px]'
                  src={"/Images/Buy 3.svg"}
                  alt={"Cart"}
                  width={16.96}
                  height={16.54}></Image></button>
                </div>
              </div>
            </div>

{/*4th Image*/}         
            <div>
             <Image
             src={'/Images/Chair-4.svg'}
             alt={"Chair"}
             width={312}
             height={312}></Image>
              <div className='grid grid-cols-2 pt-4'>
                <div>
                  <h1 className='text-[16px] text-[#272343]'>Library Stool Chair</h1>
                  <p className='pt-2 text-[18px] font-semibold'>$ 20</p>
                </div>
                <div className='flex justify-end'>
                 <button><Image className='bg-[#F0F2F3] rounded-lg w-[44px] h-[44px]'
                  src={"/Images/Buy 3.svg"}
                  alt={"Cart"}
                  width={16.96}
                  height={16.54}></Image></button>
                </div>
              </div>
            </div>
          
        </div>
         
       </div>
    
{/*Top Categories*/}        
       <div className='container mx-auto w-[1321px] h-[508px] mt-44'>
          <h1 className='text-[32px] font-bold '>Top Categories</h1>
         <div className='grid grid-cols-3 gap-10 mt-12'>
         
         <div>
          <Image 
          src={'/Images/Image (1).svg'}
          alt={'Wing Chair'}
          width={424}
          height={424}
          ></Image>
         </div>
         
         <div>
          <Image 
          src={'Images/Image (2).svg'}
          alt={'Wooden Chair'}
          width={424}
          height={424}
          ></Image>
         </div>
         
         <div>
          <Image 
          src={'Images/Image (3).svg'}
          alt={'Desk Chair'}
          width={424}
          height={424}></Image>
         </div>
         
         </div>
     </div> 

{/*Explore New And Popular Styles*/}
      <div className='container mx-auto w-[1321px] h-[648px] mt-56 flex '>        
     
        <div className='w-1/2 flex items-center '>
      {/* <h1 className='rotate-[270deg] tracking-widest whitespace-nowrap'>EXPLORE NEW AND POPULAR STYLES</h1>*/}
        <Image 
        src={'/Images/item-category 1.svg'}
        alt={"Image"}
        width={648}
        height={648} 
        ></Image>
        </div>
      
        <div className='w-1/2 ml-8  '>
        <div className='grid grid-cols-2 gap-4 '>
          <Image
          src={'/Images/Chair(1).svg'}
          alt={'Image'}
          width={312}
          height={312}
          ></Image>
          
          <Image 
          src={'/Images/item-category-hover 1.svg'} 
          alt={'Image'}
          width={312}
          height={312}></Image>

        </div>

        <div className='grid grid-cols-2 gap-4 mt-6'>
          
            <Image
            src={"/Images/item-2.png"}
            alt={'Image'}
            width={312}
            height={312}
            ></Image>

           <Image 
          src={'/Images/item-category-hover 1.svg'} 
          alt={'Image'}
           width={312}
           height={312}
           ></Image>      

        </div>
        
        </div>
      </div>
{/*Our Products*/}

        <div className='container mx-auto w-[1320px] h-[919px] mt-56 mb-32'>
          <div className='flex justify-center items-start'>
            <h1 className='text-[32px] font-bold mt-4'>Our Products</h1>
          </div>
            {/*1st Row*/}      
          <div className='grid grid-cols-4 gap-6 w-[1320px] h-[377px] mt-12'>
          
            <div>
            <Image 
            src={'Images/Chair-1.svg'}
            alt={''}
            width={312}
            height={312}
            ></Image>
            <div className='grid grid-cols-2 pt-4'>
                <div>
                  <h1 className='text-[16px] text-[#007580]'>Library Stool Chair</h1>
                  <p className='pt-2 text-[18px] font-semibold'>$ 20</p>
                </div>
                <div className='flex justify-end'>
                 <button><Image className='bg-[#029FAE] rounded-lg w-[44px] h-[44px]'
                  src={"/Images/cart-2.svg"}
                  alt={"Cart"}
                  width={16.96}
                  height={16.54}></Image></button>
                </div>
              </div>
            </div>

            <div>         
            <Image
             src={'/Images/Chair-2.svg'}
             alt={"Chair"}
             width={312}
             height={312}>
             </Image>   
             <div className='grid grid-cols-2 pt-4'>
                <div>
                  <h1 className='text-[16px] text-[#272343]'>Library Stool Chair</h1>
                  <p className='pt-2 text-[18px] font-semibold'>$ 20</p>
                </div>
                <div className='flex justify-end'>
                 <button><Image className='bg-[#F0F2F3] rounded-lg w-[44px] h-[44px]'
                  src={"/Images/Buy 3.svg"}
                  alt={"Cart"}
                  width={16.96}
                  height={16.54}></Image></button>
                </div>
               </div>
            </div>
          
            <div>
             <Image
             src={'/Images/Chair-3.svg'}
             alt={"Chair"}
             width={312}
             height={312}
             ></Image>
             <div className='grid grid-cols-2 pt-4'>
                <div>
                  <h1 className='text-[16px] text-[#272343]'>Library Stool Chair</h1>
                  <p className='pt-2 text-[18px] font-semibold'>$ 20</p>
                </div>
                <div className='flex justify-end'>
                 <button><Image className='bg-[#F0F2F3] rounded-lg w-[44px] h-[44px]'
                  src={"/Images/Buy 3.svg"}
                  alt={"Cart"}
                  width={16.96}
                  height={16.54}></Image></button>
                </div>
               </div>
            </div>
          
            <div>
             <Image
             src={'/Images/Chair-4.svg'}
             alt={"Chair"}
             width={312}
             height={312}
             ></Image>
             <div className='grid grid-cols-2 pt-4'>
                <div>
                  <h1 className='text-[16px] text-[#272343]'>Library Stool Chair</h1>
                  <p className='pt-2 text-[18px] font-semibold'>$ 20</p>
                </div>
                <div className='flex justify-end'>
                 <button><Image className='bg-[#F0F2F3] rounded-lg w-[44px] h-[44px]'
                  src={"/Images/Buy 3.svg"}
                  alt={"Cart"}
                  width={16.96}
                  height={16.54}></Image></button>
                </div>
               </div>
            </div>
          
           </div>
           {/*2nd Row*/}
           <div className='grid grid-cols-4 gap-6 w-[1320px] h-[377px] mt-12'>
           {/*1st Image */} 
            <div>
             <Image
             src={'/Images/Image (1).svg'}
             alt={"Chair"}
             width={312}
             height={312}
             ></Image>
             <div className='grid grid-cols-2 pt-4'>
                <div>
                  <h1 className='text-[16px] text-[#272343]'>Library Stool Chair</h1>
                  <p className='pt-2 text-[18px] font-semibold'>$ 20</p>
                </div>
                <div className='flex justify-end'>
                 <button><Image className='bg-[#F0F2F3] rounded-lg w-[44px] h-[44px]'
                  src={"/Images/Buy 3.svg"}
                  alt={"Cart"}
                  width={16.96}
                  height={16.54}></Image></button>
                </div>
               </div>
            </div>
             
            <div>
            <Image
            src={'/Images/item-2.png'}
            alt={"Chair"}
            width={312}
            height={312} 
            ></Image>
            <div className='grid grid-cols-2 pt-4'>
                <div>
                  <h1 className='text-[16px] text-[#272343]'>Library Stool Chair</h1>
                  <p className='pt-2 text-[18px] font-semibold'>$ 20</p>
                </div>
                <div className='flex justify-end'>
                 <button><Image className='bg-[#F0F2F3] rounded-lg w-[44px] h-[44px]'
                  src={"/Images/Buy 3.svg"}
                  alt={"Cart"}
                  width={16.96}
                  height={16.54}></Image></button>
                </div>
               </div>
            </div>
 
            <div>
            <Image
            src={'/Images/Chair-5.svg'}
            alt={"Chair"}
            width={312}
            height={312}
            ></Image>
            <div className='grid grid-cols-2 pt-4'>
                <div>
                  <h1 className='text-[16px] text-[#272343]'>Library Stool Chair</h1>
                  <p className='pt-2 text-[18px] font-semibold'>$ 20</p>
                </div>
                <div className='flex justify-end'>
                 <button><Image className='bg-[#F0F2F3] rounded-lg w-[44px] h-[44px]'
                  src={"/Images/Buy 3.svg"}
                  alt={"Cart"}
                  width={16.96}
                  height={16.54}></Image></button>
                </div>
              </div>
            </div>

            <div>
            <Image
            src={'/Images/Chair-1.svg'}
            alt={"Chair"}
            width={312}
            height={312}
            ></Image>
            <div className='grid grid-cols-2 pt-4'>
                <div>
                  <h1 className='text-[16px] text-[#272343]'>Library Stool Chair</h1>
                  <p className='pt-2 text-[18px] font-semibold'>$ 20</p>
                </div>
                <div className='flex justify-end'>
                 <button><Image className='bg-[#F0F2F3] rounded-lg w-[44px] h-[44px]'
                  src={"/Images/Buy 3.svg"}
                  alt={"Cart"}
                  width={16.96}
                  height={16.54}></Image></button>
                </div>
               </div>
            </div>
 

           </div>


        </div>

    </div>
  )
}

export default Hero
