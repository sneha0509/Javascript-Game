score=0;
cross=true;

//music
audiogo=new Audio('scream.mp3');
 
document.onkeydown=function(e){
    console.log("key code is:",e.keyCode)
    if(e.keyCode==38){
        person=document.querySelector('.person');
        person.classList.add('animatePerson');
        setTimeout(() => {
           person.classList.remove('animatePerson') 
        },700);
    }
    if(e.keyCode==39){
        person=document.querySelector('.person');
        personX=parseInt(window.getComputedStyle(person,null).getPropertyValue('left'));
        person.style.left=personX+112+"px";
        
    }
    if(e.keyCode==37){
        person=document.querySelector('.person');
        personX=parseInt(window.getComputedStyle(person,null).getPropertyValue('left'));
        person.style.left=(personX-112)+"px";
    }
}
setInterval(() => {
    person=document.querySelector('.person');
    gameOver=document.querySelector('.gameOver');
    obstacles=document.querySelector('.obstacles');

    dx=parseInt(window.getComputedStyle(person,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(person,null).getPropertyValue('top'));
    
    ox=parseInt(window.getComputedStyle(obstacles,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacles,null).getPropertyValue('top'));

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    console.log(offsetX,offsetY)

    if (offsetX<193 && offsetY<52){
        gameOver.innerHTML="Game Over-Reload to Play Again";
        obstacles.classList.remove('obstaclesAni')
        audiogo.play();
        setTimeout(() => {
           audiogo.pause() 
        }, 1000);
    }
    else if (offsetX<145 && cross) {
        score+=1;
        updatescore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
    } 
        
    
},100);

function updatescore(score){
    scorecont.innerHTML="Your Score:"+score
}