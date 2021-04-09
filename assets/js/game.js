var playerRobotName = window.prompt("what is your robot's name?");
var playerRobotHealth = 100;
var playerRobotAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Game States
// Win - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// Lose - Player robot's health is zero or less
var fight = function(enemyName) {
    while(playerRobotHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.").toLowerCase();
        if(promptFight === "skip"){
            var confirmSkip = window.confirm("Are you sure you'd like to quit? It costs player 2 money");

            if(confirmSkip) {
                window.alert(playerRobotName + " has decided to skip this fight. Goodbye!");
                //playerMoney = playerMoney - 10;
                playerMoney = Math.max(0, playerMoney - 10);
                //console.log("playerMoney left: " + playerMoney);
                break;
            }
        }
        //enemyHealth = enemyHealth - playerRobotAttack;
        var pAttackDamage = randNum(playerRobotAttack - 3, playerRobotAttack);
        enemyHealth = Math.max(0,enemyHealth - pAttackDamage);
        //console.log(playerRobotName + " attacked " + enemyName + " for "+pAttackDamage+"\n" + enemyName + " Health: " + enemyHealth);
        if(enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20
            //console.log("playerMoney left: " + playerMoney);
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left");
        }
        //playerRobotHealth = playerRobotHealth - enemyAttack;
        var eAttackDamage = randNum(enemyAttack - 3, enemyAttack);
        playerRobotHealth = Math.max(0, playerRobotHealth - eAttackDamage);
        //console.log(enemyName + " attacked " + playerRobotName + " for "+eAttackDamage+ "\n" + playerRobotName +" Health: " + playerRobotHealth);
        if(playerRobotHealth <= 0) {
            window.alert(playerRobotName + " has died!");
            break;
        }
        else {
            window.alert(playerRobotName + " still has " + playerRobotHealth + " health left");
        }
    }
    
};
var randNum = function(min,max){
    //var value = Math.floor(Math.random()*21) + 40; // Give random decimal val between 0-20 and adds 40 to give a value between 40-60 for health.
    var value = Math.floor(Math.random()* (max - min + 1) + min);
    // if we want to make this function more modular for other cases we do this, EX| If we want a random number between 40 - 60 we call randNum(40,60) and it will give us a function of Math.floor(Math.random * (60-40+1) + 40), Which is the same as the one above
    return value;
};

var startGame = function() {
    //reset Player stats
    playerRobotHealth = 100;
    playerRobotAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if(playerRobotHealth > 0){
            window.alert("WELCOME TO ROBOT GLADIATORZZZZZZZZZ BZZZT! Round " + (i+1));
            var pickedEnemyName = enemyNames[i];
            //enemyHealth = 50;
            enemyHealth = randNum(40,60);
            //console.log("Opponent: " + pickedEnemyName + "\nHealth: " + enemyHealth);
            //debugger;
            fight(pickedEnemyName);

            if(playerRobotHealth > 0 && i < enemyNames.length - 1) {
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
    if (playerRobotHealth > 0){
        window.alert("Great Job, You've survived the game you now have a score of "+ playerMoney + " money earned.");
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
            if (playerMoney >= 7) {
                window.alert("Refilling players health by 20 for 7 money");
                
                playerRobotHealth = playerRobotHealth + 20;
                playerMoney = playerMoney - 7;
                //console.log("Player money " + playerMoney + " Player health" + playerRobotHealth);
            }
            else {
                window.alert("You don't have enough money");
            }
            break;
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 money");

                playerRobotAttack = playerRobotAttack + 6;
                playerMoney = playerMoney - 7;
                //console.log("Player money " + playerMoney + " Player Attack " + playerRobotAttack);
            }
            else {
                window.alert("You don't have enough money");
            }
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