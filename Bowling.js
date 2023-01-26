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


function parseIfXValue(value) {
    if (value === 'x') return 10;
    return parseInt(value)
}
function parseValue(firstThrow, secondThrow) {
    console.log("-------------Inside parseValue Function------------");
    console.log("firstThrow = ", firstThrow);
    console.log("secondThrow = ", secondThrow);

    if (secondThrow === '/'){
        return 10;
    }
    else if (firstThrow === 'x'){
        if (secondThrow === 'x'){
            return 20;
        }
        return 10 + parseInt(secondThrow);
    }
    else{
        return parseInt(firstThrow) + parseInt(secondThrow);
    }
}

while(throwsIterator < throws.length && frameCounter < 10){
    var currentThrow = throws[throwsIterator];
    var nextThrow = throws[throwsIterator+1];
    var secondNextThrow = throws[throwsIterator+2];

    console.log("/////////////Inside While Loop//////////////");
    console.log("currentThrow = " , currentThrow);
    console.log("nextThrow = " , nextThrow);
    console.log("nextSecondThrow = ", secondNextThrow);
    
    
    if (currentThrow === "x"){
        frameScoreValue[frameCounter] = 10
        frameScoreValue[frameCounter] += parseValue(nextThrow, secondNextThrow); 
        throwsIterator++;   
    }
    // else if (nextThrow === "/"){
    //     frameScoreValue[frameCounter] = parseValue(currentThrow, secondNextThrow); 
    //     throwsIterator = throwsIterator + 2; 
    // }
    else{
        if (nextThrow === "/"){
            frameScoreValue[frameCounter] = 10 + parseIfXValue(secondNextThrow);
            throwsIterator = throwsIterator + 2;
        }
        else {
            frameScoreValue[frameCounter] = parseValue(currentThrow, nextThrow);
            throwsIterator = throwsIterator + 2;
        }
    }
    frameCounter++;
}



for (i = 0; i < frameScoreValue.length; i++){
    totalScore= totalScore + frameScoreValue[i];
    console.log(frameScoreValue);
    console.log("Total Score = ", totalScore);
}



// while(throwsIterator < throws.length && frameCounter < 10){
//     // console.log(throws[throwsIterator])
//     if(/\d/.test(throws[throwsIterator])){ //checks if string contains a number 0-9. True if there is a number

//         if (/\d/.test(throws[throwsIterator+1])){ //if throw 1 and 2 are numbers then adds them together
//             frameScoreValue[frameCounter] = parseValue(throws[throwsIterator+1]) + parseValue(throws[throwsIterator+2]);
//             console.log(frameScoreValue[scoreIterator]);
//         }

//         else { //if throw 2 is a / then score is 10 + the next throw (which is the third throw)
//             frameScoreValue[scoreIterator] = 10 + parseValue(throws[throwsIterator+2]);
//             throwsIterator++;
//         }
//     }

//     else {
//         if (throws[throwsIterator] == "x"){//checks if string where throwsIterator is contains a X
           
//             if (throws[throwsIterator+1] == "x"){ //checks if next number in the string is a X
                
//                 if (throws[throwsIterator+2] == "x"){ //checks if second throw is a X
//                     frameScoreValue[scoreIterator] = 30;
//                 }

//                 else{
//                     frameScoreValue[scoreIterator] = (20 + parseValue(throws[throwsIterator+2]));
//                 }
//             }

//             else if (throws[throwsIterator+2] == "/"){ // check if second throw is a /
//                frameScoreValue[scoreIterator] = 20;

//             }
               
//             else { //adds X + next two throw if throws did not contain X or /
//                 frameScoreValue[scoreIterator] = 10 + parseValue(throws[throwsIterator+1]) + parseValue(throws[throwsIterator+2]);
//             }    

//         }

//         else if(throws[throwsIterator+1] == "/"){ //checks if second throw is a /
            
//             if (throws[throwsIterator+2] == "x"){ // check if second throw is a X
//                 frameScoreValue[scoreIterator] = 20;
//              }

//         }
//     }

//     scoreIterator++;
//     throwsIterator++;
    
// }

