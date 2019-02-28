var counterF = 0;
var Figure = function(type,attack,shield,health,attackingSquares,speed){//,position){
    this.id= counterF++;
    this.type = type;
    this.attack = attack;
    this.shield = shield;
    this.health = health;
    this.attackingSquares = attackingSquares;
    this.speed = speed;
    //this.positionFigure = position;
}
let = canMove = false;
let = userSelection = 18; // 
let = positionOfElf = 24; //ot masiva ot arrayOfFigures in Player.js
let = topElement = positionOfElf-27;// 27  pri elf -- 18 pri djudje -- 9 pri ricar
let = positive = true;
let = loop = 7; //7 ,5 ili 3 

 Figure.prototype.move = function(figure,loop){
   var counter = -1;
    for (let index = 0; index < loop; index++) {
        if (index > (loop / 2 )) { // integer !!!!!!   loop / 2 
            counter--;
        }
        else
        {
            counter++;
        }
        CheckPositiveDimension(topElement, counter, positive) 
        if (canMove) {
            break;
        }
        positive = false;
        CheckPositiveDimension(topElement, counter, positive);
        if (canMove) {
            break;
        }
        positive = true;
        topElement = topElement + 9;
    }

    function CheckPositiveDimension(topElement2, index, positive)
    {
    let result;
    for (let i = 0; i <= index; i++) {
        if (positive) {
            result=  topElement2 + i;
        }
        else{
            result = topElement2 + (i * -1);
        }
        if (userSelection === result)
        {
            canMove = true;
            return;
            // moje da premine na tazi poziciq ot matricata
        }
    }
    }
}; 

Figure.prototype.attack = function(selectedFigure,attackingFigure){
    var die = 0;
    for (let index = 0; index < 3; index++) { 
         die+=Math.floor(Math.random() * 7);
    }
    if(attackingFigure instanceof Figure && selectedFigure instanceof Figure){
        if(die === selectedFigure.health){
            return;
        }
        
        var damage = figure.attack - figure.shield;
        if(die === 3){
            damage=damage/2.0;
        }
        attackingFigure.health -=damage;
        
    }

};

Figure.prototype.healWounds = function(figure){
    if(figure instanceof Figure){
        var renovatedHealth = Math.floor(Math.random() * 7);
        figure.health += renovatedHealth;
    }
}; 

console.log(canMove);
