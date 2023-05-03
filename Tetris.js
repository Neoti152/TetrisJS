const script = document.createElement('script');
script.src = './figur.js';
document.body.appendChild(script);

const script2 = document.createElement('script');
script2.src = './Matrix.js';
document.body.appendChild(script2);

let can = document.getElementById('tetris');
let con = can.getContext("2d");


let score = document.getElementById('score');
let countScore = 0;


let y =0;
let endY = 600;
let delta = 1;
let x = 140;
let endX = 300;
let requestId;
let positionX = 14;
let delay = 0;

//let fig =  Math.floor(Math.random() * 4);
let fig = 0;
let matrixFig;


let matrixH = [endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY, endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY];
let count = 0;
let isMove = false;


document.addEventListener("keydown", function(event){
if (event.code == "ArrowLeft" & isMove){
clearDrawF();
if (x== 0){
x=0;
positionX = 0;
}else{

for (let i =0 ;  i<matrixFig.length; i++){
let h1 = 0;
let h2 = 0;
if (matrixFig[i] > 0){
h1 = y;
}else{
h1 = y + hFig - Math.abs(matrixFig[i]);
}
h2 = h1+matrixFig[i];

for (let j =h1/10 ;  j<h2/10; j++){
if(mainMatrix[positionX-1 + i][59-j] ===1)
return;
}
}
x-=10;
positionX--;


}
}else if(event.code == "ArrowRight" & isMove){
clearDrawF();
if (x== 300-wFig){
positionX = 30-(wFig/10);
x=300-wFig;
}else{
for (let i =matrixFig.length-1 ;  i>=0; i--){
let h1 = 0;
let h2 = 0;
if (matrixFig[i] > 0){
h1 = y;
}else{
h1 = y + hFig - Math.abs(matrixFig[i]);
}
h2 = h1+matrixFig[i];

for (let j =h1/10 ;  j<h2/10; j++){
if(mainMatrix[positionX+1 + i][59-j] ==1)
return;
}
}
x+=10;
positionX++;

}
}
else if(event.code == "ArrowDown" & isMove){
clearDrawF();

let maxH = matrixH[positionX];

for (let i =1 ;  i<matrixFig.length; i++){
if (maxH > matrixH[positionX+i]){
maxH = matrixH[positionX+i];
}
}

y = maxH - hFig - 20;
}
else if(event.code == "Enter"){
if (isMove){
isMove = false;
cancelAnimationFrame(requestId);
}else{
move();
isMove = true;
}
}else if(event.code == "Space" & isMove){
clearDrawF();
fig = change();

 }
});


function move(){

clearDrawF();
//con.fillStyle ="#ff0000";
drawF();

y += delta;


for (let i =0 ;  i<matrixFig.length; i++){
let h = 0;
if (matrixFig[i] > 0){
h = matrixFig[i];
}else{
h = hFig;
}

if (mainMatrix[positionX+i][59-(y + h)/10] == 1 || y == endY - h ){

/*
let maxH = matrixH[positionX+i];

for (let j =0 ;  j<matrixFig.length; j++){
let hF = 0;
if (matrixFig[j] > 0){
hF = -1 * delta;
}else{
hF = hFig - Math.abs(matrixFig[j]) - delta;
}
matrixH[positionX+j]=y + hF;

}
*/
fillMatrix();
y=0;
x = 140;
positionX=14;
//fig =  Math.floor(Math.random() * 4);
break;
}
}


deleteIsFilledMainMatrix();
requestId = requestAnimationFrame(move);

if (matrixH[positionX]==0){
 alert("Игра окончена! Ваш счет: " + countScore);
 restart();
 cancelAnimationFrame(requestId);

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






function restart(){
con.clearRect(0, 0, 300, 600);
for (let i=0; i< matrixH.length; i++){
matrixH[i]=endY;
mainMatrix[i] = [];
isMove = false;
}
}


//setInterval(move, 15);