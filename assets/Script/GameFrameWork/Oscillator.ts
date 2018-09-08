import { Alarm } from "./Alarm";
import {injectable,inject} from 'inversify';
import { IOScillator } from "../Game/Scripts/Interfaces/IOscillator";

@injectable()
export class Oscillator implements IOScillator{
    
   
    
    
    oscillateAlarm_:Alarm = null;
    onOscillation_:()=>void;
    timeToOscillate_:number;

    constructor(@inject(Alarm)oscillateAlarm:Alarm){
        this.oscillateAlarm_ = oscillateAlarm;
    }

    CheckOscillate(){
        if(0>= this.oscillateAlarm_.countDown){
            this.Oscillate();
        }
    }

    GetFrequency() :number{
        return this.timeToOscillate_;
    }

    Oscillate(){
        this.oscillateAlarm_.Reset();
        this.InvokeOnOscillateEvent();
    }

    InvokeOnOscillateEvent(){
        if(this.onOscillation_!=null){
            this.onOscillation_();
        }
    }

    TimeElapse(timeElapse) {
        this.CheckAndCompensate(timeElapse);
        this.oscillateAlarm_.ElapseWith(timeElapse);
        this.CheckOscillate();
    }

    CheckAndCompensate(timeElapse){
        if(timeElapse>this.timeToOscillate_){
            for (let compenstateTimes = 0; compenstateTimes < Math.floor(timeElapse/this.timeToOscillate_)-1; compenstateTimes++) {
                this.Oscillate();
            }
        }
    }

    SetFrequency(frequencyOfFlashing:number){
        this.timeToOscillate_ = frequencyOfFlashing/2;
        this.oscillateAlarm_.SetAlamClock(this.timeToOscillate_);
    }
    
    RegisterOnOscillate (onOscillation:()=>void) {
        this.onOscillation_ = onOscillation;
    }

    Init() {
        this.oscillateAlarm_.Reset();
    }
}