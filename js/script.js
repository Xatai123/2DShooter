import { Car } from './car.js';
const w = $(window).width();
const h = $(window).height();
$("canvas").attr('width', w);
$("canvas").attr('height', h);

const c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

let car = new Car(ctx, 500, 250, 3);

let keysPressed = {};

$("body").on("keydown", function (e) {
    keysPressed[event.which] = true;
    if (e.which === 87 || e.which === 190){
        car.shoot();
        console.log("*shooting noise*")
    }
});
$("body").on("keyup", function (e) {
    delete keysPressed[event.which];
});
// $("body").on("keypress", function (e) {
    
// });

function keyMove() {
    ctx.clearRect(0, 0, w, h);
    car.draw();

    if (keysPressed[37]) car.turn(-1);
    else if (keysPressed[39]) car.turn(1);
    if (keysPressed[38]) car.move(1);
    else if (keysPressed[40]) car.move(-1);
    console.log(keysPressed)
}

setInterval(keyMove, 10);