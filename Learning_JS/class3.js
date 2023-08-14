// In built object and arrays

let FirstName = 'Sara';
let LastName = new String('Tiwari');


let message = "This is a string. She is cute";
let words = message.split(" ");

console.log(words);


// Template literal:


let template_literal = `I am
Saraswati
Tiwari`;

//DATE and TIME:
let date1 = new Date();
let date2 = new Date('12 Aug 1999 4:15');
let date3 = new Date(1999, 7, 12, 4);

date3.setFullYear(1999);
date3.setDate(1);
date3.getDate();


// ARRAYS

let numbers = [1,2,3,4,10];
console.log(numbers);

// Insertion at the end
numbers.push(11);

// INsertion at beginning
numbers.unshift(0);

//Insertion in between:
//numbers.splice('the index where the new element(s) is to be added', 'index which is to be deleted',element1,element2..);
numbers.splice(3,0,'saraswati','tiwari','hello');
console.log(numbers);

//SEARCHING FOR ELEMENTS:
console.log(numbers.indexOf(2));
console.log(numbers.indexOf(20));

console.log(numbers.includes(4));

console.log(numbers.indexOf(4,2));


// SEARCHING IN reference types
// 1. Object:
let courses = [
    {no:1,name:"Saras"},
    {no:2,name:"Mayank"}
];
console.log(courses);
courses.indexOf({no:1,name:"Saras"});//False, because reference of courses and the object in search brackets are different
// Therefore the above way of searching objects is not applicable.
// Use callback function method instead:
let course = courses.find(function(course){
    return course.name == 'Saras';
})
console.log(course); // Prints object with name "Saras"


// Minimizing the searching procedure:
let cours = courses.find( cours => cours.name=="Saras");
console.log(cours);
let cour = courses.find( cour => cour.name=="Kilvish");
console.log(cour);


// removing ELEMENTS FROM ARRAYS
let x = [1,2,3,4,5,6,7];

x.pop();
console.log(x);

x.shift();
console.log(x);

x.splice(2,2);
console.log(x);

// emptying AN ARRAY:
let y = [1,2,3,4];
let z = y;

// Method 1:
y = []; // Y is empty now
console.log(y);
console.log(z);

// Method2:
y.length = 0;
console.log(y);
console.log(z);

// Method 3:
y.splice(0,y.length);

//Method 4: loop through array

// COMBINING and SLICING array:
let First = [1,2,3];
let Second = [4,5,6];

// COMBINING
let combined = First.concat(Second);
console.log(combined);
// SLICING
let sliced = combined.slice(1,3);
console.log(sliced);



// SPREAD OPERATOR
let first = [1,2,3];
let second = [4,5,6];
let combined2 = [...first,...second];
console.log(combined2);

// ITERATING an array:
let xy = ['a','b','c','d','e'];
// for loop
for(let value of xy)
{
    console.log(value);
}
// for-each loop
xy.forEach(function(num){
    console.log(num);
})


// JOINING ARRAYS into string:
let arr= [10,20,30,40];
const JOINed = arr.join(',');
console.log(JOINed);
// SPLITTING string into array:
let str = JOINed.split(',');
console.log(str);


// SORTING ARRAYS:
let n = [1,5,3,2,4,0,7];
n.sort();
console.log(n);
n.reverse();
console.log(n);


// FILTERING arrays:

let num = [-1,2,3,-4,-5];
let filtered = num.filter(value => {
    return value>=0;
})
console.log(filtered);


// MAPPING, CHAINING
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */