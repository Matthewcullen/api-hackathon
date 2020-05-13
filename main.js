var base = 1 ;
var totalXp= null;
var maxChallengeRatings = [];
var monstersXp = []
var monstersCR = []
var monsterData = null;
var encounterMonsters = [];
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
  '19': 22000,
  '20': 25000,
  '21': 33000,
  '22': 41000,
  '23': 50000,
  '24': 62000,
  '30': 155000,
}
var cR0 = [
  'awakened-shrub', 'baboon', 'badger', 'bat', 'cat', 'commoner', 'crab',
'deer', 'eagle', 'frog' , 'giant-fire-beetle', 'goat', 'hawk', 'homunculus', 'hyena',
'jackal', 'lemure', 'lizard', 'octopus', 'owl', 'quipper', 'rat',
'raven', 'scorpion', 'sea-horse', 'shrieker', 'spider', 'vulture', 'weasel'
];
var cREigth=[
  'bandit', 'blood-hawk', 'camel', 'cultist', 'flying-snake', 'giant-crab',
'giant-rat', 'giant-weasel', 'guard', 'kobold', 'mastiff', 'merfolk','mule',
'noble', 'poisonous-snake', 'pony', 'stirge','tribal-warrior',
];
var cRQuarter=[
  'acolyte', 'axe-beak', 'blink-dog', 'boar', 'constrictor-snake', 'draft-horse',
'dretch', 'drow', 'elk', 'flying-sword', 'giant-badger', 'giant-bat', 'giant-centipede',
'giant-frog','giant-lizard', 'giant-owl', 'giant-poisonous-snake', 'giant-wolf-spider',
'goblin', 'grimlock', 'panther', 'pseudodragon', 'riding-horse','skeleton', 'sprite',
'steam-mephit', 'swarm-of-bats', 'swarm-of-rats', 'swarm-of-ravens',
'violet-fungus', 'wolf', 'zombie'
]
var cRHalf=[
  'ape', 'black-bear', 'cockatrice', 'crocodile', 'darkmantle', 'deep-gnome', 'giant-goat',
'giant-sea-horse', 'giant-wasp', 'gnoll', 'gray-ooze', 'hobgoblin', 'ice-mephit', 'lizardfolk',
'magma-mephit', 'magmin', 'orc', 'reef-shark', 'rust-monster', 'sahuagin', 'satyr', 'scout',
'shadow', 'swarm-of-insects', 'thug', 'warhorse', 'warhorse-skeleton', 'worg'
]
var cR1=[
  'animated-armor', 'brass-dragon-wyrmling', 'brown-bear', 'bugbear', 'copper-dragon-wyrmling',
'death-dog', 'dire-wolf', 'dryad', 'duergar', 'ghoul', 'giant-eagle', 'giant-hyena',
'giant-octopus', 'giant-spider', 'giant-toad', 'giant-vulture', 'harpy', 'hippogriff',
'imp', 'lion', 'quasit', 'specter', 'spy', 'swarm-of-quippers', 'tiger'
]
var cR2=[
  'ankheg', 'awakened-tree', 'azer', 'bandit-captain', 'berserker', 'black-dragon-wyrmling',
'bronze-dragon-wyrmling', 'centaur', 'cult-fanatic', 'druid', 'ettercap', 'gargoyle',
'gelatinous-cube', 'ghast', 'giant-boar',  'giant-constrictor-snake', 'giant-elk',
'gibbering-mouther', 'green-dragon-wyrmling', 'grick', 'griffon', 'hunter-shark',
'merrow', 'mimic', 'minotaur-skeleton', 'ochre-jelly', 'ogre', 'ogre-zombie', 'pegasus',
'plesiosaurus', 'polar-bear', 'priest', 'rhinoceros', 'rug-of-smothering', 'saber-toothed-tiger',
'sea-hag', 'silver-dragon-wyrmling', 'swarm-of-poisonous-snakes', 'wererat', 'white-dragon-wyrmling',
'Will-o-wisp'
]
var cR3=[
  'basilisk', 'bearded-devil', 'blue-dragon-wyrmling', 'doppelganger', 'giant-scorpion',
'gold-dragon-wyrmling', 'green-hag', 'hell-hound', 'killer-whale', 'kKnight', 'manticore',
'minotaur', 'mummy', 'nightmare', 'owlbear', 'phase-spider', 'spectator', 'veteran',
'werewolf', 'wight', 'winter-wolf'
]
var cR4 = [
  'black-pudding', 'chuul', 'couatl', 'elephant', 'ettin', 'ghost', 'lamia', 'red-dragon-wyrmling',
'sea-hag', 'wereboar', 'weretiger'
]
var cR5 = [
  'air-elemental', 'barbed-devil', 'bulette', 'earth-elemental', 'fire-elemental',
'flesh-golem', 'giant-crocodile', 'giant-shark', 'gladiator', 'gorgon', 'green-hag',
'half-red-dragon-veteran', 'hill-giant', 'night-hag', 'otyugh', 'roper', 'salamander',
'shambling-mound', 'triceratops', 'troll', 'unicorn', 'vampire-spawn', 'water-elemental',
'werebear', 'wraith', 'xorn'
]
var cR6 = [
  'chimera', 'drider', 'invisible-stalker', 'mage', 'mammoth', 'medusa', 'vrock', 'wyvern',
'young-brass-dragon', 'young-white-dragon'
]
var cR7 = [
  'giant-ape', 'night-hag', 'oni', 'shield-guardian', 'stone-giant', 'young-black-dragon',
'young-copper-dragon'
]
var cR8 = [
  'assassin', 'chain-devil', 'cloaker', 'frost-giant', 'hezrou', 'hydra', 'spirit-naga',
'tyrannosaurus-rex', 'young-bronze-dragon', 'young-green-dragon'
]
var cR9 = [
  'bone-devil', 'clay-golem', 'cloud-giant', 'fire-giant', 'glabrezu', 'treant',
'young-blue-dragon', 'young-silver-dragon'
]
var cR10 = [
  'aboleth', 'deva', 'guardian-naga', 'stone-golem', 'young-gold-dragon', 'young-red-dragon'
]
var cR11 = [
  'behir', 'djinni', 'efreeti', 'gynosphinx', 'horned-devil', 'remorhaz', 'roc'
]
var cR12 = [
  'archmage', 'erinyes'
]
var cR13 = [
  'adult-brass-dragon', 'adult-white-dragon', 'nalfeshnee', 'rakshasa', 'storm-giant', 'vampire'
]
var cR14 = [
  'adult-black-dragon', 'adult-copper-dragon', 'ice-devil'
]
var cR15 = [
  'adult-bronze-dragon', 'adult-green-dragon', 'mummy-lord', 'purple-worm'
]
var cR16 = [
  'adult-blue-dragon', 'adult-silver-dragon', 'iron-golem', 'marilith', 'mummy-lord',
'planetar'
]
var cR17 = [
  'adult-gold-dragon', 'adult-red-dragon', 'androsphinx', 'dragon-turtle'
]
var cR19 = [
  'balor'
]
var cR20 = [
  'ancient-brass-dragon', 'ancient-white-dragon', 'pit-fiend'
]
var cR21 = [
  'ancient-black-dragon', 'ancient-white-dragon', 'lich', 'solar'
]
var cR22 = [
  'ancient-bronze-dragon', 'ancient-green-dragon', 'lich'
]
var cR23 = [
  'ancient-blue-dragon', 'ancient-silver-dragon', 'kraken'
]
var cR24 = [
  'ancient-gold-dragon', 'ancient-red-dragon'
]
var cR30 = [
  'tarrasque'
]



