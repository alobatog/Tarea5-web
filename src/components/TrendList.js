import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNation, fetchCountries, fetchWorld, setGraphic } from '../actions/covidActions';

function TrendList(props) {


    useEffect(() => {
        props.fetchNation('chile');   
        props.fetchCountries(); 
        props.fetchWorld();
    }, [])

    return (
        
        <div>   
            {/* {props.countries.map(country => <li key={country.ISO2}> {country.Country}  </li>)} */}
            {/* {props.nation.map(day => <li key={day.Date}> {day.Confirmed} </li>)} */}      
            <div className="box">
            <div className="container columns">
            <aside className="menu">
                <p className="menu-label">World Info</p>
                <ul className="menu-list">

                    <li> Total Confirmed: {props.world.TotalConfirmed} </li>
                    <li> Total Actives: {props.world.TotalActive} </li>
                    <li> Total Deaths: {props.world.TotalDeaths} </li>
                    <li> Total Recovered: {props.world.TotalRecovered} </li>
                </ul>
                <button className="button is-info" onClick={props.fetchWorld}>Choose Country</button>

            </aside>
            <div className="column">
                <div className="is-centered">
                Aquí iría el gráfico seleccionando un trending topic del lado izquierdo (otro componente)
                </div>
                <div className="buttons is-centered">
                <button className="button is-info" >Twittear #TT</button>
                </div>
            </div>
            </div>
        </div>
      </div>
    )
}

const mapStateToProps = state => ({
    error: state.info.error,
    nation: state.info.nation,
    countries: state.info.countries,
    world: state.info.world,
    loading: state.info.loading,
    graphic: state.info.graphic
});

const mapDispatchToProps = dispatch => ({
    fetchNation: (nation) => dispatch(fetchNation(nation)),
    fetchCountries: () => dispatch(fetchCountries()),
    fetchWorld: () => dispatch(fetchWorld()),
    setGraphic: (data) => dispatch(setGraphic(data))
});
    
    


 export default connect(mapStateToProps, mapDispatchToProps)(TrendList);
