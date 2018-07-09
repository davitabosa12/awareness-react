import React, {Component} from 'react';
import $ from 'jquery'
import {Modal,Button,Input,Row, Col} from 'react-materialize';

class ActivityPrompt extends Component{
    constructor(props){
        super(props);
        this.handleCloseEnd = this.handleCloseEnd.bind(this);
    }
    render(){
       var opts = {
           complete: this.handleCloseEnd
       }
        return(

            <Modal id="mdl-new-activity" header="New Activity"
            modalOptions = {{complete: this.handleCloseEnd}}
            trigger={<Button className="col s3" waves="light">
            +
            </Button>} fixedFooter>
                <Row>
                    <Input placeholder="com.example.package" name="package-name" s={12} label="Package name"/>
                    <Input placeholder="MainActivity" s={12} name="activity-name" label="Activity name"/>
                    <Col s ={2} offset="s5"> <Button waves="light"> Create </Button> </Col>
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
}

export default ActivityPrompt;