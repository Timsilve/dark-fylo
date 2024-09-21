import React from 'react'
import hero from '/Users/script/Desktop/Fylo/src/assets/images/illustration-intro.png'
import curve from '/Users/script/Desktop/Fylo/src/assets/images/bg-curvy-desktop.svg'
import curve2 from '/Users/script/Desktop/Fylo/src/assets/images/bg-curvy-mobile.svg'

const Hero = () => {
    return (
        <div className='relative'>  <div className='flex flex-col items-center justify-center  m-auto p-4 '>
            <img src={hero} alt="" />
            <div className='md:w-[600px] text-center text-white relative z-40'><h1 className='text-white text-3xl font-bold text-center p-4 '> All your files in one secure location, accessible anywhere.</h1>
                <p className='text-xl text-center p-4'>Fylo stores all your most important files in one secure location. Access them wherever
                    you need, share and collaborate with friends family, and co-workers.
                </p>
                <button className='bg-[#339ecc] px-16 py-2 rounded-full'>Get Started</button>
            </div>

        </div >

            <img src={curve} alt="" className='w-full absolute top-[600px] hidden sm:block' />
            <img src={curve2} alt="" className='w-full absolute bottom-0 flex sm:hidden ' />
        </div>

    )
}

export default Hero





