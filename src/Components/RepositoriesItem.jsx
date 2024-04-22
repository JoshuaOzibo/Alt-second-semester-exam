import React from 'react'

const RepositoriesItem = (props) => {
  const {repoText, clickItems, image, visibility, createdDate,  owner, language} = props;

  return ( 
    <div onClick={clickItems} className='border-[4px] bg-[#0e1c42] border-[#21264b] m-auto w-full overflow-hidden shadow-md mt-[20px] p-[5px] rounded-lg  cursor-pointer '>
      <div className=''>
        <img className='w-full rounded-lg max-h-[300px] object-cover h-[200px]' src={image} alt="Image" />
        <div className='pt-[1rem] px-3 space-y-[10px]'>
          <div>
            <h3 className='text-center text-[#a8b8eb] font-bold text-[17px]'>{repoText}</h3>
          </div>


          <div className='md:flex md:space-y-0 space-y-1 justify-between'>
            <h4 className='text-[#a8b8eb] font-medium text-[13px]'><span>owner:</span> {owner}</h4>
            <p className='text-[#a8b8eb] font-medium text-[13px]'>Repo type: {visibility}</p>
          </div>

          <p className='text-[#a8b8eb] font-medium text-[13px]'>created Date: {createdDate}</p>
        </div>
      </div>
    </div>
  )
}

export default RepositoriesItem
