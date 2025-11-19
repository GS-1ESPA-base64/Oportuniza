// funcao que verifica o login apartir da index, se colocar em outra pagina
// ele quebra o link
function verificaLogin(){
//aqui eu tô exportando a funcao pra não ficar repetindo código toda hora
  const nomeUser = localStorage.getItem("userNome");
  const emailUser = localStorage.getItem("userEmail");


  if (nomeUser && emailUser) {
    const loginBtn = document.getElementById("login")
    if (loginBtn) {
    
      loginBtn.innerHTML = `<a href="./assets/pages/logado.html"><img src="./assets/imgs/login.png" alt="login" style="width:26px;"></a>`;
      loginBtn.style.padding = "0";
      loginBtn.style.border = "none";
    }
  }
}
verificaLogin()
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
    botao.textContent = "Desativar monocromático";
  }
};

function mudaCor() {
  const body = document.body;
  const botao = document.querySelector(".monocromatico");

  body.classList.toggle("daltonismo");

  if (body.classList.contains("daltonismo")) {
    botao.textContent = "desativar mono";
    localStorage.setItem("monocromatico", "on");
  } else {
    botao.textContent = "Ativar mono";
    localStorage.setItem("monocromatico", "off");
  }
}