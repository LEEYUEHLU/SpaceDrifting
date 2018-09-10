import Hotkey from "./Hotkey";
import MovingEngine from "../MovingEngine";
import { Vector2 } from "./Vector2";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CompositionRoot extends cc.Component {

    @property(Hotkey)
    hotkey_:Hotkey = null;

    @property(MovingEngine)
    spaceShipEngine_:MovingEngine = null;


    start(){
        this.SetUp();
    }

    SetUp(){
        this.hotkey_.SetUp();
        this.hotkey_.Register(cc.KEY.enter,()=>this.StartSpaceShip());
        this.hotkey_.Register(cc.KEY.r,()=>this.StartSpaceShipRotate());
        this.hotkey_.Register(cc.KEY.d,()=>this.Detach());
    
    }

    Detach(){
        this.spaceShipEngine_.Detatch();
    }

    StartSpaceShip(){
        console.log('start move');
        this.spaceShipEngine_.SetCanMove(true);
        this.spaceShipEngine_.SetDirection(new Vector2(1,10));
    }

    StartSpaceShipRotate(){
        console.log('start start rotate');
        this.spaceShipEngine_.SetPolarPivot(new Vector2(138,-14));
        this.spaceShipEngine_.SetCanRotate(true);
    }
 
}
