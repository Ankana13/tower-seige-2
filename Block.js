class Block{
  constructor(x, y, width, height) {
    this.Visiblity = 255;
      var options = {
          restitution :0.4,
          friction :0.0,
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display(){
      if(this.body.speed < 3){
        super.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         var pos= this.body.position;
         rectMode(CENTER);
         rect(pos.x,pos.y,this.width, this.height);
         pop();
      }
       
     
    
    
    }
}