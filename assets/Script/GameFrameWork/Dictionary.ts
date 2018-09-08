
export class Dictionary<K,V>{
    
    
    private keys_:K[];
    private values_:V[];

    constructor(){
        this.keys_ = [];
        this.values_ = [];
    }

    AddKeyPair(key:K, value:V){
        if(this.ContainsKey(key)){
            throw new Error('the key has been added before, key: '+ key);
        }
        this.keys_.push(key);
        this.values_.push(value);
    }

    ContainsKey(key:K): boolean {
        for (let index = 0; index < this.keys_.length; index++) {
            if(this.keys_[index] == key){
                return true;
            }
        }
        return false;
    }

    GetValueOfKey(key:K):V {
        if(!this.ContainsKey(key)){
            throw new Error('cant find '+this.keys_.toString()+' in dictionary');
        }
        return this.values_[this.keys_.indexOf(key)]; 
    }

}
