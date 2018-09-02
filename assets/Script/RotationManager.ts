import { Vector2 } from "./Vector2";

export class RotationManager{


    RotateBy(rotatePosition:Vector2,centerPosition:Vector2,degree:number):Vector2{
        let direct = rotatePosition.Sub(centerPosition);
        let p = new cc.Vec2;
        return new Vector2(0,0);
    }

}

