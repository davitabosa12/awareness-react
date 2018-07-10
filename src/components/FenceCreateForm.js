import React, {Component} from 'react';
import {Button, Row, Col, Input} from 'react-materialize'
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
        this.handleTypeChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.callback = this.props.setUpdate;
        
    }
    componentDidMount(){
        //check if props are being passed
        if(this.props.setCallback === undefined){
            //ser default behavior
            this.callback = function(e){
                console.log(e);
            }
        }
    }
    render(){
        return(
            <Row>
                <Input name="fenceName" placeholder="Name of the fence" label="Name" 
                       onChange={e=>this.handleChange(e)}/>
                <Input name="fenceAction" placeholder="com.example.MyAction" label="Action class"
                       onChange={e=>this.handleChange(e)}/>
                <Input type="select" name="fenceType" label="Fence Type" defaultValue="Headphone" 
                       onChange={e => this.handleChange(e)}>
                    <option value="Headphone">Headphone</option>
                    <option value="DetectedActivity">Activity Detection</option>
                    <option value="Location">Location</option>
                </Input>
                {this.renderMethodSelect()}
                <Button waves="light" onClick={this.handleSubmit}>Add Fence</Button>

            </Row>
        )
    }
    handleSubmit(){
        //validate fields
        if(this.state.fenceName === undefined){
            window.Materialize.toast("Must provide a name for the fence.");
            return;
        }
        if(this.state.fenceAction === undefined){
            window.Materialize.toast("Must provide an Action class.");
            return;
        }

        //fields validated, return the state.
        try {
            this.props.onSubmit(this.state);    
        } catch (error) {
            console.log("An error: " + error);
        }
        
        
    }
    handleChange(e){
        let name = [e.target.name];
        let value = e.target.value;
        
        this.setState((prevState) => {
            
            if("fenceType" == name){ //fenceType was the name changed, so change the fence method.
                if(value === "Headphone"){
                    return{
                        [name]: value,
                        fenceMethod: "Headphone.DURING"
                    }
                } else if(value === "DetectedActivity"){
                    
                    return{
                        [name]: value,
                        fenceMethod: "DetectedActivity.DURING"
                    }
                }else if(value === "Location"){
                    return{
                        [name]: value,
                        fenceMethod: "Location.ENTERING"
                    }
                }
            }
            return {
                [name]: value
            };
          });
    }
    
    componentDidUpdate(){
        this.callback(this.state);
    }
    renderMethodSelect(){

        if(this.state.fenceType === "Headphone"){
            return(
                <Input type="select" name="fenceMethod" label="Fence Method"  defaultValue="Headphone.DURING"
                onChange={e=>this.handleChange(e)}>
                    <option value="Headphone.DURING">During</option>
                    <option value="Headphone.PLUGGING_IN">Plugging In</option>
                    <option value="Headphone.UNPLUGGING">Unplugging</option>
                </Input>
            )
        }
            
        else if(this.state.fenceType === "DetectedActivity"){
            return(
                <Input type="select" name="fenceMethod" label="Fence Method" defaultValue="DetectedActivity.DURING" 
                onChange={e=>this.handleChange(e)}>
                    <option value="DetectedActivity.DURING">During</option>
                    <option value="DetectedActivity.STARTING">Starting</option>
                    <option value="DetectedActivity.STOPPING">Stopping</option>
                </Input>
            )
        }
            
        else if(this.state.fenceType === "Location"){
            return(
                <Input type="select" name="fenceMethod" label="Fence Method" defaultValue="Location.ENTERING"
                onChange={e=>this.handleChange(e)}>
                    <option value="Location.ENTERING">Entering</option>
                    <option value="Location.EXITING">Exiting</option>
                    <option value="Location.IN">In</option>
                </Input>
            )
        }
    }
    
}