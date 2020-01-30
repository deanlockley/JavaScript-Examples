var database = [
{id: "1", playerName: "Ada Davis", teamName: "EliteFive", scoreNumb: "8733"},
{id: "2", playerName: "Lee Allen", teamName: "CarbonJumps", scoreNumb: "7521"},
{id: "3", playerName: "Kate Barber", teamName: "EliteFive", scoreNumb: "4140"},
{id: "4", playerName: "Leo Porter",  teamName: "JuiceSports", scoreNumb: "4646"},
{id: "5", playerName: "Asim Sanchez", teamName: "JuiceSports", scoreNumb: "7787"},
{id: "6", playerName: "Adnan Pierce",teamName: "CarbonJumps", scoreNumb: "2285"},
{id: "7", playerName: "Julia Howe", teamName: "LemonStars", scoreNumb: "6068"},
{id: "8", playerName: "Harry Blake", teamName: "EliteFive", scoreNumb: "5022"}
];


var printAllPlayers = function () {
console.table(database);
}

var printByName = function (name) {

for (var idx=0; idx < database.length; idx++) {

var lowercase=printByName.toLowerCase

if (name==database[idx].playerName) {

console.table(["Player Name" + ":" + " " + database[idx].playerName, "Team Name" + ":" + " " + database[idx].teamName]);
}
}
}

var printByTeam = function (team) {

this.team = "teamName";

for (var idx=0; idx < database.length; idx++) {

if (team==database[idx].teamName) {

console.table(["Team Name" + ":" + " " + database[idx].teamName, "Player Name" + ":" + " " + database[idx].playerName]);
}
}
}


var printByScoreOver = function(score) {

for (var idx=0; idx < database.length; idx++) {

if (score < database[idx].scoreNumb) {

console.table(["Player Name:" + " " + database[idx].playerName, "Score Number:" + " "  + database[idx].scoreNumb]);
}
}
}



var day
switch (prompt ("Select prompt from: 1. Print All Players, 2. Print By Name, 3. Print By Team, 4. Print By Score Over, 5. Print Players Sorted"))
{
  case "1" :
  printAllPlayers ();
     break;
  case "2" :
     printByName(prompt("If you wish to print a name, please type your 'name'"));
     break;
  case "3" :
     printByTeam(prompt("If you wish to print by team, please type a 'team'"));
     break;
  case "4" :
    printByScoreOver(prompt("If you wish to print by score over, please type a 'score'"));
    break;
  case "5" :
    var printPlayerSorted = prompt ("Select prompt from: 1. Sort by Player Name, 2. Sort by Team Name, 3. Sort by Score Number") ;
    break;
  default :
     alert("Enter again");
     break;
}









if (printPlayerSorted == "1") {

function comparePlayer(a,b) {
  if (a.playerName < b.playerName)
    return -1;
  if (a.playerName > b.playerName)
    return 1;
  return 0;
}

console.table(database.sort(comparePlayer));




} else if (printPlayerSorted == "2") {

function compareTeam(a,b) {
  if (a.teamName < b.teamName)
    return -1;
  if (a.teamName > b.teamName)
    return 1;
  return 0;
}

console.table(database.sort(compareTeam));


} else if (printPlayerSorted == "3") {

function compareScore(a,b) {
  if (a.scoreNumb < b.scoreNumb)
    return -1;
  if (a.scoreNumb > b.scoreNumb)
    return 1;
  return 0;
}

console.table(database.sort(compareScore));


} else if (printPlayerSorted != "1", "2", "3") {
        alert ("Invalid input")
}
