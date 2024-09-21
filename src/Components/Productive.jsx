import React from 'react'
import illustration from '/Users/script/Desktop/Fylo/src/assets/images/illustration-stay-productive.png'
import arrow from '/Users/script/Desktop/Fylo/src/assets/images/icon-arrow.svg'

const Productive = () => {
    return (
        <div className='bg-[#181f2a] text-white py-7 flex  flex-col md:flex-row items-center px-[4rem] gap-16 mx-auto'>
            <div>
                <img src={illustration} alt="" />
            </div>
            <div className='md:ml-16'>
                <h1 className='  md:text-2xl py-4  font-bold md:w-[30%]'>Stay productive, wherever you are
                </h1>
                <p className='py-4 md:text-2
                xl'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                    storage needs.</p>
                <p className='md:text-xl'>Securely share files and folders with friends, family and colleagues for live collaboration. No email
                    attachments required.</p>
                <div className='flex items-center underline underline-offset-8 underline-[#65e2d9]'>
                    <a href="/" className='text-[#65e2d9] px-1'>See how Fylo works</a>
                    <img src={arrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Productive