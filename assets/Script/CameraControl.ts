// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class CameraControl extends cc.Component {

    camera_:cc.Camera;
    obstacles_:cc.Node[];
    followDistance_:number;

    onLoad(){
       this.Harvest();
    }

    update(){
    }

    Harvest(){
        let parent = cc.find('Canvas/Obstacles');
        this.camera_ = this.node.getComponent(cc.Camera);
        this.obstacles_ =  parent.getComponentsInChildren("Node");
        this.AddTargets();
    }

    AddTargets(){
        for (let index = 0; index < this.obstacles_.length; index++) {
            this.camera_.addTarget(this.obstacles_[index]);
        }
    }

}
