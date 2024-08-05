class preloadScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preloadScene' });
    }

    preload() {

        // this is the exported JSON map file
        this.load.tilemapTiledJSON("room1", "assets/Scene1.tmj");
        this.load.tilemapTiledJSON("level1", "assets/Level1.tmj");
        this.load.tilemapTiledJSON("level2", "assets/Level2.tmj");
        this.load.tilemapTiledJSON("level3", "assets/Level3.tmj");

        this.load.image("frontCoverImg", "assets/Screens-01.jpg");
        this.load.image("instructionsImg", "assets/Screens-02.jpg");
        this.load.image("gameOverImg", "assets/Screens-03.jpg");
        this.load.image("winImg", "assets/Screens-04.jpg");
    
        this.load.image("genericIMG", "assets/1_Generic_32x32.png");
        this.load.image("livingIMG", "assets/2_LivingRoom_32x32.png");
        this.load.image("bedIMG", "assets/4_Bedroom_32x32.png");
        this.load.image("gymIMG", "assets/8_Gym_32x32.png");
        this.load.image("kitchenIMG", "assets/12_Kitchen_32x32.png");
        this.load.image("builderIMG", "assets/Room_Builder_32x32.png");

        this.load.image("terrainIMG", "assets/1_Terrains_and_Fences_32x32.png");
        this.load.image("fenceIMG", "assets/1_Terrains_and_Fences_32x32.png");
        this.load.image("terrainsIMG", "assets/2_City_Terrains_32x32.png");
        this.load.image("propsIMG", "assets/3_City_Props_32x32.png");
        this.load.image("citpropIMG", "assets/3_City_Props_32x32.png");
        this.load.image("houseIMG", "assets/4_Generic_Buildings_32x32.png");
        this.load.image("floorIMG", "assets/5_Floor_Modular_Buildings_32x32.png");
        this.load.image("villaIMG", "assets/7_Villas_32x32.png");
        this.load.image("shoppingIMG", "assets/9_Shopping_Center_and_Markets_32x32.png");
        this.load.image("vehiclesIMG", "assets/10_Vehicles_32x32.png");
        this.load.image("campingIMG", "assets/11_Camping_32x32.png");
        this.load.image("campIMG", "assets/11_Camping_32x32.png");
        this.load.image("hospitalIMG", "assets/12_Hotel_and_Hospital_32x32.png");
        this.load.image("cityIMG", "assets/City-01.png");
        this.load.image("exampleIMG", "assets/Example2.png");

        this.load.spritesheet('franz', 'assets/Franz.png',{ frameWidth:64, frameHeight:64 });
        this.load.spritesheet('zombie1', 'assets/Zombie1.png',{ frameWidth:64, frameHeight:64 });
        this.load.spritesheet('zombie2', 'assets/Zombie2.png',{ frameWidth:64, frameHeight:64 });
        this.load.spritesheet('zombie2fish', 'assets/Zombie2Fish.png',{ frameWidth:128, frameHeight:128 });
        this.load.spritesheet('zombie1archer', 'assets/Zombie1Archer.png',{ frameWidth:64, frameHeight:64 });
        this.load.spritesheet('support1', 'assets/Support1.png',{ frameWidth:64, frameHeight:64 });
        this.load.spritesheet('support2', 'assets/Support2.png',{ frameWidth:64, frameHeight:64 });

        this.load.spritesheet('croissantIMG', 'assets/croissants.png',{ frameWidth:32, frameHeight:32 });
        this.load.spritesheet('bronzemedal', 'assets/bronzemedal.png',{ frameWidth:32, frameHeight:32 });
        this.load.spritesheet('silvermedal', 'assets/silvermedal.png',{ frameWidth:32, frameHeight:32 });
        this.load.spritesheet('goldmedal', 'assets/goldmedal.png',{ frameWidth:32, frameHeight:32 });
        this.load.spritesheet('knife', 'assets/knife.png',{ frameWidth:32, frameHeight:32 });
        this.load.image('heart', 'assets/croissant.png');
        this.load.image('bronze', 'assets/bronzemedal1.png');
        this.load.image('silver', 'assets/silvermedal1.png');
        this.load.image('gold', 'assets/goldmedal1.png');

        this.load.audio("croissantSnd","assets/sound1.mp3");
        this.load.audio("medalSnd","assets/sound2.mp3");
        this.load.audio("zombieSnd","assets/sound3.mp3");

        this.load.audio("victorySnd","assets/sound4.mp3");
        this.load.audio("frenchMusic","assets/music.mp3");

          }
      

    create () {

          // turn on loop, adjust the volume
    this.music = this.sound.add("frenchMusic", { loop: true }).setVolume(0.06);
    // start the background music
    this.music.play();

        this.anims.create({
            key:'franz-up',
            frames:this.anims.generateFrameNumbers('franz',
            { start:105, end:112 }),
            frameRate:20,
            repeat:-1
        });
        
        this.anims.create({
            key:'franz-left',
            frames:this.anims.generateFrameNumbers('franz',
            { start:118, end:125 }),
            frameRate:20,
            repeat:-1
        });
        
        this.anims.create({
            key:'franz-down',
            frames:this.anims.generateFrameNumbers('franz',
            { start:131, end:138 }),
            frameRate:20,
            repeat:-1
        });

        this.anims.create({
            key:'franz-right',
            frames:this.anims.generateFrameNumbers('franz',
            { start:144, end:151 }),
            frameRate:20,
            repeat:-1
        });

        this.anims.create({
            key:'float',
            frames:this.anims.generateFrameNumbers('croissantIMG',
            { start:0, end:1 }),
            frameRate:3,
            repeat:-1
        });

        this.anims.create({
            key:'float1',
            frames:this.anims.generateFrameNumbers('croissantIMG',
            { start:0, end:1 }),
            frameRate:3,
            repeat:-1
        });
    
        this.anims.create({
          key:'float2',
          frames:this.anims.generateFrameNumbers('bronzemedal',
          { start:0, end:1 }),
          frameRate:3,
          repeat:-1
      });

      this.anims.create({
        key:'float3',
        frames:this.anims.generateFrameNumbers('silvermedal',
        { start:0, end:1 }),
        frameRate:3,
        repeat:-1
    });

    this.anims.create({
      key:'float4',
      frames:this.anims.generateFrameNumbers('goldmedal',
      { start:0, end:1 }),
      frameRate:3,
      repeat:-1
  });

  this.anims.create({
    key:'knifeAnim',
    frames:this.anims.generateFrameNumbers('knife',
    { start:0, end:15 }),
    frameRate:10,
    repeat:-1
});
    
    
      this.anims.create({
        key:'zombie1-up',
        frames:this.anims.generateFrameNumbers('zombie1',
        { start:105, end:112 }),
        frameRate:20,
        repeat:-1
    });
    
    this.anims.create({
        key:'zombie1-left',
        frames:this.anims.generateFrameNumbers('zombie1',
        { start:118, end:125 }),
        frameRate:20,
        repeat:-1
    });
    
    this.anims.create({
        key:'zombie1-down',
        frames:this.anims.generateFrameNumbers('zombie1',
        { start:131, end:138 }),
        frameRate:20,
        repeat:-1
    });
    
    this.anims.create({
        key:'zombie1-right',
        frames:this.anims.generateFrameNumbers('zombie1',
        { start:144, end:151 }),
        frameRate:20,
        repeat:-1
    });
    
    this.anims.create({
      key:'zombie1-uprun',
      frames:this.anims.generateFrameNumbers('zombie1',
      { start:442, end:449 }),
      frameRate:20,
      repeat:-1
    });
    
    this.anims.create({
      key:'zombie1-leftrun',
      frames:this.anims.generateFrameNumbers('zombie1',
      { start:455, end:462 }),
      frameRate:20,
      repeat:-1
    });
    
    this.anims.create({
      key:'zombie1-downrun',
      frames:this.anims.generateFrameNumbers('zombie1',
      { start:468, end:475 }),
      frameRate:20,
      repeat:-1
    });
    
    this.anims.create({
      key:'zombie1-rightrun',
      frames:this.anims.generateFrameNumbers('zombie1',
      { start:481, end:488 }),
      frameRate:20,
      repeat:-1
    });
    
    this.anims.create({
      key:'zombie1-stretch',
      frames:this.anims.generateFrameNumbers('zombie1',
      { start:26, end:32 }),
      frameRate:10,
      repeat:-1
    });
    
    this.anims.create({
      key:'zombie1-climb',
      frames:this.anims.generateFrameNumbers('zombie1',
      { start:273, end:278 }),
      frameRate:20,
      repeat:-1
    });
    
    this.anims.create({
      key:'zombie1-sit',
      frames:this.anims.generateFrameNumbers('zombie1',
      { start:418, end:418 }),
      frameRate:20,
      repeat:-1
    });
    
    this.anims.create({
      key:'zombie1-dead',
      frames:this.anims.generateFrameNumbers('zombie1',
      { start:265, end:265  }),
      frameRate:20,
      repeat:-1
    });
    
    this.anims.create({
      key:'zombie1-leftjump',
      frames:this.anims.generateFrameNumbers('zombie1',
      { start:351, end:355  }),
      frameRate:20,
      repeat:-1
    });
    
    this.anims.create({
      key:'zombie1-rightjump',
      frames:this.anims.generateFrameNumbers('zombie1',
      { start:377, end:381  }),
      frameRate:20,
      repeat:-1
    });

    this.anims.create({
      key:'zombie2-up',
      frames:this.anims.generateFrameNumbers('zombie2',
      { start:105, end:112 }),
      frameRate:20,
      repeat:-1
  });
  
  this.anims.create({
      key:'zombie2-left',
      frames:this.anims.generateFrameNumbers('zombie2',
      { start:118, end:125 }),
      frameRate:20,
      repeat:-1
  });
  
  this.anims.create({
      key:'zombie2-down',
      frames:this.anims.generateFrameNumbers('zombie2',
      { start:131, end:138 }),
      frameRate:20,
      repeat:-1
  });
  
  this.anims.create({
      key:'zombie2-right',
      frames:this.anims.generateFrameNumbers('zombie2',
      { start:144, end:151 }),
      frameRate:20,
      repeat:-1
  });
  
  this.anims.create({
    key:'zombie2-uprun',
    frames:this.anims.generateFrameNumbers('zombie2',
    { start:442, end:449 }),
    frameRate:20,
    repeat:-1
  });
  
  this.anims.create({
    key:'zombie2-leftrun',
    frames:this.anims.generateFrameNumbers('zombie2',
    { start:455, end:462 }),
    frameRate:20,
    repeat:-1
  });
  
  this.anims.create({
    key:'zombie2-downrun',
    frames:this.anims.generateFrameNumbers('zombie2',
    { start:468, end:475 }),
    frameRate:20,
    repeat:-1
  });
  
  this.anims.create({
    key:'zombie2-rightrun',
    frames:this.anims.generateFrameNumbers('zombie2',
    { start:481, end:488 }),
    frameRate:20,
    repeat:-1
  });

  this.anims.create({
    key:'zombie2-leftjump',
    frames:this.anims.generateFrameNumbers('zombie2',
    { start:351, end:355  }),
    frameRate:20,
    repeat:-1
  });
  
  this.anims.create({
    key:'zombie2-rightjump',
    frames:this.anims.generateFrameNumbers('zombie2',
    { start:377, end:381  }),
    frameRate:20,
    repeat:-1
  });

  this.anims.create({
    key:'zombie2-sit',
    frames:this.anims.generateFrameNumbers('zombie2',
    { start:429, end:429 }),
    frameRate:20,
    repeat:-1
  });
  
  this.anims.create({
    key:'zombie2-sit2',
    frames:this.anims.generateFrameNumbers('zombie2',
    { start:404, end:404 }),
    frameRate:20,
    repeat:-1
  });

  this.anims.create({
    key:'zombie2-sit3',
    frames:this.anims.generateFrameNumbers('zombie2',
    { start:431, end:431 }),
    frameRate:20,
    repeat:-1
  });

  this.anims.create({
    key:'zombie2-leftfish',
    frames:this.anims.generateFrameNumbers('zombie2fish',
    { start:314, end:324  }),
    frameRate:5,
    repeat:-1
  });

  this.anims.create({
    key:'zombie2-rightfish',
    frames:this.anims.generateFrameNumbers('zombie2fish',
    { start:340, end:350  }),
    frameRate:5,
    repeat:-1
  });

  this.anims.create({
    key:'zombie2-downfish',
    frames:this.anims.generateFrameNumbers('zombie2fish',
    { start:327, end:337  }),
    frameRate:5,
    repeat:-1
  });

  this.anims.create({
    key:'zombie2-dead',
    frames:this.anims.generateFrameNumbers('zombie2',
    { start:265, end:265  }),
    frameRate:20,
    repeat:-1
  });

  this.anims.create({
    key:'zombie3-archerleft',
    frames:this.anims.generateFrameNumbers('zombie1archer',
    { start:306, end:318  }),
    frameRate:3,
    repeat:-1
  });

  this.anims.create({
    key:'zombie3-archerright',
    frames:this.anims.generateFrameNumbers('zombie1archer',
    { start:342, end:354  }),
    frameRate:3,
    repeat:-1
  });

  this.anims.create({
    key:'supportleft',
    frames:this.anims.generateFrameNumbers('support1',
    { start:182, end:187  }),
    frameRate:5,
    repeat:-1
  });

  this.anims.create({
    key:'supportright',
    frames:this.anims.generateFrameNumbers('support2',
    { start:182, end:187  }),
    frameRate:5,
    repeat:-1
  });


    this.scene.start("main")
    }
    

}
