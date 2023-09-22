// CI587 Web-based Game Development, Lynx Star Button
// gameLoop.js - Main for the game scene
// Started: 16th January 2023

class Scene2 extends Phaser.Scene{
    constructor(){
        super("playGame");
    }

    // First called funct - used to load assets to be used later on. --------------------------------------------------------------------------------------------
    preload() {

        switch(level){
            case 1:
                loadL1Assets(this);
                break;
            case 2:
                loadL2Assets(this);
                break;
            case 3:
                loadL3Assets(this);
                break;
            default:
                level = 1;
                loadL1Assets(this);
        }
        this.load.spritesheet("doll", "assets/doll_spritesheet.png",{
            frameWidth: 64,
            frameHeight: 64});
    } // end of preload() ---------------------------------------------------------------------------------------------------------------------------------------

    // Second called funct - used to initialise assets & settings. ----------------------------------------------------------------------------------------------
    create() {
        // Setting up all animations. ----------------------------------------------------------------------------------------------------------------------------
        jumpForce = -150;
        walking = 0;
        bone = false;
        ended = false;
        boneGiven = false;
        back = false;
        wpNum = 0;
        bigJump = false;

        if(music !== undefined)
        {
            music.stop();
        }


        switch(level){
            case 1:
                createL1Objs(this);
                break;
            case 2:
                createL2Objs(this);
                break;
            case 3:
                createL3Objs(this);
                break;
            default:
                level = 1;
                createL1Objs(this);
        }
        createPlayerAnims(this);

        //Player Creation & set-up
        player_doll = new Player(this, startX, startY, 'doll', 0).setInteractive();
        player_doll.play("doll_stand");

        if(level === 1)
        { // This puts the chair above the player so it is always in the foreground
            platforms_grp.create(0, 405, 'chair');
        }
        else if(level !== 1)
        {
            this.physics.add.overlap(player_doll,tramp_sprite, bouncePlayer);
            this.physics.add.collider(player_doll,tramp_sprite);
        }
        if(level !== 2) //|| level === 3
        {
            //sets up dog collision
            this.physics.add.collider(player_doll, slinky_dog);
            this.physics.add.collider(player_doll, slinky_butt);
            this.physics.add.overlap(player_doll,bone_sprite, collectedBone);
        }
        this.physics.add.collider(player_doll, platforms_grp);

        scene = this;

        startTime = 0;
        startTime = scene.time.now;
        //console.log(startTime);
    } // end of create() ----------------------------------------------------------------------------------------------------------------------------------------

    // Regularly called funct - updates the game and it's features. ---------------------------------------------------------------------------------------------
    update() {
        if(scene.time.now - startTime > 100)
        {
            if(!isAtLvlEnd(player_doll.x, player_doll.y))
            {
                var pointer = this.input.activePointer;
                if(level === 1 || level === 2 && wallStop2(pointer) === false || level === 3 && wallStop3(pointer) === false)
                {
                    walking = player_doll.movePlayer(pointer, walking, jumpForce);
                    player_doll.velocity = 0;
                }
                if(hasFellOffScreen() === true)
                {
                    level = 5;
                    this.scene.start("bootGame");
                }
                if(level !== 2)
                {   
                    boneClick.on('pointerdown', function(pointer){
                        if(bone)
                        {
                            boneGiven = true;
                            slinky_butt.play("dog_wag");
                        }
                    })
                }
                if(boneGiven === true)
                {
                    slinky_dog.Stretch(this);
                    if(level === 1)
                    {
                        slinky_dog.L1ShowMiddle(this);
                    }
                    else if(level === 3)
                    {
                        slinky_dog.L3ShowMiddle(this);
                    }
                }
            }
            else{
                player_doll.sitDownPlayer();
                if(back === true)
                {
                    this.scene.start("bootGame");
                }
            }
        }
    } // end of update() ----------------------------------------------------------------------------------------------------------------------------------------
}