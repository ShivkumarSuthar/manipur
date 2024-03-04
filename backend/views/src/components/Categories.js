import React, { useEffect, useState } from 'react';
import CategoryTable from './CategoryTable';
import AddCategory from './AddCotegory';
import getService from './getCategory';

function Categories() {
  const [newData, setNewData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(5);
  const [categoryData, setCategoryData] = useState([]);

  const handleCloseAddCategory = () => {
    setNewData(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getService();
        setCategoryData(response.data);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };
    fetchData();
  }, []);

  // Calculate index of the first and last entry on the current page
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage ; 

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className='border-[1px] border-slate-400 rounded-md h-[77vh] shadow-sm shadow-slate-400 mt-2'>
      <div className='border-t-[1px] border-slate-400 mt-5 pl-3 pt-3'>
        {newData ? (
          <div>
            <AddCategory onClose={handleCloseAddCategory} />
          </div>
        ) : (
          <div>
            <div>
              <button onClick={() => setNewData(true)} className='w-[100px] bg-green-500 h-[40px] rounded-md text-white hover:bg-green-700'>Add New</button>
            </div>
            <div className='pt-5 pr-5 pb-5 '>
              <CategoryTable
                categoryData={categoryData.slice(indexOfFirstEntry, indexOfLastEntry)}
                start={indexOfFirstEntry}
              />
            </div>
            <div className='flex items-center justify-start w-100 font-Montserrat w-100 '>
              <div className='w-1/2'>
                <p>Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, categoryData.length)} Entries</p>
              </div>
              <div className='flex justify-start w-1/2'>
                <button className='w-[100px] border-[1px] border-slate-400 p-2 h-[40px] hover:bg-blue-500 active:bg-blue-500' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span className='bg-blue-900 text-white pt-2 pb-2 pl-4 pr-4 font-bold'>{currentPage}</span>
                <button className='w-[100px] border-[1px] border-slate-400 p-2 h-[40px]  hover:bg-blue-500 active:bg-blue-500' onClick={() => paginate(currentPage + 1)} disabled={indexOfLastEntry >= categoryData.length}>Next</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Categories;
