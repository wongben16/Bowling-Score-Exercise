// var readline = require("readline");
// var fs = require("fs");

// var myInterface = readline.createInterface({
//     input: fs.createReadStream('demofile1.html')
// });
// let originalScore = readline.question("Enter in your bowling scores.");
// const originalScore = 'x-x-x-x-x-x-x-x-x-x-4-5';
// const originalScore = 'x-x-x-x-x-x-x-x-45-54';
const originalScore = '5/-43-10-x-x-x-9/-4/-x-x-6-0';


const throws = originalScore.split('-').join('').toLowerCase(); //removes the "-" in the scores and rejoins the array toegether with ""
const frameScoreValue = [];
var throwsIterator = 0;
var totalScore = 0;
var frameCounter = 0;


function parseValue(value) {
    if (value === 'x') return 10;
    return parseInt(value)
}


while(throwsIterator < throws.length && frameCounter < 10){
    var currSum = 0;
    var currentThrow = throws[throwsIterator];
    var nextThrow = throws[throwsIterator+1];
    var secondNextThrow = throws[throwsIterator+2];

    // console.log("/////////////Inside While Loop//////////////");
    // console.log("currentThrow = " , currentThrow);
    // console.log("nextThrow = " , nextThrow);
    // console.log("nextSecondThrow = ", secondNextThrow);
        
    if (currentThrow === "x"){
        currSum += 10
        if (secondNextThrow === "/"){
            currSum +=10;
        }
        else{
            currSum = currSum + parseValue(nextThrow) + parseValue(secondNextThrow);
        } 
        throwsIterator++;
    }
    else{
        if (nextThrow === "/"){
            currSum = 10 + parseValue(secondNextThrow);
        }
        else {
            currSum = parseValue(currentThrow) + parseValue(nextThrow);
        }
        throwsIterator += 2;
    }
    frameScoreValue[frameCounter] = currSum;
    frameCounter++;
}

for (i = 0; i < frameScoreValue.length; i++){
    totalScore= totalScore + frameScoreValue[i];
    console.log(frameScoreValue);
    console.log("Total Score = ", totalScore);
}


