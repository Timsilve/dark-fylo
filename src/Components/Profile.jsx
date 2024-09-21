import React from 'react'
import { data } from '../data/data'

const Profile = () => {
    return (
        <div className='py-16 text-white bg-[#181f2a] pb-32'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto px-8 sm:px-8 md:px-[10rem] mb-[7rem]'>
                {data.map((items, id) => {
                    return <div key={id} className='bg-[#1c2431]  p-6 rounded-xl'><p>{items.paragraph}</p>
                        <div className='flex items-center gap-3 py-4 '>
                            <img src={items.img} alt="" className='w-9 rounded-full' />
                            <div>
                                <p>{items.name}</p>
                                <p>{items.position}</p>
                            </div>
                        </div></div>

                })}
            </div>
        </div >

    )
}

export default Profile