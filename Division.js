class Division {
    constructor (x,y,width,height){
        var options = {
            isStatic:true,
            
        }
        
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
        World.add(world,this.body)

    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill('white')
        rect(pos.x,pos.y,this.width,this.height);
        pop();

        if(pos.y>760){
            if(pos.x<300){
             count = count+500;
              }
              else if(pos.x>301 && pos.x<600){
                count = count + 100;
              } else if(pos.x>601 && pos.x<800){
               count = count + 200;
              }
              particle = null;
            }
}

}