// CI587 Web-based Game Development, Lynx Star Button
// input.js - Creation of Player class
// Started: 3rd Dec 2022

//Sets up the player object and adds it to the scene with physics enabled
class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, xPos, yPos, texture, targetX){
        super(scene, xPos, yPos, texture, targetX);
        scene.physics.add.existing(this);
        //this.setBounce(0.5);
        this.setCollideWorldBounds(true);
        scene.add.existing(this);
    }
    //Checks if the player has clicked and moves the character to the mouse's X position
    movePlayer(mouse, stillWalking, force)
    {
        let moveOffset = 2;

        //for jumping
        this.on('pointerdown', function(pointer){
            if(this.body.onFloor())
            {
                this.setVelocityY(force);
            }
        })

        if(mouse.isDown && mouse.button === 0)
        {
            this.targetX = mouse.worldX;

            //Only move if the mouse is outside of a speific range - this stops the doll flcikering when the mouse button is held down
            if(this.targetX > this.x + moveOffset || this.targetX < this.x - moveOffset)
            {
                if(this.x > this.targetX)
                {
                    //Checks to see if the pc is moving that way to avoid the animation restarting when it's not needed
                    if(stillWalking != 1) // 1 = left
                    {
                        this.setFlip(true, false);
                        this.play("doll_walk");
                        stillWalking = 1;
                    }
                }
                else if(this.x < this.targetX)
                {
                    //Checks to see if the pc is moving that way to avoid the animation restarting when it's not needed
                    if(stillWalking != 2) // 2 = right
                    {
                        this.setFlip(false, false);
                        this.play("doll_walk");
                        stillWalking = 2;
                    }
                }
            }
        }

        //Checks the doll isnt collidng with the floor so a falling animation can be played
        if(!this.body.onFloor())
        {
            this.play("doll_fall");
        }

        //Moves the character right or left depending on the location of the click
        if(stillWalking === 1 && this.x >= this.targetX)
        {
            this.x -= 1;
        }
        else if(stillWalking === 2 && this.x <= this.targetX)
        {
            this.x += 1;
        }
        else 
        {
            stillWalking = 0;
            if(this.body.onFloor()) this.play("doll_stand");
        }
        //returns walking var to locate what direction the player is going
        return stillWalking;
    }
    sitDownPlayer()
    {
        if(this.anims.isPlaying && this.anims.currentAnim.key !== 'doll_sit')
        {
            //console.log("I have been called");
            this.disableInteractive();
            this.play("doll_sit");
            this.on('animationcomplete', lvlComplete);
        }
    }
}