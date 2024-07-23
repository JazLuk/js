////////////////////////////////////////////////////////
//
// access this function using updateInventory.call(this)
// Uses a JS function to prevent repeated codes
// 
///////////////////////////////////////////////////////
function updateInventory() {
  console.log("*** updateInventory()")
  // Emit events showInventory
  this.inventory = {}
  this.inventory.gold = window.gold
  this.inventory.silver = window.silver
  this.inventory.bronze = window.bronze
  this.inventory.heart = window.heart

  console.log('*** updateInventory() Emit event', this.inventory)
  this.invEvent = (event, data) => {
    this.scene.get('showInventory').events.emit(event, data);
  }
  this.invEvent("inventory", this.inventory);
}

////////////////////////////////////////////////////////
//
// access this function with globalHitFire
// Uses a JS function to prevent repeated codes
// 
///////////////////////////////////////////////////////
function globalHitEnemy(player, item) {
  console.log("*** player overlap enemy");

  // Shake screen
  this.cameras.main.shake(35);
  //this.hitenemySnd.play();

  // deduct heart
  window.heart--;
  item.disableBody(true, true);

  // Call globalFunctions.js updateInventory
  updateInventory.call(this)

  this.hitzombieSnd = this.sound.add("zombieSnd").setVolume(0.75);
  this.hitzombieSnd.play()

  if (window.heart == 0) {
    console.log("*** player gameOver");
    this.scene.start("gameOver");
    //this.loselifeSnd.play();
  }
}

////////////////////////////////////////////////////////
//
// access this function with globalCollectKey
// Uses a JS function to prevent repeated codes
// 
/////////////////////////////////////////////////////// 
function globalHitHeart(player, item) {
  console.log("*** player overlap croissant");

  // Shake screen
  //  this.cameras.main.shake(20);
  //this.hitenemySnd.play();

  // increase heart
  window.heart++;
  item.disableBody(true, true);

  // Call globalFunctions.js updateInventory
  updateInventory.call(this)


  this.collectcroissantSnd = this.sound.add("croissantSnd").setVolume(0.25);
  this.collectcroissantSnd.play()

  // if (window.heart == 0){
  //   console.log("*** player gameOver");
  //   this.scene.start("gameOver");
  //   //this.loselifeSnd.play();
  // }
}

function globalHitMedal1(player, item) {
  console.log("*** player overlap medal");

  // Shake screen
  //  this.cameras.main.shake(20);
  //this.hitenemySnd.play();

  // increase heart
  window.bronze++;
  item.disableBody(true, true);

  // Call globalFunctions.js updateInventory
  updateInventory.call(this)

  this.collectmedalSnd = this.sound.add("medalSnd").setVolume(0.5);
  this.collectmedalSnd.play()

  if (window.bronze == 10) {
    console.log("level2 function");
    this.scene.start("level2");
    //this.loselifeSnd.play();
  }

}

function globalHitMedal2(player, item) {
  console.log("*** player overlap medal");

  // Shake screen
  //  this.cameras.main.shake(20);
  //this.hitenemySnd.play();

  // increase heart
  window.silver++;
  item.disableBody(true, true);

  // Call globalFunctions.js updateInventory
  updateInventory.call(this)

  this.collectmedalSnd = this.sound.add("medalSnd").setVolume(0.5);
  this.collectmedalSnd.play()

  if (window.silver == 10) {
    console.log("win function");
    this.scene.start("win");
    //this.loselifeSnd.play();
  }
}

