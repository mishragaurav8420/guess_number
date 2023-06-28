// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent='hii gaurav mishra'
const hide_number=Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').textContent=hide_number;
let count=20;
document.querySelector('.check').addEventListener('click',function(){
    const number=Number(document.querySelector('.guess').value)
    console.log(typeof(number))
    if(!number){
        document.querySelector('.message').textContent='No value choosen';
    }
    else if(number === hide_number){
        document.querySelector('.message').textContent="Correct choice";
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
})