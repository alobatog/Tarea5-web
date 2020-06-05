import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function NationInfo(props) {

    const [nationInfo, setNationInfo] = useState({});

    useEffect(() => {
        setNationInfo({ ...nationInfo, ...props.nation[props.nation.length - 1]})
    }, [props.nation]);

    return (
        <div>    
            <p className="menu-label">{nationInfo.Country} Info</p>
            <ul className="menu-list">
                <li> Total Confirmed: {nationInfo.Confirmed} </li>
                <li> Total Actives: {nationInfo.Active} </li>
                <li> Total Deaths: {nationInfo.Deaths} </li>
                <li> Total Recovered: {nationInfo.Recovered} </li>
            </ul>
      </div>
    )
}

const mapStateToProps = state => ({
    nation: state.info.nation,
});

 export default connect(mapStateToProps)(NationInfo);
