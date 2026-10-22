const team = { name: "Egypt",
     coach: { name: "Hossam Hassan", nationality: "Egyptian" },
      stadium: { name: "Cairo Stadium", city: "Cairo", capacity: 75000 },
       colors: ["red", "white", "black"], 
       founded: 1921,
     };
     const players = [
         { id: 1, name: "Salah", number: 10, position: "Forward", age: 34, goals: 20, assists: 10 },
          { id: 2, name: "Marmoush", number: 7, position: "Forward", age: 27, goals: 15, assists: 6 }, 
          { id: 3, name: "Trezeguet", number: 11, position: "Winger", age: 31, goals: 9, assists: 8 }, 
          { id: 4, name: "Zizo", number: 25, position: "Midfielder", age: 30, goals: 6, assists: 11 }, 
          { id: 5, name: "Emam Ashour", number: 8, position: "Midfielder", age: 28, goals: 5, assists: 7 },
           { id: 6, name: "El Shenawy", number: 1, position: "Goalkeeper", age: 37, goals: 0, assists: 0 },

     ];
     const matches = [ 
        { opponent: "Ghana", score: [2, 0], goals: ["Salah", "Marmoush"] }, 
        { opponent: "Morocco", score: [1, 1], goals: ["Trezeguet"] }, 
        { opponent: "Senegal", score: [3, 2], goals: ["Salah", "Zizo", "Salah"] },
     ];
     
     const bench = ["Hamdi Fathy", "Mostafa Fathi", "Akram Tawfik"];
    const settings = { theme: "light", language: "ar", notifications: true };

    /// 1- Get name and founded from team
    const {name,coach,stadim,color,founded}=team;
    console.log(name,founded);
console.log("@@@@@@@@@")

    ///2.Get the coach name from team and save it as coachName
    const {coach:{name:coachName,}}= team;
     console.log(coachName);
     console.log("@@@@@@@@@")

     //// 3.Get city and capacity from team.stadium
const {stadium:{city,capacity},} =team;
console.log(city,capacity);
console.log("@@@@@@@@@")

////4-Get the first and second colors from team.colors
const {colors:[firstcolor,secandcolor],} =team;
console.log('',secandcolor);
console.log("@@@@@@@@@")

//5-Get the third color only
const {colors:[,,lastcolor],} =team;
console.log('','',lastcolor);
console.log("@@@@@@@@@")
//6-Get nickname from team with a default value "The Pharaohs"
const {nickname='The Pharaohs'}=team;
console.log(nickname);
console.log("%%%%%%%%")
//7- Get the first player from players, then get his name and goals
const [{name:first_name,goals}]=players;
console.log(first_name,goals);
console.log("******")
//8-Get the first player and put the rest of the players in others
const [{name:firstPlayer}, ...others] = players;
console.log(firstPlayer);
console.log(others);
console.log("######")
//9-From the first match, get opponent and both numbers of score (home, away)
const { opponent, score: [home, away] } = matches[0];
console.log("the first match is :", opponent," and the score is : " + home,"-"  , away);
console.log("-----")
//10- Loop over matches and print: Egypt 2 - 0 Ghana
matches.forEach(({ opponent, score: [home, away] }) => {
  console.log(`Egypt ${home} - ${away} ${opponent}`);
});
console.log("******")
//11- Loop over players and print: #10 Salah — Forward
players.forEach(({ number, name, position }) => {
  console.log(`#${number} ${name} — ${position}`);
});
console.log("++++++++++")

//12-Use map to create an array of player names only
const playerNames = players.map(player => player.name);
console.log(playerNames)
console.log("********************")

// 13- Write printPlayer({ name, age, position }) and call it with every player

function printPlayer({ name, age, position }) {
  console.log(`Name: ${name}, Age: ${age}, Position: ${position}`);
}
players.forEach(printPlayer);
console.log("********************")
//14- Write describe({ name, position = "Unknown" }) and call it with { name: "New Player" }

