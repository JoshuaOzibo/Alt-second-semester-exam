import React from 'react'

const Skeleton = () => {

    
  return (
    <section className='w-full'>
        <section className='w-full gap-y-[0] grid md:grid-cols-2 grid-cols-1 md:gap-[20px] gap-[10px]'>
        {Array.from({length: 4}, (_, i) => <div key={i + 1} className='border m-auto w-full overflow-hidden shadow-md mt-[20px] p-[5px] rounded-lg'>
         <div className='animate-pulse'>
      <svg
          className="w-full rounded-lg max-h-[300px] h-[200px] text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>

        <div className='pt-[10px] space-y-[10px]'>
          <div>
          <div className="h-3 bg-gray-300 rounded-full mb-[3]"></div>
          </div>


          <div className='md:flex md:space-y-0 space-y-1 justify-between'>
          <div className="h-3 w-[45%] bg-gray-300 rounded-full mb-[3]"></div>
            <div className="h-3 w-[45%] bg-gray-300 rounded-full mb-[3]"></div>
          </div>

          <div className="h-3 bg-gray-300 rounded-full mb-[3]"></div>
        </div>
      </div>
    </div>)}
        
    </section>
    </section>
  )
}

export default Skeleton;
