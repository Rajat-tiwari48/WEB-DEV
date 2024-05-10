const course={
    courseName: "javascript by chai aur code.",
    courseInstructor: "Hitesh chaudhary",
    coursePrice: "999"
}

// way to implement
//course.courseInstructor

//Another method
// const{courseInstructor}=course
// console.log(courseInstructor)

// or
const{courseInstructor : instructor}=course
console.log(instructor)

