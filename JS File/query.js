let a;

document.querySelector("#header").innerHTML = "<h1>New Header</h1>";
a = document.querySelector("#header").innerHTML;
console.log(a); // This will log the inner HTML of the element with id "header"

let b;
b = document.querySelector("#header").getAttribute("class");
console.log(b); // This will log the class attribute of the element with id "header"

let c;
c = document.querySelectorAll("#content");
console.log(c); // This will log the style attribute of the element with id "header"