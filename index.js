score = 0;
cross = true;

backAudio = new Audio('Background music.mp3');
overAudio =new Audio('Game Over.mp3');

setTimeout(() => {
    backAudio.play()
}, 1000);

document.onkeydown = function(e){
   let key = e.code
   if(key == 'ArrowUp'){
    player = document.querySelector('.player');
    player.classList.add('animatePlayer');
    setTimeout(() => {
        player.classList.remove('animatePlayer');
    }, 1000);
   }
   if(key == 'ArrowRight'){
    player = document.querySelector('.player');
    playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    player.style.left = playerX + 100 + 'px';
   }
   if(key == 'ArrowLeft'){
    player = document.querySelector('.player');
    playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    player.style.left = playerX + (-100) + 'px';
   }
}

setInterval(() => {
    player = document.querySelector('.player');
    gameOver = document.querySelector('.gameOver');
    player2 = document.querySelector('.player2');

    p1x = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    p1y = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));

    p2x = parseInt(window.getComputedStyle(player2, null).getPropertyValue('left'));
    p2y = parseInt(window.getComputedStyle(player2, null).getPropertyValue('top'));

    offSetX = Math.abs(p1x-p2x);
    offSetY = Math.abs(p1y-p2y);

    if(offSetX<93 && offSetY<50){
        gameOver.style.visibility = 'visible'
        player2.classList.remove('player2Ani')
        overAudio.play();
        setTimeout(() => {
            overAudio.pause();
            backAudio.pause();
                
        }, 1000);

    }
    else if(offSetX < 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDuration = parseFloat(window.getComputedStyle(player2, null).getPropertyValue('animation-duration'));
            aniNewDur = aniDuration - 0.3;
            player2.style.animationDuration = aniNewDur + 's';
        }, 500);
        
    }
}, 10);

const updateScore = (score) =>{
    scoreCount.innerHTML = 'Score: ' + score
}