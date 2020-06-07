import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function NationInfo(props) {

    const [nationInfo, setNationInfo] = useState({});

    useEffect(() => {

        if(props.nations.length > 0){
            let country = props.nations.filter(n => n[0].Country == props.nationName)[0]
            setNationInfo({ ...nationInfo, ...country[country.length - 1]})
        }
    }, [props.nations]);

    return (
        <div>    
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
    nations: state.info.nations,
});

 export default connect(mapStateToProps)(NationInfo);
