class Dustbin{
    constructor(x,y,width,height){
        var log_option = {
        isStatic:true,
        // restitution:0.8,
        // density:1.0,
        // friction:1.2
        }
        this.body = Bodies.rectangle(x,y,20,height,log_option)


        this.width = width
        this.height = height
        // Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
        
    }
    display(){
        var pos = this.body.position;
        // var angle = this.body.angle;
        // push ();
        // translate (pos.x,pos.y);
        // rotate (angle);
        rectMode(CENTER);
        //strokeWeight(4);
        //stroke("red");
        fill ("black");
        rect(pos.x,pos.y,this.width,this.height);
        // pop ();
    }
}