let can = document.getElementById('tetris');
let con = can.getContext("2d");

let score = document.getElementById('score');
let countScore = 0;
//score.innerText= 125;

let y =0;
let endY = 145;
let delta = 1;
let x = 140;
let endX = 280;
let requestId;
let positionX = 7;
let delay = 50;

let matrixH = [endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY];
let count = 0;
let isMove = false;


document.addEventListener("keydown", function(event){
if (event.code == "ArrowLeft" & isMove){
con.clearRect(x, y-delta, 20, 5);
if (x== 0){
x=0;
positionX = 0;
}else{
if (y<matrixH[positionX-1]){
x-=20;
positionX--;
}
}
}else if(event.code == "ArrowRight" & isMove){
con.clearRect(x, y-delta, 20, 5);
if (x== 280){
positionX = 14;
x=280;
}else{
if (y<matrixH[positionX+1]){
x+=20;
positionX++;
}
}
}
else if(event.code == "ArrowDown" & isMove){
con.clearRect(x, y-delta, 20, 5);
y = matrixH[positionX];
}
else if(event.code == "Space"){
if (isMove){0
isMove = false;
cancelAnimationFrame(requestId);
}else{
move();
isMove = true;
}
}
});


function move(){
con.clearRect(x, y-delta, 20, 5);
//con.fillStyle ="#ff0000";
con.fillRect(x, y, 20, 5);

y += delta;
if(y>matrixH[positionX]){
y=0;
x = 140;
matrixH[positionX]-=5;
positionX=7;
}

deleteIsFilled();
requestId = requestAnimationFrame(move);

if (matrixH[positionX]==0){
 restart();
 cancelAnimationFrame(requestId);
 alert("Игра окончена! Ваш счет: " + countScore);
 countScore = 0;
 score.innerText= countScore;
 }
daleyM();
}


function daleyM(){
const date = Date.now();
let currentDate = 0;
do{
 currentDate = Date.now();
 }while(currentDate - date < delay)
}


function deleteIsFilled(){
let count = 0;
for (let i=0; i< matrixH.length; i++){
if (matrixH[i] < endY){
count+=1;
}
}
if(count == matrixH.length){
reDraw();
countScore+=1;
score.innerText= countScore;
if (countScore%2 ==0){
delay-=10;
}
}
}


function reDraw(){
con.clearRect(0, 0, 400, 800);
for (let i=0; i< matrixH.length; i++){
matrixH[i]+=5;
con.fillRect(i*20, matrixH[i]+5, 20, endY-matrixH[i]);
}
}


function restart(){
con.clearRect(0, 0, 400, 800);
for (let i=0; i< matrixH.length; i++){
matrixH[i]=endY;

isMove = false;
}
}


//setInterval(move, 15);