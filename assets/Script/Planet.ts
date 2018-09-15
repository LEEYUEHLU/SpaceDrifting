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

    CheckDistanceAndTrapDrifter(){
        let dot = Math.abs(MathV.Dot(this.drifter_.directionVect_,this.DirectionToDrifter()));
        console.log(dot);
        if(0 <= dot && 1 >= dot ){
            this.Trap();
        }
    }

    Trap(){
        console.log('trap');
        this.drifter_.SetPolarPivot(new Vector2(this.node.x,this.node.y));
        this.canTrap_ = false;
        if(0<=this.DirectionToDrifter().xPos){
            this.drifter_.SetCanRotate(true,false,this.baseDistance_/this.distanceToDrag_);
            return;
        }
        this.drifter_.SetCanRotate(true,true,this.baseDistance_/this.distanceToDrag_);
    }
}
