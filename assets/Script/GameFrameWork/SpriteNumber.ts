import { DigitParser } from "./DigitParser";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SpriteNumber extends cc.Component {

    spritesNumbers_:cc.Sprite[] = null;
    digitParser_:DigitParser = null;

    @property({type:cc.SpriteFrame})
    spriteFramesNumbers = [];

    onLoad(){
        this.digitParser_ = new DigitParser();
        this.spritesNumbers_ = this.node.getComponentsInChildren(cc.Sprite);
    }

    Zero(){
        for (let index = 0; index < this.spritesNumbers_.length; index++) {
            this.spritesNumbers_[index].spriteFrame = this.spriteFramesNumbers[0];
        }
    }

    SetNumber(num:number){
        this.CheckNumberInput(num);
        this.Zero();
        for (let index = 0; index <this.digitParser_.GetDecimalNumberCounts(num) ; index++) {
            this.SetSpriteByDigit(num,index);
        }
    }

    SetSpriteByDigit(num:number,digit:number){
        let digitNumber = this.digitParser_.GetDigitFromLeft(num,digit);
        this.spritesNumbers_[digit].spriteFrame = this.spriteFramesNumbers[digitNumber];
    }

    CheckNumberInput(numberToCheck:number){
        if(this.digitParser_.GetDecimalNumberCounts(numberToCheck)>this.spritesNumbers_.length){
            throw new Error('number input is out of spritesumbers total length'+' numbers: '+numberToCheck + 'spritesNumbers_ length'+this.spritesNumbers_.length);
        }
    }
 
}
