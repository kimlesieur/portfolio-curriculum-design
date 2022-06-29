const projects = [
    {
        id: 1,
        projectName: "Projet 1",
        stack: "HTML/CSS",
        img: "./assets/img/project-1.jpg",
        keywords: "Express Router, Authentication",
        text:
            "Un projet de développement web axé sur les technologies HTML & CSS",
    },
    {
        id: 2,
        projectName: "Projet 2",
        stack: "HTML/CSS & JavaScript",
        img: "./assets/img/project-5.jpg",
        keywords: "Dynamic selection App",
        text: 
            "A new project with much value",
    },
    {
        id: 3,
        projectName: "Projet 3",
        stack: "JavaScript",
        img: "./assets/img/project-3.png",
        keywords: "REST API",
        text: 
            "A new API REST",
    },
    {
        id: 4,
        projectName: "Projet 4",
        stack: "HTML",
        img: "./assets/img/project-4.png",
        keywords: "Web App",
        text: 
            "Web app project",
    }
]


// select items
const img = document.getElementById("project-img");
const projectName = document.getElementById("project-name");
const stack = document.getElementById("stack");
const keywords = document.getElementById("keywords");
const sumary = document.getElementById("sumary");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = projects[currentItem];
  img.src = item.img;
  projectName.textContent = item.projectName;
  stack.textContent = item.stack;
  keywords.textContent = item.keywords;
  sumary.textContent = item.text;
});

// show project based on current number
function showProject(num) {
  const item = projects[num];
  img.src = item.img;
  projectName.textContent = item.projectName;
  stack.textContent = item.stack;
  sumary.textContent = item.text;
  keywords.textContent = item.keywords;
}

// show prev project
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = projects.length - 1;
    }
    showProject(currentItem);
  });


// show next project
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > projects.length - 1) {
    currentItem = 0;
  }
  showProject(currentItem);
});


import Typed from '../vendor/typed/typed2.js';

(function() {
  
  "use strict";

/**
   * Easy selector helper function
   */
 const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

const typed = select('.typed')

if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });


})()


