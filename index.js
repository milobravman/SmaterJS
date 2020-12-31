/*
This repo is ment to practice Javascript capablities that I learn from either textbook
*/

//import {exporting} from "./exporting.js"
import k from "./modules/exporting.js"
import User, {printAge, printName} from "./modules/user.js"


let today = new Date;
console.log(today.getDay());
console.log(today.toString());
console.log(k)

let user = new User("bob", 10)
console.log(user)
printAge(user)

let Youbtn = document.querySelector("#Youtube")
Youbtn.addEventListener("click" , (()=> location = "https://www.youtube.com/"))

document.querySelector("#animation-btn").addEventListener("click",(()=> {
    let animatedDiv = document.querySelector("#toAnimation")
    animatedDiv.className = "animation"
}) )


//exporting()

