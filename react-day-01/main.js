let number = 0;

const display = document.querySelector("#display");
const add = document.querySelector("#add");
const substract = document.querySelector("#substract");

add.addEventListener("click", () => {
  number++;
  display.textContent = number;
});
substract.addEventListener("click", () => {
    number--;
    display.textContent = number;
});