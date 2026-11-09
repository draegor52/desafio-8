let inputDiv = document.querySelector(".input-div input");
let botonAgregar = document.querySelector(".boton-agregar");
let contenedor = document.querySelector(".container");

class Item {

    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea);
    }

    crearDiv(nuevaTarea) {

        
        let inputItem = document.createElement("input");
        inputItem.type = "text";
        inputItem.classList.add("item-input");
        inputItem.disabled = true;
        inputItem.value = nuevaTarea;

        let divItem = document.createElement("div");
        divItem.classList.add("item");

        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
        botonEditar.classList.add("boton-editar")

        let botonRemover = document.createElement("button");
        botonRemover.innerHTML = '<i class="fas fa-trash"></i>';
        botonRemover.classList.add("boton-remover");

        botonEditar.addEventListener("click", function() {

            inputItem.disabled = !inputItem.disabled;

            if (inputItem.disabled) {
                botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
            } else {
                botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
                inputItem.focus();
            }

        });

        botonRemover.addEventListener("click", function() {
            contenedor.removeChild(divItem);
        });

        divItem.appendChild(inputItem);
        divItem.appendChild(botonEditar);
        divItem.appendChild(botonRemover);

        contenedor.appendChild(divItem);
    }
}

function chequearInput() {

    if (inputDiv.value.trim() !== "") {

        new Item(inputDiv.value);
        inputDiv.value = "";
    }
}

botonAgregar.addEventListener("click", function() {
    chequearInput();
});

inputDiv.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        chequearInput();
    }
});
