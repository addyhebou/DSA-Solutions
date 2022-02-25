/*
    Dealership Hours: 8:00 - 19:00
    Travel Time to Bus Station: xh
    Travel Time from LA -> SD: 3h
    Travel Time from SD to Dealership: xh
    Time spent at dealership: 1hr
*/
const prompt = require('prompt-sync')();

let dealActive = prompt("Did the deal go through? Y or N: ");
if (dealActive == 'y') {
    let travelTimetoBus = 1; // need to Lyft that (30 min)
    let travelTimeFromLAtoSDViaBus = 2;
    let travelTimeFromSDtoDealership = 0.33; // need to Lyft that (20 min)
    let travelTimeFromDealershipToHome = 2;
    let timeSpentAtDealership = 1;

    let calcTime = (busTicketTime) => {
        let totalTimeAwayFromHome = 
            travelTimetoBus + 
            travelTimeFromLAtoSDViaBus + 
            travelTimeFromSDtoDealership + 
            timeSpentAtDealership + 
            travelTimeFromDealershipToHome;

        let startTime = (busTicketTime - travelTimetoBus);
        let diffA = parseInt((startTime % 1) * 60);
        let endTime = startTime + totalTimeAwayFromHome;
        if (endTime >= 13) {
            endTime -= 12;
        }
        let diffB = parseInt((endTime % 1) * 60);

        startTime = (parseInt(startTime)).toString() + ":" + diffA.toString();
        endTime = (parseInt(endTime)).toString() + ":" + diffB.toString();

        console.log(`
            \nYou will be out for about 
            ${parseInt(totalTimeAwayFromHome)} hours and 
            ${parseInt((totalTimeAwayFromHome % 1)*60)} minutes.
            \n`);

        return(`
            You will be gone away from home from ${startTime} to ${endTime}
        `);
    }
    let inputTime = prompt('Input your bus ticket time: ');
    console.log(calcTime(inputTime));
} else {
    let travelTimeFromHometoDealership = 0.5; // need to Lyft that (30 min)
    let travelTimeFromDealershipToHome = 0.5;
    let timeSpentAtDealership = 1;
    let calcTime2 = (hourIWannaLeave) => {
        let totalTimeAwayFromHome = 
        travelTimeFromHometoDealership + 
        travelTimeFromDealershipToHome + 
        timeSpentAtDealership;
        
        
        let startTime = hourIWannaLeave;
        let endTime = startTime + totalTimeAwayFromHome;
        if (endTime >= 13) {
            endTime -= 12;
            endTime = endTime.toString() + 'pm';
        } else {
            endTime = endTime.toString() + 'am';

        }
        if ((startTime <= 9) || (parseInt(startTime) == 12)) {
            startTime = startTime.toString() + 'pm';
        } else {
            startTime = startTime.toString() + 'am';
        }


        return(`
            You will be gone away from home from ${startTime} to ${endTime}
        `);
    }
    let inputTime = parseFloat(prompt('Input the time you wanna leave: '));
    console.log(calcTime2(inputTime));
    
}

