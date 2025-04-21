const mario = document.querySelector('.mario');
const coco = document.querySelector('.coco')
const pipe = document.querySelector('.pipe');
const audiodefundo = new Audio('../Audios/musicadefundo.mp3');
const pulosound = new Audio('../Audios/pulodomario.MP3');

const score = document.querySelector('.score--value');
const buttonPlay = document.querySelector('.btn-play');
const buttonOffMusic = document.querySelector('.btn-offmusic');

audiodefundo.play()

/* pular = mariojumping.png e adiiciona a class jump pro mario e depois remove e volta pro walking */
const jump = () => {
    mario.classList.add('jump');
    mario.src = './Images/mariojumping.png';
    audiodefundo.play();
    pulosound.play();

    setTimeout( jumping = () => {

        mario.classList.remove('jump');
        mario.src = './Images/mariowalking.gif';
        jump.remove
    }, 500)
}

/* verificar se o mario bateu no cano ou nao */
const loop = setInterval( looping = () => {
 
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 75 && pipePosition > 0 && marioPosition < 100) {

       pipe.style.animation = 'none';
       pipe.style.left = `${pipePosition}px`;

       mario.style.animation = 'none';
       mario.style.bottom = `${marioPosition}px`;
       
       mario.src = './Images/game-over.png';
       mario.style.width = '75px';
       mario.style.marginLeft = '50px';

       clearTimeout(jumping);
    } else {
        incrementScore()
    }
}, 10)

const BNCoco = setInterval(() => {

    const cocoPosition = coco.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (cocoPosition <= 65 && cocoPosition > 0 && marioPosition <= 50) {

       coco.style.animation = 'none';
       coco.style.left = `${coco}px`;

       
       mario.style.animation = 'none';
       mario.style.bottom = `${marioPosition}px`;
       
       mario.src = './Images/game-over.png';
       mario.style.width = '75px';
       mario.style.marginLeft = '50px';

       clearTimeout(jumping);
        clearInterval();
    }
}, 10)

/* criar um numero aleatorio */
const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

/* adicionar score ao jogador = score.numero(textodoscore) + 10 */ 
const incrementScore = () => {     
    score.innerText = +score.innerText + 1;
    mario.classList.add('gPonto');

    console.log(incrementScore);
}

/* adicionar o evento de clicar á um botao */
buttonOffMusic.addEventListener("click", () => {
    audiodefundo.volume = 0
})

/* adicionar o evento de pular á uma key */
document.addEventListener("keydown", ({ key }) => {
    if (key == "ArrowUp") {
      jump()
    }
})


