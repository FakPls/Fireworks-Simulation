const g = 0.2;
let pars = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(120);
}

function draw() {
  background(0);

  if(random(1) > 0.99) {
    pars.push(new particle(random(width), height, 0, -random(8, 18), random(255), random(255), random(255)));
  }

  for(let par of pars) {
    par.show();
    par.update();
    par.explode();
    par.createNew();

    if(par.pos.y > height+500) {
      pars.splice(par, 1);
    }
  }


}
