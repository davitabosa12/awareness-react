import React, {Component} from 'react';
import {Col, Card,Input, Modal, Row} from 'react-materialize';
import UUID from 'uuid';
import $ from 'jquery';
import ActivityEdit from './ActivityEdit';
import FenceCreateForm from './FenceCreateForm'




class ActivityItem extends Component{
    constructor(props){
        super(props);
        this.activityName = props.activityName;
        this.packageName = props.packageName;
        this.handleFenceTypeChange = this.handleFenceTypeChange.bind(this);
        this.fenceTypeId = UUID();
        this.fenceMethodId = UUID();
    }
    componentWillMount(){
        this.setState({
            dataset: 1
        });
    }
    handleFenceTypeChange(){
        let type = $("#"+ this.fenceTypeId).val();
        this.setState({
            dataset: type
        });
        alert(type);    
        
    }
    render(){
        return(
            <Col s={3}>
                <Card className='blue-grey darken-1 large' textClassName='white-text' title={this.activityName} 
                actions={[<a href='#mdl-edit' onClick={this.showEdit}>Edit</a>]}
                reveal={
                <Row>
                    <FenceCreateForm/>
                </Row>}>
                    <p>From package: {this.packageName} </p>
                </Card>
                
            </Col>
            
            
        );
    }
}
export default ActivityItem;