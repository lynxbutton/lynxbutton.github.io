// CI587 Web-based Game Development, Lynx Star Button
// SettingUp.js - Loading sprites and creating animations
// Started: 13th January 2023

//--- LOAD LEVEL ASSETS ----------------------------------------------------------------------------------------------------------------------------------------------
function loadL1Assets(scene){ //loads all images for level 1 into the game
    console.log("level 1 assets loaded");

    //images with collisions
    scene.load.image('tableTop', 'assets/tableTop.png');
    scene.load.image('shelf', 'assets/L1Shelf.png');
    scene.load.image('blueBox','assets/blueBox.png');
    scene.load.image('redBox','assets/redBox.png');
    scene.load.image('yellowBox','assets/yellowBox.png');
    scene.load.image('chair','assets/chair.png');

    //collisionless images
    scene.load.image('bg', 'assets/L1BG.png');
    scene.load.image('books','assets/books.png');
    scene.load.image('mumDoll', 'assets/mumDoll.png');
    scene.load.image('tableLeg', 'assets/tableLeg.png');
    scene.load.image('null', 'assets/null.png');
    scene.load.image('bigNull', 'assets/big_null.png');

    scene.load.image('middle', 'assets/slinky_middle.png');
    scene.load.image('halfMid', 'assets/half_middle.png');

    //spriteSheets
    scene.load.spritesheet("dog", "assets/Slinky_sheet.png",{
        frameWidth: 64,
        frameHeight: 64});

    scene.load.spritesheet("bone", "assets/bone_sheet.png",{
        frameWidth: 32,
        frameHeight: 32});

    scene.load.audio("silly-fun", ["assets/audio/SillyFun.mp3"]);
}

function loadL2Assets(scene){ //loads all images for level 2 into the game
    console.log("level 2 assets loaded");

    //images with collisions
    scene.load.image('floor2', 'assets/L2Floor.png');
    scene.load.image('window2', 'assets/L2GlassTop.png');
    scene.load.image('wall2','assets/L2WallBottom.png');
    scene.load.image('table2','assets/L2Table.png');
    scene.load.image('rack2','assets/shoeRack.png');
    scene.load.image('bowl2','assets/keyBowl.png');
    scene.load.image('reef','assets/reef.png');

    //collisionless images
    scene.load.image('bg2', 'assets/L2BG.png');

    //spriteSheets
    scene.load.spritesheet("tramp", "assets/tramp_sheet.png",{
        frameWidth: 96,
        frameHeight: 39});

    scene.load.audio("airship", ["assets/audio/AirshipSerenity.mp3"]);
}

function loadL3Assets(scene){ //loads all images for level 2 into the game
    console.log("level 3 assets loaded");

    //images with collisions
    scene.load.image('floor3', 'assets/L3Floor.png');
    scene.load.image('drawers', 'assets/L3Drawers.png');
    scene.load.image('blueBox','assets/blueBox.png');
    scene.load.image('redBox','assets/redBox.png');
    scene.load.image('yellowBox','assets/yellowBox.png');

    //collisionless images
    scene.load.image('bg3', 'assets/L3BG.png');
    scene.load.image('bed', 'assets/bed.png');
    scene.load.image('null', 'assets/null.png');
    scene.load.image('bigNull', 'assets/big_null.png');
    scene.load.image('lamp', 'assets/lamp.png');
    scene.load.image('clock', 'assets/clock.png');

    scene.load.image('middle', 'assets/slinky_middle.png');
    scene.load.image('halfMid', 'assets/half_middle.png');

    //spriteSheets
    scene.load.spritesheet("dog", "assets/Slinky_sheet.png",{
        frameWidth: 64,
        frameHeight: 64});

    scene.load.spritesheet("bone", "assets/bone_sheet.png",{
        frameWidth: 32,
        frameHeight: 32});

    scene.load.spritesheet("tramp", "assets/tramp_sheet.png",{
        frameWidth: 96,
        frameHeight: 39});

    //sound
    scene.load.audio("cipher", ["assets/audio/Cipher.mp3"]);

    
}

