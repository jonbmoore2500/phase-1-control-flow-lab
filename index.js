function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet > 2500){
    return 'No can do.'
  } else if (feet > 2000) {
    return 'I will gladly take your thirty bucks.'
  } else if (feet > 400) {
    return 'That will be twenty bucks.'
  } else {
    return 'This one is on me!'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
    return (city === 'NYC' ? "Ok, sounds good." : "No go.")
}

function switchOnCharmFromTip(tipQuality){
  // Write your code here!
  switch (tipQuality) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}