import React from "react";
import Navbar from  "./components/Navbar";
import { Cards} from "./components/Cards"
import {Filter} from "./components/Filter"
import { apiUrl, filterData  } from "./data";
import { useState,useEffect } from "react";
import Spinner from "./components/Spinner";

import { ToastContainer, toast } from 'react-toastify';


const App = () => { 

 const [filterCourse, setFilterCourse]= useState(filterData);
 const [coursesData , setCoursesData] = useState([])
 const [isSpinner , setIsSpinner] = useState(true);
 const [category , setCategory] =useState("All")
 console.log("Category=>",category)

 async function fetchData(){
    try{
      const fetchedData =  await fetch(apiUrl);
      const data = await fetchedData.json();
      // console.log(data?.data);
      setCoursesData(data?.data);
      setIsSpinner(false);
      
    }
    catch(err){
      alert("Error While Fetching Data :",err)
    }

 }
//  console.log(coursesData)
  
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 overflow-hidden">
    <Navbar></Navbar>
    <Filter 
     filterCourse={filterCourse} 
     category={category}
     setCategory={setCategory}

     />
     {isSpinner? <Spinner/> : <Cards category={category} coursesData={coursesData} ></Cards>}
      
      
      
      <ToastContainer/>
    </div>
  );
};

export default App;
