let mainMatrix = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[], [],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];


function fillMatrix(){
for (let i =0 ;  i<matrixFig.length; i++){
let h1 = 0;
let h2 = 0;
if (matrixFig[i] > 0){
h1 = y;
h2 = h1+ Math.abs(matrixFig[i]);
}else if (matrixFig[i] < 0){
h1 = y + hFig + matrixFig[i];
h2 = h1+ Math.abs(matrixFig[i]);
} else {
h1 = y + 10;
h2 = h1+ 10;
}
for (let j = Math.floor(h1/10) ;  j< Math.floor(h2/10); j++){
mainMatrix[positionX + i][59-j] =1;
}
}
}


function deleteIsFilledMainMatrix(){
let c = 0;
for (let i=0; i< 60; ){
let count = 0;
for (let j=0; j< mainMatrix.length; j++){
if (mainMatrix[j][i] == 1){
count+=1;
}
}
if(count == mainMatrix.length){

deleteRow(i);
countScore+=1;
c++;
}else{
i++;
}
}
if (c>0){
reDrawMainMatrix();
score.innerText= countScore;
if (countScore%5 ==0){
delay-=10;
}
}
}





function deleteRow(row){
for (let i=0; i< 30; i++){
for (let j=row+1; j< mainMatrix[i].length; j++){
mainMatrix[i][j-1]=mainMatrix[i][j];

}
//matrixH[i]+=10;
mainMatrix[i][mainMatrix[i].length-1]=0;
}
}

function reDrawMainMatrix(){
con.clearRect(0, 0, 300, 600);
for (let i=0; i< 30; i++){
for (let j=0; j< mainMatrix[i].length; j++){
if (mainMatrix[i][j] ==1){
con.fillRect(i*10, (59-j)*10,  10, 10);
}
}
}
}