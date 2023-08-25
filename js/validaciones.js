export function validar(input) {
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        if (tipoDeInput === "mensaje") {
            input.parentElement.classList.remove("formcontacto__textarea-container--invalid");
            input.parentElement.querySelector(".formcontacto__textarea-message-error").innerHTML = "";
        } else {
            input.parentElement.classList.remove("formcontacto__input-container--invalid");
            input.parentElement.querySelector(".formcontacto__input-message-error").innerHTML = "";
        }
    } else {
        if (tipoDeInput == "mensaje") {
            input.parentElement.classList.add("formcontacto__textarea-container--invalid");
            input.parentElement.querySelector(".formcontacto__textarea-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
        } else {
            input.parentElement.classList.add("formcontacto__input-container--invalid");
            input.parentElement.querySelector(".formcontacto__input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
        }
    }
}

const mensajesDeError = {
    nombre: {
        valueMissing: "The name field cannot be empty.",
        patternMismatch: "The name field must contain a maximum of 50 characters.",
    },
    email: {
        valueMissing: "The mail field cannot be empty.",
        typeMismatch: "The email is invalid",
    },
    asunto: {
        valueMissing: "The subject field cannot be empty.",
        patternMismatch: "The subject field must contain a maximum of 50 characters.",
    },
    mensaje: {
        valueMissing: "The message field cannot be empty.",
    }
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooLong",
];

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}