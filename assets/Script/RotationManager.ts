import { Vector2 } from "./Vector2";
import { Polar } from "./Polar";

export class RotationManager{

    objectPosition_:Vector2 = null;
    objectPolar_:Polar = null;
    canRotate_:boolean = false;
    ySpeed_: number = 60;
    pivot_:Vector2 = null;

    SetPolarPivot(objectPos:Vector2, pivot:Vector2){
        this.objectPosition_ = objectPos;
        this.pivot_ = pivot;
        this.objectPolar_ = this.objectPosition_.GetPolar(pivot);
    }

    RotateCW(dt):Vector2{
        this.objectPolar_.RotateCW(dt*this.ySpeed_);
        return this.objectPolar_.GetVector();
    }

    Start(){
        this.canRotate_ = true;
    }

    Stop(){
        this.canRotate_ = false;
    }

}

