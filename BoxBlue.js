class Box {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
       if(this.body.speed<7){
           var pos = this.body.position;
           push();
        strokeWeight(2);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
       }
       else{
        World.remove(world,this.body);
        push();
        tint(255,this.visibility);
        this.visibility=this.visibility-5;
        pop();
       }
       }
       score() {
        if(this.Visibility < 0 && this.Visibility > -5){
            score = score + 1;
        }
      }
    }
