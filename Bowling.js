// var readline = require("readline");
// var fs = require("fs");

// var myInterface = readline.createInterface({
//     input: fs.createReadStream('demofile1.html')
// });

const originalScore = 'x-x-x-x-x-x-x-x-45-54'

originalScore.toLowerCase();

// let originalScore = readline.question("Enter in your bowling scores.");
const throws = originalScore.split('-').join(''); //removes the "-" in the scores and rejoins the array toegether with ""


const frameScoreValue = [];
var throwsIterator = 0;
var scoreIterator = 0;
var totalScore = 0;
var frameCounter = 0;

/////////////////debug the program. not working as of 01.24.23//////////////////


while(throwsIterator < throws.length){
    // console.log(throws[throwsIterator])
    if(/\d/.test(throws[throwsIterator])){ //checks if string contains a number 0-9. True if there is a number

        if (/\d/.test(throws[throwsIterator+1])){ //if throw 1 and 2 are numbers then adds them together
            frameScoreValue[scoreIterator] = parseInt(throws[throwsIterator+1]) + parseInt(throws[throwsIterator+2]);
            console.log(frameScoreValue[scoreIterator]);
        }

        else { //if throw 2 is a / then score is 10 + the next throw (which is the third throw)
            frameScoreValue[scoreIterator] = 10 + parseInt(throws[throwsIterator+2]);
            throwsIterator++;
        }
    }

    else {
        if (throws[throwsIterator] == "x"){//checks if string where throwsIterator is contains a X
           
            if (throws[throwsIterator+1] == "x"){ //checks if next number in the string is a X
                
                if (throws[throwsIterator+2] == "x"){ //checks if second throw is a X
                    frameScoreValue[scoreIterator] = 30;
                }

                else{
                    frameScoreValue[scoreIterator] = (20 + parseInt(throws[throwsIterator+2]));
                }
            }

            else if (throws[throwsIterator+2] == "/"){ // check if second throw is a /
               frameScoreValue[scoreIterator] = 20;

            }
               
            else { //adds X + next two throw if throws did not contain X or /
                frameScoreValue[scoreIterator] = 10 + parseInt(throws[throwsIterator+1]) + parseInt(throws[throwsIterator+2]);
            }    

        }

        else if(throws[throwsIterator+1] == "/"){ //checks if second throw is a /
            
            if (throws[throwsIterator+2] == "x"){ // check if second throw is a X
                frameScoreValue[scoreIterator] = 20;
             }

        }
    }

    scoreIterator++;
    throwsIterator++;
    
}

for (i = 0; i < frameScoreValue.length; i++){
    totalScore= totalScore + frameScoreValue[i];
    console.log(frameScoreValue);
    console.log(totalScore);
}