//--- LEVEL OBJS CREATION ----------------------------------------------------------------------------------------------------------------------------------
function createL1Objs(scene){
    //Level start & end point set
    endLvlX = 750;
    endLvlY = 100;
    startX = 125;
    startY = 345;

    background = scene.physics.add.staticGroup();
    background.create(400,250, 'bg');
    //objects and obstacles within the scene - collidable
    platforms_grp = scene.physics.add.staticGroup();
    platforms_grp.create(150, 400, 'tableTop');
    platforms_grp.create(550, 250, 'shelf');
    platforms_grp.create(760, 230, 'shelf');
    platforms_grp.create(240, 359, 'yellowBox');
    platforms_grp.create(220, 327, 'redBox');
    platforms_grp.create(200, 359, 'blueBox');

    //objects without collision - scene decorations
    decorations_grp = scene.physics.add.staticGroup();
    decorations_grp.create(600, 202, 'books');
    decorations_grp.create(700, 182, 'mumDoll');
    decorations_grp.create(290, 500, 'tableLeg');

    //waypoint creation
    wp1 = scene.physics.add.sprite(410, 202, 'null');
    wp1.body.setAllowGravity(false);
    wp2 = scene.physics.add.sprite(302, 346, 'null');
    wp2.body.setAllowGravity(false);

    //starting values of the look of the slinky middle
    slinky_middle_grp = scene.physics.add.staticGroup();
    slinky_middle_grp.create(490, 210, 'middle');
    slinky_middle_grp.create(430, 210, 'halfMid');
    slinky_middle_grp.create(415, 250, 'halfMid');
    slinky_middle_grp.create(385, 308, 'halfMid');
    slinky_middle_grp.create(358, 325, 'halfMid');
    slinky_middle_grp.setVisible(false);

    //slinky middle collision
    coll_middle_grp = scene.physics.add.staticGroup();
    coll_middle_grp.create(500, 210, 'null');
    coll_middle_grp.create(468, 210, 'null');
    coll_middle_grp.create(436, 225, 'null');
    coll_middle_grp.create(412, 257, 'null');
    coll_middle_grp.create(395, 289, 'null');
    coll_middle_grp.create(380, 321, 'null');
    coll_middle_grp.create(355, 353, 'null');

    boneClick = scene.add.sprite(305,350,'bigNull').setInteractive();

    //slinky halves creation
    createSlinkyAnims(scene);
    slinky_butt = new SlinkyDog(scene, 550, 202, "dog");
    slinky_butt.setFlip(true, false);
    slinky_butt.play("dog_tail");
    slinky_butt.body.setImmovable(true);

    slinky_dog = new SlinkyDog(scene, 485, 202, "dog");
    slinky_dog.setFlip(true, false);
    slinky_dog.play("dog_normal");

    //Bone creation
    bone_sprite = new Bone(scene, 220, 230, "bone");
    createBoneAnims(scene);
    bone_sprite.play("bone_bounce");

    console.log("level 1 objects created");

    music = scene.sound.add("silly-fun", {loop: true});
    music.play();
}

function createL2Objs(scene){
    console.log("level 2 objects created");

    //Level start & end point set
    endLvlX = 720;
    endLvlY = 300;
    startX = 50;
    startY = 345;

    background = scene.physics.add.staticGroup();
    background.create(400,250, 'bg2');

    //objects and obstacles within the scene - collidable
    platforms_grp = scene.physics.add.staticGroup();
    platforms_grp.create(370, 300, 'wall2');
    platforms_grp.create(370, 25, 'window2');
    platforms_grp.create(700, 420, 'table2');
    platforms_grp.create(550, 435, 'rack2');
    platforms_grp.create(400, 480, 'floor2');

    //objects without collision - scene decorations
    decorations_grp = scene.physics.add.staticGroup();
    decorations_grp.create(640, 337, 'bowl2');

    reef_sprite = new Reef(scene, 345, 230, "reef").setInteractive();

    createTrampolineAnims(scene);

    tramp_sprite = new Trampoline(scene, 240, 440, "tramp").setInteractive();
    tramp_sprite.body.setImmovable(true);
    tramp_sprite.play("tramp_normal");

    music = scene.sound.add("airship", {loop: true});
    music.play();
}

