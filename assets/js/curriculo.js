let respostas = [];
let perguntas = [
  "Qual é o seu nome completo?",
  "Qual é a sua formação acadêmica?",
  "Possui alguma especialização ou curso complementar?",
  "Descreva brevemente sua experiência profissional.",
  "Quais são suas principais habilidades técnicas?",
  "Quais são suas soft skills (habilidades comportamentais)?",
  "Qual é o seu objetivo profissional?"
];

let contador = 0;
let pergunta = document.getElementById("pergunta");

function trocaPergunta() {
  const input = document.getElementById("txtInput");
  const resp = input.value.trim();


  if (!resp) {
    Swal.fire({
      title: "Ops!",
      text: "Por favor, preencha sua resposta antes de continuar.",
      icon: "warning",
      confirmButtonColor: "#1e64e0"
    });
    return;
  }

  respostas.push(resp);
  input.value = "";
  contador++;

  if (contador < perguntas.length) {
    pergunta.innerHTML = perguntas[contador];
  } else {
    const divResp = document.getElementById("inputResposta");
    pergunta.innerHTML = "Currículo completo! Parabéns 🎉";
    divResp.innerHTML = "Resumo das informações:<br><br>";

    alertaBonito(event);

    for (let x = 0; x < respostas.length; x++) {
      divResp.innerHTML += `
        <strong>${perguntas[x]}</strong><br>
        ${respostas[x]}<br><br>
      `;
    }
  }
}

function alertaBonito(event) {
  event.preventDefault();
  Swal.fire({
    title: "Currículo criado com sucesso!",
    text: "Suas informações foram registradas.",
    icon: "success",
    confirmButtonColor: "#1e64e0"
  });
}
