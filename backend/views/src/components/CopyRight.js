import React from 'react'
import { FaCopyright } from "react-icons/fa";
function CopyRight() {
    return (<section className='w-100 flex justify-between p-3 bg-slate-100 font-Montserrat border-[1px] border-slate-400' >
        <div className=''>
            <p className='flex items-center text-slate-600 font-medium'>Copyright <span className='pl-1 pr-1'> <FaCopyright /></span>2023-2024 <span className=" text-blue-500 pl-1 pr-1"> Manipur.</span> <span className=' font-light'>All rights reserved.</span></p>
        </div>
        <div className='text-slate-600'><p><span className='font-medium'>Version</span> 3.2.0</p></div>
    </section>

    )
}

export default CopyRight