function createL3Objs(scene){
    console.log("level 3 objects created");

    //Level start & end point set
    endLvlX = 630;
    endLvlY = 300;
    startX = 150;
    startY = 345;

    background = scene.physics.add.staticGroup();
    background.create(400,250, 'bg3');

    //objects and obstacles within the scene - collidable
    platforms_grp = scene.physics.add.staticGroup();
    platforms_grp.create(430, 382, 'drawers');
    platforms_grp.create(400, 480, 'floor3');

    platforms_grp.create(38, 446, 'yellowBox');
    platforms_grp.create(68, 414, 'redBox');
    platforms_grp.create(88, 382, 'blueBox');

    //objects without collision - scene decorations
    decorations_grp = scene.physics.add.staticGroup();
    decorations_grp.create(640, 390, 'bed');
    decorations_grp.create(430, 270, 'lamp');
    decorations_grp.create(480, 287, 'clock');

    //platfrom for the bed so the player can sit
    platforms_grp.create(550, 380, 'null');
    platforms_grp.create(614, 380, 'null');
    platforms_grp.create(678, 380, 'null');
    platforms_grp.create(742, 380, 'null');

    //waypoint creation
    wp1 = scene.physics.add.sprite(310, 280, 'null');
    wp1.body.setAllowGravity(false);
    wp2 = scene.physics.add.sprite(250, 434, 'null');
    wp2.body.setAllowGravity(false);

    //starting values of the look of the slinky middle
    slinky_middle_grp = scene.physics.add.staticGroup();
    slinky_middle_grp.create(380, 280, 'halfMid');
    slinky_middle_grp.create(320, 280, 'halfMid');
    slinky_middle_grp.create(300, 355, 'halfMid');
    slinky_middle_grp.create(292, 418, 'halfMid');
    slinky_middle_grp.setVisible(false);

    //slinky middle collision
    coll_middle_grp = scene.physics.add.staticGroup();
    coll_middle_grp.create(290, 400, 'null');
    coll_middle_grp.create(310, 365, 'null');
    coll_middle_grp.create(330, 330, 'null');

    boneClick = scene.add.sprite(300,420,'bigNull').setInteractive();

    //slinky halves creation
    createSlinkyAnims(scene);
    slinky_butt = new SlinkyDog(scene, 444, 270, "dog");
    slinky_butt.setFlip(true, false);
    slinky_butt.play("dog_tail");
    slinky_butt.body.setImmovable(true);

    slinky_dog = new SlinkyDog(scene, 380, 270, "dog");
    slinky_dog.setFlip(true, false);
    slinky_dog.play("dog_normal");

    //Bone creation
    bone_sprite = new Bone(scene, 50, 300, "bone");
    createBoneAnims(scene);
    bone_sprite.play("bone_bounce");

    createTrampolineAnims(scene);
    tramp_sprite = new Trampoline(scene, 160, 445, "tramp").setInteractive();
    tramp_sprite.body.setImmovable(true);
    tramp_sprite.play("tramp_normal");

    music = scene.sound.add("cipher", {loop: true});
    music.play();
}

//--- ANIMATIONS -------------------------------------------------------------------------------------------------------------------------
function createPlayerAnims(scene){
    //PCs walking animation
    scene.anims.create({
        key: "doll_walk",
        frames: scene.anims.generateFrameNumbers("doll", {start: 0, end: 11}),
        frameRate: 15,
        repeat: -1,
    });

    //PCs standing animation
    scene.anims.create({
        key: "doll_stand",
        frames: scene.anims.generateFrameNumbers("doll", {start: 0, end: 0}),
        frameRate: 1,
        repeat: -1,
    });

    //PCs falling animation
    scene.anims.create({
        key: "doll_fall",
        frames: scene.anims.generateFrameNumbers("doll", {start: 8, end: 8}),
        frameRate: 1,
        repeat: -1,
    });

    //PCs sitting animation
    scene.anims.create({
        key: "doll_sit",
        frames: scene.anims.generateFrameNumbers("doll", {start: 10, end: 21}),
        frameRate: 15,
        repeat: 0,
    });
}

function createSlinkyAnims(scene){
    scene.anims.create({
        key: "dog_normal",
        frames: scene.anims.generateFrameNumbers("dog", {start: 0, end: 0}),
        frameRate: 1,
        repeat: -1,
    });
    scene.anims.create({
        key: "dog_earflap",
        frames: scene.anims.generateFrameNumbers("dog", {start: 0, end: 1}),
        frameRate: 2,
        repeat: 0,
    });

    scene.anims.create({
        key: "dog_tail",
        frames: scene.anims.generateFrameNumbers("dog", {start: 2, end: 2}),
        frameRate: 1,
        repeat: -1,
    });

    scene.anims.create({
        key: "dog_wag",
        frames: scene.anims.generateFrameNumbers("dog", {start: 2, end: 7}),
        frameRate: 12,
        repeat: -1,
    });
}

function createBoneAnims(scene)
{
    scene.anims.create({
        key: "bone_bounce",
        frames: scene.anims.generateFrameNumbers("bone", {start: 0, end: 9}),
        frameRate: 10,
        repeat: -1,
    });
}

function createTrampolineAnims(scene)
{
    scene.anims.create({
        key: "tramp_bounce",
        frames: scene.anims.generateFrameNumbers("tramp",{start: 0, end: 16}),
        frameRate: 30,
        repeat: 0,
    });

    scene.anims.create({
        key: "tramp_normal",
        frames: scene.anims.generateFrameNumbers("tramp",{start: 0, end: 0}),
        frameRate: 1,
        repeat: -1,
    });
}