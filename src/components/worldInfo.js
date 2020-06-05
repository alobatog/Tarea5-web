import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWorld } from '../actions/covidActions';

function WorldInfo(props) {

    useEffect(() => {
        props.fetchWorld();
    }, [])

    return (
        <div>    
            <p className="menu-label">World Info</p>
            <ul className="menu-list">
                <li> Total Confirmed: {props.world.TotalConfirmed} </li>
                <li> Total Actives: {props.world.TotalActive} </li>
                <li> Total Deaths: {props.world.TotalDeaths} </li>
                <li> Total Recovered: {props.world.TotalRecovered} </li>
            </ul>
      </div>
    )
}

const mapStateToProps = state => ({
    world: state.info.world,
});

const mapDispatchToProps = dispatch => ({
    fetchWorld: () => dispatch(fetchWorld()),
});
    

 export default connect(mapStateToProps, mapDispatchToProps)(WorldInfo);
