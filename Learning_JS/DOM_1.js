/*

HTML DOM methods are actions you can perform (on HTML Elements).
HTML DOM properties are values (of HTML Elements) that you can set or change.

The DOM Programming Interface:
- The HTML DOM can be accessed with JavaScript (and with other programming languages).
- In the DOM, all HTML elements are defined as objects.
- The programming interface is the properties and methods of each object
-   A property is a value that you can get or set (like changing the content of an HTML element).
    A method is an action you can do (like add or deleting an HTML element).

Example:
The following example changes the content (the innerHTML) of the <p> element with id="demo":
*/ // ex:
document.getElementById("demo").innerHTML = "Hello World!";
// In the example above, getElementById is a method, while innerHTML is a property.
/*
The getElementById Method:
The most common way to access an HTML element is to use the id of the element.
In the example above the getElementById method used id="demo" to find the element.

The innerHTML Property:
The easiest way to get the content of an element is by using the innerHTML property.
The innerHTML property is useful for getting or replacing the content of HTML elements. */



/*

The HTML DOM Document Object
The document object represents your web page.
If you want to access any element in an HTML page, you always start with accessing the document object.

Below are some examples of how you can use the document object to access and manipulate HTML:


JS Statements
JS Syntax
JS Comments
JS Variables
JS Let
JS Const
JS Operators
JS Arithmetic
JS Assignment
JS Data Types
JS Functions
JS Objects
JS Events
JS Strings
JS String Methods
JS String Search
JS String Templates
JS Numbers
JS BigInt
JS Number Methods
JS Number Properties
JS Arrays
JS Array Methods
JS Array Sort
JS Array Iteration
JS Array Const
JS Dates
JS Date Formats
JS Date Get Methods
JS Date Set Methods
JS Math
JS Random
JS Booleans
JS Comparisons
JS If Else
JS Switch
JS Loop For
JS Loop For In
JS Loop For Of
JS Loop While
JS Break
JS Iterables
JS Sets
JS Maps
JS Typeof
JS Type Conversion
JS Bitwise
JS RegExp
JS Precedence
JS Errors
JS Scope
JS Hoisting
JS Strict Mode
JS this Keyword
JS Arrow Function
JS Classes
JS Modules
JS JSON
JS Debugging
JS Style Guide
JS Best Practices
JS Mistakes
JS Performance
JS Reserved Words

JS Versions
JS Versions
JS 2009 (ES5)
JS 2015 (ES6)
JS 2016
JS 2017
JS 2018
JS 2019
JS 2020
JS 2021/2022
JS IE / Edge
JS History

JS Objects
Object Definitions
Object Properties
Object Methods
Object Display
Object Accessors
Object Constructors
Object Prototypes
Object Iterables
Object Sets
Object Maps
Object Reference

JS Functions
Function Definitions
Function Parameters
Function Invocation
Function Call
Function Apply
Function Bind
Function Closures

JS Classes
Class Intro
Class Inheritance
Class Static

JS Async
JS Callbacks
JS Asynchronous
JS Promises
JS Async/Await

JS HTML DOM
DOM Intro
DOM Methods
DOM Document
DOM Elements
DOM HTML
DOM Forms
DOM CSS
DOM Animations
DOM Events
DOM Event Listener
DOM Navigation
DOM Nodes
DOM Collections
DOM Node Lists

JS Browser BOM
JS Window
JS Screen
JS Location
JS History
JS Navigator
JS Popup Alert
JS Timing
JS Cookies

JS Web APIs
Web API Intro
Web Forms API
Web History API
Web Storage API
Web Worker API
Web Fetch API
Web Geolocation API

JS AJAX
AJAX Intro
AJAX XMLHttp
AJAX Request
AJAX Response
AJAX XML File
AJAX PHP
AJAX ASP
AJAX Database
AJAX Applications
AJAX Examples

JS JSON
JSON Intro
JSON Syntax
JSON vs XML
JSON Data Types
JSON Parse
JSON Stringify
JSON Objects
JSON Arrays
JSON Server
JSON PHP
JSON HTML
JSON JSONP

JS vs jQuery
jQuery Selectors
jQuery HTML
jQuery CSS
jQuery DOM

JS Graphics
JS Graphics
JS Canvas
JS Plotly
JS Chart.js
JS Google Chart
JS D3.js

JS Examples
JS Examples
JS HTML DOM
JS HTML Input
JS HTML Objects
JS HTML Events
JS Browser
JS Editor
JS Exercises
JS Quiz
JS Bootcamp
JS Certificate

JS References
JavaScript Objects
HTML DOM Objects




JavaScript HTML DOM Document
The HTML DOM document object is the owner of all other objects in your web page.

The HTML DOM Document Object
The document object represents your web page.

If you want to access any element in an HTML page, you always start with accessing the document object.

Below are some examples of how you can use the document object to access and manipulate HTML.

- Finding HTML Elements:
document.getElementById(id)	- Find an element by element id
document.getElementsByTagName(name)	- Find elements by tag name
document.getElementsByClassName(name) -	Find elements by class name



Changing HTML Elements:

Property	-   Description
element.innerHTML =  new html content	// Change the inner HTML of an element
element.attribute = new value	        // Change the attribute value of an HTML element
element.style.property = new style	    // Change the style of an HTML element

Method	    -   Description
element.setAttribute(attribute, value)	// Change the attribute value of an HTML element



Adding and Deleting Elements:
Method	                            Description
document.createElement(element)  	Create an HTML element
document.removeChild(element)	    Remove an HTML element
document.appendChild(element)	    Add an HTML element
document.replaceChild(new, old)	    Replace an HTML element
document.write(text)	            Write into the HTML output stream


Adding Events Handlers:
document.getElementById(id).onclick = function(){code}


Finding HTML Objects
The first HTML DOM Level 1 (1998), defined 11 HTML objects, object collections, and properties. These are still valid in HTML5.

Later, in HTML DOM Level 3, more objects, collections, and properties were added.

Property                            Description	                                             DOM
document.anchors                    Returns all <a> elements that have a name attribute	        1
document.applets	                Deprecated	                                                1
document.baseURI	                Returns the absolute base URI of the document	            3
document.body	                    Returns the <body> element	                                1
document.cookie	                    Returns the document's cookie	                            1
document.doctype                    Returns the document's doctype	                            3
document.documentElement        	Returns the <html> element	                                3
document.documentMode	            Returns the mode used by the browser	                    3
document.documentURI	            Returns the URI of the document	                            3
document.domain                 	Returns the domain name of the document server	            1
document.domConfig              	Obsolete.	                                                3
document.embeds	                    Returns all <embed> elements	                            3
document.forms                  	Returns all <form> elements	                                1
document.head	                    Returns the <head> element	                                3
document.images                 	Returns all <img> elements	                                1
document.implementation         	Returns the DOM implementation	                            3
document.inputEncoding          	Returns the document's encoding (character set)	            3
document.lastModified	            Returns the date and time the document was updated	        3
document.links	                 Returns all <area> and <a> elements that have a href attribute	1
document.readyState	                Returns the (loading) status of the document	            3
document.referrer	                Returns the URI of the referrer (the linking document)	    1
document.scripts	                Returns all <script> elements	                            3
document.strictErrorChecking	    Returns if error checking is enforced	                    3
document.title                  	Returns the <title> element	                                1
document.URL	                    Returns the complete URL of the document	                1

*/


