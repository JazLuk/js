class level2 extends Phaser.Scene {
    constructor() {
      super({
        key: "level2",
      });
  
      // Put global variable here
    }
  
    // incoming data from scene below
    init(data) {
      this.player = data.player;
      this.inventory = data.inventory;
    }
  
    create() {
      console.log("*** level2 scene");
  
      // Create the map from main 
      let map = this.make.tilemap({key: "level2",});
  
      // Load the game tiles
      // 1st parameter is name in Tiled,
      // 2nd parameter is key in Preload
      let terrainTiles = map.addTilesetImage("1_Terrains_and_Fences_32x32", "terrainIMG");
      let villaTiles = map.addTilesetImage("7_Villas_32x32", "villaIMG");
      let campingTiles = map.addTilesetImage("11_Camping_32x32", "campingIMG");

  
      let tilesArray = [terrainTiles, villaTiles, campingTiles];
  
      //Load in layers by layers
      this.ground2Layer = map.createLayer("ground2Layer", tilesArray, 0,0);
      this.grassLayer = map.createLayer("grassLayer", tilesArray, 0,0);
      this.waterLayer = map.createLayer("waterLayer", tilesArray, 0,0);
      this.bridge1Layer = map.createLayer("bridge1Layer", tilesArray, 0,0);
      this.bridge2Layer = map.createLayer("bridge2Layer", tilesArray, 0,0);
      this.coastLayer = map.createLayer("coastLayer", tilesArray, 0,0);
      this.trees2Layer = map.createLayer("trees2Layer", tilesArray, 0,0);
      this.trees1Layer = map.createLayer("trees1Layer", tilesArray, 0,0);
      this.parkLayer = map.createLayer("parkLayer", tilesArray, 0,0);
      this.medal1 = this.physics.add.sprite(288, 1024, 'silvermedal').play("float3").setScale(1.5)
      this.medal2 = this.physics.add.sprite(128, 832, 'silvermedal').play("float3").setScale(1.5)
      this.medal3 = this.physics.add.sprite(384, 448, 'silvermedal').play("float3").setScale(1.5)
      this.medal4 = this.physics.add.sprite(736, 224, 'silvermedal').play("float3").setScale(1.5)
      this.medal5 = this.physics.add.sprite(800, 512, 'silvermedal').play("float3").setScale(1.5)
      this.medal6 = this.physics.add.sprite(960, 640, 'silvermedal').play("float3").setScale(1.5)
      this.medal7 = this.physics.add.sprite(1056, 1216, 'silvermedal').play("float3").setScale(1.5)
      this.medal8 = this.physics.add.sprite(800, 768, 'silvermedal').play("float3").setScale(1.5)
      this.medal9 = this.physics.add.sprite(640, 1152, 'silvermedal').play("float3").setScale(1.5)
      this.medal10 = this.physics.add.sprite(64, 1184, 'silvermedal').play("float3").setScale(1.5)
      this.croissant1 = this.physics.add.sprite(576, 928, 'croissant').play("float1").setScale(1.5)
      this.croissant2 = this.physics.add.sprite(1152, 288, 'croissant').play("float1").setScale(1.5)
      this.croissant3 = this.physics.add.sprite(960, 800, 'croissant').play("float1").setScale(1.5)
      this.croissant4 = this.physics.add.sprite(416, 1184, 'croissant').play("float1").setScale(1.5)

          // gen is the alias in preload 
  this.player = this.physics.add.sprite(352, 192, 'franz');

  this.enemy1 = this.physics.add.sprite(64, 320, 'zombie2').play("zombie2-right")
  this.tweens.add({
    targets: this.enemy1,
    x: 448,
    flipX: true,
    yoyo: true,
    duration: 2250,
    repeat: -1
})

this.enemy2 = this.physics.add.sprite(576, 768, 'zombie2').play("zombie2-leftrun")
this.tweens.add({
  targets: this.enemy2,
  x: 64,
  flipX: true,
  yoyo: true,
  duration: 1500,
  repeat: -1
})

this.enemy3 = this.physics.add.sprite(288, 960, 'zombie2').play("zombie2-up")
this.tweens.add({
  targets: this.enemy3,
  y: 544,
  flipY: false,
  yoyo: true,
  duration: 2500,
  repeat: -1,

  onYoyo: () => {
      console.log('onYoyo, play enery1-up anims');
      this.enemy3.play ("zombie2-down")
    
  },
  onRepeat: () => {
      console.log('onRepeat, play enemy1-down anims');
      this.enemy3.play ("zombie2-up")
  },
})

this.enemy4 = this.physics.add.sprite(896, 352, 'zombie2').play("zombie2-right")
this.tweens.add({
  targets: this.enemy4,
  x: 1216,
  flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})

this.enemy5 = this.physics.add.sprite(1216, 512, 'zombie2').play("zombie2-leftrun")
this.tweens.add({
  targets: this.enemy5,
  x: 864,
  flipX: true,
  yoyo: true,
  duration: 1500,
  repeat: -1
})

this.enemy6 = this.physics.add.sprite(1056, 800, 'zombie2').play("zombie2-downrun")
this.tweens.add({
  targets: this.enemy6,
  y: 1184,
  flipY: false,
  yoyo: true,
  duration: 1500,
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

this.enemy7 = this.physics.add.sprite(800, 864, 'zombie2').play("zombie2-right")
this.tweens.add({
  targets: this.enemy7,
  x: 1216,
  flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})
  
this.enemy8 = this.physics.add.sprite(218, 128, 'zombie2').play("zombie2-sit3")
this.tweens.add({
  targets: this.enemy8,
  x: 218,
  flipY: false,
  yoyo: true,
  duration: 1500,
  repeat: -1,
})

this.enemy9 = this.physics.add.sprite(640, 418, 'zombie2').play("zombie2-leftfish")
this.tweens.add({
  targets: this.enemy9,
  x: 640,
  flipX: false,
  yoyo: true,
  duration: 1500,
  repeat: -1,
})

this.enemy10 = this.physics.add.sprite(928, 1120, 'zombie2').play("zombie2-sit")
this.tweens.add({
  targets: this.enemy10,
  x: 928,
  flipX: false,
  yoyo: true,
  duration: 20000,
  repeat: -1
})

this.enemy11 = this.physics.add.sprite(1216, 1120, 'zombie2').play("zombie2-sit2")
this.tweens.add({
  targets: this.enemy11,
  x: 1216,
  flipX: false,
  yoyo: true,
  duration: 20000,
  repeat: -1
})

this.enemy12 = this.physics.add.sprite(1120, 1184, 'zombie2').play("zombie2-leftjump")
this.tweens.add({
  targets: this.enemy12,
  x: 800,
  flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})

this.enemy13 = this.physics.add.sprite(605, 566, 'zombie2').play("zombie2-rightfish")
this.tweens.add({
  targets: this.enemy13,
  x: 605,
  flipX: false,
  yoyo: true,
  duration: 1500,
  repeat: -1,
})

this.enemy14 = this.physics.add.sprite(164, 1029, 'zombie2').play("zombie2-downfish")
this.tweens.add({
  targets: this.enemy14,
  x: 164,
  flipX: false,
  yoyo: true,
  duration: 1500,
  repeat: -1,
})

this.enemy15 = this.physics.add.sprite(687, 797, 'zombie2').play("zombie2-dead")
this.tweens.add({
  targets: this.enemy15,
  y: 840,
  flipY: false,
  yoyo: true,
  duration: 10000,
  repeat: -1,
})


this.physics.add.overlap(this.player, [this.enemy1, this.enemy2, this. enemy3, this.enemy4, this.enemy5, this. enemy6, this.enemy7, this.enemy8, this. enemy9, this.enemy10, this.enemy11, this. enemy12, this.enemy13, this.enemy14, this.enemy15], globalHitEnemy, null, this);
this.physics.add.overlap(this.player, [this.medal1, this.medal2, this. medal3, this.medal4, this.medal5, this. medal6, this.medal7, this.medal8, this. medal9, this.medal10], globalHitMedal2, null, this);
this.physics.add.overlap(this.player, [this.croissant1, this.croissant2, this.croissant3, this.croissant4], globalHitHeart, null, this);

  this.physics.world.bounds.width = this.ground2Layer.width;
  this.physics.world.bounds.height = this.ground2Layer.height;

  this.player.setCollideWorldBounds(true)
  
  // # Enable Layer Collisions
  this.waterLayer.setCollisionByExclusion(-1, true);
  this.physics.add.collider(this.player, this.waterLayer)

    // # Enable Layer Collisions
    this.coastLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.coastLayer)

        // # Enable Layer Collisions
        this.trees2Layer.setCollisionByExclusion(-1, true);
        this.physics.add.collider(this.player, this.trees2Layer)

            // # Enable Layer Collisions
    this.trees1Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.trees1Layer)

        // # Enable Layer Collisions
        this.parkLayer.setCollisionByExclusion(-1, true);
        this.physics.add.collider(this.player, this.parkLayer)

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
      } /////////////////// end of update //////////////////////////////
  
//       hitEnemy(player, enemy){
//         console.log("Player hit enemy");
  
// // shake screen
// this.cameras.main.shake(20);    
  
//         // disable enemy body
//         // enemy.disableBody (true, true);
//      }

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
    level3(player, tile) {
      console.log("level3 function");
      this.scene.start("level3", {
        player: player,
        inventory: this.inventory,
      });
    }
  } //////////// end of class world ////////////////////////
  