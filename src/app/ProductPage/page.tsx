import React from 'react'
import Image from 'next/image'
import Footer from '@/Components/Footer'

const page = () => {
  return (
    <div>
      <div className='container mx-auto w-[1321px] h-[461px] mt-20'>
         <h1 className='font-bold text-[32px] '>All Products</h1>
         {/*1st Row*/}
         <div className='grid grid-cols-4 gap-6 w-[1320px] h-[377px] mt-8'>
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
                  width={10}
                  height={10}></Image></button>
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
        </div>
         {/*2nd Row*/}
          <div className='container mx-auto w-[1321px] h-[461px] pt-8'>
          <div className='grid grid-cols-4 gap-6 w-[1320px] h-[377px] mt-12'>
           {/*1st Image */} 
            <div>
             <Image
             src={'/Images/Image (2).svg'}
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
                 <button>
                 <Image className='bg-[#029FAE] rounded-lg w-[44px] h-[44px]'
                  src={"/Images/cart-2.svg"}
                  alt={"Cart"}
                  width={10}
                  height={10}></Image>
                  </button>
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
          
          {/*3rd Row*/}
           
          <div className='container mx-auto w-[1321px] h-[461px] pt-8'>
          <div className='grid grid-cols-4 gap-6 w-[1320px] h-[377px] mt-12'>
            <div>
            <Image 
            src={'Images/Image (1).svg'}
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
                  width={10}
                  height={10}></Image></button>
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
             src={'/Images/Image (3).svg'}
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

         {/*Subscribe To Our Newsletter */}
        <div className='bg-[#1E28320D]'>
         <div className='container w-[1521px] h-[754px] mx-auto mt-52'>
           <div className='container mt-10 mx-auto w-[760px] h-[165px]'>
            <h1 className='text-[50px] font-medium text-center pt-16'>Or subscribe to the newsletter</h1>
            <div className='space-x-4 mt-20'>
            <input type="text" placeholder='Email Address...' className='border-b-2 border-black w-[643px] h-[32px] pl-6 '/>
            <button className='border-b-2 border-black w-[91px] h-[32px] text-[16px]'>SUBMIT</button>
           </div>
           </div>
            
            <div className='container mx-auto w-[1324px] h-[319px] mt-44'>
                <h1 className='text-[50px] text-center font-medium '>Follow products and discounts on Instagram</h1>
               <div className='grid grid-cols-6 gap-8 mt-10 '>
                <div>
                    <Image 
                     src={'/Images/Image (2).svg'}
                     alt={"Chair"}
                     width={186}
                     height={186}
                     ></Image>
                </div>
                <div>
                    <Image 
                     src={'/Images/Image (1).svg'}
                     alt={"Chair"}
                     width={186}
                     height={186}
                     ></Image>
                </div>
                <div>
                    <Image 
                     src={'/Images/Chair-2.svg'}
                     alt={"Chair"}
                     width={186}
                     height={186}
                     ></Image>
                </div>
                <div>
                    <Image 
                     src={'/Images/Chair-1.svg'}
                     alt={"Chair"}
                     width={186}
                     height={186}
                     ></Image>
                </div>
                <div>
                    <Image 
                     src={'/Images/Chair-3.svg'}
                     alt={"Chair"}
                     width={186}
                     height={186}
                     ></Image>
                </div>
                <div>
                    <Image 
                     src={'/Images/Image (3).svg'}
                     alt={"Chair"}
                     width={186}
                     height={186}
                     ></Image></div>
               </div>
            </div>
         </div>
        </div>
          
     <Footer></Footer>
    </div>

  )
}

export default page
