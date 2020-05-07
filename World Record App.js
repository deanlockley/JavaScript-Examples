var mensRec=9.58;
var womensRec=10.49;
var reactionTi=0.1

var write=prompt("Please enter your gender (male or female)");
var time=prompt("Please enter your 100m time (in seconds)");
var react=prompt("Please enter reaction time (in seconds)");

//user input changed to lower case
write=write.toLowerCase();

//All male conditions must be met for positive alert
if(write=="male" && time<mensRec && react>reactionTi)
{
alert("You've broke the Male 100m world Record!");
}

//if the user does not meet all male conditions then a negative reaction message is displayed
else if(write=="male" && time>mensRec || react<reactionTi)
{
alert("Unfortunately you have not broken the 100m record");
}

//All female conditions must be met for a positive alert
else if(write=="female" && time<womensRec && react>reactionTi)
{
alert("You've broke the Female 100m world Record!");
}

//if the user does not meet all female conditions then a negative reaction message is displayed
else if(write=="female" && time>womensRec || react<reactionTi)
{
alert("Unfortunately you have not broken the 100m record");
}
