import './Figure.css';
import Plot from 'react-plotly.js';
import { PlotData } from '../../types/PlotData';

const Figure = ({ data }: {
    data: PlotData,
}) => {

    return (
        <div className="figure-container">
            <Plot
                className="time-complexity-figure"
                data={[
                    {
                        x: data.inputLengths,
                        y: data.times,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: '#e5989b' },
                    },
                ]}
                layout={
                    {
                        width: window.innerWidth, height: window.innerHeight / 2.2, margin: { t: 30 },
                        paper_bgcolor: '#263238', plot_bgcolor: '#263238',
                        xaxis: {
                            gridcolor: '#263238',
                            linecolor: 'white',
                            zerolinecolor: '#263238',
                            tickfont: {
                                color: 'white'
                            },
                            title: 'Input length',
                            titlefont: {
                                color: '#e5989b'
                            }
                        },
                        yaxis: {
                            gridcolor: '#263238',
                            linecolor: 'white',
                            zerolinecolor: '#263238',
                            tickfont: {
                                color: 'white'
                            },
                            title: 'Time',
                            titlefont: {
                                color: '#e5989b'
                            }
                        }
                    }
                }
            />
        </div>
    );
};

export default Figure;