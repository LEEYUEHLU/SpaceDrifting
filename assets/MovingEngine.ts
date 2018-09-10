import Hotkey from "./Script/Hotkey";
import { Vector2 } from "./Script/Vector2";
import { Polar } from "./Script/Polar";
import { MathV } from "./Script/MathV";
const {ccclass, property} = cc._decorator;

@ccclass
export default class MovingEngine extends cc.Component {
    

    accDown: boolean = false;
    accUp: boolean = false;
    speed_: number = 60;
    accel: number = 3;
    canMove_:boolean = false
    canRotate_:boolean = false;
    posVect_:Vector2;
    polar_:Polar;
    directionVect_:Vector2;

    update(dt){
        if(this.canMove_){
            this.Move(dt);
        }

        if(this.canRotate_){
            this.RotateCW(dt);
        }
    }

    Detatch(){
        let centripetalDir = MathV.SubBy(this.polar_.GetVector(), this.polar_.GetPivot());
        let centripetalPolar =  centripetalDir.GetPolar();
        centripetalPolar.RotateCW(90);
        this.directionVect_ = centripetalPolar.GetVector().Normalize();
        this.SetCanMove(true);
    }

    SetDirection(directionVect:Vector2){
        this.directionVect_ = directionVect.Normalize();
    }

    SetCanMove(canMove:boolean){
        this.canMove_ = canMove;
        this.canRotate_ = false;
    }

    RotateCW(dt){
        this.polar_.RotateCW(dt*this.speed_);
        this.node.x = this.polar_.GetVector().xPos;
        this.node.y = this.polar_.GetVector().yPos;
    }

    Move(dt){
        this.UpdateSpeed(dt);
        this.UpdatePosition(dt);
    }

    UpdateSpeed(dt){
        if (this.accDown) {
            this.speed_ -= this.accel * dt;
        } else if (this.accUp) {
            this.speed_ += this.accel * dt;
        }
    }

    UpdatePosition(dt){
        this.node.y += this.directionVect_.yPos* this.speed_ * dt ;
        this.node.x += this.directionVect_.xPos * this.speed_* dt ;
    }

    SetPolarPivot(pivot:Vector2){
        this.posVect_ = new Vector2(this.node.x,this.node.y);
        this.polar_ = this.posVect_.GetPolar(pivot);
    }

    SetCanRotate(canRotate:boolean) {
        this.canRotate_ = canRotate;
        this.canMove_ = false;
    }
}