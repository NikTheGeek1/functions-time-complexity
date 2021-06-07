import './Figure.css';
import Plot from 'react-plotly.js';
import { PlotData } from '../../types/PlotData';

const Figure = ({ data }: { data: PlotData }) => {

    return (
        <div className="figure-container">
            <Plot
            className="time-complexity-figure"
                data={[
                    {
                        x: data.times,
                        y: data.inputLengths,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: '#FBFFF1' },
                    }
                ]}
                layout={
                    { 
                        width:window.innerWidth, height:window.innerHeight/2.2, margin: {t:30},
                        paper_bgcolor: '#263238', plot_bgcolor: '#263238',
                        xaxis: {
                            gridcolor: '#636363',
                            linecolor: 'white',
                            showline: false,
                            zerolinecolor: 'white',
                            // tickcolor: 'white',
                            tickfont: {
                                color: 'white'
                            },
                            title: 'Input length',
                            titlefont: {
                                color: 'white'
                            }
                        },
                        yaxis: {
                            gridcolor: '#636363',
                            linecolor: 'white',
                            showline: false,
                            zerolinecolor: 'white',
                            // tickcolor: 'white',
                            tickfont: {
                                color: 'white'
                            },
                            title: 'Time',
                            titlefont: {
                                color: 'white'
                            }
                        },
            
            }}
            />
        </div>
    );
};

export default Figure;