//set variables
var encryption = "IhpEQRQIAAtEHBQRH1MECBgcSgcABFMkPFpUQFNSFQAACAsaBxYGFVI="
var passPhrase = "jshasgoodparts";
var endOfPhrase = "salt";


// Decode the String
var decodedString = atob(encryption);


//concatenate the word salt to end of phrase
var key = (passPhrase.concat(endOfPhrase));


//divide decodedString length by key length to find nearest whole number then use substring to add on the rest.
var matching = key.repeat(decodedString.length/key.length) + key.substring(0, decodedString.length%key.length);

//increment through the 'decodedString' and 'matching' variables to get the character code then XOR each of these characters
var output = ""

for (var i = 0; i < decodedString.length; i++) {
    var newDec = decodedString.charCodeAt(i);
    var newKey = matching.charCodeAt(i);
output += String.fromCharCode(newDec^newKey)
}

console.log(output);
