// Variaveis

const musicas = [
    ["music/baka.mp3", "VMZ", "../img/baka"], 
    ["music/balas.mp3", "VMZ", "../img/depre"], 
    ["music/plutao.mp3", "VMZ", "../img/plutao"]
];

// Botoes 
const btnVolta = document.querySelector("#volta");
const btnPlay = document.querySelector("#play");
const btnPause = document.querySelector("#pause");
const btnProximo = document.querySelector("#proximo");

// Musicas
const musica = document.querySelector("#audio");
const img = document.querySelector("img");
const nomeMusica = document.querySelector(".nome__musica");
const nomeArtista = document.querySelector(".nome__artista");
let musicaAtual = 0;


//Eventos

//Chama as Imagem
img.src = musicas[musicaAtual][2] + ".jpg";

//função que volta as música
btnVolta.addEventListener('click', ()=>{
    
    musicaAtual--;
    
    if (musicaAtual < 0) {
        musicaAtual = musicas.length - 1;
    }
    
    musica.src = musicas[musicaAtual][0];
    img.src = musicas[musicaAtual][2] + ".jpg";
    nomeMusica.textContent = musicas[musicaAtual][0];
    nomeArtista.textContent = musicas[musicaAtual][1];
    musica.play();
    btnPlay.style.display = "none";
    btnPause.style.display = "block";
});

//função que da play na música 
btnPlay.addEventListener('click', ()=> {
    btnPlay.style.display = "none";
    btnPause.style.display = "block";
    if (musica.paused) {
        musica.play();
      }
});

// Função que pausa a música
btnPause.addEventListener('click', ()=> {
    btnPlay.style.display = "block";
    btnPause.style.display = "none";

    if (!musica.paused) {
        musica.pause();
      }
});

// Fuunção para troca de música
btnProximo.addEventListener('click', ()=>{
    musicaAtual++;
    if (musicaAtual >= musicas.length) {
        musicaAtual = 0;
    }
    
    
    musica.src = musicas[musicaAtual][0];
    img.src = musicas[musicaAtual][2] + ".jpg";
    nomeMusica.textContent = musicas[musicaAtual][0];
    nomeArtista.textContent = musicas[musicaAtual][1];
    musica.play();
    btnPlay.style.display = "none";
    btnPause.style.display = "block";
});

// função para barra de progresso
const barraProgresso = document.querySelector("progress");

function atualizarBarraProgresso() {
    let barra = document.querySelector("progress");
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    const duracaoTotal = musica.duration;
    const duracaoAtual = musica.currentTime;
    
    
    const inicioTempo = document.querySelector("#inicio");
    const fimTempo = document.querySelector("#fim");
    
    // Converter para minutos e segundos

    const minutosInicio = Math.floor(duracaoAtual / 60);
    const segundosInicio = Math.floor(duracaoAtual % 60);
    const minutosFim = Math.floor(duracaoTotal / 60);
    const segundosFim = Math.floor(duracaoTotal % 60);
  
    // Formatando com zero à esquerda se necessário
    
    const inicioFormatado = `${minutosInicio.toString().padStart(2, "0")}:${segundosInicio.toString().padStart(2, "0")}`;
    const fimFormatado = `${minutosFim.toString().padStart(2, "0")}:${segundosFim.toString().padStart(2, "0")}`;
  
    // Atualizando os elementos <p>
    inicioTempo.textContent = inicioFormatado;
    fimTempo.textContent = fimFormatado;

}

// Troca de música assim que ela chega no final
function avancarProximaMusica() {
    musicaAtual++;
    if (musicaAtual >= musicas.length) {
      musicaAtual = 0;
    }
  
    musica.src = musicas[musicaAtual][0];
    img.src = musicas[musicaAtual][2] + ".jpg";
    nomeMusica.textContent = musicas[musicaAtual][0];
    nomeArtista.textContent = musicas[musicaAtual][1];
    musica.play();
  }

// Chamando a a função proxima música
musica.addEventListener("ended", avancarProximaMusica);
  
// Chamando a barra de progresso
musica.addEventListener("timeupdate", atualizarBarraProgresso);




