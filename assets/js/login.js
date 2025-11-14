function grava(){
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value

    localStorage.setItem("userNome", nome);
    localStorage.setItem("userEmail", email);

    const nomeSalvo = localStorage.getItem("userNome");
    const emailSalvo = localStorage.getItem("userEmail");
    confirma("dados gravados!", "success")
}

function confirma(acao, icone){
Swal.fire({
    title: acao,
    text: "",
    icon: icone,
    confirmButtonColor: "#564e43"
  })}

