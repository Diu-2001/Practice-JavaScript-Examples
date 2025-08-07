let a;

a = document.querySelector("#header").style.border;
console.log(a); // This will log the border style of the element with id "header"

let b;

document.querySelector("#header").style.backgroundColor = "lightblue";
document.querySelector("#header").style.color = "darkblue";
b = document.querySelector("#header").style.backgroundColor;
console.log(b); // This will log the background color of the element with id "header"

let c;
document.querySelector("#header").className= "new-class";
c = document.querySelector("#header").className;
console.log(c); // This will log the font size of the element with id "header"

let d;
document.querySelector("#header").classList.add("new-class","abc");
d = document.querySelector("#header").classList;
console.log(d); // This will log the class list of the element with id "header"

let e;
document.querySelector("#header").classList.remove("abc");
e = document.querySelector("#header").classList;
console.log(e); // This will log the class list of the element with id "header"