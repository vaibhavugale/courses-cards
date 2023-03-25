import React from 'react'

export const Filter = ({filterCourse,setCategory,category}) => {
 function handelFilter(category){
  setCategory(category);
 } 
 
  return (
    <div className='flex flex-row justify-center mt-3 '>
    <div className=' flex flex-row gap-6 flex-wrap lg:flex-nowrap'>
    {
      filterCourse.map((item)=>(
        <button
          className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            ${category === item.title ? 
            "bg-opacity-60 border-white" :
            "bg-opacity-40 border-transparent"}
            `} 
         onClick={()=> handelFilter(item?.title)}
          key={item?.id}>{item?.title}</button>
      ))
    }
    </div>
        

    </div>
  )
}
