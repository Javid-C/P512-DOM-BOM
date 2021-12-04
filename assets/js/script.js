// Array.prototype.customArrSort = function() {
//     let isSorted = false;
//     while (!isSorted) {
//         isSorted = true;
//         for (let i = 0; i < this.length; i++) {
//             if (this[i] > this[i + 1]) {
//                 let next = this[i + 1];
//                 this[i + 1] = this[i];
//                 this[i] = next;
//                 isSorted = false;
//             }
//         }
//     }

//     return this;
// }


// let arr = [9, 3, 1, -15, -5, 20, 11]

// console.log(arr);

// console.log(arr.customArrSort());


// window.navigator.geolocation.getCurrentPosition((location) => {
//     alert("check the console")
//     console.log(location);
// }, () => {
//     alert("You didnt let to ge tyou location pls try again")
// })

// setTimeout(() => {
//     console.log("Hello P512")
// }, 5000);


// setInterval(() => {
//     console.log("Hello World");
// }, 1000);

let h1 = document.querySelector("h1[class='title']")

// let headings = document.querySelectorAll("h1[class='title']")

// console.log(headings);

// console.log(h1);
// console.log(heading);
// headings.forEach((h1) => {
//     console.log(h1);
// })

// let h1Id = document.getElementById("second")

// let headings = document.getElementsByClassName("title").namedItem("nameAttr")
// let headings = Array.from(document.getElementsByClassName("title"))

// console.log(headings);

// let headings = Array.from(document.getElementsByTagName("h1"))
// console.log(headings);

// headings.forEach((h1) => {
//     console.log(h1);
// })

// let html = document.querySelector("html")

// console.log(h1.nextSibling);

// console.log(document.documentElement.parentNode);

let div = document.createElement("div")
let div2 = document.createElement("div")

div.innerHTML = "<b>Hello world</b>"
div2.innerHTML = "<b>Div 2</b>"

// div.innerText = "<b>Hello world</b>"

div.id = "first"

div.className = "firstClass"

div.classList.add("secondClass");
div.classList.add("active");
div.classList.toggle("active2")
    // div.classList.remove("secondClass")

// console.log(div);

// console.log(div);

// let container = document.querySelector(".container")

// container.prepend(div);
// let item = container.append(div, div2);

// let item2 = container.appendChild(div)

// console.log(item2);

// container.replaceChild(div, h1);



//Classwork
// let container = document.createElement("div")
// let ul = document.createElement("ul")
// let li = document.createElement("li")
// let li2 = document.createElement("li")
// let li3 = document.createElement("li")

// container.className = "container";

// ul.className = "list"

// li.className = "item"
// li2.className = "item"
// li3.className = "item"

// li.id = "firstLi"

// li2.id = "secondLi"

// li3.id = "thirdLi"

// li.innerText = "Item 1"

// li2.innerText = "Item 2"

// li3.innerText = "Item 3"


// ul.append(li, li2, li3)
// container.appendChild(ul)

// document.body.appendChild(container)


let input = document.getElementById("input")
input.setAttribute("name", "firstname");
let name = input.getAttribute("name")

input.removeAttribute("name")

console.log(input);
console.log(name);


// input.onkeyup = function() {
//     console.log(input.value);
// }