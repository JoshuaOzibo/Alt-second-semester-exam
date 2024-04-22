import React from 'react';
import {Button} from 'react-aria-components';

//{text: #a8b8eb, bg: #0e1c42, border: #21264b}

const PaginationPage = ({totalRepos, repoPerPage, setCurrentPage, currentPage}) => {
    const repoNumber = [];

    for(let i = 1; i <= Math.ceil(totalRepos / repoPerPage); i++){
        repoNumber.push(i);
    }
  return (
    <div className=' w-full md:flex grid grid-cols-4 md:space-y-0 space-y-1 items-center justify-center mt-[96px] md:space-x-5 space-x-1'>
      {repoNumber.map((repo, repoIndex) => {
        return <Button key={repoIndex} className={repo == currentPage ? 'bg-[#0e1c42] text-[#a8b8eb] border-[#21264b] border-[3px] rounded-lg px-[20px] h-[50px] outline-none hover:bg-[#21264b] text-[20px]': ' px-[20px] border-[#21264b] bg-[#a8b8eb] hover:bg-[#21264b] text-[#0e1c42] hover:text-[#a8b8eb] outline-none border-[3px] rounded-lg h-[50px] text-[20px]'} onPress={() => setCurrentPage(repo)}>{repo}</Button>
      })}
    </div>
  )
}

export default PaginationPage;
