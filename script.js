document.body.style.backgroundColor = "#F7F0B1";

let city = document.querySelector(".city");
city.addEventListener("click", clickCity);

function clickCity() {

city.classList.add("clear")
home.classList.remove("clear")
oatmeal.classList.remove("clear")
dessert.classList.remove("clear")

let p = document.querySelector("#bio");
p.innerHTML = " a city view of LA, taken at a park. "

}

let home = document.querySelector(".home");
home.addEventListener("click",clickHome);

function clickHome(){

city.classList.remove("clear")
home.classList.add("clear")
oatmeal.classList.remove("clear")
dessert.classList.remove("clear")

let p = document.querySelector("#bio");
p.innerHTML = " palos verdes, this is where i grew up. "

}

let oatmeal = document.querySelector(".oatmeal");
oatmeal.addEventListener("click",clickOatmeal);

function clickOatmeal(){

city.classList.remove("clear")
home.classList.remove("clear")
oatmeal.classList.add("clear")
dessert.classList.remove("clear")

let p = document.querySelector("#bio");
p.innerHTML = " oatmeal, i love everything oats. "

}

let dessert = document.querySelector(".dessert");
dessert.addEventListener("click",clickDessert);

function clickDessert(){

city.classList.remove("clear")
home.classList.remove("clear")
oatmeal.classList.remove("clear")
dessert.classList.add("clear")

let p = document.querySelector("#bio");
p.innerHTML = " dessert, i miss going to cafes."

}



