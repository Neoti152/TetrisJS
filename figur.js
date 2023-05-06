function drawF(){
switch (fig){
case 0:{
con.fillRect(x, y,  20, 20);
matrixFig = [20, 20];
wFig=20;
hFig=20;
break;
}
case 1:{
con.fillRect(x, y,  40, 10);
matrixFig = [10, 10, 10, 10];
wFig=40;
hFig=10;
break;
}
case 2:{
con.fillRect(x, y,  10, 40);
matrixFig = [40];
wFig=10;
hFig=40;
break;
}
case 3:{
con.fillRect(x, y,  20, 10);
con.fillRect(x+10, y+10,  20, 10);
matrixFig = [10, 20, -10];
wFig=30;
hFig=20;
break;
}
case 4:{
con.fillRect(x+10, y,  10, 20);
con.fillRect(x, y+10,  10, 20);
matrixFig = [-20, 20];
wFig=20;
hFig=30;
break;
}
}
}


function clearDrawF(){
switch (fig){
case 0:
con.clearRect(x, y, 20 , 20);
break;
case 1:
con.clearRect(x, y, 40 , 10);
break;
case 2:
con.clearRect(x, y, 10 , 40);
break;
case 3:
con.clearRect(x, y, 20 , 10);
con.clearRect(x+10, y+10, 20 , 10);
break;
case 4:
con.clearRect(x+10, y, 10 , 20);
con.clearRect(x, y+10, 10 , 20);
break;
}
}

function change(){
switch (fig){
case 0:{
break;
}
case 1:{
fig = 2;
matrixFig = [40];
wFig=10;
hFig=40;
break;
}
case 2:{
fig = 1;
matrixFig = [10, 10, 10, 10];
wFig=40;
hFig=10;
break;
}

case 3:{
fig = 4;
matrixFig = [-20, 20];
wFig=20;
hFig=30;
break;
}

case 4:{
fig = 3;
matrixFig = [10, 20, -10];
wFig=30;
hFig=20;
break;
}
}
}


function nextFigWidth(){
switch (fig){
case 0:
return 20;

case 1:
return 10;
case 2:
return 40;

case 3:
return 20;

case 4:
return 30;

}
}