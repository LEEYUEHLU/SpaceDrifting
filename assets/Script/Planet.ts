import Drifter from "../Drifter";
import { MathV } from "./MathV";
import { Vector2 } from "./Vector2";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Planet extends cc.Component {

    @property(Drifter)
    drifter_:Drifter = null;
    canTrap_:boolean = true;
    @property(cc.Integer)
    distanceToDrag_:number = 200;
    baseDistance_:number = 100;
    @property(cc.Boolean)
    isClockwise_:boolean = false;

    update(){
        this.ChecInnerRoomAndTrap();
        this.CheckOutsideOfRoom();
    }
    
    CheckOutsideOfRoom(){
        if(this.distanceToDrag_<=this.DirectionToDrifter().Mag()){
            this.canTrap_ = true;
        }
    }

    IsSmallerThanDistance(){
        return this.distanceToDrag_>= this.DirectionToDrifter().Mag();
    }

    ChecInnerRoomAndTrap(){
        if(this.canTrap_&&this.IsSmallerThanDistance()){
            this.Trap();
            this.canTrap_ = false;
        }
    }

    DirectionToDrifter():Vector2{
        return new Vector2(this.drifter_.node.x-this.node.x,this.drifter_.node.y-this.node.y);
    }

    Trap(){
        console.log('trap');
        this.drifter_.SetPolarPivot(new Vector2(this.node.x,this.node.y));
        this.canTrap_ = false;
        console.log();
        this.drifter_.SetCanRotate(true,this.isClockwise_,this.baseDistance_/this.distanceToDrag_);
    }
}
