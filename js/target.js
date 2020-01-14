export class Target {

    constructor(ctx, x, y, r) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = r;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = "yellow";
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    
}