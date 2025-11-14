console.log("acessou")
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