function describe({ name, position = "Unknown" }) {
  console.log(`Name: ${name}, Position: ${position}`);
}
describe({ name: "New Player" });
console.log("********************")
//15- Create allPlayers that has all names from players and bench in one array
const allPlayers = [...players.map(p => p.name), ...bench];
console.log(allPlayers);
console.log("***======****")
//16- Create newColors = team.colors + "gold"
const newColors=[...team.colors,"golg"]
console.log(newColors);
console.log("***======****")
//17- Create a copy of settings with theme: "dark"
const updatedSettings = { ...settings, theme: "dark" };
console.log(updatedSettings);
console.log("***======****")
//18-Create a copy of team with founded: 1920
const newFounded={...team,founded:1920};
console.log(newFounded);
console.log("***======****")
//19-Log settings and team — they must not change
console.log("Settings:", settings);
console.log("Team:", team);
console.log("***======****")

//20-Create star = the first player + captain: true
const star = { ...players[0], captain: true };
console.log(star);
console.log("***======****")

//21-Create a copy of players[1] with goals increased by 1
const updatedPlayer = { ...players[1], goals: players[1].goals + 1 };
console.log(updatedPlayer);
console.log("***======****")
//22- From settings, remove notifications and keep the rest in basic
const { notifications, ...basic } = settings;
console.log(basic);
console.log("***======****")
//23-From players[0], remove id and keep the rest in info
const {id,...info}=players[0];
console.log(info);
console.log("***======****")
//24-Write sum(...numbers) and use it to sum all players' goals
function sum(...number){
  return number.reduce((total,num)=>total + num,0);
}
const totalGoals = sum(...players.map(p => p.goals));
console.log(totalGoals);
console.log("***======****")
//25- Write maxGoals(...numbers) that returns the biggest number
function maxGoals(...numbers) {
  return Math.max(...numbers);
}
const array_goal = players.map(player => player.goals);
const biggestGoals = maxGoals(...array_goal);
console.log(biggestGoals);
console.log("***======****")
//26-Use Math.max with spread to find the highest age
const highestAge = Math.max(...players.map(player=>player.age));
console.log(highestAge);
console.log("***======****")

console.log("***======****")
//28- const copy = team; then change copy.name to "Ghana" → log team.name
const copy = team;
copy.name = "Ghana";
console.log(team.name);
console.log("***======****")
//29- const copy2 = { ...team }; then change copy2.stadium.city to "Giza" → log team.stadium.city
const copy2 = { ...team };
copy2.stadium.city = "Giza";
console.log(team.stadium.city);
console.log("***======****")
//30- Fix point 29 using structuredClone
const copy3 = structuredClone(team);
copy3.stadium.city = "Cairo";
console.log(team.stadium.city);
console.log("***======****")
//31-Predict, then run: console.log(players[0] === players[0]) and console.log({} === {})
console.log(players[0] === players[0]); // true
const teams ={};
const team2 = {};
console.log(teams ===team2); //false
console.log("***======****")
//32- Write a function that takes a player and returns a new player with age + 1 — the original must not change
function addnewplayer(player) {
  return { ...player, age: player.age + 1 };
}
const oldplayer=addnewplayer(players[0]);
console.log(oldplayer);
console.log(players[0]);
console.log("***======****")

//bouns 1 - Count how many goals Salah scored in matches
const salahGoals = matches.reduce((count, match) => {
  return count + match.goals.filter(player => player === "Salah").length;
}, 0);
console.log("Salah scored = ",salahGoals);
console.log("***======****")

//// bouns2 - Create an object { wins, draws, losses } from matches
const result = matches.reduce((pass, { score: [teamScore, opponentScore] }) => {
  if (teamScore > opponentScore) pass.wins++;
  else if (teamScore === opponentScore) pass.draws++;
  else pass.losses++;
  return pass;
}, { wins: 0, draws: 0, losses: 0 });

console.log(result); 

/////

 


