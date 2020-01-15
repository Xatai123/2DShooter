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

var wave = 1;
var targets = [];
fill();
function fill() {
    for (let i = 0; i < 10; i++) {
        let x = Math.random() * $(window).width();
        let y = Math.random() * $(window).height();
        targets.push(new Target(ctx, x, y, 30));
    }
}

$("body").on("keydown", function (e) {
    keysPressed[event.which] = true;
    if (e.which === 69 || e.which === 32) {
        car.shoot();
    }
});
$("body").on("keyup", function (e) {
    delete keysPressed[event.which];
});

function drawScreen() {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = "40px Arial";
    ctx.fillText("Wave: " + wave, 20, 50);
}

function main() {
    //clear everything
    ctx.clearRect(0, 0, w, h);
    //draw car and its projectiles
    car.draw(targets);
    //add targets if all are gone
    if (targets.length < 1) {
        wave++;
        fill();
    }
    //draw targets
    targets.forEach(e => e.draw());
    //write wave number on screen
    drawScreen();
    //move car
    if (keysPressed[37] || keysPressed[65]) car.turn(-1);
    else if (keysPressed[39] || keysPressed[68]) car.turn(1);
    if (keysPressed[38] || keysPressed[87]) car.move(1);
    else if (keysPressed[40] || keysPressed[83]) car.move(-1);
}

setInterval(main, 10);