import React, { useState } from 'react'
import {FcLike} from "react-icons/fc"
import {FcLikePlaceholder} from  "react-icons/fc"
import {toast} from "react-toastify"

export const Card = (props) => {
    const course = props.course;
    const likeCourses = props.likeCourses;
    const desContent = course?.description;
    const setLikeCourses = props.setLikeCourses;
    
    const [readMore , setReadMore] = useState(true) 
    const description = readMore? `${desContent.substring(0,100)}...`:course?.description
    // console.log(typeof(likeCourses))
    const [likedIcon , setLikedIcon] = useState(false)

    function likeHandler(){
      
        if(likeCourses.includes(course?.id)){ 
            if(likeCourses.length === 0){
                // console.log("first ==>",likeCourses.length)
            // setLikeCourses([]);
             }else{
                // console.log("second==>",likeCourses.length)
                setLikeCourses((prev)=> prev.filter((cid)=>  cid!==course?.id  ) );
             }
            
        //    setLikeCourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
           toast.warning("Like removed");  
           setLikedIcon(false)
        }else{
            
            if(likeCourses.length === 0){
                setLikeCourses([course?.id]);
            }else{
                setLikeCourses((prev)=>[...prev,course?.id])
            }
            setLikedIcon(true)
            toast.success("Like Added")
        }

    }
    function readHandler(){
        setReadMore(!readMore);
    }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden '>
        <div className='relative'>
                <img  src={course?.image?.url} alt={course?.image?.alt}  loading="lazy" />
                    <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 flex justify-center items-center' >
                    <button onClick={likeHandler}>
                        {likedIcon? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem"/>}
                    </button> 
                    </div> 
        </div> 

        <div className='p-4'>
            <p className='text-white text-lg font-semibold leading-8'>{course?.title}</p>
            <p className='text-white mt-2'>{description}
             <span onClick={readHandler}>{readMore? "Read more":"Show less" }</span>
            </p>
        </div>
     
    </div>
  )
}
