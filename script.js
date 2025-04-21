
const pato = document.getElementById('pato');
const quack = document.getElementById('quack');

const frases = [
    'AI QUE GOSTOSO!',
    'ME DAR LEITE!',
    'AI QUE DELÍCIA!',
    'Tô de volta, bebê!',
    'QUERO O BARBUDINHO',
    'AHH ZE DA MANGA!',
    'ME MACHUCA!',
    'AIIIIII!',
    'TA DOENDO',
    'SAFADO!',
    'QUACK QUACK!',
    'QUERO TE PEGAR!',
    'QUERO TE DAR UM BEIJINHO',
    'QUERO TE DAR UM ABRAÇO',

];

// Função para mostrar uma frase
function mostrarFrase(x, y) {
    const frase = document.createElement('div');
    frase.classList.add('frase');
    frase.textContent = frases[Math.floor(Math.random() * frases.length)];

    frase.style.left = `${x}px`;
    frase.style.top = `${y}px`;

    document.body.appendChild(frase);

    setTimeout(() => {
        frase.remove();
    }, 3000);
}

// Função para mover o pato aleatoriamente
function moverPato() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    pato.style.left = `${x}px`;
    pato.style.top = `${y}px`;
    quack.play();
    mostrarFrase(x, y);
}

// Mover o pato a cada 3 segundos
setInterval(moverPato, 1000);

// Clique no pato
pato.addEventListener('click', () => {
    alert('AIIII! você clicou no viado');
    moverPato();
});
