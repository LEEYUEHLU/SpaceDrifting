import { Dictionary } from "./GameFrameWork/Dictionary";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    events_:Dictionary<cc.KEY,()=>void>

    start(){
        this.events_ = new Dictionary<cc.KEY,()=>void>();
        this.SetUp();
        this.Register(cc.KEY.a,()=>this.PressA());
    }

    PressA(){
        console.log('PressA');
    }

    Register(keyKode:cc.KEY,event:()=>void){
        this.events_.AddKeyPair(keyKode,event);
    }

    SetUp(){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event){
        if(this.events_.ContainsKey(event.keyCode)){
            this.events_.GetValueOfKey(event.keyCode)();  
            return ;
        } 
        throw new Error('there are no call back specified!');
    }

}
