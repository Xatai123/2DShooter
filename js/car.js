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
        this.projectiles = [];
        this.cd = true;
    }

    turn(dir) {
        this.direction += dir * this.speed / 2;
    }
    move(dir) {
        this.x += dir * this.speed * Math.sin(2 * Math.PI * this.direction / 360);
        this.y -= dir * this.speed * Math.cos(2 * Math.PI * this.direction / 360);
    }

    async shoot() {
        var car = this;
        if (car.cd) {
            this.projectiles.push(new Projectile(this.ctx, this.x + (this.radius * 1.1) * Math.sin(2 * Math.PI * this.direction / 360), this.y - (this.radius * 1.1) * Math.cos(2 * Math.PI * this.direction / 360), this.speed + 2, this.direction));
            car.cd = false;
            setTimeout(function () { car.cd = true; }, 500);
        }
    }

    draw(arr) {
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

        if (typeof this.projectiles !== 'undefined') {
            let p = this.projectiles;
            p.forEach(function (e) {
                e.move(arr);
                if (e.x < 0 || e.y < 0 || e.x > $(window).width() || e.y > $(window).height()) {
                    p.splice(p.indexOf(e), 1);
                }
            })
        }
    }

}