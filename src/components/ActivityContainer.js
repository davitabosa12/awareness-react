import React, {Component} from 'react';
import InsertActivity from './InsertActivity'
import ActivityPrompt from './ActivityPrompt'

class ActivityContainer extends Component{
    constructor(props){
        super(props);
        this.state = {activities: []};
    }
    render(){
        return(
            <div className="activity-container row">
                <ActivityPrompt/>
            </div>
        )
    }
}

export default ActivityContainer;