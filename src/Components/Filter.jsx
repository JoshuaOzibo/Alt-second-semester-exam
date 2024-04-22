
const Filter = ({filterByYear}) => {

  return (
    <select className='w-[48%] border-2 h-[50px] outline-none rounded-md px-[10px] cursor-pointer' onChange={filterByYear}>
      <option value=''>All Years</option>
      <option value='2024'>2024</option>
      <option value='2023'>2023</option>
      <option value='2022'>2022</option>
    </select>
  )
}

export default Filter
