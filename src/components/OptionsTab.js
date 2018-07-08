import React, {Component} from 'react';
import ActivityContainer from './ActivityContainer';
import FencesContainer from './FencesContainer';
import M, {Tabs, Tab} from 'react-materialize'


class OptionsTab extends Component{
    componentDidMount(){
        //M.Tabs.init();
    }
    render(){
        return(
            <Tabs className="tabs-fixed-width">
                <Tab active title="Activities"><ActivityContainer/></Tab>
                <Tab title="Fences"><FencesContainer/></Tab>
                
                
            </Tabs>
        )
    }
}

export default OptionsTab;