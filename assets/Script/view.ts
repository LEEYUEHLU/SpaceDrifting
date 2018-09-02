import { Vector2 } from "./Vector2";
import { Polar } from "./Polar";
import { RadiusDegreeConverter } from "./RadiusDegreeConverter";

const {ccclass} = cc._decorator;

@ccclass()
export class view extends cc.Component{ 

    posVect_:Vector2;
    polar_:Polar;
    degree_:number = 0;

    start(){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        this.SetUp();
    }

    SetUp(){
        this.posVect_ = new Vector2(this.node.x,this.node.y);
        this.polar_ = this.posVect_.GetPolar();
    }

    RotateCWDegree = (degree:number,pivot:Vector2)=>{
        this.polar_.RotateCCW(degree);
        let newPos =  this.polar_.GetVector();
        this.node.setPositionX(newPos.xPos+pivot.xPos);
        this.node.setPositionY(newPos.yPos+pivot.yPos);
    }

    onKeyDown(event) {
        switch(event.keyCode) {
            case cc.KEY.a:
                console.log('rotate 60 degree');
                this.RotateCWDegree(30,new Vector2(0,0));

                break;
        }
    }

    update(dt){
        this.RotateCWDegree(dt*100,new Vector2(0,0));
    }

}