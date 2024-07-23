class world extends Phaser.Scene {
  constructor() {
    super({
      key: "world",
    });

    // Put global variable here
  }

  // incoming data from scene below
  init(data) {
    this.player = data.player;
    this.inventory = data.inventory;
  } 

  create() {
    console.log("*** world scene");

    // Create the map from main 
    let map = this.make.tilemap({ key: "room1", });

    // Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let genericTiles = map.addTilesetImage("1_Generic_32x32", "genericIMG");
    let livingTiles = map.addTilesetImage("2_LivingRoom_32x32", "livingIMG");
    let bedTiles = map.addTilesetImage("4_Bedroom_32x32", "bedIMG");
    let gymTiles = map.addTilesetImage("8_Gym_32x32", "gymIMG");
    let kitchenTiles = map.addTilesetImage("12_Kitchen_32x32", "kitchenIMG");
    let builderTiles = map.addTilesetImage("Room_Builder_32x32", "builderIMG");

    let tilesArray = [genericTiles, livingTiles, bedTiles, gymTiles, kitchenTiles, builderTiles];

    //Load in layers by layers
    this.groundLayer = map.createLayer("groundLayer", tilesArray, 0, 0);
    this.wallLayer = map.createLayer("wallLayer", tilesArray, 0, 0);
    this.deco0Layer = map.createLayer("deco0Layer", tilesArray, 0, 0);
    this.deco1Layer = map.createLayer("deco1Layer", tilesArray, 0, 0);
    this.deco2Layer = map.createLayer("deco2Layer", tilesArray, 0, 0);
    this.deco3Layer = map.createLayer("deco3Layer", tilesArray, 0, 0);
    this.croissant1 = this.physics.add.sprite(431, 410.5, 'croissantIMG').play("float").setScale(1.5)
    this.croissant2 = this.physics.add.sprite(463, 410.5, 'croissantIMG').play("float").setScale(1.5)
    this.croissant3 = this.physics.add.sprite(495.5, 410.5, 'croissantIMG').play("float").setScale(1.5)
    this.croissant4 = this.physics.add.sprite(528, 410.5, 'croissantIMG').play("float").setScale(1.5)

    // gen is the alias in preload 
    this.player = this.physics.add.sprite(477, 127, 'franz');

    this.physics.add.overlap(this.player, [this.croissant1, this.croissant2, this.croissant3, this.croissant4], globalHitHeart, null, this);

    this.physics.world.bounds.width = this.groundLayer.width;
    this.physics.world.bounds.height = this.groundLayer.height;

    this.player.setCollideWorldBounds(true)

    // # Enable Layer Collisions
    this.wallLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.wallLayer)

    // this.deco1Layer.setCollisionByExclusion(-1, true);
    // this.physics.add.collider(this.player, this.deco1Layer)

    this.deco2Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.deco2Layer)

    this.deco3Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.deco3Layer)


    // debug player
    window.player = this.player

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // Camera follow player
    this.cameras.main.startFollow(this.player);

    // Call to update inventory items
    this.time.addEvent({
      delay: 100,
      callback: updateInventory,
      callbackScope: this,
      loop: false,
    });

    // start another scene in parallel
    this.scene.launch("showInventory");

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




    // ///Place hearts at the top screen
    // console.log("***showInventory");
    // this.scene.bringToTop("showInventory");
  } /////////////////// end of create //////////////////////////////
  
  update() {
    let speed = 200;



    if (
      this.player.x > 412 &&
      this.player.x < 538 &&
      this.player.y > 493 &&
      this.player.y < 1000
    ) {
      this.level1();
    }

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

  hitCroissant(player, enemy) {
    console.log("Player hit enemy");

    // shake screen
    // this.cameras.main.shake(20);    

    // disable enemy body
    enemy.disableBody(true, true);
  }

  // Function to jump to room1
  level1(player, tile) {
    console.log("level1 function");
    this.scene.start("level1", {
      player: player,
      inventory: this.inventory,
    });
  }
} //////////// end of class world ////////////////////////
