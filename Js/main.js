let musicas = [
    {titulo:'A prova de bala', artista:'VMZ', src:'song/balas.mp3', img:'img/depre.jpg'},    
    {titulo:'Plutão', artista:'VMZ', src:'song/plutao.mp3', img:'img/plutao.jpg'},
    {titulo:'Baka', artista:'VMZ', src:'song/baka.mp3', img:'img/baka.jpg'}
];

//inicio
let musica = document.getElementById('audio');
let musicaIndex = 0;

let duracaoMusica = document.getElementById('fim');
let imagem = document.querySelector('img');
let nomeMusica = document.getElementById('nmsc');
let nomeArtista = document.getElementById('nart');

renderizarMusica(indexMusica);

// Eventos
document.getElementById('play').addEventListener('click', tocarMusica);

document.getElementById('pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.getElementById('previous').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.getElementById('next').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}