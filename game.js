class studioscene extends Phaser.Scene{
    constructor(){
        super("studioscene");
    }
    preload(){
        this.load.path ="./assets/";
        this.load.image("studioimg", "studioimg.png");
        this.load.bitmapFont({
            key: "goodfont",
            textureURL: "myFont.png",
            fontDataURL: "myFont.xml",
        })
        this.load.audio("studiosound", "studiosound.mp3");
    }
    create(){
        let sfx = this.sound.add("studiosound");
        sfx.play();
        let imageobject1 = this.add.image(
            400,
            -150,
            "studioimg",
        );
        let imageobject2 = this.add.image(
            400,
            750,
            "studioimg",
        );
        let textobj = this.add.bitmapText(
            475,
            260,
            "goodfont",
            "2",
            30,
        );
        textobj.setOrigin(0.5, 0.5);
        textobj.setAlpha(0);
        imageobject1.setScale(0.09);
        imageobject2.setScale(0.09);
        const rect1 = this.add.rectangle(
            400,
            -150,
            150,
            150,
        );
        rect1.isFilled = false;
        rect1.setStrokeStyle(10, 0xb8b8b8);
        const rect2 = this.add.rectangle(
            400,
            750,
            150,
            150,
        );
        rect2.isFilled = false;
        rect2.setStrokeStyle(10, 0xb8b8b8);
        let chain1 = this.tweens.chain({
            tweens: [
                {
                    targets: rect1,
                    x:400,
                    y:300,
                    duration: 5000,
                    angle:360,
                    ease: "Sine.easeOut",
                },
                {
                    targets: rect1,
                    x:475,
                    y:260,
                    scale: 0,
                    ease: "linear",
                    duration: 2000,
                },
                {
                    targets:textobj,
                    duration: 2000,
                    alpha:1,
                },
            ]
        })
        let chain2 = this.tweens.chain({
            targets: rect2,
            tweens: [
                {
                    x:400,
                    y:300,
                    duration: 5000,
                    angle:405,
                    ease: "Sine.easeOut",
                },
                {
                    x:475,
                    y:260,
                    scale: 0,
                    ease: "linear",
                    duration: 2000,
                }
            ]
        })
        this.tweens.add({
            targets: imageobject1,
            alpha:1,
            x:400,
            y:300,
            duration: 5000,
            ease: "Sine.easeOut",
            repeat: 0,
        });
        this.tweens.add({
            targets: imageobject2,
            alpha:1,
            x:400,
            y:300,
            duration: 5000,
            ease: "Sine.easeOut",
            repeat: 0,
        });
        this.time.addEvent({
            delay: 10000,
            loop: false,
            callback: () =>{
                this.cameras.main.fadeOut(2000);
            }
        });
        this.time.addEvent({
            delay: 12000,
            loop: false,
            callback: () =>{
                this.scene.start("menuscene");
            }
        });

    }
    update(){

    }

}
class menuscene extends Phaser.Scene{
    constructor(){
        super("menuscene");
    }
    preload(){
        this.load.path ="./assets/";
        this.load.image("halfarrow", "halfarrow.png");
        this.load.image("wheel", "wheel.png");
        this.load.image("titleimg", "titleimg.png");
        this.load.audio("menusound", "menusound.mp3");
    }
    create(){
        let sfx = this.sound.add("menusound");
        let ar1 = this.add.image(
            -400,
            305,
            "halfarrow",
        );
        let ar2 = this.add.image(
            1300,
            295,
            "halfarrow",
        );
        let ar3 = this.add.image(
            -500,
            100,
            "halfarrow",
        );
        let ar4 = this.add.image(
            1300,
            500,
            "halfarrow",
        );
        let whee = this.add.image(
            400,
            300,
            "wheel",
        );
        let title = this.add.image(
            470,
            330,
            "titleimg",
        );
        let select = this.add.isotriangle({
            x: 975,
            y: 300,
            width: 75,
            height: 50,
            fillTop: 0xed600e,
            fillLeft: 0xed600e,
            fillRight: 0xed600e,
        });
        select.angle = -90;
        ar3.alpha = 0;
        ar4.alpha = 0;
        //imageobject1.setScale(0.09)
        ar1.displayHeight = 275;
        ar1.displayWidth = 800;
        ar2.displayHeight = 275;
        ar2.displayWidth = 800;
        ar2.flipY = true;
        ar2.flipX = true;
        ar3.displayHeight = 275;
        ar3.displayWidth = 800;
        ar4.displayHeight = 275;
        ar4.displayWidth = 800;
        ar4.flipY = true;
        ar4.flipX = true;
        whee.displayHeight = 0;
        whee.displayWidth = 0;
        title.displayHeight = 650*5;
        title.displayWidth = 850*5;
        whee.depth = 1;
        
        let chain1 = this.tweens.chain({
            tweens: [
                {
                    targets: ar1,
                    x:400,
                    y:305,
                    duration: 1000,
                },
                {
                    targets: ar1,
                    x:400,
                    y:100,
                    ease: "linear",
                    duration: 1000,
                },
            ]
        });
        let chain2 = this.tweens.chain({
            tweens: [
                {
                    targets: ar2,
                    x:400,
                    y:295,
                    duration: 1000,
                },
                {
                    targets: ar2,
                    x:400,
                    y:500,
                    ease: "linear",
                    duration: 1000,
                },
                
            ]
        });
        this.time.addEvent({
            delay: 2000,
            loop: false,
            callback: () =>{
                sfx.play();
                let wheelchain = this.tweens.chain({
                    tweens: [
                        {
                            targets: whee,
                            displayHeight: 350,
                            displayWidth: 350,
                            angle: 360*2,
                            ease:"Sine.easeOut",
                            duration: 2000,
                        },
                        {
                            targets: title,
                            displayHeight: 650,
                            displayWidth: 850,
                            ease:"Sine.easeOut",
                            duration: 2000,
                        },
                        {
                            targets: select,
                            x:590,
                            y:300,
                            ease: "Sine.easeOut",
                            duration: 500,
                        },
                        {
                            targets: select,
                            x:565,
                            y:300,
                            ease: "Sine.easeOut",
                            duration: 800,
                            yoyo: true,
                            repeat: -1,

                        }
                    ]
                });
            }
        });
        this.time.addEvent({
            delay: 2000,
            loop: false,
            callback: () =>{
                ar3.alpha = 1;
                ar4.alpha = 1;
                this.tweens.add({
                    targets: ar1,
                    x:1200,
                    duration: 2500,
                    repeat: -1,
                });
                this.tweens.add({
                    targets: ar3,
                    x:400,
                    duration: 2500,
                    repeat: -1,
                });
                this.tweens.add({
                    targets: ar2,
                    x:-400,
                    duration: 2500,
                    repeat: -1,
                });
                this.tweens.add({
                    targets: ar4,
                    x:400,
                    duration: 2500,
                    repeat: -1,
                });
            }
        });
        this.time.addEvent({
            delay: 8500,
            loop: false,
            callback: () =>{
                this.tweens.add({
                    targets: whee,
                    displayHeight: 1050*9,
                    displayWidth: 1050*9,
                    duration: 4000,
                });
                this.time.addEvent({
                    delay: 2000,
                    loop: false,
                    callback: () =>{
                        this.cameras.main.fadeOut(2000);
                    }
                });
                this.time.addEvent({
                    delay: 6000,
                    loop: false,
                    callback: () =>{
                        this.scene.start("loadingscene");
                    }
                });
        
            }
        });

    }
    update(){

    }

}
class loadingscene extends Phaser.Scene{
    constructor(){
        super("loadingscene");
    }
    preload(){
        this.load.path ="./assets/";
        this.load.image("loading", "loading.png");
        this.load.image("halfarrow", "halfarrow.png");
        this.load.bitmapFont({
            key: "goodfont",
            textureURL: "myFont.png",
            fontDataURL: "myFont.xml",
        })
    }
    create(){
        let loading = this.add.image(
            400,
            270,
            "loading",
        );
        let ar1= this.add.image(
            -50,
            540,
            "halfarrow",
        );
        let tiptext = this.add.bitmapText(
            400,
            420,
            "goodfont",
            "Tip: When you see this symbol, you can save the game!\nAlways save, even if you’re not in a dangerous situation!\n",
            20,
        );
        let loadingtext = this.add.bitmapText(
            650,
            550,
            "goodfont",
            "LOADING...",
            15,
        );
        ar1.displayHeight = 75;
        ar1.displayWidth = 100;
        loading.setScale(0.5);
        tiptext.setOrigin(0.5, 0.5);
        loadingtext.setOrigin(0.5, 0.5);
        let chain1 = this.tweens.chain({
            tweens: [
                {
                    targets: ar1,
                    x:650,
                    ease: "Quart.easeOut",
                    duration: 2000,

                },
                {
                    targets: ar1,
                    x:850,
                    ease: "Quart.easeIn",
                    duration: 1000,
                },
            ],
        });
        this.time.addEvent({
            delay: 3000,
            loop: true,
            callback: () =>{
                ar1.x = -50;
                chain1.restart();
            }
        });

    }
    update(){

    }
    
}
let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [studioscene, menuscene, loadingscene],
}

let game = new Phaser.Game(config);
