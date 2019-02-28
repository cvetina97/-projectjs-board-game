var counter = 0;

var Rectangle = function(x,y){
    this.id = counter++;
    this.type = null;
    this.x = x;
    this.y = y;
}