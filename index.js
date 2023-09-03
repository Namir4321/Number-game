// console.log(document.querySelector('.guess').
// textContext);
// document.querySelector(".guess").textContent="correct number";
// document.querySelector(".sconum").textContent="20";
// document.querySelector(".questnum").textContent="7";
// document.querySelector("#inputadd").value;

// document.querySelector(".check")
// .addEventListener('click',getnumber() {
// console.log(document.querySelector(".guess").value);
// });

let getnumber = Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
console.log(getnumber);
document.querySelector('.check').addEventListener
('click',function(){
     const guess=Number(document.querySelector('#inputadd').value);
    console.log(guess,typeof guess);
    if(!guess){
        document.querySelector(".guess").textContent="Not a number!";
      }  
      else if(guess===getnumber){
        document.querySelector(".guess").textContent="Correct guess";
        document.querySelector( ".questnum").textContent=getnumber;

        document.querySelector('body ').style.backgroundColor='#60b347';
document.querySelector('.questnum').style.width='30rem ';
if(score>highscore){
highscore=score;
document.querySelector('.sconum').textContent=highscore;
}
     
else  if(score<20){
            score++;
            document.querySelector(".scorenum").textContent=score;
        }
      }else if(guess!==getnumber){
        if(score>0){
            document.querySelector(".guess").textContent=guess>getnumber ?"to high":"too low";
            score--;
            document.querySelector('.scorenum').textContent=score;
           }else{
               document.querySelector('.guess').textContent="you lost the game";
           }
      }
      //when guess is too low
    //   else if(guess>getnumber){
    //     if(score>0){
    //      document.querySelector(".guess").textContent="to high";
    //      score--;
    //      document.querySelector('.scorenum').textContent=score;
    //     }else{
    //         document.querySelector('.guess').textContent="you lost the game";
    //     }
    // }
    // else if(guess<getnumber){
    //     if(score>0){
    //         document.querySelector(".guess").textContent="to low";
    //         score--;
    //         document.querySelector('.scorenum').textContent=score;
    //        }else{
    //            document.querySelector('.guess').textContent="you lost the game";
    //        }
    // }
});
document.querySelector('.again').addEventListener
('click',function (){
score=20;
getnumber = Math.trunc(Math.random()*20)+1;
console.log(getnumber);
document.querySelector('.guess').textContent
='start guessing...';
document.querySelector('.scorenum').textContent=score;
document.querySelector('.questnum').textContent='?';
document.querySelector('.scorenum').value='';

document.querySelector('body ').style.backgroundColor='black';
document.querySelector('.scorenum').style.width='15rem';
});
















