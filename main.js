var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: 'rgb(0, 128, 255)',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('card_generic', 'assets/card.png');
    this.load.image('card_back', 'assets/card_back.jpg');
    this.load.image('card_explode', 'assets/boom.png');
}

function create ()
{
    var isthere = false;
    var card = this.add.sprite(200, 300, 'card_back').setScale(0.25);
    card.setInteractive();

    card.on('pointerdown', function (){
        if (!isthere){
            this.scene.boomcard = this.scene.add.sprite(600, 300, 'card_generic').setScale(0.175);
            isthere = true;
        }else{
            this.scene.boomcard.destroy();
            isthere = false;
        }
    })
    
    
    //console.log(this.input.activePointer)
}

function update ()
{
    //console.log("Showing coordinates for pointer")
    //console.log(this.input.activePointer.downX)
    //console.log(this.input.activePointer.downY)
}


function clickDeck(pointer){
    
}
