import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setChart } from '../actions/covidActions';
import { Line } from 'react-chartjs-2';


function parseChartData(nation){
    let Name = nation.length ? nation[0].Country : '';
    let Confirmed = nation.map(x => x.Confirmed);
    let Active = nation.map(x => x.Active);
    let Deaths = nation.map(x => x.Deaths);
    let Recovered = nation.map(x => x.Recovered);
    let Days = nation.map(x => x.Date.split('T')[0]);
 
    return {Confirmed, Active, Deaths, Recovered, Days, Name};
}

function Chart(props) {

    const line = {
        label: '',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '',
        borderColor: '',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: null
      }

    useEffect(() => {
        if(props.nations.length > 0){
          let country = props.nations.filter(n => n[0].Country == props.selected)[0]
          props.setChart(parseChartData(country))
        }
    }, [props.nations, props.selected])


    const chart = {
        labels: props.chart.Days,
        datasets: [
          { 
            ...line,
            label: 'Confirmed',
            backgroundColor: 'rgba(112,50,189,0.4)',
            borderColor: 'rgba(112,50,189,1)',
            pointBorderColor: 'rgba(112,50,189,1)',
            data: props.chart.Confirmed
          },
          {
            ...line,
            label: 'Deaths',
            backgroundColor: 'rgba(0,0,0,0.4)',
            pointBorderColor: 'rgba(0,0,0,1)',
            pointBorderColor: 'rgba(0,0,0,1)',
            data: props.chart.Deaths
          },
          {
            ...line,
            label: 'Recovered',
            backgroundColor: 'rgba(92,213,110,0.4)',
            borderColor: 'rgba(92,213,110,1)',
            pointBorderColor: 'rgba(92,213,110,1)',
            data: props.chart.Recovered
          },
          {
            ...line,
            label: 'Active',
            backgroundColor: 'rgba(229,91,123,0.4)',
            borderColor: 'rgba(229,91,123,1)',
            pointBorderColor: 'rgba(229,91,1123,1)',
            data: props.chart.Active
          }
        ]
      };

    return (
        <div>    
            <div className="is-centered">
                <h1> {props.chart.Name} </h1>
                 < Line data={chart} />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    chart: state.info.chart,
    nation: state.info.nation,
    nations: state.info.nations,
    selected: state.info.selectedNation,
});

const mapDispatchToProps = dispatch => ({
    setChart: (data) => dispatch(setChart(data)),
});
    

 export default connect(mapStateToProps, mapDispatchToProps)(Chart);