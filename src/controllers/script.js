import Libro from "../models/Libro.js";
import { bst } from "./dependencies.js";

let btn = document.getElementById("biblioteca-btn");

btn.addEventListener("click", () => {
    let autor = document.getElementById("autor").value;
    let titulo = document.getElementById("titulo").value;
    let isbn = parseInt(document.getElementById("isbn").value); 

    if (autor && titulo && !isNaN(isbn)) {
        let libro = new Libro(autor, titulo, isbn);
        let data = bst.add(libro);
        console.log(data);
        if (data) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registro exitoso",
                showConfirmButton: false,
                timer: 1500
            });
            document.getElementById("autor").value = "";
            document.getElementById("titulo").value = "";
            document.getElementById("isbn").value = "";
        } else {
            alert("Falló el registro");
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Rellene todos los campos correctamente",
        });
    }
});

let btnSearch = document.getElementById("search-btn");
btnSearch.addEventListener("click", () => {
    let search_ISBN = parseInt(document.getElementById("search_ISBN").value); 

    if (!isNaN(search_ISBN)) {
        const result = bst.search({ isbn: search_ISBN });
        if (result) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: result,
                showConfirmButton: false,
                timer: 15000
            });
        } else {
            alert("Libro no encontrado");
        }
        document.getElementById("search_ISBN").value = "";
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, ingrese un ISBN válido para buscar",
        });
        document.getElementById("search_ISBN").value = "";
    }
});

let btnShowAll = document.getElementById("show-all-btn");
btnShowAll.addEventListener("click", () => {
    const libroList = document.getElementById("libros-list");
    libroList.innerHTML = ""; 
    
    bst.inOrderTraversal((libro) => {
        const libroDiv = document.createElement("div");
        libroDiv.textContent = `Autor: ${libro.autor}, Titulo: ${libro.titulo}, ISBN: ${libro.isbn}`;
        libroList.appendChild(libroDiv);
    });
});

let btnMinValue = document.getElementById("minValue-btn");
btnMinValue.addEventListener("click", () => {
    const minValue = bst.min();
    if (minValue !== "El árbol está vacío") {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "El valor mínimo del árbol es: " + minValue.titulo,
            showConfirmButton: false,
            timer: 15000
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El árbol está vacío",
        });
    }
});

let btnMaxValue = document.getElementById("maxValue-btn");
btnMaxValue.addEventListener("click", () => {
    const maxValue = bst.max();
    if (maxValue !== "El árbol está vacío") {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "El valor máximo del árbol es: " + maxValue.titulo,
            showConfirmButton: false,
            timer: 15000
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El árbol está vacío",
        });
    }
});
