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
case 11:{
con.fillRect(x, y+10,  20, 10);
con.fillRect(x+20, y,  10, 20);
initialFig(fig);
break;
}
case 12:{
con.fillRect(x, y,  10, 20);
con.fillRect(x, y+20,  20, 10);
initialFig(fig);
break;
}
case 13:{
con.fillRect(x, y,  10, 20);
con.fillRect(x+10, y,  20, 10);
initialFig(fig);
break;
}
case 14:{
con.fillRect(x, y,  20, 10);
con.fillRect(x+10, y+10,  10, 20);
initialFig(fig);
break;
}
case 15:{
con.fillRect(x+10, y,  10, 10);
con.fillRect(x, y+10,  30, 10);
initialFig(fig);
break;
}
case 16:{
con.fillRect(x, y,  10, 30);
con.fillRect(x+10, y+10,  10, 10);
initialFig(fig);
break;
}
case 17:{
con.fillRect(x, y,  30, 10);
con.fillRect(x+10, y+10,  10, 10);
initialFig(fig);
break;
}
case 18:{
con.fillRect(x, y+10,  10, 10);
con.fillRect(x+10, y,  10, 30);
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
case 11:{
con.clearRect(x, y+10,  20, 10);
con.clearRect(x+20, y,  10, 20);
break;
}
case 12:{
con.clearRect(x, y,  10, 20);
con.clearRect(x, y+20,  20, 10);
break;
}
case 13:{
con.clearRect(x, y,  10, 20);
con.clearRect(x+10, y,  20, 10);
break;
}
case 14:{
con.clearRect(x, y,  20, 10);
con.clearRect(x+10, y+10,  10, 20);
break;
}
case 15:{
con.clearRect(x+10, y,  10, 10);
con.clearRect(x, y+10,  30, 10);
break;
}
case 16:{
con.clearRect(x, y,  10, 30);
con.clearRect(x+10, y+10,  10, 10);
break;
}
case 17:{
con.clearRect(x, y,  30, 10);
con.clearRect(x+10, y+10,  10, 10);
break;
}
case 18:{
con.clearRect(x, y+10,  10, 10);
con.clearRect(x+10, y,  10, 30);
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
case 11:{
fig = 12;
initialFig(fig);
break;
}
case 12:{
fig = 13;
initialFig(fig);
break;
}
case 13:{
fig = 14;
initialFig(fig);
break;
}
case 14:{
fig = 11;
initialFig(fig);
break;
}
case 15:{
fig = 16;
initialFig(fig);
break;
}
case 16:{
fig = 17;
initialFig(fig);
break;
}
case 17:{
fig = 18;
initialFig(fig);
break;
}
case 18:{
fig = 15;
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
case 11:{
matrixFig = [-10, -10, 20];
wFig=30;
hFig=20;
break;
}
case 12:{
matrixFig = [30, -10];
wFig=20;
hFig=30;
break;
}
case 13:{
matrixFig = [20, 10, 10];
wFig=30;
hFig=20;
break;
}
case 14:{
matrixFig = [10, 30];
wFig=20;
hFig=30;
break;
}
case 15:{
matrixFig = [-10, 20, -10];
wFig=30;
hFig=20;
break;
}
case 16:{
matrixFig = [30, 0];
wFig=20;
hFig=30;
break;
}
case 17:{
matrixFig = [10, 20, 10];
wFig=30;
hFig=20;
break;
}
case 18:{
matrixFig = [0, 30];
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

case 11:
return 20;

case 12:
return 30;

case 13:
return 20;

case 14:
return 30;

case 15:
return 20;

case 16:
return 30;

case 17:
return 20;

case 18:
return 30;
}
}