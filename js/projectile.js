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
        this.draw()
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = "red";
        this.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        this.ctx.fill();
    }

}