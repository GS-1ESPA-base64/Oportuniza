function salvaCandidatura(vaga) {
  try {//                                       aqui eu tô fazendo uma verificao também, tento pegar o array
     let candidaturas = JSON.parse(localStorage.getItem("candidaturas")) || [];// se ele não existir, cria um

  candidaturas.push({// adiciono no array com .push no javascript
    vaga: vaga,
    data: new Date().toLocaleString("pt-BR") // usando o objeto Date para registrar a data da candidatura
  });

  localStorage.setItem("candidaturas", JSON.stringify(candidaturas));
    
    return true; 
  } catch (e) {
    return false;
  }
}

function confirma(vaga) {
  if (salvaCandidatura(vaga)) {
    Swal.fire({
      title: "Candidatura Enviada!",
      text: "Suas respostas foram registradas com sucesso.",
      icon: "success",
      confirmButtonColor: "#564e43"
    });
  } else {
    Swal.fire({
      title: "Erro ao salvar",
      text: "Não foi possível registrar sua candidatura.",
      icon: "error"
    });
  }
}
