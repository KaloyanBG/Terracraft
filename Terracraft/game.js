    // Creating variables
var x8=200,y8=500
var x=-960,y=0;
var x1=200,y1=658;
var b=new Image();
b.src='b.png';
var s=new Image();
s.src='sky.png';
var g=new Image();
g.src='g.jpg';
var d=new Image();
d.src='d.png';
function update() {
    if(isKeyPressed[65]){
        x=x+4;
        x1=x1+4;
    }
    if(isKeyPressed[68]){
        x=x-4;
        x1=x1-4;
    }
    
   
    
};
function draw() {
    context.drawImage(s,x,y ,1890,1080);
    context.drawImage(b,x8,y8 ,100,165);
    for (let i=0; i<14; ++i){
        context.drawImage(g,x1+55+(i-9)*135,y1 ,135,135);
        context.drawImage(d,x1+55+(i-9)*135,y1+135 ,135,135);
        context.drawImage(d,x1+55+(i-9)*135,y1+270 ,135,135);
    }
        

}
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};