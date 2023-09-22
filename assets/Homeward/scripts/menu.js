// CI587 Web-based Game Development, Lynx Star Button
// menu.js - Title screen and level selection
// Started: 16th January 2023

class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
    preload()
    {
        //title screen
        this.load.image('titleBG', 'assets/titleBG.png');
        this.load.image('titleBacking', 'assets/titleBacking.png');
        this.load.image('title', 'assets/title.png');

        this.load.image('null', 'assets/null.png');

        //level tiles
        this.load.image('L1tile', 'assets/L1Tile.png');
        this.load.image('L2tile', 'assets/L2Tile.png');
        this.load.image('L3tile', 'assets/L3Tile.png');

        //rank images
        this.load.image('a', 'assets/ARank.png');
        this.load.image('b', 'assets/BRank.png');
        this.load.image('c','assets/CRank.png');

        this.load.audio("beauty", ["assets/audio/BeautyFlow.mp3"]);
        this.load.audio("click", ["assets/audio/MenuClick.mp3"]);
    }
    create() {

        title_grp = this.physics.add.staticGroup();
        title_grp.create(400, 250, 'titleBG');

        L1Butt = this.add.sprite(200,180,'L1tile').setInteractive().setVisible(false);
        L2Butt = this.add.sprite(400,180,'L2tile').setInteractive().setVisible(false);
        L3Butt = this.add.sprite(600,180,'L3tile').setInteractive().setVisible(false);

        //following switch cases display the badge equal to what the player has achieved
        switch(L1Score)
        {
          case 'A':
            L1Rank = this.add.sprite(200,270,'a').setVisible(false);
            break;
          case 'B':
            L1Rank = this.add.sprite(200,270,'b').setVisible(false);
            break;
          case 'C':
            L1Rank = this.add.sprite(200,270,'c').setVisible(false);
            break;
          default:
            L1Rank = this.add.sprite(200,270,'null').setVisible(false);
        }
        switch(L2Score)
        {
          case 'A':
            L2Rank = this.add.sprite(400,270,'a').setVisible(false);
            break;
          case 'B':
            L2Rank = this.add.sprite(400,270,'b').setVisible(false);
            break;
          case 'C':
            L2Rank = this.add.sprite(400,270,'c').setVisible(false);
            break;
          default:
            L2Rank = this.add.sprite(400,270,'null').setVisible(false);
        }
        switch(L3Score)
        {
          case 'A':
            L3Rank = this.add.sprite(600,270,'a').setVisible(false);
            break;
          case 'B':
            L3Rank = this.add.sprite(600,270,'b').setVisible(false);
            break;
          case 'C':
            L3Rank = this.add.sprite(600,270,'c').setVisible(false);
            break;
          default:
            L3Rank = this.add.sprite(600,270,'null').setVisible(false);
        }

        title_grp.create(400, 190, 'titleBacking');
        title_grp.create(400, 190, 'title');

        L1Butt.on('pointerdown', function(pointer){
          if(L1Butt.visible === true)
          {
              level = 1;
          }
        })
        L2Butt.on('pointerdown', function(pointer){
          if(L2Butt.visible === true)
          {
              level = 2;
          }
        })
        L3Butt.on('pointerdown', function(pointer){
          if(L3Butt.visible === true)
          {
              level = 3;
          }
        })

        if(music !== undefined)
        {
            music.stop();
        }
        music = this.sound.add("beauty", {loop: true});
        music.play()
        //this.scene.start("playGame");
    }

    update() {
      var mouse = this.input.activePointer;
      if(level > 3) // skips the title if returning to this screen from a level
      {
        this.hideTitle();
        level = 0;
      }
      if(mouse.isDown)
      {
        this.hideTitle();
        if(level > 0)
        {
          soundEff = this.sound.add("click", {loop: false});
          soundEff.play();
          this.scene.start("playGame");
        }
      }
    }

    hideTitle()
    {
      let hide = title_grp.getChildren();
      hide[1].setVisible(false);
      hide[2].setVisible(false);
      L1Butt.setVisible(true);
      L2Butt.setVisible(true);
      L3Butt.setVisible(true);
      L1Rank.setVisible(true);
      L2Rank.setVisible(true);
      L3Rank.setVisible(true);
    }
  }