var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 32 * 40,
    height: 32 * 20,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#002654',
    pixelArt: true,
    scene: [preloadScene, main, instructions, world, level1, level2, level3, gameOver, showInventory, win]
};

var game = new Phaser.Game(config);
window.heart = 4
window.bronze = 0
window.silver = 0
window.gold = 0