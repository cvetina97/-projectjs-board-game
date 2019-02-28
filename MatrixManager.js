var canvas  = document.getElementById("canvas");
var context = canvas.getContext("2d");
 

var matrixManager = {}; 
matrixManager.canvas    = null; 
matrixManager.context   = null;
matrixManager.x = 0;
matrixManager.y = 0;
matrixManager.width=100;
matrixManager.height = 100;
matrixManager.position;
matrixManager.matrix = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
];


matrixManager.init = function(element) {
    this.canvas = document.getElementById(element);
    this.context = this.canvas.getContext('2d');
};

matrixManager.shapeCollection = [];
// Contains the active shape object
matrixManager.figureReference = null;

matrixManager.push = function(row,col,figure,player) {
    if(figure instanceof Figure && player instanceof Player){
        if(player.name === "A" && row == 0 || row == 1){
            if(figure.type === "K" && playerA.countK < 2){
                var element = martixOfPositions[row][col];
                keepFigure(element,figure);
                this.position = element; 

                //var keepF  = new KeepFigure(element,figure);
                playerA.arrayOfFigures.push(keepF);
                playerA.countK++;
            } 
            else if(figure.type === "D" &&Player.countD <2){
                    var element = martixOfPositions[row][col];
                    keepFigure(element,figure);
                    //var keepF  = new KeepFigure(element,figure);
                    playerA.arrayOfFigures.push(keepF);
                    playerA.countD++;
            }
            else if(figure.type === "E" && Player.countE <2){
                var element = martixOfPositions[row][col];
                    keepFigure(element,figure);
                    //var keepF  = new KeepFigure(element,figure);
                    playerA.arrayOfFigures.push(keepF);
                    playerA.countE++;
            }
        }
            else if(player.name === "B" && row == 5 || row == 6){
                if(figure.type === "K" && Player.countK < 2){
                    var element = martixOfPositions[row][col];
                    keepFigure(element,figure);
                    //var keepF  = new KeepFigure(element,figure);
                    playerB.arrayOfFigures.push(keepF);
                    playerB.countK++;
                }
        else if(figure.type === "D" && Player.countD <2){
            var element = martixOfPositions[row][col];
            keepFigure(element,figure);
            //var keepF  = new KeepFigure(element,figure);
             playerB.arrayOfFigures.push(keepF);
            playerB.countD++;
        }
        else if(figure.type === "E" && Player.countE <2){
            var element = martixOfPositions[row][col];
            keepFigure(element,figure);
            var keepF  = new KeepFigure(element,figure);
            playerB.arrayOfFigures.push(keepF);
            playerB.countE++;
        }
    }
}
    this.shapeCollection.push(figure);
};

matrixManager.isShapeActive = function() {
    return (this.figureReference != null);
};

matrixManager.getActiveShape = function() {
    return this.figureReference;
};

matrixManager.render = function(){
    for (let row = 0; row < 7; row++) {
        for (let col = 0; col < 9; col++) {
            this.context.beginPath();
            this.matrix[row][col] = new Rectangle(this.x,this.y);
            if(row == 2 || row == 3 || row == 4){
                this.context.fillStyle ="#808080"; 
                this.generateTraps(row,col);
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
            this.context.rect(this.x,this.y,this.width,this.height);
            this.context.fill();
            this.context.strokeStyle = "#000000";
            this.context.stroke();
            this.context.closePath();
            this.x=this.x+this.width;
        }
        this.y=this.y+this.height;
        this.x=0;
    }
};

matrixManager.generateTraps = function(row,col){
    var x =Math.floor(Math.random(this.x));
    var y = Math.floor(Math.random(this.y));
    var element = martixOfPositions[x][y];
    keepFigure(element);
    var positionEl = position;
    
    var range = Math.floor(Math.random() * Math.floor(5));
    console.log(positionEl);
    console.log(row);
    console.log(col);
    for (let index = 0; index < range; index++) {
        if(row == x && col == y){
            continue;
        }
        else{
            var trap = new Rectangle(x,y);
            this.context.fillStyle = "#000000";
            this.context.rect(this.x,this.y,this.width,this.height);
        }
        
    }
};

matrixManager.changePlayerTurn = function(figureName){
    if(currentPlayer.name === "A"){
        currentPlayer = playerB;
        figureName.innerHTML = "Player B Turn";
    }
    else{
        currentPlayer = playerA;
        figureName.innerHTML = "Player A Turn";
    }
};