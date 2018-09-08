import { StateMachine } from "./StateMachine";
import { injectable } from "../Game/Scripts/Setting/inversify.confing";

@injectable()
export abstract class State{

    stateMachine_:StateMachine;

    SetUpState(stateMachine:StateMachine) :void {
        this.stateMachine_ = stateMachine;
        this.SetUp();
    }
    
    abstract SetUp();
    abstract OnEnter();
    abstract OnUpdate(dt);
    abstract OnLeave();
    
} 