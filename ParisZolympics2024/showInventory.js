class showInventory extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'showInventory',
        active: false });
    }

    init(data) {
        this.player = data.player;
        this.inventory = data.inventory;
    }
 
   create () {

        //Place hearts at the top screen
        console.log("***showInventory");
        this.scene.bringToTop("showInventory");

        //black bar
        var rect = new Phaser.Geom.Rectangle(20, 20, 500, 80);
        var graphics = this.add.graphics({ fillStyle: { color: '0xffffff' } });
        graphics.fillRectShape(rect).setScrollFactor(0)

       // Setup heart but visible to false
       this.heartimg1 = this.add.image (65,55,'heart').setScrollFactor(0).setVisible(true).setScale(2);
    //    this.heartimg2 = this.add.image (170,43,'heart').setScrollFactor(0).setVisible(false).setScale(2);
    //    this.heartimg3 = this.add.image (240,43,'heart').setScrollFactor(0).setVisible(false).setScale(2);
       this.heartNum = this.add.text(105, 40, window.heart, {font: '35px Minecraft', fill: '#272e66'}).setScrollFactor(0);

       this.bronze = this.add.image(185, 57.5, 'bronze').setScrollFactor(0).setVisible(true).setScale(2);
       this.bronzeNum = this.add.text(220, 40, window.bronze, { font: '35px Minecraft', fill: '#272e66' }).setScrollFactor(0);
    //    

    this.silver = this.add.image(305, 57.5, 'silver').setScrollFactor(0).setVisible(true).setScale(2);
    this.silverNum = this.add.text(340, 40, window.silver, { font: '35px Minecraft', fill: '#272e66' }).setScrollFactor(0);
 //   

 this.gold = this.add.image(425, 57.5, 'gold').setScrollFactor(0).setVisible(true).setScale(2);
 this.goldNum = this.add.text(460, 40, window.gold, { font: '35px Minecraft', fill: '#272e66' }).setScrollFactor(0);
//   


       // Recv an event, call the method
       this.events.on('inventory', this.updateScreen, this)

       //Setup key
        
    } //end of create
    
    updateScreen(data){
        console.log('Received event inventory', data, data.bronze, data.silver, data.gold);

        this.heartNum.setText(data.heart);
        this.bronzeNum.setText(data.bronze);
        this.silverNum.setText(data.silver);
        this.goldNum.setText(data.gold);


        // switch ( data.heart ) {

        //     case 3: 
        //         this.heartimg1.setVisible(true)
        //         this.heartimg2.setVisible(true)
        //         this.heartimg3.setVisible(true)
        //         break;
    
        //     case 2:
        //         this.heartimg1.setVisible(true)
        //         this.heartimg2.setVisible(true)
        //         this.heartimg3.setVisible(false)
        //         break;
    
        //     case 1:
        //         this.heartimg1.setVisible(true)
        //         this.heartimg2.setVisible(false)
        //         this.heartimg3.setVisible(false)
        //         break;
             
        //     case 0:
        //         this.heartimg1.setVisible(false)
        //         this.heartimg2.setVisible(false)
        //         this.heartimg3.setVisible(false)
        //         break;    
    
        //     default:
        //     break;
        // }
    
    }

} // end of class
