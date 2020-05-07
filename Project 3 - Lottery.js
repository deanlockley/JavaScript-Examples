//random number assigned to variable
var firstNumber = Math.floor((Math.random() * 40) +1);
console.log(firstNumber)

var secondNumber = Math.floor((Math.random() * 40) +1);
console.log(secondNumber)

var thirdNumber = Math.floor((Math.random() * 40) +1);
console.log(thirdNumber)

var firstInput=prompt("Please enter the first of your three lottery numbers (between 1 and 40)")
var secondInput=prompt("Please enter the second of your three lottery numbers (between 1 and 40)")
var thirdInput=prompt("Please enter the final of your three lottery numbers (between 1 and 40)")

//input has to equal all numbers in sequence
if ((firstInput == firstNumber)
&&
(secondInput==secondNumber)
&&
(thirdInput ==thirdNumber ))
{
alert ("Congratulations, you win the first prize!");
}

//the input has to equal a number on any two conditions only
else if ((firstInput == firstNumber || firstInput == secondNumber || firstInput == thirdNumber)
&&
(secondInput == firstNumber || secondInput==secondNumber || secondInput==thirdNumber)
||
(thirdInput == firstNumber || thirdInput==secondNumber || thirdInput ==thirdNumber ))
{
alert ("“Great, you won the second prize! ");
}

//the input has to equal a number on any one condition only
else if ((firstInput == firstNumber || firstInput == secondNumber || firstInput == thirdNumber)
||
(secondInput == firstNumber || secondInput==secondNumber || secondInput==thirdNumber)
||
(thirdInput == firstNumber || thirdInput==secondNumber || thirdInput ==thirdNumber ))
{
alert ("Great, you won the third prize!");
}
//the input has to equal none of the numbers
else if ((firstInput != firstNumber || firstInput != secondNumber || firstInput != thirdNumber)
&&
(secondInput != firstNumber || secondInput != secondNumber || secondInput != thirdNumber)
&&
(thirdInput != firstNumber || thirdInput != secondNumber || thirdInput != thirdNumber ))
{
alert ("Sorry, you didn’t win this time!");
}
