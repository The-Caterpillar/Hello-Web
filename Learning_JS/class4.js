// FUNCTIONS:

function run()
{
    console.log("Running");
}
run();

// HOISTING: Moving fnction declarations to the top of the code.
// - DONE BY JS ENGINE


/** FUNCTION ASSIGNMENT */
// FUNCTIONS DO NOT MOVE TO THE TOP OF the CODE

// 1. Named assignment
let x = function stand()
{
    console.log("Standing");
}
x();
// 2. Anonymous assignment
let sum = function(a,b)
{
    return a+b;
}
console.log(sum(5,5));

// JS is a Dynamic language
// It has a special OBJECT called arguments which gives us the arguments passed in a function
function sumAll(a,b)
{
    let res=0;
    for(let value of arguments)
    {
        res = res + value;
    }
return res;
}
console.log("SUM = "+sumAll(1,2,3,4,5));


// REST OPERATOR (...)
// -> should be the last operator
function result(...args)
{
    console.log(args);
}
result(1,2,3,4,5);


// DEFAULT arguments
function sumS(a,b,c=2)
{
    return a+b+c;
}
console.log(sumS(1,2,3));
console.log("SUMS="+sumS(1,undefined,3));

// Getter = To fetch the value
// Setter = To set the value
let person  = {
    Fname: "Saras",
    Lname: "Tiwari",
    get fullName()
    {
        return `Fname= ${person.Fname} | Lname= ${person.Lname}`;
    },
    set fullName(value)
    {
        let parts = value.split(' ');
        this.Fname = parts[0];
        this.Lname = parts[1];
    }
};
// console.log(person);
// function fullName()
// {
//     return `${person.fname}   |  ${person.Lname}`;
// } // Issue of this function: Read only function. Cannot be used foe setter, only used for getter
// console.log(fullName());
// // SOLUTION for ISSUE:
//  // Issue of this function: Read only function. Cannot be used foe setter, only used for getter
// console.log(fullName());
console.log(person.fullName);

person.fullName = 'Rahul Kumar';
console.log(person.fullName);

// TEY AND CATCH =  Error Handling
try {
    // Erroneous code
    person.fullName = 1;
}
catch(e)
{
    alert("You have sent a number as a FullName!!!");
}


// SCOPES:

/**
 * let = Scope till nearest code blocks
 * var = Scope through the whole file
 */

// {
//     let num = 5;
//     console.log(num);
// }
// console.log(num); // num is not defined

 {
    var num = 5;
    console.log(num);
}
console.log(num); // num is not defined 


// REDUCING an Array:
arr1 = [1,2,3,4,5];
let sum1 = arr1.reduce((accumulator,currentvalue)=>accumulator + currentvalue,0);
console.log(sum1);