/*
    JavaScript HTML DOM Element
    Finding HTML Elements
    Often, with JavaScript, you want to manipulate HTML elements.

    To do so, you have to find the elements first. There are several ways to do this:

    Finding HTML elements by id
    Finding HTML elements by tag name
    Finding HTML elements by class name
    Finding HTML elements by CSS selectors
    Finding HTML elements by HTML object collections

    Finding HTML Element by Id
    The easiest way to find an HTML element in the DOM, is by using the element id.
    This example finds the element with id="intro":

    ExamplE:
*/
const element = document.getElementById("intro");
/**
If the element is found, the method will return the element as an object (in element).
If the element is not found, element will contain null.
 */


// Finding HTML Elements by Tag Name
// This example finds all <p> elements:
// Example
const elem = document.getElementsByTagName("p");

/**
 Finding HTML Elements by Class Name
If you want to find all HTML elements with the same class name, use getElementsByClassName().
This example returns a list of all elements with class="intro".

Example
 */
const x1 = document.getElementsByClassName("intro");


// Finding HTML Elements by CSS Selectors
// If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.
// This example returns a list of all <p> elements with class="intro".
// Example
const x2 = document.querySelectorAll("p.intro");


// Finding HTML Elements by HTML Object Collections
// This example finds the form element with id="frm1", in the forms collection, and displays all element values:
// Example
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;



