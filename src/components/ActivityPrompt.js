import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery'
import {Toast,Modal,Button,Input,Row, Col} from 'react-materialize';


import {addActivity} from '../controller/Main'

class ActivityPrompt extends Component{
    constructor(props){
        super(props);
        this.handleCloseEnd = this.handleCloseEnd.bind(this);
        this.pushNewActivity = props.onPushActivity;
    }
    render(){
       var opts = {
           complete: this.handleCloseEnd
       }
        return(

            <Modal id="mdl-new-activity" header="New Activity"
            modalOptions = {{complete: this.handleCloseEnd}}
            trigger={<Button className="col s12" waves="light">
            +
            </Button>} fixedFooter>
                <Row>
                    <Input placeholder="com.example.package" name="package-name" s={12} label="Package name"/>
                    <Input placeholder="MainActivity" s={12} name="activity-name" label="Activity name"/>
                    <Col s ={2} offset="s5"> 
                    <Button onClick={this.pushNewActivity} waves="light"> Create </Button> 
                    </Col>
                </Row>
            </Modal>
        );
    }
    

    handleCloseEnd(){
        //clear inputs
        
        let pack = $("[name='package-name'");
        let act = $("[name='activity-name'");
        pack.val('');
        act.val('');
    }
    /*pushNewActivity(){
        let pack = $("[name='package-name'");
        let act = $("[name='activity-name'");
        let packName = pack.val().toString();
        let actName = act.val().toString();
        
        if(packName.trim() === "" || actName.trim() === "") //cannot be empty
            window.Materialize.toast("Cannot be empty", 4000, "rounded");
        else {
            addActivity({name: actName, packageName: packName});
            window.Materialize.toast("New activity added: " + actName, 4000,"rounded");
        }

    }*/
}

export default ActivityPrompt;