document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("header nav");


    burger.addEventListener("click", () => {
        burger.classList.toggle("open");
        nav.classList.toggle("open");
    })
})