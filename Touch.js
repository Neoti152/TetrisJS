let isTouchCapable = 'ontouchstart' in window;


if(isTouchCapable){
let initialPoint;
let finalPoint;

can.addEventListener('touchstart', () => {
event.preventDefault();

initialPoint=event.changedTouches[0];
if (event.targetTouches.length == 2){
beginOrPause();
}
if (event.targetTouches.length == 3 & isMove){
traceOnOff();
}
});

can.addEventListener('touchend', () => {
event.preventDefault();

finalPoint=event.changedTouches[0];
var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
if(xAbs > 10 && yAbs > 10){

if (xAbs > yAbs) {
if (finalPoint.pageX < initialPoint.pageX ){
if(isMove)
moveLeft();

}
else{
if(isMove)
moveRight();
}
}
else {
if (finalPoint.pageY < initialPoint.pageY){
if(isMove)
rotate();
}
else{
if(isMove & !isDown)
moveDown();
}
}
}
});



}