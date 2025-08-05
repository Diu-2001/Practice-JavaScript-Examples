

/*document.getElementById("header").onclick = abc;

function abc() {
    document.getElementById("header").style.backgroundColor = "black";    
}

document.getElementById("header").addEventListener("click", function() {
    document.getElementById("header").style.backgroundColor = "blue";
});*/

document.querySelector(".inner").addEventListener("click", function() {
    alert("Inner Clicked!");
},true);

document.querySelector(".outer").addEventListener("click", function() {
    alert("Outer Clicked!");
},true);