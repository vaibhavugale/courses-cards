import React, { useState } from "react";
import { Card } from "./Card";

export const Cards = ({ coursesData ,category }) => {
  // console.log(coursesData?.data)
  const [likeCourses, setLikeCourses] = useState([]);
  console.log("liked courses", likeCourses);
 

  function getCourseData() {
    if (category === "All") {
      let allCourses = [];
          Object.values(coursesData).map((array) => {
            array.map((courseData) => {
              allCourses.push(courseData);
            });
          });
          return allCourses;
    }else{
      return coursesData[category]
    }
  }
  // console.log(getCourseData());

  return (
    <div className="grid  grid-cols-1 place-content-center lg:grid-cols-3 row-auto max-w-[1080px] mx-auto mt-10 gap-5">
      {  getCourseData().map((course) => (
        <Card
          course={course}
          key={course?.id}
          likeCourses={likeCourses}
          setLikeCourses={setLikeCourses}
        />
      ))}
    </div>
  );
};
