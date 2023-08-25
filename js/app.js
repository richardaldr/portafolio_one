import { validar } from "./validaciones.js";

const inputs = document.querySelectorAll("input");
const txtArea = document.getElementById("message");

txtArea.addEventListener("blur", (event) => {
    validar(event.target);
});

inputs.forEach((inputElement) => {
    inputElement.addEventListener("blur", (event) => {
        validar(event.target);
    });
});