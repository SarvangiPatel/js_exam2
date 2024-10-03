
//  1. **Declare and Use Variables**

// - Task1: Declare a variable to store your name, age, and favorite color. Display them using `console.log()`.

// code

// let name = 'Sarvangi';
// let age = 20;
// let fav_color = "Blue"

// console.log("name : ", name);
// console.log("age : ", age);
// console.log("fav color : ", fav_color);


// <------------------------------------------------------------------------------------------------>

// 2. **Basic Arithmetic Operations**

//  Task1: Write a program that takes two numbers as input and prints their sum, difference, and product using `prompt()` and `console.log()`.

// let number1 = parseInt(prompt("enter the number1"))
// let number2 = parseInt(prompt("enter the number2"))

// console.log("sum is : ", number1+number2)
// console.log("difference is : ", number1-number2)


// <---------------------------------------------------------------->


// ### 3. **String Concatenation**

// - Task: Create a greeting message by concatenating two strings (e.g., "Hello" and your name).

// let str1 = "hello";
// let str2 = "Sarvangi";

// console.log(str1 , str2)


// <------------------------------------------------------------------------------------------------>

// ### 4. **Logical Operators**

 // - Task: Write a program to check if a number is between 10 and 20 using logical operators.

// let number = 12;

// if (number>10 && number<20){
//     console.log(number)
// }
// else{
// console.log("invalid number")
// }


// <------------------------------------------------------------------------------------------------>

// ### 5. **Conditional Statements (if-else)**

// - Task: Create a program that asks the user for their age and prints whether they are an adult or not.

// let age = 20;
// if (age>=18 ){
//     console.log("you are adult")
// }
// else{
// console.log("you are not adult")
// }


// <------------------------------------------------------------------------------------------------>

// ### 6. **Ternary Operator**

// - Task: Write a program using the ternary operator to check if a number is even or odd.

// let num = 30;

// (num%2 == 0)?console.log("even number"):console.log("odd number")


// <------------------------------------------------------------------------------------------------>


// ### 7. **Switch Statement**

// - Task: Create a program that asks the user to enter a day of the week and prints the day in Gujarati (using a `switch` statement).

// let day=prompt("enter the name of day");

// switch(day){
//     case "sunday" :
//         console.log("Ravivar");
//         break;

//         case "monday" :
//             console.log("somvar");
//             break;

//         case "tuesday" :
//             console.log("Mangalvar");
//             break;

//         case "wednesday" :
//             console.log("Budhvar");
//             break;

//         case "thursday" :
//             console.log("Guruvar");
//             break;

//         case "saturday" :
//             console.log("sanivar");
//             break;

//         default : 
//             console.log("incorrect day");
//             break;
// }


// <------------------------------------------------------------------------------------------------>

// ### 8. **For Loop**

// - Task: Use a `for` loop to print numbers from 1 to 10.

// for(let i = 1; i<=10;i++){
//     console.log(i)
// }


// <------------------------------------------------------------------------------------------------>

// ### 9. **While Loop**
// - Task: Write a `while` loop to print the first 5 even numbers.

// let num = 1;
// while(num<=5){
//     if(num%2 == 0){
//         console.log(num)
//     }
//     num++;
// }

// <----------------------------------------------------------------------->


// ### 10. **Nested Loops**

// - Task: Write a program to display a simple 3x3 grid using nested loops.

// let i;
// let j;
// let space;

// for(i=1;i<=3;i++){
//     {
//         for(j=1;j<=3;j++)
//         document.write(" * ");
//     }
//     document.write("<br>")
// }


// <------------------------------------------------------------------------------------------------>

// ### 11. **Array Creation**

// - Task: Declare an array of five fruits and print the second and fourth fruit.

// let arr = ["apple" , "banana", "kiwi" , "orange" , "mango"]
// console.log(arr[1])
// console.log(arr[3])


// <------------------------------------------------------------------------------------------------>


// ### 12. **Array Methods (push and pop)**

// - Task: Add an element to the array using `push()` and remove one using `pop()`.

// let arr = ["apple" , "banana", "kiwi" , "orange" , "mango"]
// let newarr = arr.push("watermalon")
// let newarr2 = arr.pop()
// console.log(arr)


// <------------------------------------------------------------------------------------------------>


// ### 13. **Array Methods (slice and splice)**

// - Task: Use `splice()` to remove two elements from the middle of an array and `slice()` to create a new array with a portion of it.

// let arr = ["apple" , "banana", "kiwi" , "orange" , "mango"]
// let newarr = arr.splice(2,2)
// let newarr2 = newarr.slice()
// console.log(arr)
// console.log(newarr2)



// <------------------------------------------------------------------------------------------------>


// ### 14. **Object Creation**
// - Task: Create an object to store details of a student (name, age, and grade). Print the student's name and grade.

// let students = 
//     {
//     name :"abc",
//     age : 23,
//     grade :"A"
//     }
    
// console.log(students.name)
// console.log(students.grade)


// <---------------------------------------------------->


// ### 15. **Object Method**

// - Task: Add a method to the student object that prints a welcome message.

// let msg = {
//     msg: "welcome"
// }
// console.log(msg.msg)



// <------------------------------------------------------------------------------------------------>


// ### 16. **Function Creation**
// - Task: Write a function to calculate the square of a number.

// let number = 25;
// function calculate(){
//    let sqrt =  Math.sqrt(number)
//     console.log(sqrt)
// }
// calculate()


// <------------------------------------------------------------------------------------------------>


// ### 17. **Function with Parameters*
// - Task: Create a function that takes two numbers as parameters and returns their sum.

// function sum(num1,num2){
//         console.log("sum is: ", num1+num2)
// }
// sum(20,30)