submitButton.addEventListener('click',handleSubmitClick);
window.addEventListener('DOMContentLoaded', getMonsterList);

function showMonsters(){

}

function getEncounter(){
  encounterMonsters=[];
  for (var i =0; i< monstersCR.length; i++){
    switch(monstersCR[i]){
      case '0':
        shuffle(cR0);
        encounterMonsters.push(cR0.pop());
        break;
      case '1/8':
        shuffle(cREigth);
        encounterMonsters.push(cREigth.pop())
        break;
      case '1/4':
        shuffle(cRQuarter);
        encounterMonsters.push(cRQuarter.pop());
        break;
      case '1/2':
        shuffle(cRHalf);
        encounterMonsters.push(cRHalf.pop())
        break;
      case '1':
        shuffle(cR1);
        encounterMonsters.push(cR1.pop());
        break;
      case '2':
        shuffle(cR2);
        encounterMonsters.push(cR2.pop())
        break;
      case '3':
        shuffle(cR3);
        encounterMonsters.push(cR3.pop());
        break;
      case '4':
        shuffle(cR4);
        encounterMonsters.push(cR4.pop())
        break;
      case '5':
        shuffle(cR5);
        encounterMonsters.push(cR5.pop());
        break;
      case '6':
        shuffle(cR6);
        encounterMonsters.push(cR6.pop())
        break;
      case '7':
        shuffle(cR7);
        encounterMonsters.push(cR7.pop());
        break;
      case '8':
        shuffle(cR8);
        encounterMonsters.push(cR8.pop())
        break;
      case '9':
        shuffle(cR9);
        encounterMonsters.push(cR9.pop());
        break;
      case '10':
        shuffle(cR10);
        encounterMonsters.push(cR10.pop())
        break;
      case '11':
        shuffle(cR11);
        encounterMonsters.push(cR11.pop());
        break;
      case '12':
        shuffle(cR12);
        encounterMonsters.push(cR12.pop())
        break;
      case '13':
        shuffle(cR13);
        encounterMonsters.push(cR13.pop());
        break;
      case '14':
        shuffle(cR14);
        encounterMonsters.push(cR14.pop())
        break;
      case '15':
        shuffle(cR15);
        encounterMonsters.push(cR15.pop());
        break;
      case '16':
        shuffle(cR16);
        encounterMonsters.push(cR16.pop())
        break;
      case '17':
        shuffle(cR17);
        encounterMonsters.push(cR17.pop());
        break;
      case '19':
        shuffle(cR19);
        encounterMonsters.push(cR19.pop())
        break;
      case '20':
        shuffle(cR20);
        encounterMonsters.push(cR20.pop());
        break;
      case '21':
        shuffle(cR21);
        encounterMonsters.push(cR21.pop())
        break;
      case '22':
        shuffle(cR22);
        encounterMonsters.push(cR22.pop());
        break;
      case '23':
        shuffle(cR23);
        encounterMonsters.push(cR23.pop())
        break;
      case '24':
        shuffle(cR24);
        encounterMonsters.push(cR24.pop());
        break;
      case '30':
        shuffle(cR30);
        encounterMonsters.push(cR30.pop())
        break;
    }
  }
  console.log(encounterMonsters);
}

function getMonsterList() {
  $.ajax({
    method: "GET",
    url: "http://www.dnd5eapi.co/api/monsters",
    data: "none",
    success: handleMonsterListsuccess,
    error: handleMonsterListError,
  })
}

function handleMonsterListsuccess(data) {
  monsterData =data;
}

function handleMonsterListError(error) {
  console.error(error);
}


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
  maxChallengeRatings = [];
  monstersXp = [];
  monstersCR = [];
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
        var lowestXp=160000;
        for (var a=0;a<monstersXp.length;a++){
          if(monstersXp[a]<lowestXp){
            lowestXp=monstersXp[a];
          }
        }
      }
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
