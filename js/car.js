import { Projectile } from './projectile.js';
export class Car {


    constructor(ctx, x, y, s) {
        this.radius = 50;
        this.speed = s;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.direction = 0;
        this.draw();
        this.pro = [];
    }

    turn(dir) {
        this.direction += dir * this.speed / 2;
    }
    move(dir) {
        this.x += dir * this.speed * Math.sin(2 * Math.PI * this.direction / 360);
        this.y -= dir * this.speed * Math.cos(2 * Math.PI * this.direction / 360);
    }

    shoot() {
        this.pro.push(new Projectile(this.ctx, this.x + (this.radius*1.1) * Math.sin( 2 * Math.PI * this.direction / 360), this.y - (this.radius*1.1) * Math.cos(2 * Math.PI * this.direction / 360), this.speed + 2 , this.direction));
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = "black";
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.fillStyle = "red";
        this.ctx.arc(
            this.radius * Math.sin(2 * Math.PI * this.direction / 360) + this.x,
            this.y - this.radius * Math.cos(2 * Math.PI * this.direction / 360),
            this.radius / 5, 0, 2 * Math.PI);
        this.ctx.fill();

        if (typeof this.pro !== 'undefined'){
            this.pro.forEach(e => e.move());
        }
    }

}