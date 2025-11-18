//funcao que verifica o login em páginas que estão dentro do pages
function verificaLogin2(){
//aqui eu tô exportando a funcao pra não ficar repetindo código toda hora
  const nomeUser = localStorage.getItem("userNome");
  const emailUser = localStorage.getItem("userEmail");


  if (nomeUser && emailUser) {
    const loginBtn = document.getElementById("login")
    if (loginBtn) {
    
      loginBtn.innerHTML = `<a href="./logado.html"><img src="../imgs/login.png" alt="login" style="width:26px;"></a>`;
      loginBtn.style.padding = "0";
      loginBtn.style.border = "none";
    }
  }
}
verificaLogin2()

function aumentaFonte() {
    var html = document.documentElement;
    var estiloAtual = window.getComputedStyle(html).getPropertyValue('font-size');
    var tamanhoAtual = parseFloat(estiloAtual);
    if (tamanhoAtual < 24){
    html.style.fontSize = (tamanhoAtual + 2) + 'px';
    }
}

function diminuiFonte() {
    var html = document.documentElement;
    var estiloAtual = window.getComputedStyle(html).getPropertyValue('font-size');
    var tamanhoAtual = parseFloat(estiloAtual);
    if (tamanhoAtual > 12){
    html.style.fontSize = (tamanhoAtual - 2) + 'px';
  }
}

window.onload = function () {
  const body = document.body;
  const botao = document.querySelector(".monocromatico");

  const modoAtivo = localStorage.getItem("monocromatico");

  if (modoAtivo === "on") {
    body.classList.add("daltonismo");
    botao.textContent = "ativar cor";
  }
};

function mudaCor() {
  const body = document.body;
  const botao = document.querySelector(".monocromatico");

  body.classList.toggle("daltonismo");

  if (body.classList.contains("daltonismo")) {
    botao.textContent = "ativar cor";
    localStorage.setItem("monocromatico", "on");
  } else {
    botao.textContent = "desativar cor";
    localStorage.setItem("monocromatico", "off");
  }
}