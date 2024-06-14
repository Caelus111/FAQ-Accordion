const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const sliders = document.querySelectorAll(".slider");
const btnsPlus = document.querySelectorAll("button .plus");
const btnsMinus = document.querySelectorAll("button .minus");



sliders.forEach((slider) => {
    slider.addEventListener("click", () => {
        slider.classList.toggle("active");
    });
})
