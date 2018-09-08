import { injectable } from "../Game/Scripts/Setting/inversify.confing";

@injectable()
export class Alarm{
  
    settingOfCountDown:number = 0;
    countDown:number = 0; 
    onTimeUp_:()=>void;

    SetAlamClock(timeToAlarm:number){
        this.CheckTimeAmount(timeToAlarm);
        this.settingOfCountDown = timeToAlarm;
        this.countDown = this.settingOfCountDown;
    }
    
    CheckTimeAmount(timeAmount:number){
        if(0>timeAmount){
            throw new Error('time must greater than 0');
        }
    }
    
    ElapseWith(timeElapse:number){
        if(0>=this.countDown){
            return;
        }
        this.countDown-=timeElapse;
        if(0>=this.countDown){
            this.InvokeTimeUp();
        }
    }

    InvokeTimeUp(){
        if(null!=this.onTimeUp_){
            this.onTimeUp_();
        }
    }

    RegisterTimeUpEvent(onTimeUp:()=>void) {
        this.onTimeUp_ = onTimeUp;
    }

    Reset() {
        this.countDown = this.settingOfCountDown;
    }

}