let mainMatrix = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[], [],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

fillMatrix(){
for (let i =0 ;  i<matrixFig.length; i++){
let h1 = 0;
let h2 = 0;
if (matrixFig[i] > 0){
h1 = y - delta;
}else{
h1 = y -delta + hFig - Math.abs(matrixFig[i]);
}
h2 = h1+matrixFig[i];

for (let j =h1/10 ;  j<h2/10; j+=10){
mainMatrix[positionX + i][59 - j] =1;
}
}

}