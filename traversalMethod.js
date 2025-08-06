let a = document.getElementById("inner").parentElement;

console.log(a); // This will log the parent element of the element with id "inner"

let b = document.getElementById("outer").parentElement;

console.log(b); // This will log the children of the element with id "inner"

let c = document.getElementById("outer").parentElement.style.background = "red";
console.log(c); // This will log the background color of the parent element of "outer"

let d = document.getElementById("outer").parentNode;

console.log(d); // This will log the children of the element with id "outer"

let e = document.getElementById("outer").children;
console.log(e); // This will log the children of the element with id "outer"

let f = document.getElementById("outer").children[0];
console.log(f); // This will log the first child of the element with id "outer"

let g = document.getElementById("outer").children[1].children;
console.log(g); // This will log the children of the first child of the element with id "outer"

let h = document.getElementById("inner").childNodes;
console.log(h); // This will log all child nodes of the element with id "outer"

let i = document.getElementById("inner").childNodes[1].innerHTML;
console.log(i); // This will log the inner HTML of the first child node of the element with id "outer"

let j = document.getElementById("inner").firstElementChild;
console.log(j); // This will log the first child node of the element with id "inner"

let k = document.getElementById("inner").lastElementChild;
console.log(k); // This will log the last child node of the element with id "inner"

let l = document.getElementById("outer").firstElementChild;
console.log(l); // This will log the first child element of the element with id "inner"

let m = document.getElementById("outer").nextElementSibling;
console.log(m); // This will log the next sibling element of the element with id "outer"

let n = document.getElementById("inner").previousElementSibling;    
console.log(n); // This will log the previous sibling element of the element with id "outer"