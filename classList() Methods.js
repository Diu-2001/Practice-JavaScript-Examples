document.getElementById("header").addEventListener("click", abc);

function abc() {
    document.getElementById("header").classList.add("xyz", "efg");

let a = document.getElementById("header").classList;
console.log(a);
}

document.getElementById("header").addEventListener("click", xyz);

function xyz() {
    document.getElementById("header").classList.remove("xyz");

let a = document.getElementById("header").classList;
console.log(a);
}

document.getElementById("header").addEventListener("click", list);

function list() {

let a = document.getElementById("header").classList.length;
console.log(a);
}

document.getElementById("header").addEventListener("click", contains);

function contains() {
    document.getElementById("header").classList.toggle("xyz");
    let a = document.getElementById("header").classList.contains("xyz");
    console.log(a);
}

document.getElementById("header").addEventListener("click", toggle);

function toggle() {
    document.getElementById("header").classList.toggle("xyz");
    let a = document.getElementById("header").classList;
    console.log(a);
}






