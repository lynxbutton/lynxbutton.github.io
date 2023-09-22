// CI587 Web-based Game Development, Lynx Star Button
// slinkyDog.js - Class of the slinky dog 
// Started: 15th January 2023

class SlinkyDog extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, xPos, yPos, texture){
        super(scene, xPos, yPos, texture);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.body.setAllowGravity(false);
        scene.add.existing(this);
    }

    Stretch(scene)
    {
        if(this.anims.isPlaying && this.anims.currentAnim.key !== 'dog_earflap' && wpNum < 2)
        {
            this.play('dog_earflap'); //play ear flap unless not moving
        }
        let offset = 2;
        if(wpNum === 0)
        {
            if(wp1.x > this.x + offset || wp1.x < this.x - offset)
            {
                scene.physics.moveToObject(this, wp1, 50);
            }
            else{wpNum += 1;} //go to the next wp
        }
        else if(wpNum === 1)
        {
            if(wp2.x > this.x + offset || wp2.x < this.x - offset)
            {
                if(wp2.y > this.y + offset || wp2.x < this.y - offset)
                {
                    scene.physics.moveToObject(this, wp2, 50);
                }
            }
            else
            {
                this.body.setVelocity(0, 0); //stops jitters once reaching the wp
                this.play('dog_normal');
                wpNum += 1;
            }
        }
    }

    L1ShowMiddle(scene)
    {
        let arr = slinky_middle_grp.getChildren();
        arr[0].setVisible(true);
        if(wpNum === 0)
        {
            if(this.x < 438){arr[1].setVisible(true);}
        }
        if(wpNum === 1)
        {
            if(this.x < 410)
            {
                arr[1].setRotation(100); 
                arr[1].x = 432; 
                arr[1].y = 226;
            }
            if(this.x < 401){arr[1].setTexture('middle');}
            if(this.x < 380)
            {
                arr[2].setVisible(true);
                arr[2].setRotation(90); 
                
            }
            if(this.x < 355)
            {
                arr[2].setTexture('middle');
                arr[2].x = 394; 
                arr[2].y = 274;
            }
            if(this.x < 340)
            {
                arr[3].setVisible(true);
                arr[3].setRotation(40); 
            }
            if(this.x < 320)
            {
                arr[3].setTexture('middle');
                arr[3].setRotation(40); 
                arr[3].x = 358; 
                arr[3].y = 325;
                this.body.setImmovable(true);
                scene.physics.add.collider(player_doll, coll_middle_grp);
            }
        }
    }

    L3ShowMiddle(scene)
    {
        let arr = slinky_middle_grp.getChildren();
        arr[0].setVisible(true);
        if(wpNum === 0)
        {
            if(this.x < 350){
                arr[0].setTexture('middle');
            }
            if(this.x < 340){arr[1].setVisible(true);}
        }
        if(wpNum === 1)
        {
            if(this.y > 280)
            {
                arr[1].setRotation(150);
                arr[1].x = 325;
                arr[1].y = 300;
            }
            if(this.y > 310){arr[1].setTexture('middle');}
            if(this.y > 330)
            {
                arr[2].setRotation(300);
                arr[2].setVisible(true);
            }
            if(this.y > 370){arr[2].setTexture("middle");}
            if(this.y > 390)
            {
                arr[3].setRotation(250);
                arr[3].setVisible(true);
            }
            if(this.y > 415)
            {
                arr[3].setTexture("middle");
                this.body.setImmovable(true);
                scene.physics.add.collider(player_doll, coll_middle_grp);
            }
        }
    }
}

class Bone extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, xPos, yPos, texture){
        super(scene, xPos, yPos, texture);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.body.setAllowGravity(false);
        scene.add.existing(this);
    }
}

function collectedBone()
{
    bone_sprite.setVisible(false);
    bone = true;
}