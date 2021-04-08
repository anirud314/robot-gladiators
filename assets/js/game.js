//window.alert("JavaScript is running");

var playerRobotName = window.prompt("what is your robot's name?");
var playerRobotHealth = 100;
var playerRobotAttack = 10;
console.log(playerRobotName,playerRobotHealth,playerRobotAttack);

var enemyName = "Roboto";
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyName,enemyHealth,enemyAttack);

function fight() {
    window.alert("WELCOME TO ROBOT GLADIATORZZZZZZZZZ BZZZT!");
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

fight();