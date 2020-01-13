export class Projectile {

    constructor(ctx, x, y, s, d) {
        this.speed = s;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.direction = d;
    }

    move(){
        this.x += this.speed * Math.sin(2 * Math.PI * this.direction/360);
        this.y -= this.speed * Math.cos(2 * Math.PI * this.direction/360);
    }

    draw() {
        console.log("works")
        this.ctx.beginPath();
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = "red"
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.x + 15 * Math.sin(2 * Math.PI * this.direction/360), this.y - 15 * Math.cos(2 * Math.PI * this.direction/360));
        this.ctx.stroke();
        this.move();
    }

}