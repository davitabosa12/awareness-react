import AwarenessActivity from './AwarenessActivity'
var activities = [];
var fences = [];

export function addActivity(activity){
    //check if undefined
    if(activity.name === undefined)
        throw new TypeError("name is undefined");
    if(activity.packageName === undefined)
        throw new TypeError("packageName is undefined");  
    
    return new AwarenessActivity(activity.packageName,activity.name);
}

export function getActivities(){
    return activities;
}