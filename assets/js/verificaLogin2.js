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
    html.style.fontSize = (tamanhoAtual + 2) + 'px';
}

function diminuiFonte() {
    var html = document.documentElement;
    var estiloAtual = window.getComputedStyle(html).getPropertyValue('font-size');
    var tamanhoAtual = parseFloat(estiloAtual);
    html.style.fontSize = (tamanhoAtual - 2) + 'px';
}
