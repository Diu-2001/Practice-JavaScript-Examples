let element;

element = document;

console.log(element); // This will log the document object to the console

let a;

a = document.all;

console.log(a); // This will log all elements in the document as a collection

let b;

b = document.all[6];

console.log(b); // This will log the 7th element in the document (index starts at 0)


let c;

c = document.head;
console.log(c); // This will log the head element of the document

let d;

d = document.title;
console.log(d); // This will log the body element of the document

let e;

e = document.links;
console.log(e); // This will log the body element of the document

let f;

f = document.images;
console.log(f);

let g;

g = document.doctype;
console.log(g); // This will log the doctype of the document

let h;

h = document.URL;
console.log(h); // This will log the domain of the document

let i;

i = document.baseURI;
console.log(i); // This will log the character set of the document

let j;

j = document.getElementById("header");
console.log(j); // This will log the element with id "header"

let k;

k = document.getElementsByClassName("abc");
console.log(k); // This will log all elements with class "header"

let l;

l = document.getElementsByTagName("h1");
console.log(l); // This will log all h1 elements in the document