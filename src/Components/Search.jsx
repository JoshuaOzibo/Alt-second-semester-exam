import React from 'react';

const Search = ({setSearch, searchItem}) => {

  const searchRepo =(e) =>{
    setSearch(e.target.value);
  };

  return (
      <input className='w-[48%] border-2 outline-none h-[50px] rounded-md px-[10px]' value={searchItem} placeholder='Search by Name' onChange={searchRepo} type="text" />
  )
}

export default Search
