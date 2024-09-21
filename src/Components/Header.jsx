import React from 'react'
import logo from '../assets/images/logo.svg'
// import curve from '/Users/script/Desktop/travel-Agency/src/assets/images/bg-curvy-desktop.svg'

const Header = () => {
    return (
        <>    <div className='flex justify-between items-center md:px-16 md:py-8 px-4 py-8'>
            <img src={logo} alt="" className='h-[25px]' />
            <ul className='flex gap-7 text-[#fff]'>
                <li ><a href="/" className='hover:underline hover:underline-offset-[.5rem] duration-150'>Features</a></li>
                <li ><a href="/" className='hover:underline hover:underline-offset-[.5rem] duration-150'>Team</a></li>
                <li ><a href="/" className='hover:underline hover:underline-offset-[.5rem] duration-150'>Sign in</a></li>
            </ul>

        </div>
            {/* <img src={curve} alt="" /> */}
        </>

    )
}

export default Header