class level3 extends Phaser.Scene {
    constructor() {
      super({
        key: "level3",
      });
  
      // Put global variable here
    }
  
    // incoming data from scene below
    init(data) {
      this.player = data.player;
      this.inventory = data.inventory;
    }
  
    create() {
      console.log("*** level3 scene");
  
      // Create the map from main 
      let map = this.make.tilemap({key: "level3",});
  
      // Load the game tiles
      // 1st parameter is name in Tiled,
      // 2nd parameter is key in Preload
      let fenceTiles = map.addTilesetImage("1_Terrains_and_Fences_32x32", "fenceIMG");
      let vehiclesTiles = map.addTilesetImage("10_Vehicles_32x32", "vehiclesIMG");
      let campTiles = map.addTilesetImage("11_Camping_32x32", "campIMG");
      let terrainsTiles = map.addTilesetImage("2_City_Terrains_32x32", "terrainsIMG");
      let citpropTiles = map.addTilesetImage("3_City_Props_32x32", "citpropIMG");

  
      let tilesArray = [fenceTiles, vehiclesTiles, campTiles, terrainsTiles, citpropTiles];
  
      //Load in layers by layers
      this.ground3Layer = map.createLayer("ground3Layer", tilesArray, 0,0);
      this.lakeLayer = map.createLayer("lakeLayer", tilesArray, 0,0);
      this.boatLayer = map.createLayer("boatLayer", tilesArray, 0,0);
      this.flatLayer = map.createLayer("flatLayer", tilesArray, 0,0);
      this.heli1Layer = map.createLayer("heli1Layer", tilesArray, 0,0);
      this.bumpLayer = map.createLayer("bumpLayer", tilesArray, 0,0);
      this.fenceLayer = map.createLayer("fenceLayer", tilesArray, 0,0);
      this.heli3Layer = map.createLayer("heli3Layer", tilesArray, 0,0);
      this.heli2Layer = map.createLayer("heli2Layer", tilesArray, 0,0);
      this.medal1 = this.physics.add.sprite(544, 800, 'goldmedal').play("float4").setScale(1.5)
      this.medal2 = this.physics.add.sprite(128, 608, 'goldmedal').play("float4").setScale(1.5)
      this.medal3 = this.physics.add.sprite(704, 384, 'goldmedal').play("float4").setScale(1.5)
      this.medal4 = this.physics.add.sprite(1024, 736, 'goldmedal').play("float4").setScale(1.5)
      this.medal5 = this.physics.add.sprite(544, 192, 'goldmedal').play("float4").setScale(1.5)
      this.medal6 = this.physics.add.sprite(256, 320, 'goldmedal').play("float4").setScale(1.5)
      this.medal7 = this.physics.add.sprite(1184, 512, 'goldmedal').play("float4").setScale(1.5)
      this.medal8 = this.physics.add.sprite(576, 544, 'goldmedal').play("float4").setScale(1.5)
      this.medal9 = this.physics.add.sprite(288, 64, 'goldmedal').play("float4").setScale(1.5)
      this.medal10 = this.physics.add.sprite(1038, 179, 'goldmedal').play("float4").setScale(1.5)
      this.croissant1 = this.physics.add.sprite(640, 1056, 'croissant').play("float1").setScale(1.5)
      this.croissant2 = this.physics.add.sprite(320, 512, 'croissant').play("float1").setScale(1.5)
      this.croissant3 = this.physics.add.sprite(1152, 640, 'croissant').play("float1").setScale(1.5)
      this.croissant4 = this.physics.add.sprite(640, 96, 'croissant').play("float1").setScale(1.5)
      this.croissant5 = this.physics.add.sprite(96, 192, 'croissant').play("float1").setScale(1.5)

          // gen is the alias in preload 
  this.player = this.physics.add.sprite(640, 928, 'franz');

 // shoot knives every 4 secs
 this.timer1 = this.time.addEvent({
    delay: 4000,
    callback: this.shootKnife,
    callbackScope: this,
    loop: true,
});

  this.enemy1 = this.physics.add.sprite(1051, 922, 'zombie1archer').play("zombie3-archerleft")
  this.tweens.add({
    targets: this.enemy1,
    x: 1051,
    flipX: false,
    yoyo: true,
    duration: 2250,
    repeat: -1
})

this.knife1= this.physics.add.sprite(1051, 922, "knife").play("knifeAnim")
this.knife1.setVisible(false)

this.enemy2 = this.physics.add.sprite(1151, 1130, 'zombie1archer').play("zombie3-archerleft")
this.tweens.add({
  targets: this.enemy2,
  x: 1151,
  flipX: false,
  yoyo: true,
  duration: 2250,
  repeat: -1
})

this.knife2= this.physics.add.sprite(1151, 1130, "knife").play("knifeAnim")
this.knife2.setVisible(false)

this.enemy3 = this.physics.add.sprite(260, 996, 'zombie1archer').play("zombie3-archerright")
this.tweens.add({
  targets: this.enemy3,
  x: 260,
  flipX: false,
  yoyo: true,
  duration: 2250,
  repeat: -1
})

this.knife3= this.physics.add.sprite(260, 996, "knife").play("knifeAnim")
this.knife3.setVisible(false)

this.enemy4 = this.physics.add.sprite(131, 1150, 'zombie1archer').play("zombie3-archerright")
this.tweens.add({
  targets: this.enemy4,
  x: 131,
  flipX: false,
  yoyo: true,
  duration: 2250,
  repeat: -1
})

this.knife4= this.physics.add.sprite(131, 1150, "knife").play("knifeAnim")
this.knife4.setVisible(false)

this.enemy5 = this.physics.add.sprite(800, 864, 'zombie2').play("zombie2-leftrun")
this.tweens.add({
  targets: this.enemy5,
  x: 480,
  flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})

this.enemy6 = this.physics.add.sprite(864, 480, 'zombie2').play("zombie2-downrun")
this.tweens.add({
  targets: this.enemy6,
  y: 768,
  flipY: false,
  yoyo: true,
  duration: 1000,
  repeat: -1,

  onYoyo: () => {
      console.log('onYoyo, play enery1-up anims');
      this.enemy6.play ("zombie2-uprun")
    
  },
  onRepeat: () => {
      console.log('onRepeat, play enemy1-down anims');
      this.enemy6.play ("zombie2-downrun")
  },
})

this.enemy7 = this.physics.add.sprite(1120, 768, 'zombie2').play("zombie2-uprun")
this.tweens.add({
  targets: this.enemy7,
  y: 448,
  flipY: false,
  yoyo: true,
  duration: 1000,
  repeat: -1,

  onYoyo: () => {
      console.log('onYoyo, play enery1-up anims');
      this.enemy7.play ("zombie2-downrun")
    
  },
  onRepeat: () => {
      console.log('onRepeat, play enemy1-down anims');
      this.enemy7.play ("zombie2-uprun")
  },
})

this.enemy8 = this.physics.add.sprite(864, 512, 'zombie2').play("zombie2-rightrun")
this.tweens.add({
  targets: this.enemy8,
  x: 1248,
  flipX: true,
  yoyo: true,
  duration: 1500,
  repeat: -1
})

this.enemy9 = this.physics.add.sprite(1248, 704, 'zombie2').play("zombie2-leftrun")
this.tweens.add({
  targets: this.enemy9,
  x: 864,
  flipX: true,
  yoyo: true,
  duration: 1500,
  repeat: -1
})

this.enemy10 = this.physics.add.sprite(64, 704, 'zombie2').play("zombie2-rightrun")
this.tweens.add({
  targets: this.enemy10,
  x: 448,
  flipX: true,
  yoyo: true,
  duration: 1500,
  repeat: -1
})

this.enemy11 = this.physics.add.sprite(735, 512, 'zombie2').play("zombie2-leftrun")
this.tweens.add({
  targets: this.enemy11,
  x: 96,
  flipX: true,
  yoyo: true,
  duration: 1500,
  repeat: -1
})

this.enemy12 = this.physics.add.sprite(32, 288, 'zombie2').play("zombie2-rightrun")
this.tweens.add({
  targets: this.enemy12,
  x: 768,
  flipX: true,
  yoyo: true,
  duration: 1500,
  repeat: -1
})

this.enemy13 = this.physics.add.sprite(704, 128, 'zombie2').play("zombie2-leftrun")
this.tweens.add({
  targets: this.enemy13,
  x: 64,
  flipX: true,
  yoyo: true,
  duration: 1500,
  repeat: -1
})

this.enemy14 = this.physics.add.sprite(128, 64, 'zombie2').play("zombie2-downrun")
this.tweens.add({
  targets: this.enemy14,
  y: 736,
  flipY: false,
  yoyo: true,
  duration: 1500,
  repeat: -1,

  onYoyo: () => {
      console.log('onYoyo, play enery1-up anims');
      this.enemy14.play ("zombie2-uprun")
    
  },
  onRepeat: () => {
      console.log('onRepeat, play enemy1-down anims');
      this.enemy14.play ("zombie2-downrun")
  },
})

this.enemy15 = this.physics.add.sprite(288, 704, 'zombie2').play("zombie2-uprun")
this.tweens.add({
  targets: this.enemy15,
  y: 160,
  flipY: false,
  yoyo: true,
  duration: 1500,
  repeat: -1,

  onYoyo: () => {
      console.log('onYoyo, play enery1-up anims');
      this.enemy15.play ("zombie2-downrun")
    
  },
  onRepeat: () => {
      console.log('onRepeat, play enemy1-down anims');
      this.enemy15.play ("zombie2-uprun")
  },
})

this.enemy16 = this.physics.add.sprite(512, 64, 'zombie2').play("zombie2-downrun")
this.tweens.add({
  targets: this.enemy16,
  y: 672,
  flipY: false,
  yoyo: true,
  duration: 1500,
  repeat: -1,

  onYoyo: () => {
      console.log('onYoyo, play enery1-up anims');
      this.enemy16.play ("zombie2-uprun")
    
  },
  onRepeat: () => {
      console.log('onRepeat, play enemy1-down anims');
      this.enemy16.play ("zombie2-downrun")
  },
})

this.enemy17 = this.physics.add.sprite(704, 576, 'zombie2').play("zombie2-uprun")
this.tweens.add({
  targets: this.enemy17,
  y: 128,
  flipY: false,
  yoyo: true,
  duration: 1500,
  repeat: -1,

  onYoyo: () => {
      console.log('onYoyo, play enery1-up anims');
      this.enemy17.play ("zombie2-downrun")
    
  },
  onRepeat: () => {
      console.log('onRepeat, play enemy1-down anims');
      this.enemy17.play ("zombie2-uprun")
  },
})

this.enemy18 = this.physics.add.sprite(480, 1248, 'zombie2').play("zombie2-rightrun")
this.tweens.add({
  targets: this.enemy18,
  x: 800,
  flipX: true,
  yoyo: true,
  duration: 1200,
  repeat: -1
})

this.support1 = this.physics.add.sprite(928, 160, 'support1').play("supportleft")
this.tweens.add({
  targets: this.support1,
  x: 928,
  flipX: true,
  yoyo: true,
  duration: 1248,
  repeat: -1
})

this.support2 = this.physics.add.sprite(1152, 160, 'support2').play("supportright")
this.tweens.add({
  targets: this.support2,
  x: 1152,
  flipX: true,
  yoyo: true,
  duration: 1248,
  repeat: -1
})

this.physics.add.overlap(this.player, [this.enemy1, this.enemy2, this. enemy3, this.enemy4, this.enemy5, this. enemy6, this.enemy7, this.enemy8, this. enemy9, this.enemy10, this.enemy11, this. enemy12, this.enemy13, this.enemy14, this.enemy15, this.enemy16, this.enemy17, this.enemy18], globalHitEnemy, null, this);
this.physics.add.overlap(this.player, [this.knife1, this.knife2, this.knife3, this.knife4], globalHitKnife, null, this);
this.physics.add.overlap(this.player, [this.medal1, this.medal2, this. medal3, this.medal4, this.medal5, this. medal6, this.medal7, this.medal8, this. medal9, this.medal10], globalHitMedal3, null, this);
this.physics.add.overlap(this.player, [this.croissant1, this.croissant2, this.croissant3, this.croissant4, this.croissant5], globalHitHeart, null, this);

  this.physics.world.bounds.width = this.ground3Layer.width;
  this.physics.world.bounds.height = this.ground3Layer.height;

  this.player.setCollideWorldBounds(true)
  
  // # Enable Layer Collisions
  this.lakeLayer.setCollisionByExclusion(-1, true);
  this.physics.add.collider(this.player, this.lakeLayer)

        // # Enable Layer Collisions
        this.heli1Layer.setCollisionByExclusion(-1, true);
        this.physics.add.collider(this.player, this.heli1Layer)

            // # Enable Layer Collisions
    this.bumpLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.bumpLayer)

