import React from 'react'
import logo from "../assets/logo.png"
import LineIcon from './LineIcon'
import image from "../assets/ImagePlaceholder.png"
import { FaGithub , FaYoutube , FaTwitter, FaInstagram , FaRegCopyright, FaUser , FaLock } from "react-icons/fa";
import { MdMail , MdOutlineUnsubscribe } from "react-icons/md";
import { IoLockClosedSharp } from "react-icons/io5";





function Home() {
  return (
    <div className='font-work-sans'>
        {/* navbar */}
        <section>
            <nav className='bg-[#2B2B2B] '>
                <div className='flex items-center justify-between p-4'>

                <div className='w-[182.56px] h-[24px] '>
                <img src={logo} />
                </div>
                <div className='w-[24px] h-[24px]'>
                <LineIcon />
                </div>
                </div>
            </nav>
        </section>

        {/* herosection */}
       <div className='md:flex bg-[#2b2b2b]'>
        <section className=' h-[232px] md:w-[397px] md:h-full lg:w-[610px] lg:h-[691px]'>
    <div className='w-full'>

          <img src={image} alt="Placeholder Image" className='w-full' />
    </div>

        </section>
        
        <section className='bg-[#2B2B2B] mt-96 md:mt-6 lg:mt-8 lg:px-16  '>
            <div className='gap-8'>
            <h1 className='text-white text-center text-3xl  font-semibold md:px-10 md:text-[38px] lg:text-[52px]'>Create Account</h1>
            <p className='text-white text-center mt-4 md:text-[16px] lg:text-[22px]'>Welcome! enter your details and start<br></br> creating, collecting and selling NFTs.</p>
            <div className='p-8'>
            <div className='relative border rounded-2xl md:mt-5 text-center'>
            <FaUser className='absolute left-4 top-3 text-gray-400' />
              <input
                type='text'
                placeholder='Username'
                className='w-full p-2 pl-10 rounded-2xl outline-none'
              />
              <br />
            </div>

            <div className='relative mt-4 border rounded-2xl  text-center'>
            <MdMail className='absolute left-4 top-3 text-gray-400' />
              <input
                type='email'
                placeholder='Email Address'
                className='w-full p-2 pl-10 rounded-2xl outline-none'
              />
              <br />
            </div>

            <div className='relative mt-4 border rounded-2xl text-center'>
            <FaLock className='absolute left-4 top-3 text-gray-400' />
              <input
                type='password'
                placeholder='Password'
                className='w-full p-2 pl-10 rounded-2xl outline-none'
              />
              <br />
            </div>

            <div className='relative mt-4 border rounded-2xl text-center'>
            <IoLockClosedSharp className='absolute left-4 top-3 text-gray-400' />
              <input
                type='password'
                placeholder='Confirm Password'
                className='w-full p-2 pl-10 rounded-2xl outline-none'
              />
            </div>
            <div className='mt-7 text-xl rounded-2xl text-center bg-[#A259FF] font-work-sans text-white p-2'>
                <button>Create Account</button>
            </div>
          </div>
            </div>

        </section>
        </div>

        {/* anothrsection */}
        <section className=''>
            <div className='bg-[#3B3B3B] px-[44px] lg:flex lg:gap-40 lg:py-10   '>
             <div>

            <div className='top-[8.2px] w-[199.41px] h-[19.8px] py-[8.6px]'>
                <img src={logo} className='mt-8' />
            </div>
            <div className='text-[#CCCCCC]'>

            <p className=' text-sm mt-16 font-work-sans'>NFT marketplace UI created with Anima for Figma.</p>
            <p className='text-sm mt-6'>Join our community</p>
            <div className='flex mt-6 gap-[10px]'>
                <FaGithub />
                <FaYoutube />
                <FaTwitter />
                <FaInstagram />
            </div>
             </div>
            </div>

            <div>

            <div className='mt-8'>
                <h1 className='mt-6 text-[22px] text-[#FFFFFF]'>Explore</h1>
                <h1 className='mt-6 text-[#CCCCCC]'>Marketplace</h1>
                <h1 className='mt-6 text-[#CCCCCC]'>Rankings</h1>
                <h1 className='mt-6 text-[#CCCCCC]'>Connect a wallet</h1>
            </div>
             </div>
                <div>

                <h1 className='mt-8 text-[#FFFFFF] text-[22px] font-monospace'>Join our weekly digest</h1>
                <p className='mt-6 text-[#CCCCCC]'>Get exclusive promotions & updates straight to your inbox.</p>
                
                <div className='mt-5 border rounded-2xl text-center'>
              <input
                type='email'
                placeholder='Enter Your Email Address'
                className='w-full p-2 rounded-2xl outline-none'
                />
              <br />
            </div>

                <div className='relative mt-4 text-xl rounded-2xl text-center  bg-[#A259FF] font-work-sans text-white p-2'>
                <MdOutlineUnsubscribe className='absolute left-32 md:left-64 top-3 ' />
                <button>Subscribe</button>
               
            </div>
                </div>
            
            </div>
        </section>
        <footer className="bg-[#3B3B3B] text-[#CCCCCC] py-12 px-[44px] ">
            <div>
            <hr></hr>
            </div>
            <div className='flex items-center mt-5 gap-[20px]'>

            <FaRegCopyright  />
            <p>NFT Market. Use this template freely.</p>
            </div>

        </footer>
    </div>
  )
}

export default Home