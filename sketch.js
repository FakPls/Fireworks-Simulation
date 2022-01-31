const g = 0.2;
let pars = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  if(random(1) > 0) {
    pars.push(new particle(random(width), height, random(-1,1), -random(8, 18), random(255), random(255), random(255)));
  }

  for(let i = pars.length-1; i > 0; i--) {
    console.log(i)
    pars[i].show();
    pars[i].update();
    pars[i].explode();
    pars[i].createNew();

    if(pars[i].pos.y > height+500) {
      pars.splice(i, 1);
    }
  }


}
