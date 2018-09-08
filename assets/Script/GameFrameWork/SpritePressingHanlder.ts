const {ccclass, property} = cc._decorator;

@ccclass
export default class SpritePressingHanlder extends cc.Component {

    @property(cc.SpriteFrame)
    releaseSprite:cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    pressedSprite:cc.SpriteFrame = null;

    currentSprite:cc.Sprite = null;
    
    onLoad(){
        this.SetUp();
    }

    SetUp(){
        this.currentSprite = this.node.getComponent(cc.Sprite);
        this.SetPressedSprite_();
        this.SetReleaseSprite_();
    }

    SetPressedSprite_(){
        this.node.on(cc.Node.EventType.MOUSE_DOWN,()=>{
            this.ChangeToSprite(this.pressedSprite);
        });
    }

    SetReleaseSprite_(){
        this.node.on(cc.Node.EventType.MOUSE_UP,()=>{
            this.ChangeToSprite(this.releaseSprite);
        });
    }

    ChangeToSprite(sprite:cc.SpriteFrame){
        this.currentSprite.spriteFrame = sprite;
    }

}
