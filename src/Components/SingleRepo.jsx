import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import UpdateRepo from './UpdateRepo';
import DeleteRepo from './DeleteRepo';
import SingleSkeleton from './SingleSkeleton';

const SingleRepo = ({setIsErrorTrue}) => {
    const [singleRepo, setSingleRepo] = useState([]);
    const apiKey = import.meta.env.VITE_API_KEY;

    const param = useParams();

    const owner = param.owner;
    const repoName = param.repoName;

    useEffect(() => {
      const singleItemFetch = async () => {
        try {
          const fetchItem = await fetch(`https://api.github.com/repos/${owner}/${repoName}`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          });
    
          if (!fetchItem.ok) {
            setIsErrorTrue(true)
            throw new Error('Failed to fetch data');
            
          }
    
          const response = await fetchItem.json();
          setSingleRepo(response);
        } catch (error) {
          console.error('Error fetching data:', error.message);
          setIsErrorTrue(false)
        }
      };
    
      singleItemFetch();
    }, []);
    


    console.log(singleRepo)
    
  return (
    <div className=''>
        {singleRepo.length === 0 ? (<SingleSkeleton />) : (<div className=' pt-[150px]'>
          <div className='border-[4px] md:w-[50%] w-[94%] bg-[#0e1c42] border-[#21264b] m-auto overflow-hidden shadow-md p-[5px] rounded-lg cursor-pointer '>
      <div className=''>
        <div className=''>
        <img className='w-full rounded-lg max-h-[300px] object-cover h-[200px]' src={singleRepo.owner.avatar_url} alt="Image" />
        <div className='pt-[1rem] px-3 space-y-[10px]'>
          <div>
            <h3 className='text-center text-[#a8b8eb] font-bold text-[17px]'>{singleRepo.name}</h3>
          </div>


          <div className='md:flex md:space-y-0 space-y-1 justify-between'>
            <h4 className='text-[#a8b8eb] font-medium text-[13px]'><span>owner:</span> {singleRepo.owner.login}</h4>
            <p className='text-[#a8b8eb] font-medium text-[13px]'>Repo type: {singleRepo.visibility}</p>
          </div>

          <p className='text-[#a8b8eb] font-medium text-[13px] '>Date Created : {singleRepo.created_at}</p>
        </div>
      </div>


        <div className='flex justify-between w-[90%] m-auto mt-[20px]'>
        <DeleteRepo  owner={owner} repoName={repoName}/>
        <UpdateRepo param={singleRepo} owner={owner} repoName={repoName} />
        <button className='border-2 border-[#fff] hover:border-[#21264b] font-bold bg-blue-500 text-white float-end px-3 py-2 rounded-md cursor-pointer mt-5' onClick={() => location.reload(true)}>Refresh</button>
        </div>
      </div>
    </div>
    
        </div>)}
    </div>
  )
}

export default SingleRepo
