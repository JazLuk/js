class win extends Phaser.Scene {
  constructor() {
    super("win");
  }

  create() {

    console.log("*** win");

    this.scene.bringToTop("win");

    // turn on loop, adjust the volume
    this.music = this.sound.add("victorySnd", { loop: false }).setVolume(0.5);
    // start the background music
    this.music.play();

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'winImg').setOrigin(0, 0);

    let enterDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    enterDown.on("down", function () {
      console.log("Jump to main scene");
      window.heart = 1;
      window.bronze = 0;

      this.scene.start("main");
    },
      this
    );

  }

}