// CI587 Web-based Game Development, Lynx Star Button
// level2Objs.js - objs speific for level 2
// Started: 20th January 2023

function wallStop2(mouse)
{
    if(player_doll.y > 100)
    {
        let stillWalking;
        if(player_doll.x > 325 && player_doll.x < 405)
        {
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
            //console.log(stillWalking);
            //console.log(player_doll.x);
            if(player_doll.x < 350 && stillWalking === 1)
            {
                return false;
            }
            else if(player_doll.x > 350 && stillWalking === 2)
            {
                return false;
            }
            else{
                return true;
            }
        }

        return false;
    }
    else return false;
}

class Trampoline extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, xPos, yPos, texture){
        super(scene, xPos, yPos, texture);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.body.setAllowGravity(false);
        scene.add.existing(this);
    }
}

function bouncePlayer()
{
    if(level === 2)
    {
        reef_sprite.on('pointerdown', function(pointer){
            if(!player_doll.body.onFloor())
                {
                    //console.log("pressed reef");
                    reef_sprite.body.setAllowGravity(true);
                    bigJump = true;
                }
        })
    }

    tramp_sprite.on('pointerdown', function(pointer){
        //console.log("on the trampolime");
        if(player_doll.body.onFloor())
            {
                if(level === 3)
                {
                    player_doll.setVelocityY(-200);
                }
                else if (!bigJump)
                {
                    player_doll.setVelocityY(-300);
                }
                else{
                    player_doll.setVelocityY(-400);
                }
                this.play("tramp_bounce");
            }
    })
}

class Reef extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, xPos, yPos, texture){
        super(scene, xPos, yPos, texture);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.body.setAllowGravity(false);
        scene.add.existing(this);
    }
}