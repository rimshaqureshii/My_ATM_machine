import inquirer from "inquirer";
//Initialize user and pin code
let myBalance = 10000;
let myPin = 12345;
//print message welcome to my atm machine
console.log("Welcome to my ATM machine ");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code: "
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct, login Successfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount}  Withdraw Successfully`);
            console.log(`Your Remaining Balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Account Balance is: ${myBalance} `);
    }
    else {
        console.log("Pin is incorrect, please try again!");
    }
}
