const url =' https://randomuser.me/api/?results=3&inc=name,email,picture';
const nombre =document.getElementById('nombre');
const email =document.getElementById('email');
const imagen = document.getElementById("imagen");
const perfil = document.getElementById("perfil");

fetch(url)  
    .then(datos => datos.json())
    .then(datos => {  
      perfil.innerHTML = `<div class="card"> <img src = "${datos.results[0].picture.large}"</img><br>${datos.results[0].name.last}, ${datos.results[0].name.first}<br>${datos.results[0].email}</div><div class="card"> <img src = "${datos.results[1].picture.large}"</img><br>${datos.results[1].name.last}, ${datos.results[1].name.first}<br>${datos.results[1].email}</div><div class="card"> <img src = "${datos.results[2].picture.large}"</img><br>${datos.results[2].name.last}, ${datos.results[2].name.first}<br>${datos.results[2].email}</div>`;
    });
 