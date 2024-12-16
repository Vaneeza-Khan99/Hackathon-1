import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full border-t-2 border-[#E1E3E5]'>

       <div className='container w-[1330px] h-[343px] mx-auto  flex items-center'>
        <div className='grid grid-cols-4 '>
            <div>
                <Image 
                src={"/Images/Logo.svg"}
                alt={'Logo'}
                width={168}
                height={40}
                ></Image>
                
                <p className='text-[16px] text-[#272343] opacity-[60%] pt-8 w-[320px] h-[100px]'>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                Cras egestas purus </p>

            <div className='grid grid-cols-5 gap-2 w-[206px] h-[38px] pt-6'>
                <Image 
                src={"/Images/Facebook.svg"}
                alt={'Logo'}
                width={38}
                height={38}
                ></Image>

                <Image 
                src={"/Images/Twitter.svg"}
                alt={'Logo'}
                width={38}
                height={38}
                ></Image>

                <Image 
                src={"/Images/Instagram.svg"}
                alt={'Logo'}
                width={38}
                height={38}
                ></Image>
            
                <Image 
                src={"/Images/Pintrest.svg"}
                alt={'Logo'}
                width={38}
                height={38}
                ></Image>
            
                <Image 
                src={"/Images/Youtube.svg"}
                alt={'Logo'}
                width={38}
                height={38}
                ></Image>
            </div>
            </div>
            
            <div className='container w-[105px] h-[203px] ml-20'>
               <h1 className='text-[14px] text-[#9A9CAA]'>CATEGORY</h1>
               <p className='text-[16px] pt-4'>Sofa</p>
               <p className='text-[16px] pt-1'>Armchair</p>
               <p className='text-[16px] pt-1'>Wing Chair</p>
               <p className='text-[#007580] pt-1 underline underline-offset-1'>Desk Chair</p>
               <p className='text-[16px] pt-1'>Wooden Chair</p>
               <p className='text-[16px] pt-1'>Park Bench</p>
               
            </div>
            <div className='container w-[156px] h-[143px]'>
                <h1 className='text-[14px] text-[#9A9CAA]'>SUPPORT</h1>
                <p className='text-[16px] pt-4'>Help & Support</p>
                <p className='text-[16px] pt-1'>Tearms & Conditions</p>
                <p className='text-[16px] pt-1'>Privacy Policy</p> 
                <p className='text-[16px] pt-1'>Help</p>
            </div>
            <div className='container w-[454px] h-[142px]'>
                <h1 className='text-[14px] text-[#9A9CAA]'>Newsletter</h1>
                <div className='space-x-3 pt-3'>
                <input type="email" placeholder='Your Email' className='w-[285px] h-[46px] border-2 border-[#E1E3E5] rounded-lg pl-4'/>
                <button className='bg-[#029FAE] text-white w-[127px] h-[46px] rounded-lg hover:underline '>Subscribe </button>
                </div>
                <p className='text-[#9A9CAA] text-[15px] pt-3 w-[400px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
            </div>
        </div>
       </div>
         <div className='border-t-2 border-[#E1E3E5]'>
          <div className='w-[1621px] h-[75px] mx-auto flex justify-between items-center'>
            <h1 className='text-[14px] ml-32 text-[#9A9CAA]'>@ 2021 - Blogy - Designed & Develop by <span className='text-black text-[14px]'>Zakirsoft</span> </h1>
            <Image className='grayscale'
            src={"/Images/FooterLogos.svg"}
            alt={"Logos"}
            width={227}
            height={27}></Image>
          </div>
         </div>
    </div>
  )
}

export default Footer
