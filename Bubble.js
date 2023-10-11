let hit_rn = 0;



function bubblemacking(){
    let stor ="";
    for(let i = 1; i<=160; i++){
        let rn = Math.floor(Math.random()*10)
        stor += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".p-body").innerHTML = stor;
}
bubblemacking();

function runtimer(){
    let timer = 6;
    let settimer = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(`#time`).textContent = timer;
        }
        else{
            clearInterval(settimer);
            document.querySelector('.p-body').innerHTML = "<h1 id='gv'>Game Over</h1>"
        }
    }, 1000);
}
runtimer();

function hit(){
    hit_rn = Math.floor(Math.random()*10)
    document.querySelector(`#hit_n`).textContent = hit_rn;
}
hit();

let score = 0;
function score_c(){
    score += 10;
    document.querySelector(`#id_score`).textContent = score;
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