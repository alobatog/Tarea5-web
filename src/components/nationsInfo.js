import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Accordion } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import NationInfo from '../components/nationInfo';
import { setSelected } from '../actions/covidActions';

function NationsInfo(props){

    const [selectedNations, setSelectedNations] = useState([]);

    useEffect(() => {
        setSelectedNations(props.selectedNations)
    });

    function onSubmmit(nation) {
        props.selectCountry(nation)
    }

    return (
        <div>
            <Accordion defaultActiveKey="Chile">
                {selectedNations.map((nation) => 
                <Card key={nation} onClick={()=>onSubmmit(nation)}>
                    <Accordion.Toggle as={Card.Header} eventKey={nation}>
                    <p className="menu-label">{nation}</p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={nation}>
                        <Card.Body>
                            <NationInfo nationName={nation}/>
                        </Card.Body>    
                    </Accordion.Collapse>
                </Card>
                )}
            </Accordion>
        </div>    
    )
}


const mapStateToProps = state => ({
    selectedNations: state.info.selectedNations,
});   

const mapDispatchToProps = dispatch => ({
    selectCountry: (nation) => dispatch(setSelected(nation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NationsInfo);