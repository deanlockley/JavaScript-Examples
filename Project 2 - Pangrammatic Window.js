//assigns all letters to alphabet variable

var alphabet="a" && "b" && "c" && "d" && "e" && "f" && "g" && "h" && "i" && "j" && "k" && "l" && "m" && "n" && "o" && "p" && "q"
&& "r" && "s" && "t" && "u" && "v" && "w" && "x" && "y" && "z"

//user inputs text
var str=prompt("Please enter your text (see if you can get a pangrammatic window!)");

//phrase has to include all letters
var phrase = str.includes (alphabet);

//does user input match alphabet
if (str = phrase) {
alert ("You’ve got a pangrammatic window!");
}

else {
alert ("This is not a pangrammatic window");
}
