let nome = localStorage.getItem("userNome");
let email = localStorage.getItem("userEmail");


let candidaturas = JSON.parse(localStorage.getItem("candidaturas")) || [];

let campoNome = document.getElementById("nome");
let campoCandidaturas = document.getElementById("candidaturas");

campoNome.innerHTML = `Olá, ${nome}`;

for (let x = 0; x < candidaturas.length; x++) {
    campoCandidaturas.innerHTML += `
       <div class="candidaturaIndividual"> <p>${candidaturas[x].vaga} — ${candidaturas[x].data}</p></div>
    `;
}
