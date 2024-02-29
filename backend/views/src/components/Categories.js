import React from 'react'
import CategoryTable from './CategoryTable'

function Categories() {
  return (
    <section className=' border-[1px] border-slate-400 rounded-md h-[77vh] shadow-sm shadow-slate-400 mt-2'>

      <div className=' border-t-[1px] border-slate-400 mt-5 pl-3 pt-3'>
        <div><button className=' w-[100px] bg-green-500 h-[40px] rounded-md text-white'>Add New</button></div>
        <div className='pt-5 pr-5 pb-5 '>
          <CategoryTable/>
        </div>
        <div className='flex items-center justify-start w-100 font-Montserrat w-100 '>
          <div className='w-1/2'>
            <p>showing 1 to 5 Entries</p>
          </div>
          <div className='flex justify-start w-1/2'>
            <button className='w-[100px] border-[1px] border-slate-400 p-2 h-[40px] hover:bg-blue-500 active:bg-blue-500'>Previous</button>
            <span className='bg-blue-900 text-white pt-2 pb-2 pl-4 pr-4 font-bold '>1</span>
            <button className='w-[100px] border-[1px] border-slate-400 p-2 h-[40px]  hover:bg-blue-500 active:bg-blue-500'>Next</button>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default Categories