/**
JavaScript HTML DOM - Changing HTML
The HTML DOM allows JavaScript to change the content of HTML elements.

Changing HTML Content:
The easiest way to modify the content of an HTML element is by using the innerHTML property.

To change the content of an HTML element, use this syntax:
document.getElementById(id).innerHTML = new HTML


Changing the Value of an Attribute:

To change the value of an HTML attribute, use this syntax:
document.getElementById(id).attribute = new value

This example changes the value of the src attribute of an <img> element:
Example:
<!DOCTYPE html>
<html>
<body>
<img id="myImage" src="smiley.gif">

<script>
document.getElementById("myImage").src = "landscape.jpg";
</script>

</body>
</html>

Example explained:
The HTML document above contains an <img> element with id="myImage"
We use the HTML DOM to get the element with id="myImage"
A JavaScript changes the src attribute of that element from "smiley.gif" to "landscape.jpg"


Dynamic HTML content:
JavaScript can create dynamic HTML content:
Date : Sat Aug 26 2023 20:34:41 GMT+0530 (India Standard Time)

Example:
<!DOCTYPE html>
<html>
<body>
<script>
document.getElementById("demo").innerHTML = "Date : " + Date(); </script>
</body>
</html>
document.write()
In JavaScript, document.write() can be used to write directly to the HTML output stream:

Example
<!DOCTYPE html>
<html>
<body>
<p>Bla bla bla</p>
<script>
document.write(Date());
</script>
<p>Bla bla bla</p>
</body>
</html>

Never use document.write() after the document is loaded. It will overwrite the document.


*/




// DOM FORMS:

/*

JavaScript Form Validation
HTML form validation can be done by JavaScript.

If a form field (fname) is empty, this function alerts a message, and returns false, to prevent the form from being submitted:

JavaScript Example
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
The function can be called when the form is submitted:

HTML Form Example
<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>

JavaScript Can Validate Numeric Input
JavaScript is often used to validate numeric input



Automatic HTML Form Validation:
HTML form validation can be performed automatically by the browser:
If a form field (fname) is empty, the required attribute prevents this form from being submitted:

HTML Form Example
<form action="/action_page.php" method="post">
  <input type="text" name="fname" required>
  <input type="submit" value="Submit">
</form>

Automatic HTML form validation does not work in Internet Explorer 9 or earlier.
*/


/*

Data Validation
Data validation is the process of ensuring that user input is clean, correct, and useful.

Typical validation tasks are:

has the user filled in all required fields?
has the user entered a valid date?
has the user entered text in a numeric field?
Most often, the purpose of data validation is to ensure correct user input.

Validation can be defined by many different methods, and deployed in many different ways.

Server side validation is performed by a web server, after input has been sent to the server.

Client side validation is performed by a web browser, before input is sent to a web server.

HTML Constraint Validation
HTML5 introduced a new HTML validation concept called constraint validation.

HTML constraint validation is based on:

Constraint validation HTML Input Attributes
Constraint validation CSS Pseudo Selectors
Constraint validation DOM Properties and Methods
Constraint Validation HTML Input Attributes
Attribute	Description
disabled	Specifies that the input element should be disabled
max	Specifies the maximum value of an input element
min	Specifies the minimum value of an input element
pattern	Specifies the value pattern of an input element
required	Specifies that the input field requires an element
type 	Specifies the type of an input element
For a full list, go to HTML Input Attributes.

Constraint Validation CSS Pseudo Selectors
Selector	Description
:disabled	Selects input elements with the "disabled" attribute specified
:invalid	Selects input elements with invalid values
:optional	Selects input elements with no "required" attribute specified
:required	Selects input elements with the "required" attribute specified
:valid	Selects input elements with valid values

*/





/*

JavaScript HTML DOM - Changing CSS
The HTML DOM allows JavaScript to change the style of HTML elements.

Changing HTML Style
To change the style of an HTML element, use this syntax:

document.getElementById(id).style.property = new style
The following example changes the style of a <p> element:

Example
<html>
<body>

<p id="p2">Hello World!</p>

<script>
document.getElementById("p2").style.color = "blue";
</script>

</body>
</html>
Using Events
The HTML DOM allows you to execute code when an event occurs.

Events are generated by the browser when "things happen" to HTML elements:

An element is clicked on
The page has loaded
Input fields are changed
You will learn more about events in the next chapter of this tutorial.

This example changes the style of the HTML element with id="id1", when the user clicks a button:

Example
<!DOCTYPE html>
<html>
<body>

<h1 id="id1">My Heading 1</h1>

<button type="button"
onclick="document.getElementById('id1').style.color = 'red'">
Click Me!</button>

</body>
</html>

More Examples
Visibility: How to make an element invisible. Do you want to show the element or not?
HTML DOM Style Object Reference
For all HTML DOM style properties, look at w3schools

*/