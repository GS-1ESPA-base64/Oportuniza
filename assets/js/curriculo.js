let curriculoExibido = [
  "Nome:",
  "Formação:",
  "Especializações / Cursos:",
  "Experiência profissional:",
  "Hard Skills:",
  "Soft Skills: ",
  "Objetivo profissional:"
];

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

let skills = {
  organizacao: 0,
  comunicacao: 0,
  criatividade: 0,
  logica: 0,
  foco: 0,
  autogestao: 0
};

function analisarSkills(texto) {
  texto = texto.toLowerCase();

  const grupos = {
  organizacao: [
    "organização", "organizado", "planejamento", "planejar",
    "priorização", "priorizar", "metodologia", "processos",
    "rotina", "estratégia", "estruturado", "pontual",
    "agendamento", "agenda", "cronograma", "ordenado"
  ],

  comunicacao: [
    "comunicação", "comunicar", "comunicativo",
    "equipe", "colaboração", "colaborar",
    "liderança", "liderar", "lider", "coordenação", "coordenar",
    "escuta ativa", "negociação", "relacionamento",
    "trabalho em equipe", "facilitação", "clareza"
  ],

  criatividade: [
    "criatividade", "criativo", "inovar", "inovação", "inovador",
    "originalidade", "imaginação", "pensar fora da caixa",
    "soluções criativas", "experimentação", "propor", "ideias",
    "brainstorm", "design", "inventividade"
  ],

  logica: [
    "dados", "lógica", "lógico",
    "resolver", "solucionar", "solução",
    "analisar", "análise", "análitico", "diagnóstico",
    "raciocínio", "raciocínio lógico", "estratégico",
    "investigação", "tomada de decisão", "objetividade"
  ],

  foco: [
    "foco", "focado", "produtividade", "produtivo",
    "disciplina", "consistência", "concentração",
    "determinação", "comprometimento", "priorização",
    "meta", "objetivo", "persistência"
  ],

  autogestao: [
    "autonomia", "autônomo", "autogestão", "independente",
    "proatividade", "proativo",
    "responsabilidade", "autorresponsabilidade",
    "iniciativa", "autoconfiança", "accountability",
    "maturidade", "autogerenciamento"
  ]
};

for (const grupo in grupos) {  //para cada subdivisão em grupo(foco, logica, criatividade...)
  grupos[grupo].forEach(palavra => {  //para cada palavra em cada subdivisão
    const count =//aplit divide a string em uma condicao
      texto.toLowerCase().split(palavra.toLowerCase()).length - 1;
      //aqui eu to cortando a string a cada vez que aparece uma palavra de um subgrupo,
      // usando os Cases pra não ter chance de acontecer algo como responsabilidade != Responsabilidade
      // contando as ocorrencias apartir dos splits, subtraindo 1 no final pq:
      //   split("palavra") vai deixar ["a ", " aparece duas vezes ", " aqui"]
      // então length = 3 → ocorrências = 3 - 1 = 2
      // fiz essa gambiarra pra não usar expressões regulares
    skills[grupo] += count;
  });
}
}


function trocaPergunta() {
  const input = document.getElementById("txtInput");
  const resp = input.value.trim(); // trim serve pra retirar espacos
/*
vou permitir que mandem respostas vazias pra testes, ou cada teste vai demorar muito 
  if (!resp) {
    Swal.fire({
      title: "Ops!",
      text: "Por favor, preencha sua resposta antes de continuar.",
      icon: "warning",
      confirmButtonColor: "#1e64e0"
    });
    return;
  }
*/
  respostas.push(resp);
  analisarSkills(resp); // análise integrada

  input.value = "";
  contador++;

  if (contador < perguntas.length) {
    pergunta.innerHTML = perguntas[contador];
  } else {
    mostrarResumo();
  }
}

function mostrarResumo() {
  const divResp = document.getElementById("inputResposta");

  pergunta.innerHTML = "Currículo completo!";

  Swal.fire({
    title: "Currículo criado com sucesso!",
    text: "Seu perfil profissional foi avaliado.",
    icon: "success",
    confirmButtonColor: "#1e64e0"
  });

  divResp.innerHTML = "<h2>Resumo</h2>";

  for (let x = 0; x < respostas.length; x++) {
    divResp.innerHTML += `
      <p><strong>${curriculoExibido[x]}</strong> ${respostas[x]}</p>
    `;
  }

  
  divResp.innerHTML += `
    <div class="skills-box">
      
      <div class="skill-item"><strong>Organização:</strong> ${skills.organizacao}</div>
      <div class="skill-item"><strong>Comunicação:</strong> ${skills.comunicacao}</div>
      <div class="skill-item"><strong>Criatividade:</strong> ${skills.criatividade}</div>
      <div class="skill-item"><strong>Análise Lógica:</strong> ${skills.logica}</div>
      <div class="skill-item"><strong>Foco:</strong> ${skills.foco}</div>
      <div class="skill-item"><strong>Autogestão:</strong> ${skills.autogestao}</div>
    </div>
  `;
divResp.innerHTML += `
  <h2>Gráfico – Mapa de Competências</h2>
  <canvas id="graficoSkills" width="400" height="400"></canvas>
`;

// pra renderizar o gráfico vou usar a biblioteca Chart.js, cuja documentaao está em https://www.chartjs.org/docs/latest/getting-started/usage.html
  const ctx = document.getElementById("graficoSkills").getContext("2d");

new Chart(ctx, {
  type: "radar",
  data: {
    labels: [ //defino cada "ponta"  do gráfico
      "Organização", 
      "Comunicação", 
      "Criatividade", 
      "Análise Lógica", 
      "Foco", 
      "Autogestão"
    ],
    datasets: [{//aqui eu alimento o gráfico com os dados
      label: "Mapa de Competências",
      data: [
        skills.organizacao,
        skills.comunicacao,
        skills.criatividade,
        skills.logica,
        skills.foco,
        skills.autogestao
      ],
      borderColor: "#564e43",
      backgroundColor: "rgba(86, 78, 67, 0.25)",
      borderWidth: 2,
      pointBackgroundColor: "#564e43",
      pointBorderColor: "#fff",
      pointRadius: 4
    }]
  },
  options: {
    scales: {
      r: {//configuracoes de estilizacao do gráfico
        min: 0,
        max: 3,
        ticks: { display: false },
        grid: { color: "#ccc" },
        pointLabels: { 
          font: { size: 13 },
          color: "#564e43"
        }
      }
    }
  }
});
}


// exemplo de string pra teste de Soft Skill:
//planejamento, estratégia, colaboração, clareza, inovação, imaginação, análise, raciocínio lógico, produtividade, concentração, autonomia, proatividade