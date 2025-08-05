let a;

a = document.getElementById("content").innerHTML;
console.log(a); // This will log all elements with class "header"

let b;

b = document.getElementById("header").getAttribute("class");
console.log(b); // This will log the class attribute of the element with id "content"

let c;
c = document.getElementById("header").getAttribute("style");
console.log(c); // This will set the class attribute of the element with id "header" to "new-class"

let d;
d = document.getElementById("header").getAttribute("onClick");
console.log(d); // This will log the class attribute of the element with id "header"

let e;
e = document.getElementById("header").getAttributeNode("onClick");
console.log(e); // This will set the class attribute of the element with id "header" to "new-class"

let f;
f = document.getElementById("header").attributes;
console.log(f); // This will log the class attribute of the element with id "header"

let g;  
document.getElementById("header").innerHTML = "<h1>New Header</h1>";
g = document.getElementById("header").innerHTML;
console.log(g); // This will log the class name of the element with id "header"

let h;
document.getElementById("header").setAttribute("class", "new-class");
h = document.getElementById("header").getAttribute("class");
console.log(h); // This will log the class name of the element with id "header"

let i;
document.getElementById("header").removeAttribute("style");
i = document.getElementById("header").getAttribute("style");
console.log(i); // This will log the class name of the element with id "header"

