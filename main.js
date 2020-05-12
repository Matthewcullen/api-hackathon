var base = 1 ;
var totalXp= null;
var pcCount = document.getElementById('pcCount')
var averageLvl = document.getElementById('averageLvl');
var difficulty=document.getElementById('difficulty');
var submitButton = document.getElementById('submitButton');
var challengeRatings = {
  '0': 10,
  '1/8': 25,
  '1/4': 50,
  '1/2': 100,
  '1': 200,
  '2': 450,
  '3': 700,
  '4': 1100,
  '5': 1800,
  '6': 2300,
  '7': 2900,
  '8': 3900,
  '9': 5000,
  '10': 5900,
  '11': 7200,
  '12': 8400,
  '13': 10000,
  '14': 11500,
  '15': 13000,
  '16': 15000,
  '17': 18000,
  '18': 20000,
  '19': 22000,
  '20': 25000,
  '21': 33000,
  '22': 41000,
  '23': 50000,
  '24': 62000,
  '30': 155000,
}

submitButton.addEventListener('click',handleSubmitClick);



function handleSubmitClick(e){
  e.preventDefault();
  getTotalXp();
  possiblemonsters(totalXp, 8)

}


function getTotalXp(){
  // average level X number of PCs X difficulty level
  switch (averageLvl.value) {
    case "1":
      base = 25
      break;
    case "2":
      base = 50
      break;
    case "3":
      base = 75
      break;
    case "4":
      base = 125
      break;
    case "5":
      base = 250
      break;
    case "6":
      base = 300
      break;
    case "7":
      base = 350
      break;
    case "8":
      base = 450
      break;
    case "9":
      base = 550
      break;
    case "10":
      base = 600
      break;
    case "11":
      base = 800
      break;
    case "12":
      base = 1000
      break;
    case "13":
      base = 1100
      break;
    case "14":
      base = 1250
      break;
    case "15":
      base = 1400
      break;
    case "16":
      base = 1600
      break;
    case "17":
      base = 2000
      break;
    case "18":
      base = 2100
      break;
    case "19":
      base = 2400
      break;
    case "20":
      base = 2800
  }
  totalXp = (base * pcCount.value * difficulty.value)
  console.log(totalXp);
}
function possiblemonsters(totalXp, maxMonsters) {
  var maxChallengeRatings = [];
  var monstersXp = []
  var monstersCR = []
  var orignalTotalXp= totalXp;
  for(var key in challengeRatings) {
    if(challengeRatings[key] < totalXp) {
      maxChallengeRatings.push(key)
    }
  }
  shuffle(maxChallengeRatings);
  for(var i =0; i<maxChallengeRatings.length;i++){
    var value = challengeRatings[maxChallengeRatings[i]];
    if(value<=totalXp){
      totalXp -= value;
      monstersXp.push(value);
      maxMonsters--;
      if(maxMonsters===0&&totalXp>200){
        var lowestXp=0;
        for (var a=0;a<monstersXp.length;a++)
      } else
    }
  }
  for(var int =0; int <monstersXp.length;int++){
    for(var prop in challengeRatings){
      if (monstersXp[int]===challengeRatings[prop]){
        monstersCR.push(prop)
      }

    }
  }
  console.log('maxChallengeRating:',maxChallengeRatings,'monstersXp:' , monstersXp,'monstersCR', monstersCR);
  // randomize the array of max challenge ratings
  // loop through max challenge ratings
  // find value of that key
  // subtract that value from the totalxp
  // once encounter is found create an object with that key and value
  // push that object into monsters
  // decrement maxmonsters
  // if maxmonsters = 0 end loop
  // if total xp does not have enough to grab another challenge end loop
  // return possible monsters
}

function shuffle(array){
  var currentIndex = array.length
  var tempValue = null;
  var randomIndex =null;
  while (0 !== currentIndex){

    randomIndex= Math.floor(Math.random()* currentIndex);
    currentIndex -= 1;

    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;

  }
  return array;
}
