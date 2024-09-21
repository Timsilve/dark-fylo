import React from 'react'
import laptop from '/Users/script/Desktop/Fylo/src/assets/images/icon-access-anywhere.svg'
import Security from '/Users/script/Desktop/Fylo/src/assets/images/icon-security.svg'
import Collaboration from '/Users/script/Desktop/Fylo/src/assets/images/icon-collaboration.svg'
import Store from '/Users/script/Desktop/Fylo/src/assets/images/icon-any-file.svg'
// import curve from '/Users/script/Desktop/travel-Agency/src/assets/images/bg-curvy-desktop.svg'

const Cards = () => {
    return (
        <div className=' mx-auto  md:py-[1rem] bg-[#181f2a] sm:mt-[11rem] relative md:pb-[2rem] py-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center  md:w-[80%] mx-auto gap-6 text-white text-center md:p-0 px-10 md:-mt-[3rem]'>
                <div className='justify-center items-center flex flex-col py-4'>

                    <img src={laptop} alt="" className='py-4' />
                    <div >
                        <h1 className='font-bold text-3xl py-2  '> Access your files, anywhere</h1>
                        <p className='text-2xl'> The ability to use a smartphone, tablet, or computer to access your account means your
                            files follow you everywhere.
                        </p>
                    </div>
                </div>
                <div className='justify-center items-center flex flex-col py-4'>
                    <img src={Security} alt="" className='py-4' />
                    <div>
                        <h1 className='font-bold text-3xl py-2 '> Security you can trust</h1>
                        <p className='text-2xl'> 2-factor authentication and user-controlled encryption are just a couple of the security
                            features we allow to help secure your files.
                        </p>
                    </div>
                </div>
                <div className='justify-center items-center flex flex-col py-4'>
                    <img src={Collaboration} alt="" className='py-4' />
                    <div>
                        <h1 className='font-bold text-3xl py-2 '> Real-time collaboration</h1>
                        <p className='text-2xl'> Securely share files and folders with friends, family and colleagues for live collaboration.
                            No email attachments required.
                        </p>
                    </div>
                </div>
                <div className='justify-center items-center flex flex-col py-4'>
                    <img src={Store} alt="" className='py-4' />
                    <div>
                        <h1 className='font-bold text-3xl py-2 '>  Store any type of file</h1>
                        <p className='text-2xl'>   Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
                            file types to be securely stored and shared. </p>
                    </div>
                </div >
            </div>

        </div >
    )
}

export default Cards