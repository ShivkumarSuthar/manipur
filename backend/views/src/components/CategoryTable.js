import React from 'react'
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin4Line } from "react-icons/ri";
function CategoryTable() {
  return (
    

        <table className='w-full font-Montserrat'>
            <thead>
                <tr className='uppercase text-[12px] pt-2 pb-2'>
                    <th className=' w-[7%] p-2 text-start'>Sr. No.</th>
                    <th className='w-[200px] p-2 text-start'>Category Name</th>
                    <th className='w-[25%] p-2 text-start'>Description</th>
                    <th className='w-[15%] p-2 text-start' >status</th>
                    <th className='w-[15%] p-2 text-start'>Date/Time</th>
                    <th className='w-[13%] p-2 text-start'>Action</th>
                </tr>
            </thead>
            <tbody className=' text-[12px]'>
                <tr className='category-chart'>
                    <td className=' p-2 text-start'>1</td>
                    <td className=' p-2 text-start'>shsdfgfdfgfdssdfgfdsdfgfdsccvbgfgbdvsasdfgxczvcbnhgfbdvscxiv</td>
                    <td className=' p-2 text-start'>kumar</td>
                    <td className=' p-2 text-start'>suthar</td>
                    <td className=' p-2 text-start'>kem</td>
                    <td className=' p-2 text-start'>
                        <div>
                            <span className=" p-1"><button className='w-7 bg-blue-500 h-7 text-center text-lg text-white rounded-md'><CiEdit className='m-auto'/></button></span>
                            <span className='p-1'><button className='w-7 bg-red-500 h-7 text-center text-lg text-white rounded-md'><RiDeleteBin4Line className='m-auto' /></button></span>
                            
                          
                        </div>
                    </td>
                </tr> 
            </tbody>
        </table>
    
    
  )
}

export default CategoryTable