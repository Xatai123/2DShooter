import { Car } from './car.js';
import { Target } from './target.js';
const w = $(window).width();
const h = $(window).height();
$("canvas").attr('width', w);
$("canvas").attr('height', h);

const c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

var car = new Car(ctx, 500, 250, 3);

var keysPressed = {};

var targets = [];
fill();
function fill(){
    for (let i = 0; i < 10; i++) {
        let x = Math.random() * $(window).width();
        let y = Math.random() * $(window).height();
        targets.push(new Target(ctx, x, y, 30));
    }
}

$("body").on("keydown", function (e) {
    keysPressed[event.which] = true;
    if (e.which === 87 || e.which === 190) {
        car.shoot();
    }
});
$("body").on("keyup", function (e) {
    delete keysPressed[event.which];
});

function main() {
    ctx.clearRect(0, 0, w, h);
    car.draw(targets);

    if(targets.length<1){
        fill();
    }
    targets.forEach(e => e.draw());

    if (keysPressed[37]) car.turn(-1);
    else if (keysPressed[39]) car.turn(1);
    if (keysPressed[38]) car.move(1);
    else if (keysPressed[40]) car.move(-1);
}

setInterval(main, 10);