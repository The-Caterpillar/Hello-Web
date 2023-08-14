console.log("Hello jee, Kaise ho saarey");

// Variables

let a = 3;
var x = 5;

console.log(a);
console.log(x);

/* difference between let and var?
~ Difference is of scope.

- VAR variables are global. Re-declaration is possible
- LET variables are local. Re-declaration is not possible
*/

/*
    Variables:
    - Cannot be same as any keyword
    - Cannot be a number
    - cannot contain special characters except _
    - Use camelCase. Ex: anujKumarGupta
*/

/*
    PRIMITIVE DATA TYPES
    - String
    - Number (Integer as well as Decimals)
    - Boolean
    - Undefined (Value not defined) (No glass)
    - Null (Defined value but Empty) (Empty glass)
*/

/*
    Dynamic TYPING:
    - a = 5;
    - a = "Sara"

    Koi bhi prakar ka data kabhi bhi add kar sakde ho. Flexibility badh gyi.
*/

/*
    REFERENCE TYPES:
    - Objects
    - Arrays
    - Functions

*/

/**
    OBJECTS:

    let Person = {
        Fname: 'Saras',
        LName: 'Tiwari',
        age: 23
    };

    Accessing- person.age, person[age]
 */

/*

    - ARRAYS: Data Structure used to contain a list of items

    let x = [1, 2, 3, "Sara", 5.5];
    accessing: x[0]
    x[5] = "Ramesh" // Adds a value to the array
    x[0] = "saraswati" // Will overwrite on the existing 0th value

    - JS standards are set out by ECMA
    - Console: Web application locks data on this tool.
    Majority of the data is based on network request
 */

/*
    OPERATORS:
    - Arithematic: + - * / % **(exponentiation operator)
    - INCREMENT/DECREMENT: ++ --
    - Assignment: =  +=  -=  *=  /=  etc.
    - Equality Operators: ===(Strict)  ==(Loose)
    - TERNARY: condition ? if tru : if false ;
    - LOGICAL: &&  ||  !
    - BITWISE: |  &

    OPERATOR PRECEDENCE: Easist way of solving operator precedence is by using brackets
*/

/*
    CONTROL STATEMENTS: (Same as C++)
    - If-else
    - Switch
*/

/*
    LOOPS: (Same as C++)

    - For
    - while
    - Do-while
*/


/*
    OBJECTS AND CLASSES IN JS:

    
*/
class RailwayForm
{
    submit()
    {
        alert("Form Submitted!!");
    }
    cancel(){
        alert("Reservation Cancelled!!");
    }
}

let harry = new RailwayForm();

harry.submit();
harry.cancel();



// FACTORY Function:

function createRectangle() {

    return Rectangle = {
        length : 3,
        breadth : 1,

        draw()
        {
            console.log("Drawing a rectangle");
        }
    };
}
// Rectangle.length;
// Rectangle.breadth;
// Rectangle.draw();
// let r = createRectangle();
// r.draw();


/*  
    CONSTRUCTOR FUNCTION:
    - Pascal Notations are used
*/
function circle()
{
    this.radius = 4;
    this.draw = function()
    {
        console.log("Hello I'm a circle of radius 4");
    }
}
// Object Creation:
let c1 = new circle();
c1.draw();
c1.color = "Red"; 
console.log(c1.color);