// <------------------------------------------------------------------------------------------------>



// ### 18. **Return Value**
// - Task: Write a function that returns whether a number is positive or negative.

// let num = 40;
// function checknum(){
//     if (num<0){
//         // console.log("nagative number")
//         return "nagative num"
//     }else {
//         return "positive num"
//     }
// }
// let ans = checknum()
// console.log(ans)



// <------------------------------------------------------------------------------------------------>



// ### 19. **Anonymous Function**
// - Task: Assign an anonymous function to a variable and use it to print a greeting message.

// let fun = function(){
//     console.log("hello, Good morning")
// }
// fun()



// <------------------------------------------------------------------------------------------------>



// ### 20. **Arrow Functions**
// - Task: Write an arrow function to multiply two numbers and print the result.

// let num1 = 20;
// let num2 = 5;
// let func = () =>{
//     console.log("multiply is: ",num1 * num2)
// }
// func()

// <------------------------------------------------------------------------------------------------>


// ### 21. **Array Map Method**
// - Task: Use the `map()` method to multiply every number in an array by 2.

// let arr = [5,10,15,20,25]
// let newarr = arr.map(num=>num*2)
// console.log(newarr)

// <------------------------------------------------------------------------------------------------>


// ### 22. **Array Filter Method**
// - Task: Write a program that filters out even numbers from an array.

// let arr = [1,2,3,4,5]

// let newarr = arr.filter((even) => {
//     return even%2 == 0
// })
// console.log(newarr);


// <------------------------------------------------------------------------------------------------>


// ### 24. **Confirm Box**
// - Task: Use a `confirm` box to ask the user if they want to proceed with an action.

// let num1= 12;
// let num2=15;
// confirm("ready");


// <------------------------------------------------------------------------------------------------>



// ### 25. **Prompt Box**
// - Task: Use `prompt()` to ask the user for their favorite number and print whether it's a prime number or not.
// <--------------------------------------------------->
// let number = parseInt(prompt("enter number"))

// if(number)


// <------------------------------------------------------------------------------------------------>


// ### 26. **Object Properties**
// - Task: Create an object with properties representing a car (make, model, year). Print the car's details.

// let cars = [
//     {
//         make: "abc",
//         modal: "BMW",
//         year: 2025
//     },
//     {
//         make: "abc",
//         modal: "oudi",
//         year: 2025
//     },
//     {
//         make: "abc",
//         modal: "rolls Royal",
//         year: 2025
//     }
// ]
// console.log(cars);


// <------------------------------------------------------------------------------------------------>


// ### 27. **Loop through Object**
// - Task: Use a `for-in` loop to iterate over an object’s properties.

// let students = [
//     {
//         id: 101,
//         name : "a"
//     },
//     {
//         id: 102,
//         name : "b"
//     },
//     {
//         id: 103,
//         name : "c"
//     },
//     {
//         id: 104,
//         name : "d"
//     }
// ]


// for( let key in students){
   
//     console.log(students[key])
// }



// <------------------------------------------------------------------------------------------------>


// ### 28. **Function Returning Object**
// - Task: Write a function that returns an object with details of a book (title, author, year).

// function books(){
//     let book ={
//         title: "MAHABHARAT",
//         author: "VED VYAS",
//         year : "50000 yrars ago"
//     }
//     console.log(book)
// }
// books()



// <------------------------------------------------------------------------------------------------>


// ### 29. **Object within Array**
// - Task: Create an array of objects where each object represents a student with properties (name, age). Print each student's name using a loop.


// let students = [
//     {
//         id: 101,
//         name : "a"
//     },
//     {
//         id: 102,
//         name : "b"
//     },
//     {
//         id: 103,
//         name : "c"
//     },
//     {
//         id: 104,
//         name : "d"
//     }
// ]


// for( let key in students){
   
//     console.log(students[key])
// }


// <------------------------------------------------------------------------------------------------>


// ### 30. **Find Method**
// - Task: Use the `find()` method to locate the first student in an array of objects whose age is 18.

// let arr = [
//     {
//         name : "a",
//         age : 18
//     },
//     {
//         name : "b",
//         age : 21
//     },
//     {
//         name : "c",
//         age : 19
//     }
// ]
// let newarr = arr.find((age) =>{
//      age<18
// })
// console.log(newarr)


// <------------------------------------------------------------------------------------------------>


// ### 31. **Math Functions**
// - **Task**: Use JavaScript Math functions to perform the following:
//     1. Find the maximum and minimum values from a list of numbers.
//     2. Generate a random number between 1 and 100.
//     3. Round a number to its nearest integer.

// 1] 
// let maximum = Math.max(10,15,40,30,20)
// console.log(maximum)
// let minimum = Math.min(10,15,40,30,20)
// console.log(minimum)

// 2]
// let random = Math.floor(Math.random(4.4)*100)
// console.log(random)

// 3]
// let num1 = Math.round(3.7)
// console.log(num1)/


// <------------------------------------------------------------------------------------------------>


// ### 32. **Age Calculator (Date Function)**
// - **Task**: Write an age calculator that prompts the user to enter their birthdate and calculates their age in:

// let birth = prompt("enter you birthdateconst startDate = new Date('December 17,2005');

// const startDate = new Date('September 26,2004');
// const currentDate = new Date();

// const years = currentDate.getFullYear() - startDate.getFullYear();
// const months = currentDate.getMonth() - startDate.getMonth();


// let totalMonths = 20 * 12 +(-1);
// console.log(totalMonths);

//date 

// console.log(20*365);

//hours

// console.log(20*365*24);

//minutes

// console.log(20*365*24*60);

//seconds

// console.log(20*365*24*60*60);


//miliseconds

// console.log(20*365*24*60*60*60);
