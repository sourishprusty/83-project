canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="emtty";
var lastpositionofx,lastpositionofy;
color="red";
widthofline=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove" mousemove);
function my mousemove (e)
{
current position_of_mouse_x - e.clientX - canvas.offsetLeft; current_position_of_mouse_y = e.clienty - canvas.offsetTop;
if (mouseEvent == "mouseDown") {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.moveTo(last_position_of_x, last_position_of_y);
ctx.lineTo(current_position_of_mouse_x, current position_of_mouse_y);
ctx.stroke();
}
last_position_of_x = current_position_of_mouse_x; last_position_of_y current_position_of_mouse_y;
    }
 lastpositionofx=currentpositionofmousex;
 lastpositionofy=currentpositionofmousey;   
}