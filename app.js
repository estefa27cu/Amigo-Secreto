// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let mensaje ="Ingrese un nombre"


function agregarAmigos () {
    let nombreAmigo = document.getElementById("amigo").value.trim();
    if (nombreAmigo === "") {
        alert ("Por favor, ingrese un nombre valido");
        return;
    }
    amigos.push(nombreAmigo);
    mostrarListaAmigo ();
    document.getElementById("amigo").value = "";
}

function mostrarListaAmigo () {
    let mostrarAmigos = document.getElementById('listaAmigo');
     mostrarAmigos.innerHTML = ""

     for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = amigos[i];
        mostrarAmigos.appendChild(elementoLista);
     }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert ("Por favor, agregue un nombre");
        return; 
    }
    let amigoSecreto = amigos.splice(Math.floor(Math.random() * amigos.length), 1)[0]; 
    document.getElementById("resultado").textContent = (`El amigo secreto es: ${amigoSecreto}`); 

}

    