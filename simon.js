let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let highestScore = 0; // High score track karne ke liye
let btns=["red","yellow","green","blue"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function()
{
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
let ranind=Math.floor(Math.random()*4);

let rancolor=btns[ranind];

let ranbtn=document.querySelector(`.${rancolor}`);
// console.log(ranind);
// console.log(rancolor);
// console.log(ranbtn);
gameSeq.push(rancolor);
console.log("game sequence:",gameSeq);
    gameflash(ranbtn);
    }
    function checkAns(index){
        // console.log("current level",level);
        // let index=level-1;
        if(gameSeq[index]==userSeq[index]){
            // console.log("correct sequence");
            if(userSeq.length==gameSeq.length){
                setTimeout(levelup,500);
            }
        }
        else{
            if (level > highestScore) {
            highestScore = level;
        }
            h2.innerHTML=`game over!your score was<b> ${level}</b> <br> Highest Score: <b>${highestScore}</b> <br> press any key to start again`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";
            },150);
            reset();
        }
    }
    function btnpress(){
        console.log(this);
        let btn=this;
        userflash(btn);
        usercolor=btn.getAttribute("id");
        // console.log(usercolor);
        userSeq.push(usercolor);
        checkAns(userSeq.length-1);
    }
    let allbtns=document.querySelectorAll(".btn");
    for (btn of allbtns){
        btn.addEventListener("click",btnpress);
    }
    function reset(){
        started=false;
        level=0;
        gameSeq=[];
        userSeq=[];
    }
    