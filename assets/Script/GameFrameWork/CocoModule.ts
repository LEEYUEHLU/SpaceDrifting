const {ccclass} = cc._decorator;
import { PrefabProvider } from './PrefabProvider';
import { ContainerModule, Container, interfaces } from '../Game/Scripts/Setting/inversify.confing';

@ccclass
export default abstract class CocoModule extends cc.Component {
    
    moduleBinding:ContainerModule;
    container:Container;

    load(container:Container){
        this.container = container;
        this.OnModuleLoading();
        container.load(this.moduleBinding);
    }

    OnModuleLoading(){
        this.moduleBinding = new ContainerModule(
            (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
                this.LoadModule();
        });
    }
        
    BindViewOf(name:string,prefab:cc.Prefab,typeOfView:any){
        this.container.bind(typeOfView)
        .toConstantValue(new PrefabProvider().GetComponentInPrefab(prefab,typeOfView))
        .whenTargetNamed(name);
    }

    abstract LoadModule();
}
