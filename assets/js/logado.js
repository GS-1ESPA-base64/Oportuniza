let nome = localStorage.getItem("userNome");
let email = localStorage.getItem("userEmail");


let candidaturas = JSON.parse(localStorage.getItem("candidaturas")) || [];

let campoNome = document.getElementById("nome");
let campoCandidaturas = document.getElementById("candidaturas");

campoNome.innerHTML = `Olá, ${nome}`;
if (candidaturas.length == 0)  campoCandidaturas.innerHTML = "nenhuma candidatura encontrada"

for (let x = 0; x < candidaturas.length; x++) {
    campoCandidaturas.innerHTML += `
       <div class="candidaturaIndividual"> <p>${candidaturas[x].vaga} — ${candidaturas[x].data} <br>   <button onclick="removerCandidatura(${x})" class="btn-del"><img src="../imgs/lixeira.png" class="lixeira"></button></p></div>
    `;
}
function removerCandidatura(indice){
     candidaturas.splice(indice, 1);// 
  localStorage.setItem("candidaturas", JSON.stringify(candidaturas));// trasforma array em texto 
  window.location.reload()
}