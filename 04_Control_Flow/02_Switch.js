const month = 3

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

switch (month) {     // key is used to match
    case 1:
        console.log("January");
        break;                   // if break is not used then all the cases after the matching case will start execution except default
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}


