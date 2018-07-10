import React, {Component} from 'react';
import ActivityContainer from './ActivityContainer';
import {Tabs, Tab} from 'react-materialize'


class OptionsTab extends Component{
    
    render(){
        return(
            <Tabs className="tabs-fixed-width">
                <Tab active title="Activities"><ActivityContainer/></Tab>
                
                
                
            </Tabs>
        )
    }
}

export default OptionsTab;