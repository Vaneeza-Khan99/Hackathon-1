import React from 'react'
import Image from 'next/image'
import Footer from '@/Components/Footer'


const page = () => {
  return (
    <div>
      <div className='container mx-auto w-[1320px] h-[731px] mb-32'>
        <h1 className='text-center text-[48px] font-bold'>Questions Looks Here</h1>
        <p className='text-center text-[16px] text-[#4F4F4F] pt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
       <div className='container w-[1320px] h-[558px] mt-10'>
          {/*1st Row*/} 
          <div className='grid grid-cols-2 gap-6'>
            <div className='m-6 bg-[#F7F7F7] h-[170px]'>
                <div className='flex justify-between items-center m-4'>
                <h1 className='text-[18px] font-bold'>What types of chairs do you offer?</h1>
                <Image
                src={'/Images/Plus.svg'}
                alt={'Logo'}
                width={24}
                height={24}
                ></Image>
                </div>
               <p className='text-[16px] text-[#4F4F4F] m-4 pt-2 w-[550px] h-[72px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
            
            <div className='m-6 bg-[#F7F7F7] h-[170px]'>
                <div className='flex justify-between items-center m-4'>
                <h1 className='text-[18px] font-bold'>How can we get in touch with you?</h1>
                <Image
                src={'/Images/Plus.svg'}
                alt={'Logo'}
                width={24}
                height={24}
                ></Image>
                </div>
               <p className='text-[16px] text-[#4F4F4F] m-4 pt-2 w-[550px] h-[72px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
         </div>
           {/*2nd Row*/}
          <div className='grid grid-cols-2 gap-6 '>
          <div className='mx-6 bg-[#F7F7F7]  h-[170px]'>
                <div className='flex justify-between items-center m-4'>
                <h1 className='text-[18px] font-bold'>Do your chairs come with a warranty?</h1>
                <Image
                src={'/Images/Plus.svg'}
                alt={'Logo'}
                width={24}
                height={24}
                ></Image>
                </div>
               <p className='text-[16px] text-[#4F4F4F] m-4 pt-6 w-[550px] h-[72px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
            
            <div className='mx-6 bg-[#F7F7F7] h-[170px]'> 
                <div className='flex justify-between items-center m-4'>
                <h1 className='text-[18px] font-bold'>What will be delivered? And When?</h1>
                <Image
                src={'/Images/Plus.svg'}
                alt={'Logo'}
                width={24}
                height={24}
                ></Image>
                </div>
               <p className='text-[16px] text-[#4F4F4F] pt-2 m-4 w-[550px] h-[72px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
          </div>
            {/*3rd Row*/}
          <div className='grid grid-cols-2 gap-6'>
          <div className='m-6 bg-[#F7F7F7] h-[170px]'>
                <div className='flex justify-between items-center m-4'>
                <h1 className='text-[18px] font-bold'>Can I try a chair before purchasing?</h1>
                <Image
                src={'/Images/Plus.svg'}
                alt={'Logo'}
                width={24}
                height={24}
                ></Image>
                </div>
               <p className='text-[16px] text-[#4F4F4F] pt-2 m-4 w-[550px] h-[72px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
            
            <div className='m-6 bg-[#F7F7F7] h-[170px]'>
                <div className='flex justify-between items-center m-4'>
                <h1 className='text-[18px] font-bold'>How do I clean and maintain my Comforty chair?</h1>
                <Image
                src={'/Images/Plus.svg'}
                alt={'Logo'}
                width={24}
                height={24}
                ></Image>
                </div>
               <p className='text-[16px] text-[#4F4F4F] pt-2 m-4 w-[550px] h-[72px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
          </div>


       </div>

      </div>
      


      <Footer></Footer>
    </div>
  )
}



export default page
