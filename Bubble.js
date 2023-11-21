let hit_rn = 0;



function bubblemacking(){
    let stor ="";
    for(let i = 1; i<=160; i++){
        let rn = Math.floor(Math.random()*10)
        stor += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".p-body").innerHTML = stor;
}

function hit(){
    hit_rn = Math.floor(Math.random()*10)
    document.querySelector(`#hit_n`).textContent = hit_rn;
}

let score = 0;
function score_c(){
    score += 10;
    document.querySelector(`#id_score`).textContent = score;
};

function runtimer(){
    let timer = 60;
    let settimer = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(`#time`).textContent = timer;
        }
        else{
            clearInterval(settimer);
            gameOverSection.style.display = "flex"
            document.querySelector('.p-body').innerHTML = ``;
            document.querySelector('.your-score').innerHTML = `Your score = ${score}`
        }
    }, 1000);
}

document.querySelector(".p-body").addEventListener("click", 
function(dets){
    var track = (Number(dets.target.textContent));
    if(track === hit_rn){
        score_c();
        bubblemacking();
        hit();
    }
});

let playSection = document.querySelector(".play-section");
let playBtn = document.querySelector(".play-btn");

playBtn.addEventListener('click', () => {
    hit();
    runtimer();
    bubblemacking();
    playSection.style.display = "none"
});

let gameOverSection = document.querySelector('.game-over-section');
let playAgainBtn = document.querySelector(".play-again-btn");

playAgainBtn.addEventListener('click', () => {
    hit();
    runtimer();
    bubblemacking();
    score = 0;
    document.querySelector(`#id_score`).textContent = score;
    gameOverSection.style.display = "none"
});