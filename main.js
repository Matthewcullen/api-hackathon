var base = 1 ;
var totalXP= null;
var pcCount = document.getElementById('pcCount')
var averageLvl = document.getElementById('averageLvl');
var difficulty=document.getElementById('difficulty');
var submitButton = document.getElementById('submitButton');


submitButton.addEventListener('click',handleSubmitClick);



function handleSubmitClick(e){
  e.preventDefault();
// average level X number of PCs X difficulty level
  switch(averageLvl.value){
    case "1":
      base=25
      break;
    case "2":
      base=50
      break;
    case "3":
      base=75
      break;
    case "4":
      base=125
      break;
    case "5":
      base=250
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
  totalXP=(base*pcCount.value*difficulty.value)
  console.log(totalXP);

}
