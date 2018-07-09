import React, {Component} from 'react';
import M, {Button, Modal} from 'react-materialize';
import $ from 'jquery';

class InsertActivity extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        let compStyle = {
            cursor:"pointer"
        }
        return(
        <Button waves="light" className="modal-trigger" href="#mdl-new-activity" onClick={this.handleClick}>
            +
        </Button>
        )
    }
    handleClick(){
        //open the ActivityPrompt
        
        //$("#mdl-new-activity").modal('open');
    }
}

export default InsertActivity;