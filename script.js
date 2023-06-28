// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent='hii gaurav mishra'
let hide_number=Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').textContent=hide_number;
let count=20;
let highscore=0;
document.querySelector('.check').addEventListener('click',function(){
    const number=Number(document.querySelector('.guess').value)
    if(!number){
        document.querySelector('.message').textContent='No value choosen';
    }
    else if(number === hide_number){
        document.querySelector('.message').textContent="Correct choice";
        document.querySelector('body').style.backgroundColor='green';
        if(count > highscore){
            highscore=count;
            document.querySelector('.highscore').textContent=highscore;
        }

    }
    else if(number>hide_number){
        document.querySelector('.message').textContent='Too high';
        count--;
        if(count>=0){
        document.querySelector('.score').textContent=count;}
        else{
        count=0;
        }

    }
    else if(number<hide_number){
        document.querySelector('.message').textContent='Too low';
        count--;
        if(count>=0){
        document.querySelector('.score').textContent=count;}
        else{
            count=0;
        }
    }
});
document.querySelector('.again').addEventListener('click',function(){
    hide_number=Math.trunc(Math.random()*20)+1;
    count=20; 
    document.querySelector('.message').textContent='Start Guessing....';
    document.querySelector('.score').textContent=count;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
});