// CI587 Web-based Game Development, Lynx Star Button
// manageGoals.js - Management of level completion and high scores
// Started: 14th January 2023

let offset = 2;
let ended = false;

function isAtLvlEnd(x, y)
{
    if(endLvlX < x + offset || endLvlX < x - offset)
    {
        if(endLvlY < y + offset || endLvlY < y - offset) { ended = true;}
    }
    return ended;
}

function hasFellOffScreen()
{
    if(player_doll.y > GAMEHEIGHT - 64 ) return true;//This would be the perfect place for a restart level screen
    else return false;
}

function lvlComplete()
{
    calulateScore();
    back = true;
    level = 5;
}

function calulateScore() // calulates how long it took the user to finsih the level
{
    let endTime = scene.time.now;
    let userTime = (endTime - startTime) * 0.001;
    //console.log(userTime);
    checkScore(userTime);
}

function checkScore(score) // checks if it is a high score
{
    switch(level)
    {
        case 1:
            if(score < 14) { L1Score = 'A';} // Best
            else if(score < 16) 
            {
                if(L1Score !== 'A') {L1Score = 'B';}
            } // Good
            else 
            {
                if(L1Score !== 'A' && L1Score !== 'B') {L1Score = 'C';}
            } // Okay
            break;
        case 2:
            if(score < 11) { L2Score = 'A';} // Best
            else if(score < 15) 
            {
                if(L2Score !== 'A') {L2Score = 'B';}
            } // Good
            else 
            {
                if(L2Score !== 'A' && L2Score !== 'B') {L2Score = 'C';}
            } // Okay
            break;
        case 3:
            if(score < 14) { L3Score = 'A';} // Best
            else if(score < 16) 
            {
                if(L3Score !== 'A') {L3Score = 'B';}
            } // Good
            else 
            {
                if(L3Score !== 'A' && L3Score !== 'B') {L3Score = 'C';}
            } // Okay
            break;
    }
}