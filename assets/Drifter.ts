import { Vector2 } from "./Script/Vector2";
import { Polar } from "./Script/Polar";
import { MathV } from "./Script/MathV";
import { RadiusDegreeConverter } from "./Script/RadiusDegreeConverter";
import CameraControl from "./Script/CameraControl";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Drifter extends cc.Component {

    speed_: number = 60;
    originSpeed_:number = 0;
    accel: number = 3;
    canMove_:boolean = false
    canRotate_:boolean = false;
    posVect_:Vector2 = null;
    polar_:Polar = null;
    directionVect_:Vector2 = new Vector2(0,1);
    raiousDegreeConverter_:RadiusDegreeConverter = new RadiusDegreeConverter();
    isClockwise_:boolean;
    planetPosition_:cc.Vec2 = cc.v2(0,0);
    @property(CameraControl)
    cameraControl_:CameraControl = null;


    update(dt){
        if(this.canMove_){
            this.Move(dt);
        }

        if(this.canRotate_){
            if(this.isClockwise_){
                this.Rotate(dt);
                return;
            }
            this.Rotate(-dt)
        }
        this.CheckOutOfBorder();
        
    }

    CheckOutOfBorder(){
        let maxHeight = cc.director.getVisibleSize().height/2;
        let maxWidth = cc.director.getVisibleSize().width/2;
        let yDistance =  Math.abs(this.node.position.y - this.planetPosition_.y);
        let xDistance = Math.abs(this.node.position.x - this.planetPosition_.x);
        if(maxHeight < yDistance  || maxWidth < xDistance ){
            console.log('Game over');
            cc.director.loadScene("Main");
        }
    }

    Detatch(){
        let centripetalDir = MathV.SubBy(this.polar_.GetVector(), this.polar_.GetPivot());
        let centripetalPolar =  centripetalDir.GetPolar();
        if(this.isClockwise_){
            centripetalPolar.RotateCW(90);
        }
        else{
            centripetalPolar.RotateCCW(90);
        }
        this.SetDirection(centripetalPolar.GetVector());
        this.SetCanMove(true);
        this.speed_ = this.originSpeed_;
    }

    SetDirection(directionVect:Vector2){
        this.directionVect_ = directionVect.Normalize();
    }

    SetCanMove(canMove:boolean){
        this.canMove_ = canMove;
        this.canRotate_ = false;
    }

    Rotate(dt){
        this.polar_.RotateCW(dt*this.speed_);
        this.node.x = this.polar_.GetVector().xPos;
        this.node.y = this.polar_.GetVector().yPos;
        this.ChangeFacingDirection();
    }

    ChangeFacingDirection(){
        if(this.isClockwise_){
            this.node.rotation = 180-this.raiousDegreeConverter_.GetDegreeByRaius(this.polar_.radious_);
            return;
        }
        this.node.rotation = -this.raiousDegreeConverter_.GetDegreeByRaius(this.polar_.radious_);
    }

    Move(dt){
        this.UpdateSpeed(dt);
        this.UpdatePosition(dt);
    }

    UpdateSpeed(dt){
       
    }

    UpdatePosition(dt){
        this.node.y += this.directionVect_.yPos* this.speed_ * dt ;
        this.node.x += this.directionVect_.xPos * this.speed_* dt ;
    }

    SetPolarPivot(pivot:Vector2){
        this.posVect_ = new Vector2(this.node.x,this.node.y);
        this.polar_ = this.posVect_.GetPolar(pivot);
    }

    SetCanRotate(canRotate:boolean,isClockwise:boolean,speedRatio:number) {
        this.canRotate_ = canRotate;
        this.canMove_ = false;
        this.isClockwise_ = isClockwise;
        this.originSpeed_ = this.speed_;
        this.speed_ *= speedRatio;
    }

    SetCamermPosition(vec:cc.Vec2){
        this.planetPosition_ = vec;
        this.cameraControl_.node.cleanup();
        let moveTo = cc.moveTo(1,cc.v2(vec.x,vec.y-50));
        this.cameraControl_.node.runAction(moveTo);
    }
}
