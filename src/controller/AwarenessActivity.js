class AwarenessActivity{
    constructor(packageName, name){
        
        this.packageName = packageName;
        this.name = name;
        this.fences = [];
    }

    pushFence(fence){
        //TODO: Check if fence is valid
        this.fences.push(fence);
    }
}

export default AwarenessActivity;