export class Projectile {

    constructor(ctx, x, y, s, d) {
        this.speed = s;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.direction = d;
        this.radius = 5;
    }

    move(arr) {
        this.x += this.speed * Math.sin(2 * Math.PI * this.direction / 360);
        this.y -= this.speed * Math.cos(2 * Math.PI * this.direction / 360);
        this.draw()

        let n = this;
        arr.forEach(function (e) {
            if (n.check(e)) {
                arr.splice(arr.indexOf(e), 1)
            }
        })
    }

    check(e) {
        let d = Math.sqrt(Math.pow((this.x - e.x), 2) + Math.pow((this.y - e.y), 2));
        let l = this.radius + e.radius;

        return d < l;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = "red";
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }

}