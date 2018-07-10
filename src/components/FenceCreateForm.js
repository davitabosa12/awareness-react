import React, {Component} from 'react';
import {Row,Col,Input} from 'react-materialize'
import $ from 'jquery'

export default class FenceCreateForm extends Component{
    state = {
        fenceType: "Headphone",
        fenceMethod: "Headphone.DURING",
        fenceName: undefined,
        fenceAction: undefined,
        fenceProperties: {}
    };
    constructor(props){
        super(props);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.callback = this.props.setCallback;
        
    }
    handleTypeChange(e){
        
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    renderMethodSelect(){
        
        if(this.state.fenceType === "Headphone")
            return(
                <Input type="select" name="fenceMethod" label="Fence Method">
                    <option value="Headphone.DURING">During</option>
                    <option value="Headphone.PLUGGING_IN">Plugging In</option>
                    <option value="Headphone.UNPLUGGING">Unplugging</option>
                </Input>
            )
        else if(this.state.fenceType === "ActivityDetection")
            return(
                <Input type="select" name="fenceMethod" label="Fence Method">
                    <option value="DetectedActivity.DURING">During</option>
                    <option value="DetectedActivity.STARTING">Starting</option>
                    <option value="DetectedActivity.STOPPING">Stopping</option>
                </Input>
            )
        else if(this.state.fenceType === "Location")
            return(
                <Input type="select" name="fenceMethod" label="Fence Method">
                    <option value="Location.ENTERING">Entering</option>
                    <option value="Location.EXITING">Exiting</option>
                    <option value="Location.IN">In</option>
                </Input>
            )
    }
    render(){
        return(
            <Row>
                <Input name="fenceName" placeholder="Name of the fence" label="Name"/>
                <Input name="fenceAction" placeholder="com.example.MyAction" label="Action class"/>
                <Input type="select" name="fenceType" label="Fence Type" defaultValue="Headphone" onChange={e => this.handleTypeChange(e)}>
                    <option value="Headphone">Headphone</option>
                    <option value="ActivityDetection">Activity Detection</option>
                    <option value="Location">Location</option>
                </Input>
                {this.renderMethodSelect()}
            </Row>
        )
    }
}