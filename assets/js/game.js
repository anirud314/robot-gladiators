var randNum = function(min,max){
    var value = Math.floor(Math.random()* (max - min + 1) + min);
    // if we want to make this function more modular for other cases we do this, EX| If we want a random number between 40 - 60 we call randNum(40,60) and it will give us a function of Math.floor(Math.random * (60-40+1) + 40)
    return value;
};

var playerRobot = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if(this.money >= 7){
            //console.log("BEFORE-- Player money " + playerRobot.money + " Player health " + playerRobot.health);
            window.alert("Refilling players health by 20 for 7 money");
            this.health +=20;
            this.money -=7;
            //console.log("AFTER-- Player money " + playerRobot.money + " Player health " + playerRobot.health);
        }
        else {
            window.alert("You don't have enough money");
        }
    },
    upgradeAttack: function(){
        if(this.money >= 7){
            //console.log("BEFORE-- Player money " + playerRobot.money + " Player Attack " + playerRobot.attack);
            window.alert("Upgrading player's attack by 6 for 7 money");
            this.attack +=6;
            this.money -=7;
            //console.log("AFTER-- Player money " + playerRobot.money + " Player Attack " + playerRobot.attack);
        }
        else {
            window.alert("You don't have enough money");
        }
    }
};

var enemyInfo = [
    {
        name: "Roberto",
        attack: randNum(10, 14)
    },
    {
        name: "Amy Android",
        attack: randNum(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randNum(10, 14)
    }
];

//Game States
// Win - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// Lose - Player robot's health is zero or less
var fight = function(enemy) {
    while(playerRobot.health > 0 && enemy.health > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.").toLowerCase();
        if(promptFight === "skip"){
            var confirmSkip = window.confirm("Are you sure you'd like to quit? It costs player 2 money");

            if(confirmSkip) {
                window.alert(playerRobot.name + " has decided to skip this fight. Goodbye!");
                playerRobot.money = Math.max(0, playerRobot.money - 10);
                //console.log("playerMoney left: " + playerRobot.money);
                break;
            }
        }
        var pAttackDamage = randNum(playerRobot.attack - 3, playerRobot.attack);
        enemy.health = Math.max(0,enemy.health - pAttackDamage);
        //console.log(playerRobot.name + " attacked " + enemy.name + " for "+pAttackDamage+"\n" + enemy.name + " Health: " + enemy.health);
        if(enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            playerRobot.money = playerRobot.money + 20
            //console.log("playerMoney left: " + playerRobot.money);
            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left");
        }
        var eAttackDamage = randNum(enemy.attack - 3, enemy.attack);
        playerRobot.health = Math.max(0, playerRobot.health - eAttackDamage);
        //console.log(enemy.name + " attacked " + playerRobot.name + " for "+eAttackDamage+ "\n" + playerRobot.name +" Health: " + playerRobot.health);
        if(playerRobot.health <= 0) {
            window.alert(playerRobot.name + " has died!");
            break;
        }
        else {
            window.alert(playerRobot.name + " still has " + playerRobot.health + " health left");
        }
    }
    
};

var startGame = function() {
    //reset Player stats
    playerRobot.reset();
    for(var i = 0; i < enemyInfo.length; i++) {
        if(playerRobot.health > 0){
            window.alert("WELCOME TO ROBOT GLADIATORZZZZZZZZZ BZZZT! Round " + (i+1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randNum(40,60);
            //console.log("Opponent: " + pickedEnemyObj.name + "\nHealth: " + pickedEnemyObj.health);
            //debugger;
            fight(pickedEnemyObj);

            if(playerRobot.health > 0 && i < enemyInfo.length - 1) {
                var storeConfirm = window.confirm("Fight is over, visit the store before the next round?")
                if (storeConfirm){
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
    
    
};

var endGame = function(){
    if (playerRobot.health > 0){
        window.alert("Great Job, You've survived the game you now have a score of "+ playerRobot.money + " money earned.");
    }
    else {
        window.alert("You've lost your robot in battle");
    }
    //Play Again
    var playAgain = window.confirm("Would you like to play again?")
    if(playAgain) {
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators, Come back again soon");
    }
};

var shop = function(){
    //console.log("entered the shop");
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack or LEAVE the store? \n Please enter value in quotes to make a choice: \n 'REFILL' - increase health by 20 | cost 7 money \n 'UPGRADE' - increase attack by 6 | cost 7 money \n 'LEAVE' - Leave the store").toLowerCase();

    switch(shopOptionPrompt) {
        case "refill": 
            playerRobot.refillHealth();
            break;
        case "upgrade":
            playerRobot.upgradeAttack();
            break;
        case "leave":
            window.alert("Leaving the store; Thank you have a nice day");
            break;
        default:
            window.alert("Try again; Please input a valid option")
            shop();
            break;
    }
};
    
startGame();