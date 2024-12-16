import React from 'react'
import Image from 'next/image'
import Footer from '@/Components/Footer'

const page = () => {
  return (
    <div>

      <div className='container mx-auto w-[1440px] h-[1144px]'>
         <h1 className='text-center text-[36px] font-semibold pt-20'>Get In Touch With Us</h1>
         <p className='text-center text-[16px] text-[#9F9F9F] pt-2 pb-2 w-[610px] mx-auto'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      
       <div className='container mx-auto w-[1058px] h-[923px] flex items-start gap-6'>
          {/*Left Side Div*/}
        <div className='w-1/2 container w-[393px] h-[537px] mt-20'>
          <div className='flex items-center ml-6'>
            <Image
            src={'/Images/Location.svg'}
            alt={'Image'}
            width={22}
            height={27.59}
            ></Image>
            <div className='pl-6 pt-10'>
                <h1 className='text-[24px] font-medium' >Address</h1>
                <p className='text-[16px] w-[202px] h-[57px]'>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
        
          <div className='flex items-center ml-6 mt-4'>
            <Image
            src={'/Images/Phone.svg'}
            alt={'Image'}
            width={30}
            height={30}
            ></Image>
            <div className='pl-6 pt-10'>
                <h1 className='text-[24px] font-medium'>Phone</h1>
                <p className='text-[16px] w-[202px] h-[57px]'>Mobile: +(84) 546-6789
                Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className='flex items-center ml-6 mt-4'>
            <Image
            src={'/Images/Clock.svg'}
            alt={'Image'}
            width={23}
            height={23}
            ></Image>
            <div className='pl-6 pt-10'>
                <h1 className='text-[24px] font-medium' >Working Time</h1>
                <p className='text-[16px] w-[202px] h-[76px]'>Monday-Friday: 9:00 - 22: Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>

        </div>
        
          {/*Right Side Div*/}
        <div className='w-1/2 container w-[635px] h-[923px]'>
        <div className='mt-32 m-12'>
            <h1 className='text-[16px] font-medium pb-4'>Your Name</h1>
            <input type="text" placeholder='Abc' className='rounded-lg pl-6 w-[528.75px] h-[75px] border-[1px] border-[#9F9F9F]'/>
        
            <h1 className='text-[16px] font-medium pt-8 pb-4'>Email Address</h1>
            <input type="text" placeholder='Abc@def.com' className='rounded-lg pl-6 w-[528.75px] h-[75px] border-[1px] border-[#9F9F9F]'/>

            <h1 className='text-[16px] font-medium pt-8 pb-4'>Subject</h1>
            <input type="text" placeholder='This is optional' className='rounded-lg pl-6 w-[528.75px] h-[75px] border-[1px] border-[#9F9F9F]'/>

            <h1 className='text-[16px] font-medium pt-8 pb-4'>Message</h1>
            <input type="text" placeholder='Hi! i’d like to ask about' className='rounded-lg pl-6 w-[527px] h-[120px] border-[1px] border-[#9F9F9F]'/>
            <div className='pt-12'>
            <button className='w-[237px] h-[55px] text-white text-[16px] rounded-lg bg-[#029FAE] border-[1px] border-[#B88E2F]'>Submit</button>       
            </div> 
        </div>
        </div>
       </div>
       

      </div>

        <div className='container mx-auto bg-[#F4F4F4] w-[1320px] h-[270px] flex items-center'>
            <div className='mx-auto w-[1188px] h-[70px]'>
                <div className='grid grid-cols-3 '>
                    <div className='flex '>
                        <Image
                        src={'/Images/Trophy.svg'}
                        alt={'Image'}
                        width={60}
                        height={60}
                        ></Image>
                          <div className='pl-4'>
                            <h1 className='text-[25px] font-semibold'>High Quality</h1>
                            <h2 className='text-[20px] text-[#898989]'>crafted from top materials</h2>
                          </div>
                    </div>
                
                    <div className='flex justify-center'>
                        <Image
                        src={'/Images/Guarantee.svg'}
                        alt={'Image'}
                        width={60}
                        height={60}
                        ></Image>
                          <div className='pl-4'>
                            <h1 className='text-[25px] font-semibold'>Warranty Protection</h1>
                            <h2 className='text-[20px] text-[#898989]'>Over 2 years</h2>
                          </div>
                    </div>
                
                    <div className='flex justify-center'>
                        <Image
                        src={'/Images/customer-support.svg'}
                        alt={'Image'}
                        width={60}
                        height={60}
                        ></Image>
                          <div className='pl-4'>
                            <h1 className='text-[25px] font-semibold'>24/ 7 Support </h1>
                            <h2 className='text-[20px] text-[#898989]'>Dedicated support</h2>
                          </div>
                    </div>
                </div>
            </div>
        </div>

      <Footer></Footer>     
    </div>
  )
}

export default page
