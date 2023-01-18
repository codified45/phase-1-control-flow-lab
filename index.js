function scuberGreetingForFeet(rideDistance){
  if (rideDistance <= 400){
    return "This one is on me!";
  }
    else if ((rideDistance > 400) && (rideDistance <= 2000)) {
      return "That will be twenty bucks.";
    }
    else if ((rideDistance > 2000) && (rideDistance <= 2500)) {
    return "I will gladly take your thirty bucks.";
    }
    else {
      return "No can do.";
    }
}

function ternaryCheckCity(cityString){
    const approvedCity = "NYC";

    let agreementMessage;

    cityString === approvedCity ? (agreementMessage = "Ok, sounds good.") : (agreementMessage = "No go.");

    return agreementMessage;
}

// if (cityString === NYC) {
//   return "Ok, sounds good.";
// }

// else {
//   return "No go.";
// }


function switchOnCharmFromTip(tip){
  // const tip = 'generous'; 

  let charm;

  switch (tip) {
    case 'generous':
        charm = 'Thank you so much.';
        break;
    case 'not as generous':
        charm = 'Thank you.';
        break;
    case 'thanks for everything':
        charm = 'Bye.';
        break;
  }
  return charm;
}