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
