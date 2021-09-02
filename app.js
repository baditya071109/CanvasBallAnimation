const canvas = document.getElementById("mycanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

const balls = [];

for( let i = 0; i<15; i++){
    let r = Math.floor(Math.random() * 30) + 15;
    let x = Math.random()*(canvaswidth - r * 2) + r;
    let y = Math.random()*(canvasheight - r * 2) + r;
    let c = 'red';
    balls.push(new Circle(x, y, r, c));
}

function Circle(x, y, r, c){
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;

    this.dx = Math.floor(Math.random()*4)+1;
    this.dx *=Math.floor(Math.random()*2)==1?1:-1;
    this.dy = Math.floor(Math.random()*4)+1;
    this.dy *=Math.floor(Math.random()*2)==1?1:-1;

    this.draw=function(){
        ctx.beginPath();
        ctx.fillStyle=this.c;
        ctx.arc(this.x,this.y, this.r, 0, Math.PI*2);
        ctx.fill();
    }
}