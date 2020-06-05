import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setChart } from '../actions/covidActions';


function Chart(props) {

    useEffect(() => {
        props.setChart(props.nation)
    }, [props.nation])

    const printChart = () => console.log(props.chart)

    return (
        <div>    
            <div className="is-centered">
                Aquí iría el gráfico seleccionando un trending topic del lado izquierdo (otro componente)
            </div>
            <div className="buttons is-centered">
                <button className="button is-info" onClick={() => printChart()} >chart</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    chart: state.info.chart,
    nation: state.info.nation
});

const mapDispatchToProps = dispatch => ({
    setChart: (data) => dispatch(setChart(data)),
});
    

 export default connect(mapStateToProps, mapDispatchToProps)(Chart);