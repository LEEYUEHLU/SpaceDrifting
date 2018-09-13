import Drifter from "../Drifter";
import { MathV } from "./MathV";
import { Vector2 } from "./Vector2";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Planet extends cc.Component {

    @property(Drifter)
    drifter_:Drifter = null;
    canTrap_:boolean = true;

    update(){
        // if(this.canTrap_){
        //     this.CheckDistanceAndTrapDrifter();
        // }
        this.CheckDistanceAndTrapDrifter();
    }
    
    DirectionToDrifter():Vector2{
        return new Vector2(this.drifter_.node.x-this.node.x,this.drifter_.node.y-this.node.y);
    }

    CheckDistanceAndTrapDrifter(){
        let dot = MathV.Dot(this.drifter_.directionVect_,this.DirectionToDrifter());
        if(0 <= dot && 1 >= dot ){
            console.log('trap');
            this.drifter_.SetPolarPivot(new Vector2(this.node.x,this.node.y));
            this.drifter_.SetCanRotate(true);
            this.canTrap_ = false;
        }
    }


}
