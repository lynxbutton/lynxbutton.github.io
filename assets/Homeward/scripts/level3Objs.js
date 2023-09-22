// CI587 Web-based Game Development, Lynx Star Button
// level2Objs.js - objs speific for level 3
// Started: 25th January 2023

function wallStop3(mouse)
{
    let stillWalking;
    if(mouse.isDown && mouse.button === 0)
        {
            player_doll.targetX = mouse.worldX;
            if(player_doll.targetX > player_doll.x + 2 || player_doll.targetX < player_doll.x - 2)
            {
                if(player_doll.x > player_doll.targetX)
                {
                    if(stillWalking != 1) // 1 = left
                    {
                        stillWalking = 1;
                    }
                }
                else if(player_doll.x < player_doll.targetX)
                {
                    //Checks to see if the pc is moving that way to avoid the animation restarting when it's not needed
                    if(stillWalking != 2) // 2 = right
                    {
                        stillWalking = 2;
                    }
                }
            }
            else{
                stillWalking = 0;
            }
        }
    //stops the player from walking past the drawers
    if(player_doll.y > 270)
    {
        if(player_doll.x > 350 && player_doll.x < 380)
        {
            if(player_doll.x > 350 && stillWalking === 1)
            {
                return false;
            }
            else if(player_doll.x > 352 && stillWalking === 2)
            {
                return true;
            }
            else{
                return true;
            }
        }
    }

    //stops the player from going to the left w out jumping over the boxes
    if(player_doll.y > 320)
    {
        if(player_doll.x > 100 && player_doll.x < 110)
        {
            if(player_doll.x > 90 && stillWalking === 2)
            {
                return false;
            }
            else if(player_doll.x > 90 && stillWalking === 1)
            {
                return true;
            }
            else{
                return true;
            }
        }
    }

    return false;
}