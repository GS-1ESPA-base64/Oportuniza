let respostas = [];
let perguntas = [
  "Qual é o seu nome?",
  "Qual é o seu cargo atual ou área de atuação?",
  "Há quanto tempo trabalha nesse cargo ou setor?",
  "Como você enxerga o mercado de trabalho na sua área hoje?",
  "Quais habilidades você considera mais importantes para se destacar?",
  "Você está em busca de novas oportunidades?"
];


let contador = 0;
let pergunta = document.getElementById("pergunta");

function trocaPergunta() {
  const input = document.getElementById("txtInput");
  const resp = input.value;

  if (!resp) {
    Swal.fire({
      title: "Ops!",
      text: "Por favor, responda antes de continuar.",
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
    pergunta.innerHTML = "Formulário concluído! Obrigado por compartilhar.";
    divResp.innerHTML = "Resumo das respostas:<br><br>";

    alertaBonito(event);

    for (let x = 0; x < respostas.length; x++) {
      divResp.innerHTML += `${x + 1}. ${perguntas[x]}<br><strong>Resposta:</strong> ${respostas[x]}<br><br>`;
    }
  }
}

function alertaBonito(event) {
  event.preventDefault();
  Swal.fire({
    title: "Questionário enviado!",
    text: "Suas respostas foram registradas com sucesso.",
    icon: "success",
    confirmButtonColor: "#1e64e0"
  });
}
