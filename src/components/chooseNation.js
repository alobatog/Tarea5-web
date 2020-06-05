import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCountries, fetchNation } from '../actions/covidActions';
import {Typeahead} from 'react-bootstrap-typeahead';


function formatDate() {
    var date = new Date(),
        month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return [year, month, day].join('-');
}

function ChooseNation(props) {

    const [selected, setSelected] = useState([]);

    useEffect(() => {
        props.fetchCountries();
        props.fetchNation('chile', formatDate());
    }, [])

    const searchNation = (nation) => {
        if(selected.length > 0){
            props.fetchNation(nation[0].Slug);
            setSelected([])
        }
    }

    return (
        <div>    
            <Typeahead
            id="basic-typeahead-example"
            labelKey="Country"
            onChange={setSelected}
            options={props.countries}
            placeholder="Choose a country"
            selected={selected}
            />
            <button className="button is-info" onClick={() => searchNation(selected, formatDate())} >Send</button>
        </div>
        
    )
}

const mapStateToProps = state => ({
    countries: state.info.countries,
});

const mapDispatchToProps = dispatch => ({
    fetchCountries: () => dispatch(fetchCountries()),
    fetchNation: (nation) => dispatch(fetchNation(nation))
});
    

 export default connect(mapStateToProps, mapDispatchToProps)(ChooseNation);
