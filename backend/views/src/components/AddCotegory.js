import React, { useEffect, useState } from 'react';
import postServices from './PostCategory';

function AddCategory({ onClose }) {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [add, setAdd] = useState(false);
    const [loading, setLoading] = useState(false);
    const [responseData,setResponseData]=useState('')

    useEffect(() => {
        const service = async () => {
            if (add) {
                setLoading(true);
                const formData = new FormData();
                formData.append('name', name);
                formData.append('description', description);
                formData.append('status', status);
                formData.append('date', '');
                console.log(formData)
                try {
                    const response = await postServices(formData);
                    console.log("Response:", response);
              setResponseData(response)
                    // Add any further processing if needed
                } catch (error) {
                    console.error("Error:", error);
                    // Handle error here (e.g., display error message)
                } 
            }
        };
        
        service();
    }, [add]);
    
    const handleClose = (e) => {
        e.preventDefault();
        console.log("first")
        setAdd(true);
        if (responseData === "Category added successfully!") {
            setLoading(false)
            alert("data added successfully!")
            console.log("DDDD")
            onClose()
        }
   
    };

    return (
        <section className='w-100 h-auto font-Montserrat'>
            <div>
                <div className='w-100 h-auto font-Montserrat font-bold text-[15px] rounded-s-sm bg-blue-600 text-white p-3'><span>Add Category</span></div>
                <div className='w-100 bg-slate-100 h-auto p-3'>
                    <form onSubmit={handleClose}>
                        <fieldset className='flex flex-col'>
                            <label htmlFor="Name" className='font-bold pb-1'>Name</label>
                            <input type="text" name="" id="Name" placeholder='Enter Name' className='border-[1px] border-slate-400 p-3 h-[35px] w-100' value={name} onChange={(e) => setName(e.target.value)} />
                        </fieldset>
                        <fieldset className='flex flex-col pt-4'>
                            <label htmlFor="status" className='font-bold pb-1'>Status</label>
                            <select onChange={(e) => setStatus(e.target.value)} placeholder="select " name="" id="status" className='border-[1px] border-slate-400  h-[35px] w-100 pl-3 pr-3' >
                                <option value="" hidden>Select</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </fieldset>
                        <fieldset className='flex flex-col pt-4'>
                            <label htmlFor="Description" className='font-bold pb-1'>Description</label>
                            <textarea id="Description" className='border-[1px] border-slate-400 p-3  w-100 min-h-[40px] max-h-[80px]' minLength={2} value={description} onChange={(e) => setDescription(e.target.value)} />
                        </fieldset>
                        <div className='pt-10'>
                            <button type='submit' className='w-[80px]  bg-blue-600 text-white  pl-3 pr-3 pt-2 pb-2 rounded-md hover:bg-slate-500 hover:font-bold '>
                              {loading ? "Adding.." :  "Add"} .
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default AddCategory;
