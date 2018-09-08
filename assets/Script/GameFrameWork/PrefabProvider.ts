export class PrefabProvider{
    GetComponentInPrefab(prefab:cc.Prefab,componentType:any): any{
        this.CheckPrefabReference_(prefab);
        return cc.instantiate(prefab).getComponent(componentType);
    }

    CheckPrefabReference_(prefab:cc.Prefab){
        if(prefab == null){
            throw new ReferenceError('prefab cannot be null');
        }
    }
}

