//window.alert("JavaScript is running");

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
    window.alert("WELCOME TO ROBOT GLADIATORZZZZZZZZZ BZZZT!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.").toLowerCase();
    console.log(promptFight);
    if(promptFight === "fight"){
        enemyHealth = enemyHealth - playerRobotAttack;
        console.log(playerRobotName + " attacked " + enemyName +"\n" + enemyName + " Health: " + enemyHealth);
        if(enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left");
        }
        playerRobotHealth = playerRobotHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerRobotName + "\n" + playerRobotName +" Health: " + playerRobotHealth);
        if(playerRobotHealth <= 0) {
            window.alert(playerRobotName + " has died!");
        }
        else {
            window.alert(playerRobotName + " still has " + playerRobotHealth + " health left");
        }
    }
    else if(promptFight === "skip"){
        var confirmSkip = window.confirm("Are you shure you'd like to quit? It costs player 2 money");

        if(confirmSkip) {
            window.alert(playerRobotName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
        window.alert(playerRobotName + " has chosen to skip the fight!");
    }
    else {
        window.alert("You need a valid option. Try Again!")
    }
}
    

//fight();
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
//    console.log(enemyNames[i]);
//    console.log(i);
//    console.log(enemyNames[i] + " is at " + i + " index");
}