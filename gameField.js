
//инициализираме си canvas
matrixManager.init("canvas");

//взимаме си бутоните 
var btnK = document.getElementById("K");
var btnD = document.getElementById("D");
var btnE = document.getElementById("E");

//рендерираме матрицата
matrixManager.render();
/* var canvas  = document.getElementById("canvas");
var context = canvas.getContext('2d');
var x = 0;
var y = 0;
var width=100;
var height = 100;

var matrix = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
];

    for (let row = 0; row < 7; row++) {
        for (let col = 0; col < 9; col++) {
            this.context.beginPath();
            matrix[row][col] = new Rectangle(x,y);
            if(row == 2 || row == 3 || row == 4){
                this.context.fillStyle ="#808080"; 
            }   
            else {
                if(row % 2 == 0){
                    if(col % 2 == 0){
                        this.context.fillStyle ="#FFFFFF";
                    }
                    else {
                        this.context.fillStyle = "#000000";
                    }
                }
            else {
                if( col % 2 == 0){
                    
                    this.context.fillStyle = "#000000";
                }
                else{
                    
                    this.context.fillStyle ="#FFFFFF";
                }
                
            }
        }
            this.context.rect(x,y,width,height);
            this.context.fill();
            this.context.strokeStyle = "#000000";
            this.context.stroke();
            this.context.closePath();
            this.x=x+width;
        }
        this.y=y+height;
        this.x=0;
}
 */

var playerA = new Player("A");
var playerB = new Player("B");
var figure = null;

btnK.addEventListener("click",function(){
    figure=new Figure("K",8,3,15,1,1);
    console.log(figure);
});

btnD.addEventListener("click",function(){
    figure = new Figure("D",6,2,12,2,2);
});

btnE.addEventListener("click",function(){
    figure = new Figure("E",5,1,10,3,3);
});

var currentPlayer = playerA;
canvas.addEventListener("click", function(e){
    console.log(figure);
    var isFigureAdded = false;
    var btnX = e.x;
    var btnY = e.y;
    for (let row = 0; row < matrixManager.matrix.length; row++) {
        if(row == 2 || row == 3 || row == 4){
            continue;
        }
        //проверка на колоната дали е свободна 
        for (let col = 0; col < 7; col++) {
            if((matrixManager.matrix[row][col].x <= btnX && matrixManager.matrix[row][col].x+100 >= btnX  ) &&
                (matrixManager.matrix[row][col].y <= btnY && matrixManager.matrix[row][col].y+100 >= btnY )){
                    matrixManager.push(row,col,figure,currentPlayer);
                //currentPlayer.push(row,col,figure,currentPlayer);
                isFigureAdded = true;
                break;
            }
        }
        if(isFigureAdded){
            var figureName = document.getElementById("playerLabel");
            matrixManager.changePlayerTurn(figureName);
            break;
        }
        
    }
});






