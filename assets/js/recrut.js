let profissionais = [
  {
    nome: " Ana Souza",
    formacao: "Análise e Desenvolvimento de Sistemas - FIAP",
    experiencia: "2 anos como Front-End na TechNova",
    habilidades: "React, JavaScript, Git, UI responsiva",
    softskills: "Trabalho em equipe, adaptabilidade",
    hobbies: "Design gráfico e ilustração digital"
  },
  {
    nome: " Lucas Oliveira",
    formacao: "Engenharia de Computação - USP",
    experiencia: "3 anos com análise de dados e modelagem estatística",
    habilidades: "Python, SQL, Power BI, Pandas",
    softskills: "Pensamento analítico, comunicação",
    hobbies: "Tocar violão e ciclismo"
  },
  {
    nome: " Mariana Santos",
    formacao: "Design Digital - Mackenzie",
    experiencia: "4 anos em design de interfaces e UX Research",
    habilidades: "Figma, Illustrator, Testes A/B",
    softskills: "Empatia, criatividade",
    hobbies: "Pintura e jardinagem"
  }
];

let i = 0;
let tempo = 4000;
let timer;

function mudarSlide(direction) {
  if (direction === 'left') {
    i--;
  } else if (direction === 'right') {
    i++;
  } else {
    i++;
  }

  if (i < 0) i = profissionais.length - 1;
  if (i >= profissionais.length) i = 0;

  const p = profissionais[i];
  document.getElementById("slideConteudo").innerHTML = `
    <h3>${p.nome}</h3>
    <p><strong>Formação:</strong> ${p.formacao}</p>
    <p><strong>Experiências:</strong> ${p.experiencia}</p>
    <p><strong>Habilidades Técnicas:</strong> ${p.habilidades}</p>
    <p><strong>Soft Skills:</strong> ${p.softskills}</p>
    <p><strong>Hobbies:</strong> ${p.hobbies}</p>
    <div class="acoes">
      <button class="btn-acao" onclick="Swal.fire('Recomendação enviada!', 'Você recomendou este profissional com sucesso!', 'success')">Recomendar profissional</button>
      <button class="btn-acao" onclick="Swal.fire('Mensagem enviada!', 'você enviou uma mensagem para este profissional!', 'info')">Enviar mensagem</button>
    </div>
  `;

  clearTimeout(timer);
  timer = setTimeout(mudarSlide, tempo);
}

timer = setTimeout(mudarSlide, tempo);
mudarSlide();


