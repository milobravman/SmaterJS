/*
This repo is ment to practice Javascript capablities that I learn from either textbook
*/

//import {exporting} from "./exporting.js"
import k from "./modules/exporting.js"
import User, {printAge, printName} from "./modules/user.js"
import {makeNode, printBranches, printLevels} from "./modules/tree.js"


let today = new Date;
// console.log(today.getDay());
// console.log(today.toString());
// console.log(k)

let user = new User("bob", 10)
// console.log(user)
// printAge(user)

let Youbtn = document.querySelector("#Youtube")
Youbtn.addEventListener("click" , (()=> location = "https://www.youtube.com/"))

document.querySelector("#animation-btn").addEventListener("click",(()=> {
    let animatedDiv = document.querySelector("#toAnimation")
    animatedDiv.className = "animation"
}) )

document.querySelector("#animation-rest").addEventListener("click", (()=>{
    let resetDiv = document.querySelector("#toAnimation")
    resetDiv.className = ""
}))

document.querySelector("#using-Ajax").addEventListener("click", loadDoc)

localStorage.setItem("name","John Doe");
// console.log(localStorage.getItem("name"))


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
      else {
          document.getElementById("demo").innerHTML = this.statusText
      }
    };
    xhttp.open("GET", "https://www.w3schools.com/js/ajax_info.txt", true);
    xhttp.send();
}

  // Working with trees in JS

  const d = makeNode("d",makeNode("y"),makeNode("z"))
  const b =  makeNode("b",d,makeNode("e"))
  const c =  makeNode("c",makeNode("f"),makeNode("g"))

  let x = makeNode("a", b, c)

//   console.log(x)
//   printBranches(x)
//   printBranches(b)

printLevels(x)


//exporting()




