var base = 1;
var totalXp = null;
var maxChallengeRatings = [];
var monstersXp = []
var monstersCR = []
var monsterData = null;
var encounterMonsters = [];
var monstersNeedPics = [];
var newArray = [];
var tBody = null;
var modal = null;
var statblockSection = document.querySelector('.statBlockSection');
var pcCount = document.getElementById('pcCount')
var averageLvl = document.getElementById('averageLvl');
var difficulty = document.getElementById('difficulty');
var submitButton = document.getElementById('submitButton');
var wasStatsBlockClicked = [];
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
  'deer', 'eagle', 'frog', 'giant-fire-beetle', 'goat', 'hawk', 'homunculus', 'hyena',
  'jackal', 'lemure', 'lizard', 'octopus', 'owl', 'quipper', 'rat',
  'raven', 'scorpion', 'sea-horse', 'shrieker', 'spider', 'vulture', 'weasel'
];
var cREigth = [
  'bandit', 'blood-hawk', 'camel', 'cultist', 'flying-snake', 'giant-crab',
  'giant-rat', 'giant-weasel', 'guard', 'kobold', 'mastiff', 'merfolk', 'mule',
  'noble', 'poisonous-snake', 'pony', 'stirge', 'tribal-warrior',
];
var cRQuarter = [
  'acolyte', 'axe-beak', 'blink-dog', 'boar', 'constrictor-snake', 'draft-horse',
  'dretch', 'drow', 'elk', 'flying-sword', 'giant-badger', 'giant-bat', 'giant-centipede',
  'giant-frog', 'giant-lizard', 'giant-owl', 'giant-poisonous-snake', 'giant-wolf-spider',
  'goblin', 'grimlock', 'panther', 'pseudodragon', 'riding-horse', 'skeleton', 'sprite',
  'steam-mephit', 'swarm-of-bats', 'swarm-of-rats', 'swarm-of-ravens',
  'violet-fungus', 'wolf', 'zombie'
]
var cRHalf = [
  'ape', 'black-bear', 'cockatrice', 'crocodile', 'darkmantle', 'deep-gnome', 'giant-goat',
  'giant-sea-horse', 'giant-wasp', 'gnoll', 'gray-ooze', 'hobgoblin', 'ice-mephit', 'lizardfolk',
  'magma-mephit', 'magmin', 'orc', 'reef-shark', 'rust-monster', 'sahuagin', 'satyr', 'scout',
  'shadow', 'swarm-of-insects', 'thug', 'warhorse', 'warhorse-skeleton', 'worg'
]
var cR1 = [
  'animated-armor', 'brass-dragon-wyrmling', 'brown-bear', 'bugbear', 'copper-dragon-wyrmling',
  'dire-wolf', 'dryad', 'duergar', 'ghoul', 'giant-eagle', 'giant-hyena',
  'giant-octopus', 'giant-spider', 'giant-toad', 'giant-vulture', 'harpy', 'hippogriff',
  'imp', 'lion', 'quasit', 'specter', 'spy', 'swarm-of-quippers', 'tiger'
]
var cR2 = [
  'ankheg', 'awakened-tree', 'azer', 'bandit-captain', 'berserker', 'black-dragon-wyrmling',
  'bronze-dragon-wyrmling', 'centaur', 'cult-fanatic', 'druid', 'ettercap', 'gargoyle',
  'gelatinous-cube', 'ghast', 'giant-boar', 'giant-constrictor-snake', 'giant-elk',
  'gibbering-mouther', 'green-dragon-wyrmling', 'grick', 'griffon', 'hunter-shark',
  'merrow', 'mimic', 'minotaur-skeleton', 'ochre-jelly', 'ogre', 'ogre-zombie', 'pegasus',
  'plesiosaurus', 'polar-bear', 'priest', 'rhinoceros', 'rug-of-smothering', 'saber-toothed-tiger',
  'sea-hag', 'silver-dragon-wyrmling', 'swarm-of-poisonous-snakes', 'wererat', 'white-dragon-wyrmling'
]
var cR3 = [
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
var allPics = null;
var hazardOptions = [`Enemies have a human family held  captive, save them!`, `Bring the leader back alive!`, `a 2o ft chasm separates you and the enemy`, `heavy fog rolls in you view is lightly obscured`,
 `these Creatures seem to be controlled by an unknown force`,
 `Antimagic flora: Magical manifestations can transform the environment, and sometimes trees and moss become impervious to magic. Moss starts to radiate pale white light and trees gain a pale blue grain on the bark.
Effect--A patch of this flora emanates a 30ft radius aura of counterspell. A creature that ends its turn in the aura loses a random spell slot and any spell casted inside the aura is instantly and successfully counterspelled. After a spell is counterspelled this effect can be identified by an DC 16 Intelligence (Arcana) check. Any type of damage can destroy a patch of Antimagic Flora.`,
`Chimney Mushroom: Apatch of these mushrooms with small stems and high slender cap resemble a town skyline.Effect-- If a patch of Chimney Mushroom is disturbed it releases a thick black cloud of spores that obscures all sight in a 20ft radius area. The area is heavily obscured, and any creature that ends its turn in the area must succeed on a DC 12 Constitution Saving Throw or become Poisoned for 1 hour. The spores least for 10 minutes or until dissipated with magic or mundane means.`,``,``,``,``,
`Patch of difficult terrain:  a Patch of this battlefield is difficult terrain snow/sand/uneven ground/thick undergrowth`,
`Fools weed: this weed flowers in every season,  except winter. When flowering ita has a tough, grooved, hairy stem, about 3 feet tall. The flowers are about an inch in diameter and bright blue.
   Effect--When flowering, it exudes an invisible, pungent hallucinogenic gas in an area of 20ft radius. A creature ending its turn in the gas area must succeed on a DC 12 Wisdom Saving Throw or suffer the effects of a random illusion spell.
Sighting--A creature can notice this exotic plant with a DC 15 Passive Perception check and identify this hazard with a successful DC 12 Wisdom (Survival) or Intelligence (Nature) check.`,
`Planer Shackle Mist: Made by powerful wizards of a lost empire, this magical violet and luminescent mist floats on the ground about 2ft high. Effect--The area is warded against teleportation and planar travel. Sighting--A creature can notice the mist by sight and recognize the hazard with a DC 16 Wisdom (Survival) or Intelligence (Arcana) check.`,
`Tar Pit: a tar pit is easily recogonizable, but sometimes undergrowth and other obstacles hide the pit. Effect-- A creature that steps in the tar pit falls down and must succeed on a DC 14 Strength(Athletics) check to swim and float.If the check is successful the creature can swim around, otherwise the creature remains in the same spot struggling to stay afloat.If the check fails by 5 or more the creature starts to sink 5ft inside the tar pit.A sinking creature must succeed on a DC 14 Strength(Athletics) check every turn to swim up 5ft.For every failed check the creature sinks for another 5ft.A creature that ends its turn in the tar takes 1d6 fire damage.
      Sighting-- A creature can notice the hidden pit by smell with a DC 15 Passive Perception check and recognize the hazard with a DC 14 Wisdom(Survival) or Intelligence(Nature) check.`,
      `Slumber Flora: this exotic, purple grained flora has developed an interesting self-defence mechanism. Slumber Flora constantly emits invisible and odorless gas.
Effect--A creature can notice the hidden pit by smell with a DC 15 Passive Perception check and recognize the hazard with a DC 14 Wisdom (Survival) or Intelligence (Nature) check.
Sighting--A creature can notice the flora by sight with a DC 15 Passive Perception check and recognize the hazard with a DC 12 Wisdom (Survival) or Intelligence (Nature) check.`,
`Before the monsters the Characters find 4 health potions`, `the CHaracters Find a potion of fire Breathing before the fight`
]


submitButton.addEventListener('click', handleSubmitClick);
window.addEventListener('DOMContentLoaded', getMonsterList);

function getMonsterPicsError(error) {
  console.error(error)
}
function getMonsterPicsSuccess(data, monster) {
  allPics = data;
  var currentMonsterStatBlock = null;
  newArray = encounterMonsters
  convertEncounterMonsters();
  for (let i = 0; i < allPics.data.images.length; i++) {
    if (allPics.data.images[i].description === convertEncounterMonstersParm(monster[0])) {
      currentMonsterStatBlock = document.querySelector(`div.${convertEncounterPicturesMonsters(allPics.data.images[i].description, "b")}`);
      if(!currentMonsterStatBlock.classList.contains("has-image")){
        currentMonsterStatBlock.classList.add("has-image");
        var imageBox = document.createElement('div');
        var img = document.createElement("img");
        img.src = "" + data.data.images[i].link;
        imageBox.append(img);
        currentMonsterStatBlock.append(imageBox);
      }
    }
  }
}

function addhazard(){
  var bottomRow = document.querySelector('.bottomRow');
  var hazard = document.createElement('th');
  hazard.classList.add('hazard');
  hazardOptions= shuffle(hazardOptions);
  var randomhazard = hazardOptions.pop()
  bottomRow.append(randomhazard);
}

function capitalLetter(str) {
  str = str.split(" ");
  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  str = str.join(" ");
  return str;
}

function loopThroughstring(string, dir) {
  if(dir && dir === "f"){
    string = string.replace(/-/g, ' ')
    string = capitalLetter(string);
  } else if(dir && dir === "b"){
    string = string.replace(/ /g, "-")
    string = string.toLowerCase();
  }

  return string;
}
function convertEncounterMonsters() {
  monstersNeedPics = [];
  for (var i = 0; i < encounterMonsters.length; i++) {
    monstersNeedPics[i] = loopThroughstring(encounterMonsters[i], "f");
  }
  return newArray;
}

function convertEncounterMonstersParm(str) {
  str = loopThroughstring(str, "f");
  return str;
}

function convertEncounterPicturesMonsters(str) {
  str = loopThroughstring(str, "b");
  return str;
}

function getMonsterStats() {
  for (var i = 0; i < encounterMonsters.length; i++) {
    $.ajax({
      method: "GET",
      url: "http://www.dnd5eapi.co/api/monsters/" + encounterMonsters[i],
      data: "none",
      success: handleGetStatsSuccess,
      error: handleGetStatsError,
    })
  }
  addhazard();
  // this.getMonsterPics();
}

function handleGetStatsError(error) {
  console.error(error);
}
function handleGetStatsSuccess(data) {
  var statBlock = document.createElement('div')
  var head = document.createElement('div');
  var hitPointsBox = document.createElement('div');
  var stats = document.createElement('div');
  var proficiencies = document.createElement('div')
  var sAbilities = document.createElement('div')
  var actions = document.createElement('div');
  var actiontitle = document.createElement('h3');
  var sAbilitiesTitle = document.createElement('h3');
  sAbilitiesTitle. textContent = "Speacial Abilities: "
  actiontitle.textContent = "Actions: "
  sAbilities.append(sAbilitiesTitle);
  actions.append(actiontitle);
  statBlock.classList.add("hidden");
  statBlock.classList.add("modal");




  var tableName = document.createElement('td');
  var tableCR = document.createElement('td');
  var newRow = document.createElement('tr');
  tBody = document.getElementById("tBody");
  tableName.textContent = data.name;
  tableCR.textContent = " " + data.challenge_rating;
  tableName.classList.add(data.index);
  tableCR.classList.add("table" + data.challenge_rating);
  newRow.append(tableName, tableCR);
  tBody.append(newRow);
  tableName.addEventListener('click', openStatBlock)

  let sign;

  for (var key in data) {
    switch (key) {
      case 'actions':
        for (var ai = 0; ai < data.actions.length; ai++) {
          var act = document.createElement('h4');
          var actD = document.createElement('p');
          act.textContent += ' ' + data.actions[ai].name + '--';
          actD.textContent += ' ' + data.actions[ai].desc + ' ';
          actions.append(act, actD)
        }
        break;
      case 'alignment':
        var alignment = document.createElement('p');
        alignment.textContent = ' ' + data.alignment + ' ';
        break;
      case 'armor_class':
        var aC = document.createElement('p');
        aC.textContent = "AC: " + data.armor_class + ' ';
        break;
      case 'challenge_rating':
        var challenge = document.createElement('p');
        challenge.textContent = "Challenge: " + data.challenge_rating + ' ';
        break;
      case 'charisma':
        var cha = document.createElement('p');
        cha.textContent = "CHA: ";
        sign = data[key]>9 ? "+": "";
        cha.textContent += `${data[key]} ${sign}${Math.floor(data[key] / 2) - 5}`;
        break;
      case 'condition_immunities':
        if (data.condition_immunities.length !== 0) {
          var conditionImmunities = document.createElement('p');
          conditionImmunities.textContent = "Condition Immunities: ";
        }
        for (var cii = 0; cii < data.condition_immunities.length; cii++) {
          conditionImmunities.textContent += ' ' + data.condition_immunities[cii].name + ' ';
          proficiencies.append(conditionImmunities);
        }
        break;
      case 'constitution':
        var con = document.createElement('p');
        con.textContent = "CON: "
        sign = data[key] > 9 ? "+" : "";
        con.textContent += `${data[key]} ${sign}${Math.floor(data[key] / 2) - 5}`;
        break;
      case 'damage_immunities':
        if (data.damage_immunities.length !== 0) {
          var damageImmunities = document.createElement('p');
          damageImmunities.textContent += "Damage Immunities: ";
        }
        for (var dii = 0; dii < data.damage_immunities.length; dii++) {
          damageImmunities.textContent += ' ' + data.damage_immunities[dii] + ' ';
          proficiencies.append(damageImmunities);
        }
        break;
      case 'damage_resistances':
        if (data.damage_resistances.length !== 0) {
          var damageResistances = document.createElement('p');
          damageResistances.textContent += "Damage resistances:";
        }
        for (var dri = 0; dri < data.damage_resistances.length; dri++) {
          damageResistances.textContent += ' ' + data.damage_resistances[dri] + ' ';
          proficiencies.append(damageResistances);
        }
        break;
      case 'damage_vulnerabilities':
        if (data.damage_vulnerabilities.length !== 0) {
          var damageVulnerabilities = document.createElement('p');
          damageVulnerabilities.textContent += "Gamage Vulnerabilities:"
        }
        for (var dvi = 0; dvi < data.damage_vulnerabilities.length; dvi++) {
          damageVulnerabilities.textContent += ' ' + data.damage_vulnerabilities[dii] + ' ';
          proficiencies.append(damageVulnerabilities);
        }
        break;
      case 'dexterity':
        var dex = document.createElement('p');
        dex.textContent = "DEX: "
        sign = data[key] > 9 ? "+" : "";
        dex.textContent += `${data[key]} ${sign}${Math.floor(data[key] / 2) - 5}`;
        break;
      case 'hit_dice':
        var hitDice = document.createElement('p');
        hitDice.textContent = "Hit Dice(" + data.hit_dice + ")";
        break;
      case 'hit_points':
        var hP = document.createElement('p');
        hP.textContent = "HP:" + data.hit_points + ' ';
        break;
      case 'intelligence':
        var int = document.createElement('p');
        int.textContent = "INT: ";
        sign = data[key] > 9 ? "+" : "";
        int.textContent += `${data[key]} ${sign}${Math.floor(data[key] / 2) - 5}`;
        break;
      case 'languages':
        var languages = document.createElement('p');
        languages.textContent = ' languages:' + data.languages + ' ';
        proficiencies.append(languages);
        break;
      case 'name':
        var name = document.createElement('h1');
        name.textContent = data.name;
        break;
      case 'proficiencies':
        for (var pi = 0; pi < data.proficiencies.length; pi++) {
          if (data.proficiencies.length === 0) {
            break;
          }
          if (data.proficiencies[pi].name === "Saving Throw: STR" || data.proficiencies[pi].name === "Saving Throw: DEX" || data.proficiencies[pi].name === "Saving Throw: CON" || data.proficiencies[pi].name === "Saving Throw: INT" || data.proficiencies[pi].name === "Saving Throw: WIS" || data.proficiencies[pi].name === "Saving Throw: CHA") {
            var savingThrows = document.createElement('p');
            savingThrows.textContent = 'Saving Throws: '
            switch (data.proficiencies[pi].name) {
              case "undefined":
                break;
              case "Saving Throw: STR":
                savingThrows.textContent += "STR ";
                savingThrows.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Saving Throw: DEX":
                savingThrows.textContent += "DEX ";
                savingThrows.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Saving Throw: CON":
                savingThrows.textContent += "CON ";
                savingThrows.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Saving Throw: INT":
                savingThrows.textContent += "INT ";
                savingThrows.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Saving Throw: WIS":
                savingThrows.textContent += "WiS ";
                savingThrows.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Saving Throw: CHA":
                savingThrows.textContent += "CHA ";
                savingThrows.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
            }
            proficiencies.append(savingThrows);

          } else {
            var skills = document.createElement('p');
            skills.textContent += "Skills: ";
            switch (data.proficiencies[pi].name) {
              case "Skill: Deception":
                skills.textContent += " Deception ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Skill: Intimidation":
                skills.textContent += " Intimidation ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Skill: Performance":
                skills.textContent += " Performance ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Skill: Persuasion":
                skills.textContent += " Persuasion ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Skill: Animal Handling":
                skills.textContent += " Anamal Handling ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Skill: Insight":
                skills.textContent += "Insight ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Skill: Medicine":
                skills.textContent += "Medicine ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Skill: Perception":
                skills.textContent += "Perception ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Skill: Survival":
                skills.textContent += "Survival ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Skill: Arcana":
                skills.textContent += "Arcana ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Skill: History":
                skills.textContent += "History ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Skill: Investigation":
                skills.textContent += "Investigation ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Skill: Nature":
                skills.textContent += "Nature ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Skill: Religion":
                skills.textContent += "Religion";
                skills.textContent += "+" + data.proficiencies[pi].value;
                break;
              case "Skill: Athletics":
                skills.textContent += "Athletics ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Skill: Acrobatics":
                skills.textContent += "Acrobatics ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Skill: Sleight of Hand":
                skills.textContent += "Sleight of Hand ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
              case "Skill: Stealth":
                skills.textContent += "Stealth ";
                skills.textContent += "+" + data.proficiencies[pi].value + ' ';
                break;
            }
            proficiencies.append(skills);
          }
        }
        break;
      case 'senses':
        var senses = document.createElement('p');
        senses.textContent = "Senses: "
        for (var senseKey in data.senses) {
          senses.textContent += ' ' + senseKey;
          senses.textContent += ' ' + data.senses[senseKey] + ' ';
        }
        proficiencies.append(senses);
        break;
      case 'size':
        var size = document.createElement('p');
        size.textContent ='Size:'+data.size + ' ';
        break;
      case 'special_abilities':
        if (data.special_abilities.length !== 0) {
          for (var sai = 0; sai < data.special_abilities.length; sai++) {
            var specialAbilities = document.createElement('p');
            specialAbilities.classList.add("sAbility")
            specialAbilities.textContent += data.special_abilities[sai].name + ' --- ' + data.special_abilities[sai].desc;
            sAbilities.append(specialAbilities);
          }
        }
        break;
      case 'speed':
        var speed = document.createElement('p')
        speed.textContent += "Speed: "
        for (var speedKey in data.speed) {
          switch (speedKey) {
            case 'walk':
              speed.textContent += data.speed[speedKey] + ' ';
              break;
            case 'climb':
              speed.textContent += speedKey + " " + data.speed[speedKey] + ' ';
              break;
            case 'swim':
              speed.textContent += speedKey + " " + data.speed[speedKey] + ' ';
              break;
            case 'fly':
              speed.textContent += speedKey + " " + data.speed[speedKey] + ' ';
              break;
          }
        }
        break;
      case 'strength':
        var str = document.createElement('p');
        str.textContent = "STR: ";
        sign = data[key] > 9 ? "+" : "";
        str.textContent += `${data[key]} ${sign}${Math.floor(data[key] / 2) - 5}`;
        break;
      case 'subtype':
        if (data.subtype !== null) {
          var subType = document.createElement('p');
          subType.textContent ='Subtype: ' +data.subtype + ' ';
          type.append(subType)
        }
        break;
      case 'type':
        var type = document.createElement('p');
        type.textContent ='type:' +data.type;
        break;
      case 'wisdom':
        var wis = document.createElement('p');
        wis.textContent = "WIS: ";
        sign = data[key] > 9 ? "+" : "";
        wis.textContent += `${data[key]} ${sign}${Math.floor(data[key] / 2) - 5}`;
        break;
    }
  }
  statBlock.classList.add("statBlock");
  head.classList.add("head");
  hitPointsBox.classList.add("hitPointsBox");
  stats.classList.add("stats");
  proficiencies.classList.add("proficiencies");
  sAbilities.classList.add("sAbilities")
  actions.classList.add("actions");
  statBlock.classList.add('' + data.index)
  statblockSection.append(statBlock)
  head.append(name, size, type, alignment);
  hP.append(hitDice);
  hitPointsBox.append(aC, hP, speed);
  stats.append(str, dex, con, int, wis, cha);
  proficiencies.append(languages, challenge);
  statBlock.append(head, hitPointsBox, stats, proficiencies, sAbilities, actions);
  statblockSection.append(statBlock)
  // getMonsterPics();
}
function openStatBlock(e) {
  var allStatBlocks = document.querySelectorAll('.statBlock')
  for (var i=0; i<allStatBlocks.length;i++){
    allStatBlocks[i].classList.add('hidden');
  }
  document.querySelector('div.' + e.target.classList).classList.remove("hidden");

  getMonsterPics(e.target.classList);
}
function getEncounter() {
  encounterMonsters = [];
  for (var i = 0; i < monstersCR.length; i++) {
    switch (monstersCR[i]) {
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
  monsterData = data;
}
function handleMonsterListError(error) {
  console.error(error);
}
function handleSubmitClick(e) {
  e.preventDefault();
  statblockSection.innerHTML = '';
  if (tBody !== null) {
    tBody.innerHTML = '';
  }
  getTotalXp();
  possiblemonsters(totalXp, 8);
  getEncounter();
  getMonsterStats();
  // addhazard();


}
function getTotalXp() {
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
}
function possiblemonsters(totalXp, maxMonsters) {
  maxChallengeRatings = [];
  monstersXp = [];
  monstersCR = [];
  for (var key in challengeRatings) {
    if (challengeRatings[key] < totalXp) {
      maxChallengeRatings.push(key)
    }
  }
  shuffle(maxChallengeRatings);
  for (var i = 0; i < maxChallengeRatings.length; i++) {
    var value = challengeRatings[maxChallengeRatings[i]];
    if (value <= totalXp) {
      totalXp -= value;
      monstersXp.push(value);
      maxMonsters--;
      if (maxMonsters === 0 && totalXp > 200) {
        var lowestXp = 160000;
        for (var a = 0; a < monstersXp.length; a++) {
          if (monstersXp[a] < lowestXp) {
            lowestXp = monstersXp[a];
          }
        }
      }
    }
  }
  for (var int = 0; int < monstersXp.length; int++) {
    for (var prop in challengeRatings) {
      if (monstersXp[int] === challengeRatings[prop]) {
        monstersCR.push(prop)
      }
    }
  }
}
function shuffle(array) {
  var currentIndex = array.length
  var tempValue = null;
  var randomIndex = null;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;

  }
  return array;
}
