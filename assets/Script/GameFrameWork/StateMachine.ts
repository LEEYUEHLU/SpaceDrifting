import { State } from "./State";
import { Dictionary } from "./Dictionary";
import { injectable } from "../Game/Scripts/Setting/inversify.confing";

@injectable()
export class StateMachine{
    
    currentState_:State;
    transitionMap_:Dictionary<string,StateTransition>;
    states_ : State[];

    constructor(){
        this.transitionMap_ = new Dictionary<string,StateTransition>();
        this.states_ = [];
    }

    GetCurrentState():State {
        return this.currentState_ ;
    }

    SetInitState(initState:State) {
        this.currentState_ = initState;
    }

    SetUp() {
        for (let index = 0; index < this.states_.length; index++) {
            this.states_[index].SetUpState(this);
        }
        this.currentState_.OnEnter();
    }

    OnUpdate(dt) {
        this.currentState_.OnUpdate(dt);
    }

    AddState(state:State) {
        if(this.ContainState(state)){
            throw new Error('state alredy added');
        }
        this.states_[this.states_.length] = state;
    }

    ContainState(state:State) : boolean{
        for (let index = 0; index < this.states_.length; index++) {
            if(this.states_[index] == state){
                return true;
            }
        }
        return false
    }

    Transit(tranision:string) {
        if(!this.transitionMap_.ContainsKey(tranision)){
            throw new Error;
        }
        let stateTransition  : StateTransition =  this.transitionMap_.GetValueOfKey(tranision);
        stateTransition.fromState.OnLeave();
        this.currentState_ = stateTransition.toState;
        this.currentState_.OnEnter();
    }

    AddTransition(fromState: State, transition: string, toState: State) {
        this.transitionMap_.AddKeyPair(transition,new StateTransition(fromState,transition,toState));
    }

}

export class StateTransition{

    fromState:State
    toState:State
    tranisition:string

    constructor(fromState:State,transition:string,toState:State){
        this.fromState = fromState;
        this.toState = toState;
        this.tranisition = transition;
    }
    
}