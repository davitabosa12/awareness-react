import React, {Component} from 'react';
import {Col, Card,Input, Modal, Row} from 'react-materialize';
import UUID from 'uuid';
import $ from 'jquery';
import ActivityEdit from './ActivityEdit';
import FenceCreateForm from './FenceCreateForm'
import AwarenessActivity from '../controller/AwarenessActivity';




class ActivityItem extends Component{
    constructor(props){
        super(props);
        this.activityName = props.activityName;
        this.packageName = props.packageName;
        this.awarenessActivity = new AwarenessActivity(this.packageName,this.activityName);
        this.fenceTypeId = UUID();
        this.fenceMethodId = UUID();
    }
    componentWillMount(){
        this.setState({
            dataset: 1
        });
    }
    formCallback(result){
        console.log(JSON.stringify(result));        
    }
    render(){
        return(
            <Col s={3}>
                <Card className='blue-grey darken-1 large' textClassName='white-text' title={this.activityName} 
                actions={[<a href='#mdl-edit' onClick={this.showEdit}>Edit</a>]}
                reveal={
                <Row>
                    <FenceCreateForm onSubmit={this.formCallback}/>
                </Row>}>
                    <p>From package: {this.packageName} </p>
                </Card>
                
            </Col>
            
            
        );
    }
}
export default ActivityItem;