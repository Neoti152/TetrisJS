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

let fig =  Math.floor(Math.random() * 18);

let matrixFig;
let wFig;
let hFig;

//let matrixH = [endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY, endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY,endY];
let count = 0;
let isMove = false;
let isDown = false;


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
h2 = h1+ Math.abs(matrixFig[i]);
}else if(matrixFig[i] < 0){
h1 = y + hFig + matrixFig[i];
h2 = h1+ Math.abs(matrixFig[i]);
} else{
h1 = y + 10;
h2 = h1+ 10;
}
for (let j = Math.floor(h2/10) ;  j>= Math.floor(h1/10); j--){
if(mainMatrix[positionX-1 + i][59-j] ==1)
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
h2 = h1+ Math.abs(matrixFig[i]);
}else if(matrixFig[i] < 0){
h1 = y + hFig + matrixFig[i];
h2 = h1+ Math.abs(matrixFig[i]);
}else{
h1 = y + 10;
h2 = h1+ 10;
}
for (let j = Math.floor(h2/10) ;  j>=Math.floor(h1/10); j--){
if(mainMatrix[positionX+1 + i][59-j] ==1)
return;
}
}
x+=10;
positionX++;

}
}
else if(event.code == "ArrowDown" & isMove & !isDown){
clearDrawF();
let maxH = endY;
for (let i =0 ;  i<matrixFig.length; i++){

let tempH =0;
for (let j = Math.floor((y+hFig)/10) ;  j<60; j++){
if (mainMatrix[positionX + i][59-j] == 1 || j == 59){
tempH = j*10;

break;
}
}
if (maxH > tempH){
maxH = tempH;

}
}

if (y < maxH - hFig - 15){
y = maxH - hFig - 15;
isDown = true;
}
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
let nextWidth = nextFigWidth();
let canFlag = true;
if (nextWidth > wFig){
for (let i = x+wFig; i< x + nextWidth; i+=10 ){
if (mainMatrix[i/10][59-Math.floor((y+hFig)/10)] == 1){
canFlag = false;
break;
}
}
}

if (x<= 300-nextWidth && canFlag){
clearDrawF();
change();
}
 }
});


function move(){

clearDrawF();
//con.fillStyle ="#ff0000";

y += delta;
drawF();

if (y%10 == 0){
for (let i =0 ;  i<matrixFig.length; i++){
let h = 0;
if (matrixFig[i] > 0){
h = matrixFig[i];
}else if (matrixFig[i] < 0){
h = hFig;
} else{
h = 10;
}

if (mainMatrix[positionX+i][59-((y + h)/10) ] == 1 || y+hFig >= endY){

fillMatrix();
deleteIsFilledMainMatrix();
y=-delta;
x = 140;
positionX=14;
isDown = false;
fig =  Math.floor(Math.random() * 18);

break;
}
}
}


requestId = requestAnimationFrame(move);

if (mainMatrix[positionX][59]==1){
 alert("Игра окончена! Ваш счет: " + countScore);

 cancelAnimationFrame(requestId);
 restart();
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
for (let i=0; i< mainMatrix.length; i++){
//matrixH[i]=endY;
mainMatrix[i] = [];
isMove = false;
}
}


//setInterval(move, 15);