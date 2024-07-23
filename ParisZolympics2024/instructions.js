class instructions extends Phaser.Scene {
    constructor() {
      super("instructions");
    }
  
  create() {
    console.log("*** instructions");

    this.scene.bringToTop("instructions");
  
    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'instructionsImg').setOrigin(0, 0);
  
    let enterDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    enterDown.on("down", function () {
        console.log("Jump to world scene");
        window.heart = 1;
        window.bronze = 0;
        
        this.scene.start("world");
          },
          this
        );
        
        }
      
      }