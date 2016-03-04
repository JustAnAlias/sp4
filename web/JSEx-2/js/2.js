/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//1. Change the appearance of your divs
//a. Put 3 div tags in your HTML
//b. Select them in your js file by using document.getElementsByTagName()
//c. Give the divs a new background color

document.getElementById("div1").style.backgroundColor = "red";
document.getElementById("div2").style.backgroundColor = "blue";
document.getElementById("div3").style.backgroundColor = "pink";

//3. Create 3 divs in html with height and width being 100px and different background colors
//a. Make each of the 3 divs write a different message to the console when it is clicked

document.getElementById("div4").onclick = function() {
    console.log("div4 clicked");
};

document.getElementById("div5").onclick = function() {
    console.log("div5 clicked");
};

document.getElementById("div6").onclick = function() {
    console.log("div6 clicked");
};

//4. Create 3 divs in html with height and width being 200px and different border color
//a. Make each div show a different text messag inside whenever the mouse is over the div.
//b. Make the message disappear when the mouse moves away from the div.

document.getElementById("div7").onmouseover = function() {
    document.getElementById("div7").innerHTML = "Div7 mouseover";
};
document.getElementById("div7").onmouseout = function() {
    document.getElementById("div7").innerHTML = "Div7";
};

document.getElementById("div8").onmouseover = function() {
    document.getElementById("div8").innerHTML = "Div8 mouseover";
};
document.getElementById("div8").onmouseout = function() {
    document.getElementById("div8").innerHTML = "Div8";
};

document.getElementById("div9").onmouseover = function() {
    document.getElementById("div9").innerHTML = "Div9 mouseover";
};
document.getElementById("div9").onmouseout = function() {
    document.getElementById("div9").innerHTML = "Div9";
};
