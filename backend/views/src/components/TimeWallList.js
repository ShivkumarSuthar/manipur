import React, { useEffect, useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin4Line } from "react-icons/ri";
import getService from './GetTImeWallService'
function TimeWallList() {
    const [timeWall, setTimeWall] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getService();
                setTimeWall(response.data)
            } catch (error) {
                console.error('Error fetching category data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <table className='w-full font-Montserrat'>
            <thead>
                <tr className='uppercase text-[12px] pt-2 pb-2'>
                    <th className=' w-[6%] p-2 text-start'>Sr. No.</th>
                    <th className='w-[15%] p-2 text-start'>Category Name</th>
                    <th className='w-[15%] p-2 text-start'>Video Thumbnail</th>
                    <th className='w-[17%] p-2 text-start'>Video Name</th>
                    <th className='w-[17%] p-2 text-start' >Video</th>
                    <th className='w-[15%] p-2 text-start'>Date/Time</th>
                    <th className='w-[15%] p-2 text-start'>Action</th>
                </tr>
            </thead>
            <tbody className='text-[12px]'>
                {timeWall && timeWall.map((category, index) => (
                    <tr key={index} className='category-chart'>
                        <td className='p-2 text-start'>{index + 1}</td>
                        <td className='p-2 text-start'>{category.name}</td>
                        <td className='p-2 text-start'>{category.status}</td>
                        <td className='p-2 text-start'>{category.description}</td>
                        <td className='p-2 text-start'>{category.status}</td>

                        <td className='p-2 text-start'>{category.dateTime}</td>
                        <td className='p-2 text-start'>
                            <div>
                                <span className="p-1"><button className='w-7 bg-blue-500 h-7 text-center text-lg text-white rounded-md'><CiEdit className='m-auto' /></button></span>
                                <span className='p-1'><button className='w-7 bg-red-500 h-7 text-center text-lg text-white rounded-md'><RiDeleteBin4Line className='m-auto' /></button></span>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TimeWallList