        // # Enable Layer Collisions
        this.fenceLayer.setCollisionByExclusion(-1, true);
        this.physics.add.collider(this.player, this.fenceLayer)

                // # Enable Layer Collisions
                this.heli2Layer.setCollisionByExclusion(-1, true);
                this.physics.add.collider(this.player, this.heli2Layer)

  // debug player
  window.player = this.player
  
  // create the arrow keys
  this.cursors = this.input.keyboard.createCursorKeys();
  
  // Camera follow player
  this.cameras.main.startFollow(this.player);
  
      // // Add any text to the game
      // this.add.text(10, 10, "Add any text here", {
      //   font: "30px Courier",
      //   fill: "#00FFFF",
      // });
  
      // Add main player here with physics.add.sprite
  
      // Add time event / movement here
  
      // get the tileIndex number in json, +1
      //mapLayer.setTileIndexCallback(11, this.room1, this);
  
      // Add custom properties in Tiled called "mouintain" as bool
  
      // What will collider witg what layers
      //this.physics.add.collider(mapLayer, this.player);
  
      // create the arrow keys
      //this.cursors = this.input.keyboard.createCursorKeys();
  
      // camera follow player
      //this.cameras.main.startFollow(this.player);
    } /////////////////// end of create //////////////////////////////

    shootKnife (){
        console.log("shoot knife", this.angle1, this.angle2, this.angle3, this.angle4)

				this.knife1.setVisible(true)
        this.physics.velocityFromRotation(this.angle1, 300, this.knife1.body.velocity);
	      
	      // remove knives after 5 sec
	      this.time.delayedCall(10000, this.resetKnife, [], this);

          this.knife2.setVisible(true)
          this.physics.velocityFromRotation(this.angle2, 300, this.knife2.body.velocity);
            
            // remove knives after 5 sec
            this.time.delayedCall(10000, this.resetKnife, [], this);

            this.knife3.setVisible(true)
            this.physics.velocityFromRotation(this.angle3, 300, this.knife3.body.velocity);
              
              // remove knives after 5 sec
              this.time.delayedCall(10000, this.resetKnife, [], this);

              this.knife4.setVisible(true)
              this.physics.velocityFromRotation(this.angle4, 300, this.knife4.body.velocity);
                
                // remove knives after 5 sec
                this.time.delayedCall(10000, this.resetKnife, [], this);
      }

      resetKnife() {
        console.log("Reset knife location")
        this.knife1.x = 1051
        this.knife1.y = 922

        this.knife2.x = 1151
        this.knife2.y = 1130

        this.knife3.x = 260
        this.knife3.y = 996

        this.knife4.x = 131
        this.knife4.y = 1150
      }
  
    update() {let speed = 200;
  
      if (this.cursors.left.isDown) {
        this.player.body.setVelocityX(-speed);
        this.player.anims.play("franz-left", true); // walk left
      } else if (this.cursors.right.isDown) {
        this.player.body.setVelocityX(speed);
        this.player.anims.play("franz-right", true);
      } else if (this.cursors.up.isDown) {
        this.player.body.setVelocityY(-speed);
        this.player.anims.play("franz-up", true);
      } else if (this.cursors.down.isDown) {
        this.player.body.setVelocityY(speed);
        this.player.anims.play("franz-down", true);
      } else {
        this.player.anims.stop();
        this.player.body.setVelocity(0, 0);
      }
      this.angle1 = Phaser.Math.Angle.BetweenPoints(this.enemy1, this.player);
      this.angle2 = Phaser.Math.Angle.BetweenPoints(this.enemy2, this.player);
      this.angle3 = Phaser.Math.Angle.BetweenPoints(this.enemy3, this.player);
      this.angle4 = Phaser.Math.Angle.BetweenPoints(this.enemy4, this.player);
      } /////////////////// end of update //////////////////////////////
  
        // disable enemy body
        // eemy.disableBody (true, true)

//      hitMedal(player, enemy){
//       console.log("Player hit enemy");

// // shake screen
// // this.cameras.main.shake(20);    

//       // disable enemy body
//       enemy.disableBody (true, true);
//    }

//    hitCroissant(player, enemy){
//     console.log("Player hit enemy");

// // shake screen
// // this.cameras.main.shake(20);    

//     // disable enemy body
//     enemy.disableBody (true, true);
//  }

    // Function to jump to room3
    win(player, tile) {
      console.log("win function");
      this.scene.start("win", {
        player: player,
        inventory: this.inventory,
      });
    }
  } //////////// end of class world ////////////////////////