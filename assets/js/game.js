//window.alert("JavaScript is running");

var playerRobotName = window.prompt("what is your robot's name?");
var playerRobotHealth = 100;
var playerRobotAttack = 10;
var playerMoney = 10;
console.log(playerRobotName,playerRobotHealth,playerRobotAttack);

var enemyName = "Roboto";
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyName,enemyHealth,enemyAttack);

function fight() {
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
    

fight();