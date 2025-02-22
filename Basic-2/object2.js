//Using constructor
//declare object
const tinderUser = new Object() //sinbgleton object
const tinderAge = {} // non singleton

tinderUser.id = "124abc"
tinderUser.name= "Sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

//NESTED OBJECTS
const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Shalu",
            lastname:"Pruthi"
        }
    }
}
console.log(regularUser.fullname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}

// const obj3 = {obj1, obj2}

const obj3 = Object.assign(obj1, obj2) //combine both objects
console.log(obj3);
console.log(obj3 === obj1);

//SPREAD OPERATOR combine both objects
const obj4 = {...obj1, ...obj2}
console.log(obj4);


//values from database
const user= [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {

    }
]

//access value from the given database
user[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser)); //return all the keys inside array
console.log(Object.values(tinderUser)); //return only values as array
console.log(Object.entries(tinderUser)); //make different arrays of each key:value
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //check weather property exist or not


//DE-STRUCTURE OBJECT
const course = {
    coursenamae: "JS",
    price: "999",
    instructor: "shalu"
}

//ACCESS VALUE 

// course.instructor
const{instructor} = course
console.log(instructor);

//ALSO CHANGE THE NAME
const{price: coursePrice}= course
console.log(coursePrice);

