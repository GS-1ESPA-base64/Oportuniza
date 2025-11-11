let imagens = ["./assets/imgs/banner.png", "./assets/imgs/banner2.png", "./assets/imgs/banner3.png"];

let i = 0;
let tempo = 3000;
let timer;

function slideShow(direction) {
  if (direction === 'left') {
    i--;
  } else if (direction === 'right') {
    i++;
  } else {
    i++;
  }

  if (i < 0) i = imagens.length - 1;
  if (i >= imagens.length) i = 0;

  document.getElementById('imgBanner').src = imagens[i];

  clearTimeout(timer);
  timer = setTimeout(slideShow, tempo);
}


timer = setTimeout(slideShow, tempo);
slideShow()


function confirma(){
Swal.fire('Interesse manifestado!', 'Candidatura realizada!', 'success')
}