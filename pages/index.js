// FAQ-Toggle

const faqItems = document.querySelectorAll(".faq-item"); 


faqItems.forEach((item,index) => {
    item.addEventListener("click",(e) => {
        item.children[1].classList.toggle("faq-answer-hidden");
    })
})

// Darkmode Button
const bodyMode = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const themeBtn = document.querySelector("#themeButton");
const faqSection = document.querySelector(".faq");


themeBtn.addEventListener("click",(e) => {
    console.log(bodyMode.classList);
    faqSection.classList.toggle("faq-darkmode");
    faqItems.forEach((element) => {
        element.classList.toggle("faq-item-darkmode");
    })
    bodyMode.classList.toggle("lightmode");
    bodyMode.classList.toggle("darkmode");
    navbar.classList.toggle("navbar-darkmode");
    if(bodyMode.classList.contains("darkmode")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }
})