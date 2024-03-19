import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        message: "Enter first Number: ",
        type: "number",
        name: "firstnumber",
    },
    {
        message: "Select the operator",
        type: "list",
        name: "operater",
        choices: ["Addition", "Subtraction", "Multiplication", "division"]
    },
    {
        message: "Enter second Number: ",
        type: "number",
        name: "secondnumber",
    },
]);
if (answer.operater === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operater === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operater === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operater === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please enter correct operator");
}
