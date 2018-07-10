import React, {Component} from 'react';
import ActivityPrompt from './ActivityPrompt'
import ActivityItem from './ActivityItem'
import {addActivity} from '../controller/Main'
import $ from 'jquery'

class ActivityContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            activities: []
        }

        this.pushNewActivity = this.pushNewActivity.bind(this);
        
    }
    renderActivity(act){
        return (
            <ActivityItem activityName={act.name} packageName={act.packageName} key={act.name + "" + act.packageName}/>
        )
    }
    renderActivities(acts){
        
        return (acts.map(this.renderActivity));
    }
    render(){
        return(
            <div className="activity-container row">
                {this.renderActivities(this.state.activities)}
                <ActivityPrompt onPushActivity={this.pushNewActivity}/>
            </div>
        )
    }
    componentDidUpdate(){
        console.log(this.state.activities);
    }
    pushNewActivity(){
        let pack = $("[name='package-name'");
        let act = $("[name='activity-name'");
        let packName = pack.val().toString();
        let actName = act.val().toString();
        
        if(packName.trim() === "" || actName.trim() === "") //cannot be empty
            window.Materialize.toast("Cannot be empty", 4000, "rounded");
        else {
            let awarenessActivity = addActivity({name: actName, packageName: packName});   
            if(awarenessActivity !== undefined){
                for(var i =0; i < this.state.activities.length; i++){
                    if(this.state.activities[i].name === awarenessActivity.name && 
                       this.state.activities[i].packageName === awarenessActivity.packageName){
                        window.Materialize.toast("Activity " + awarenessActivity.packageName + awarenessActivity.name + " already exists.",3000, "rounded");
                        return;
                    }
                        
                }
                window.Materialize.toast("New activity added: " + actName, 4000,"rounded");
                //this.activities.push(awarenessActivity);
                this.setState(prevState=>({
                    activities: [...prevState.activities, awarenessActivity]
                }));
                    
                
            }
                
            
        }
    }
}

export default ActivityContainer;