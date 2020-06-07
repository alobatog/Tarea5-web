import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Accordion } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import NationInfo from '../components/nationInfo';

function NationsInfo(props){

    const [selectedNations, setSelectedNations] = useState([]);

    useEffect(() => {
        setSelectedNations(props.selectedNations)
    });

    return (
        <div>
            <Accordion defaultActiveKey="0">
                {selectedNations.map((nation) => 
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={nation}>
                    <p className="menu-label">{nation}</p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={nation}>
                        <Card.Body>
                            <NationInfo/>
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

export default connect(mapStateToProps)(NationsInfo);