import React, { useState } from 'react'

function AddTimewall() {
    const [name, setName] = useState('');
    const [Category, setCategory] = useState('');
    const [Thumbnail, setThumbnail] = useState([]);
    const [video, setVideo]=useState([])
  return (
      <section className='w-100 h-auto font-Montserrat pt-4'>
          <div>
              <div className='w-100 h-auto font-Montserrat font-bold text-[15px] rounded-s-sm bg-blue-600 text-white p-3'><span>Add Time Wall</span></div>
              <div className='w-100 bg-slate-100 h-auto p-3'>
                  <form>
                      <fieldset className='flex flex-col pt-4'>
                          <label htmlFor="status" className='font-bold pb-1'>Category</label>
                          <select onChange={(e) => setCategory(e.target.value)}  id="status" className='border-[1px] border-slate-400  h-[35px] w-100 pl-3 pr-3' >
                              <option value="" hidden>Select Category</option>
                              <option value="Education">Education</option>
                              <option value="Inactive">Inactive</option>
                              <option value="Inactive">Inactive</option>
                              <option value="Inactive">Inactive</option>
                              <option value="Inactive">Inactive</option>
                          </select>
                      </fieldset>

                      <fieldset className='flex flex-col pt-4'>
                          <label htmlFor="Name" className='font-bold pb-1'>Video Name</label>
                          <input type="text" name="" id="Name" placeholder='Enter video name' className='border-[1px] border-slate-400 p-3 h-[35px] w-100' value={name} onChange={(e) => setName(e.target.value)} />
                      </fieldset>
                      
                      <fieldset className='flex flex-col pt-4'>
                          <label htmlFor="Description" className='font-bold pb-1'>Video Thumbnail (Image)</label>
                          <input type="file" name="" id="Name" className='border-[1px] border-slate-400 pl-3 pr-3 pt-1 h-[40px] w-100'  onChange={(e) => setThumbnail(e.target.value)} />
                      </fieldset>

                      <fieldset className='flex flex-col pt-4'>
                          <label htmlFor="Description" className='font-bold pb-1'>Video File(MP4)</label>
                          <input type="file" name="" id="Name" className='border-[1px] border-slate-400 pl-3 pr-3 pt-1 h-[40px] w-100'  onChange={(e) => setVideo(e.target.value)} />
                      </fieldset>

                      <div className='pt-10'><button type='submit' className='w-[80px]  bg-blue-600 text-white  pl-3 pr-3 pt-2 pb-2 rounded-md hover:bg-slate-500 hover:font-bold '>Add</button></div>
                  </form>
              </div>
          </div>
      </section>
  )
}

export default AddTimewall