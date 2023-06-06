
// Below line prints something on console
console.log('Hello jee, kaise ho saare?');

let a  = 9;
console.log(a);
// let a = 11; // Redeclaration of variables is not allowed by the let variable

const c = 10;
// c = 11; // const values don't change
console.log(c);

var b = 9;
console.log(b);
var b = 11;
console.log(b);

/* primitive data types
string s; // let s = "HEllo"
number n;
boolean b;
undefined c;
null n;
*/

// Dynamic Typing

let saraswati = 9;
console.log(saraswati);

saraswati = "Saraswati";
console.log(saraswati);

saraswati = 2.5;
console.log(saraswati);

saraswati = true;
console.log(saraswati);

saraswati = undefined;
console.log(saraswati);

saraswati = null;

// Above example explains dynamic typing!


/*
REFERENCE TYPES
1. object
2. Arrays
3. Structures
*/


// Objects

let saras =
{
    f_name : "Saraswati",
    l_name : "Tiwari"
};
console.log(saras.f_name);
console.log(saras.l_name);


let dre = ['uio',11];

console.log(dre[0]);
console.log(dre[1]);


let rectangle = // Rectangle is an object, it's key value properties are len and breadth
{
    len: 12,
    bre: 8,

    // A function inside an object is called a method
    draw: function()
    {
        console.log('draw'); 
    }
};

// FACTORY FUNCTION
function create_rectangle(len,bre)
{
    let rectangle = // Rectangle is an object, it's key value properties are len and breadth
    {
        len:len,
        bre:bre,

        // A function inside an object is called a method
        draw: function()
        {
            console.log('draw');
        }
    };
return rectangle;
}

let rec1 = create_rectangle(5,4);