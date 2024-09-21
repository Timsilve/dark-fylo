import React, { useState } from 'react'

const E = () => {
    const [text, setText] = useState('')

    return (

        <div className='flex justify-center '>
            <div className='text-white p-10 bg-[#1c2431] w-[400px] md:w-[600px] mx-auto  border-white z-50 absolute  top-[220rem] md:top-[152rem] text-center rounded-xl'>
                <h1 className='text-2xl font-bold py-2'>Get early access today</h1>
                <p className='text-[14px] py-6'>  It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                    questions, our support team would be happy to help you.
                </p>
                <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:w-[80%] w-[90%] mx-auto '>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder='Enter Email' className=' text-black md:w-[250px] px-4 py-2 rounded-full focus:outline-none w-full' />

                    <button className='text-[14px] w-full bg-[#339ecc] p-2 rounded-full'>Get Started For Free</button>
                </div>

            </div>

        </div>


    )
}

export default E