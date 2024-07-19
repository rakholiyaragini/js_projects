let choice = 1;
let message = document.getElementById("message")

switch(choice){

    case 1:
    message.innerHTML = "january";
    break;

    case 2:
    message.innerHTML = "february";
    break;

    case 3:
    message.innerHTML = "march";
    break;

    case 4:
    message.innerHTML = "april";
    break;

    case 5:
    message.innerHTML = "may";
    break;

    case 6:
    message.innerHTML = "june";
    break;

    case 7:
    message.innerHTML = "july";
    break;

    case 8:
    message.innerHTML = "august";
    break;

    case 9:
    message.innerHTML = "september";
    break;

    case 10:
    message.innerHTML = "octomber";
    break;

    case 11:
    message.innerHTML = "november";
    break;

    case 12:
    message.innerHTML = "december";
    break;

    default:
        message.innerHTML = "Please Enter Valid Choice.."
}


//season

let month = 4;
let season = document.getElementById("season")

switch(month){

    case 1:
    case 2:
    case 3:
    case 4:
        season.innerHTML = "Winter";
        break;

    case 5:
    case 6:
    case 7:
    case 8:
        season.innerHTML = "summer";
        break;

    case 9:
    case 10:
    case 11:
    case 12:
        season.innerHTML = "monsoon";
        break;

    default :
        season.innerHTML = "Enter Valid Month.."
}