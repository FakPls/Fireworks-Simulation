function particle(x, y, velx, vely, r_, g_, b_) {
    this.pos = createVector(x, y);
    this.vel = createVector(velx, vely);
    this.acc = createVector(0 , g);
    this.color = createVector(r_, g_, b_);
    this.exploded = false;
    this.newPars = [];

    particle.prototype.show = function() {
        fill(this.color.x, this.color.y, this.color.z);
        noStroke();
        circle(this.pos.x, this.pos.y, 4);

        for(let par of this.newPars) {
            par.show();
            par.update();
        }

    }

    particle.prototype.update = function() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
    }

    particle.prototype.explode = function() {
        if(this.vel.y >= 0 && this.vel.y < 0.5) {
            this.exploded = true;
        }
        else {
            this.exploded = false;
        }
    }

    particle.prototype.createNew = function() {
        if (this.exploded) {
            for(let i = 0; i < 15; i++) {
                this.newPars.push(new particle(this.pos.x, this.pos.y, random(-3,3), random(-3,3), this.color));
            }
        }
    }

    
}