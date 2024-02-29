import React from 'react'
import { HiBars3 } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
function TopBar() {
  return (
    <section className='w-100 flex justify-between pl-3 pr-3 pt-4 pb-4 bg-slate-100 font-Montserrat text-slate-600 text-2xl border-[1px] border-slate-400'>
        <div><a href="/"><span><HiBars3  /></span> </a> </div>
        <div> <a href="/"><span><FaRegUser /> </span></a></div>
    </section>
  )
}

export default TopBar