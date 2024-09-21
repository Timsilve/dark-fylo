import React from 'react'
import logo from '/Users/script/Desktop/Fylo/src/assets/images/logo.svg'
import phone from '/Users/script/Desktop/Fylo/src/assets/images/icon-phone.svg'
import email from '/Users/script/Desktop/Fylo/src/assets/images/icon-email.svg'
import locate from '/Users/script/Desktop/Fylo/src/assets/images/icon-location.svg'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Email = () => {
    return (
        <div className=' bg-[#0b1523] pt-40 pb-[3rem] text-white '>

            <div className='mx-auto px-20 py-8  '>
                <img src={logo} alt="" className='py-5' />
                <div className=' flex justify-between   mx-auto w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-5 gap-7  mx-auto '>
                        <div className='flex items-start'>  <img src={locate} alt="" className=' mr-4' />
                            <p className='text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua</p></div>


                        <ul >
                            <li className='flex py-4 gap-4'><img src={phone} alt="" />+1-543-123-4567</li>
                            <li className='flex gap-2'> <img src={email} alt="" /> example@fylo.com
                            </li>
                        </ul>
                        <ul className='grid grid-cols-1 justify-start'>
                            <li>About us</li>
                            <li>Jobs</li>
                            <li>Press</li>
                            <li>Blog</li>
                        </ul>
                        <ul>
                            <li>Contact us</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                        <ul className='flex flex-row p-6 gap-4'>
                            <li><FaFacebook size={30} /></li>
                            <li><FaTwitter size={30} /></li>
                            <li><FaInstagram size={30} /></li>
                        </ul>
                    </div></div>

            </div>

        </div >

    )
}

export default Email