console.log("Script running")
// Task 1: Light & Dark Mode
// Select the light and dark buttons (you can do this separately or with querySelectorAll)

let light = document.querySelector(".btn-light")
let dark = document.querySelector(".btn-dark")
let body = document.querySelector("body")
let navbarT = document.querySelector(".navbar-brand")

let cardB = document.querySelectorAll(".card-body")

let cardT = document.querySelectorAll(".card-title")
let cardP = document.querySelectorAll(".card-text")
// Extra credit: Select the navbar

let navbar = document.querySelector("nav")

// Add the event listener to the light button such that when it's clicked, the body's background color is white and text color is black
// Extra credit: Add the bg-light class and remove the bg-dark class to the navbar

light.addEventListener("click", function(event){
  navbar.classList.add("bg-light")
  navbar.classList.remove("bg-dark")
  navbarT.style.color = "black"
  body.style.backgroundColor = "white"
  for(let i=0;i<cardB.length;i++){
  cardB[i].style.backgroundColor = "white"
  cardT[i].style.color = "black"
   cardP[i].style.color = "black"
  }
})

// Add the event listener to the dark button such that when it's clicked, the body's background color is black and text color is white
//  Extra credit: Add the bg-dark class and remove the bg-light class to the navbar

dark.addEventListener("click", function(event){
  navbar.classList.add("bg-dark")
  navbar.classList.remove("bg-light")
  body.style.backgroundColor = "black"
  navbarT.style.color = "white"

  for(let i=0;i<cardB.length;i++){
  cardB[i].style.backgroundColor = "black"
  cardT[i].style.color = "white"
   cardP[i].style.color = "white"
  }
  }) 
// Task 2: Video thumbnails
// Use getElementsByClassName to select all the images in the cards

let imgArray = document.getElementsByClassName("card-img-top")

// Console log the length of the array to confirm you have all 4 images

console.log(imgArray.length)

// Add event listeners to each one such that on mouse over, the image becomes the corresponding gif and on mouse out, the gif goes back to the image
// e.g. mouseover: ears.jpg -> ears.gif
// e.g. mouseout: ears.gif -> ears.jpg
// Extra credit: do this with a for loop and one event listener (you will need string manipulation)


  for(let i=0; i <imgArray.length; i++){
    imgArray[i].addEventListener("mouseover", function(event){
      imgArray[i].src = imgArray[i].src.replace("jpg", "gif")
    })

    imgArray[i].addEventListener("mouseout", function(event){
      imgArray[i].src = imgArray[i].src.replace("gif", "jpg")
    })
    
  }