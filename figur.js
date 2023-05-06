function drawF(){
switch (fig){
case 0:{
con.fillRect(x, y,  20, 20);
initialFig(fig);
break;
}
case 1:{
con.fillRect(x, y,  40, 10);
initialFig(fig);
break;
}
case 2:{
con.fillRect(x, y,  10, 40);
initialFig(fig);
break;
}
case 3:{
con.fillRect(x, y,  20, 10);
con.fillRect(x+10, y+10,  20, 10);
initialFig(fig);
break;
}
case 4:{
con.fillRect(x+10, y,  10, 20);
con.fillRect(x, y+10,  10, 20);
initialFig(fig);
break;
}
case 5:{
con.fillRect(x+10, y,  20, 10);
con.fillRect(x, y+10,  20, 10);
initialFig(fig);
break;
}
case 6:{
con.fillRect(x, y,  10, 20);
con.fillRect(x+10, y+10,  10, 20);
initialFig(fig);
break;
}
case 7:{
con.fillRect(x, y,  10, 20);
con.fillRect(x+10, y+10,  20, 10);
initialFig(fig);
break;
}
case 8:{
con.fillRect(x, y,  20, 10);
con.fillRect(x, y+10,  10, 20);
initialFig(fig);
break;
}
case 9:{
con.fillRect(x, y,  20, 10);
con.fillRect(x+20, y,  10, 20);
initialFig(fig);
break;
}
case 10:{
con.fillRect(x+10, y,  10, 20);
con.fillRect(x, y+20,  20, 10);
initialFig(fig);
break;
}
}
}


function clearDrawF(){
switch (fig){
case 0:{
con.clearRect(x, y, 20 , 20);
break;
}
case 1:{
con.clearRect(x, y, 40 , 10);
break;
}
case 2:{
con.clearRect(x, y, 10 , 40);
break;
}
case 3:{
con.clearRect(x, y, 20 , 10);
con.clearRect(x+10, y+10, 20 , 10);
break;
}
case 4:{
con.clearRect(x+10, y, 10 , 20);
con.clearRect(x, y+10, 10 , 20);
break;
}
case 5:{
con.clearRect(x+10, y,  20, 10);
con.clearRect(x, y+10,  20, 10);
break;
}
case 6:{
con.clearRect(x, y,  10, 20);
con.clearRect(x+10, y+10,  10, 20);
break;
}
case 7:{
con.clearRect(x, y,  10, 20);
con.clearRect(x+10, y+10,  20, 10);
break;
}
case 8:{
con.clearRect(x, y,  20, 10);
con.clearRect(x, y+10,  10, 20);
break;
}
case 9:{
con.clearRect(x, y,  20, 10);
con.clearRect(x+20, y,  10, 20);
break;
}
case 10:{
con.clearRect(x+10, y,  10, 20);
con.clearRect(x, y+20,  20, 10);
break;
}
}
}

function change(){
switch (fig){
case 0:{
break;
}
case 1:{
fig = 2;
initialFig(fig);
break;
}
case 2:{
fig = 1;
initialFig(fig);
break;
}

case 3:{
fig = 4;
initialFig(fig);
break;
}

case 4:{
fig = 3;
initialFig(fig);
break;
}
case 5:{
fig = 6;
initialFig(fig);
break;
}
case 6:{
fig = 5;
initialFig(fig);
break;
}
case 7:{
fig = 8;
initialFig(fig);
break;
}
case 8:{
fig = 9;
initialFig(fig);
break;
}
case 9:{
fig = 10;
initialFig(fig);
break;
}
case 10:{
fig = 7;
initialFig(fig);
break;
}
}
}


function initialFig(num){
switch (num){
case 0:{
matrixFig = [20, 20];
wFig=20;
hFig=20;
break;
}
case 1:{
matrixFig = [10, 10, 10, 10];
wFig=40;
hFig=10;
break;
}
case 2:{
matrixFig = [40];
wFig=10;
hFig=40;
break;
}
case 3:{
matrixFig = [10, 20, -10];
wFig=30;
hFig=20;
break;
}
case 4:{
matrixFig = [-20, 20];
wFig=20;
hFig=30;
break;
}
case 5:{
matrixFig = [-10, 20, 10];
wFig=30;
hFig=20;
break;
}
case 6:{
matrixFig = [20, -20];
wFig=20;
hFig=30;
break;
}
case 7:{
matrixFig = [20, -10, -10];
wFig=30;
hFig=20;
break;
}
case 8:{
matrixFig = [30, 10];
wFig=20;
hFig=30;
break;
}
case 9:{
matrixFig = [10, 10, 20];
wFig=30;
hFig=20;
break;
}
case 10:{
matrixFig = [-10, 30];
wFig=20;
hFig=30;
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

case 5:
return 20;

case 6:
return 30;

case 7:
return 20;

case 8:
return 30;

case 9:
return 20;

case 10:
return 30;
}
}