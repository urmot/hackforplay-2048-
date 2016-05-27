var x=0,y=0;


function dragon() {
    var canvas = document.getElementById("dragon");

    if (x===0 && y===0){
        canvas.width = 700;
        canvas.height = 500;
        // canvas.style.left = (window.innerWidth/2) + 'px';
        console.log(canvas.style);
    }

    var ctx = canvas.getContext('2d');
    var img = new Image();

    img.src = "./img/bigmonster1.gif";

    img.onload = function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.drawImage(img, 80*x, 80*y, 80, 80, 80, 30, 480, 480);

    if (x === 2 && y === 2){  
        clearInterval(interval);
        x = 0;
        y = 0;
        fire_interval = setInterval('fire()',100);
    }

        x++;

        if (x%3 === 0) {
            y++;
            x = 0;
        };
    };
};

function fire() {
    var canvas = document.getElementById("fire");
    if (x === 1) {
        canvas.width = 700;
        canvas.height = 800;
        // canvas.style.left = (window.innerWidth/2 - 350) + 'px';

    };
    var ctx = canvas.getContext('2d');
    var img = new Image();

    img.src = "./img/fire.jpg";

    img.onload = function(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.drawImage(img, 128*x,0,128,128,-150,-100,128*4,128*8);
    ctx.drawImage(img, 128*x,0,128,128,0,-100,128*4,128*8);
    ctx.drawImage(img, 128*x,0,128,128,150,-100,128*4,128*8);



    x++;

        if (x === 6) {
            x = 2;
        }; 
    };
};

function stop_canvas() {
  var canvas_dragon = document.getElementById("dragon");
  var canvas_fire = document.getElementById("fire");

  var ctx1 = canvas_dragon.getContext('2d');
  var ctx2 = canvas_fire.getContext('2d');

  var img = new Image();

  img.src = "./img/bigmonster1.gif";

  ctx1.clearRect(0,0,canvas_dragon.width,canvas_dragon.height);
  ctx2.clearRect(0,0,canvas_fire.width,canvas_fire.height);

  ctx1.drawImage(img, 80, 80*2, 80, 80, 80, 30, 480, 480)

  clearInterval(fire_interval);

    canvas_fire.width = 0;
    canvas_fire.width = 0;


}

function Jamp(){
    alert('J( \'-`)し「こっちも遊びなさい」');
    location.href = "https://note.mu/teramotodaiki/n/nfa8d3d54fdf7?magazine_key=m49ef9e0730b9";
}