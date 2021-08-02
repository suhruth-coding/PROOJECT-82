canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "red";
width_of_line = 3;
radius = 10
var mouseEvent = "empty";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouseEvent = "mouseDown"
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown"){
        ctx.beginPath(); 
        ctx.strokeStyle = color; 
        ctx.lineWidth = width_of_line; 
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI); 
        ctx.stroke(); 
    }
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent = mouseUP;
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent = mouseleave;
}