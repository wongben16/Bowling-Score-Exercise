const originalScore = prompt("Enter in your bowling scores.");
const bowlingThrows = originalScore.split('-').join(''); //removes the "-" in the scores and rejoins the array toegether with ""
const scoreValue = [];
var bowlingIterator = 0;
var scoreIterator = 0;
var totalScore = 0;

/////////////////debug the program. not working as of 01.24.23//////////////////


while(bowlingIterator < originalScore.length){
    // console.log(bowlingThrows[bowlingIterator])
    if(/\d/.test(bowlingThrows[bowlingIterator])){ //checks if string contains a number 0-9. True if there is a number
        
        if (/\d/.test(bowlingThrows[bowlingIterator+1])){ //if throw 1 and 2 are numbers then adds them together
            scoreValue[scoreIterator] = parseInt(bowlingThrows[bowlingIterator+1]) + parseInt(bowlingThrows[bowlingIterator+2]);
        }

        else { //if throw 2 is a / then score is 10 + the next throw (which is the third throw)
            scoreValue[scoreIterator] = 10 + parseInt(bowlingThrows[bowlingIterator+2]);
        }
    }

    else {
        if (bowlingThrows[bowlingIterator].toLowerCase == "x"){//checks if string where bowlingIterator is contains a X
           
            if (bowlingThrows[bowlingIterator+1].toLowerCase == "x"){ //checks if next number in the string is a X
                
                if (bowlingThrows[bowlingIterator+2].toLowerCase == "x"){ //checks if second throw is a X
                    scoreValue[scoreIterator] = 30;
                }
            }

            else if (bowlingThrows[bowlingIterator+2] == "/"){ // check if second throw is a /
               scoreValue[scoreIterator] = 20;

            }
               
            else { //adds X + next two throw if throws did not contain X or /
                scoreValue[scoreIterator] = 10 + parseInt(bowlingThrows[bowlingIterator+1]) + parseInt(bowlingThrows[bowlingIterator+2]);
            }    

        }

        else if(bowlingThrows[bowlingIterator+1] == "/"){ //checks if second throw is a /
            
            if (bowlingThrows[bowlingIterator+2].toLowerCase == "x"){ // check if second throw is a X
                scoreValue[scoreIterator] = 20;
             }

        }
    }

    scoreIterator++;
    bowlingIterator++;
    
}

for (i = 0; i < scoreValue.length; i++){
    totalScore= totalScore + scoreValue[i];
    console.log(totalScore);
}

