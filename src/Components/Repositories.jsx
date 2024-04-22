import React, { useEffect, useState } from "react";

import { fetchData } from "../Components/DataFetch";
import RepositoriesItem from "./RepositoriesItem";
import PaginationPage from "./PaginationPage";
import Search from "./Search";
import Filter from "./Filter";
import {useNavigate, useNavigation} from 'react-router-dom';
import Skeleton from "./Skeleton";

const Repositories = ({setIsErrorTrue}) => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  const [searchItem, setSearchItem] = useState("");
  const [selectByYear, setSelectByYear] = useState('');
  const navigate = useNavigate()


  useEffect(() => {
    const fetchDataFromGitHub = async () => {
      try {
        const data = await fetchData();
        const DataItem = data.map((item) => {
          return {
            id: item.id,
            name: item.name,
            createdDate: item.created_at,
            repoName: item.name, 
            owner: item.owner.login,
            image: item.owner.avatar_url,
            languageUsed: item.language,
            visibility: item.visibility
          };
        });

        setIsErrorTrue(false)
        setRepos(DataItem);
        
      } catch (error) {
      
        console.error("Error fetching data:", error);
        setIsErrorTrue(true)
      }
    };

    fetchDataFromGitHub();;
  }, []);

  // Apply filtering based on search input and year
const filteredRepos = repos.filter((item) =>(item.name.toLowerCase().includes(searchItem.toLowerCase()) && (selectByYear.toLowerCase() === '' ? item : item.createdDate.toLowerCase().includes(selectByYear.toLowerCase())))
);

  //Logic for filtering by year
  const filterByYear = (event) => {
    setSelectByYear(event.target.value);
  };

  // Pagination logic
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = filteredRepos.slice(firstPostIndex, lastPostIndex);

  console.log(repos);
  console.log(searchItem);

  const itemClick = (item) => {
    navigate(`/SingleRepo/${item.owner}/${item.repoName}`);
  }

  return (
    <div className="w-full md:px-[80px] px-[1rem]">
      <main className="flex items-center pt-[100px] justify-between w-full py-[30px]">
        <Search searchItem={searchItem} setSearch={setSearchItem} />
        <Filter filterByYear={filterByYear} />
      </main>

      <div className={repos.length === 0 ? '' : " w-full gap-y-[0] grid md:grid-cols-2 grid-cols-1 md:gap-[20px] gap-[10px]"}>
        {repos.length === 0 ? (
          
          <Skeleton />
        ) : (
          currentPost.map((OneRepo) => (
            <RepositoriesItem
              clickItems={() => { itemClick(OneRepo) }}
              key={OneRepo.id}
              image={OneRepo.image}
              createdDate={OneRepo.createdDate}
              owner={OneRepo.owner}
              visibility={OneRepo.visibility}
              language={OneRepo.languageUsed}
              repoText={OneRepo.name}
            />
          ))
        )}
      </div>

      <div className="mt-[-60px] pb-[50px]">
      <PaginationPage
        totalRepos={repos.length}
        repoPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      </div>
    </div>
  );
};

export default Repositories;
