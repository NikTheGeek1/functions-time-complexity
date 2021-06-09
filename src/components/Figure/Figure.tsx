import './Figure.css';
import Plot from 'react-plotly.js';
import { PlotData } from '../../types/PlotData';
import { FittedDataType } from '../../utils/fit-complexities';

const Figure = ({ data, fittedData, showComplexities }: {
    data: PlotData,
    fittedData: FittedDataType | undefined,
    showComplexities: boolean
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
                    {
                        x: fittedData?.xRange,
                        y: fittedData?.linear,
                        xaxis: 'x2',
                        yaxis: 'y2',
                        type: 'scatter',
                        mode: 'lines',
                        marker: { color: '#98aae5' },
                        name: "Linear",
                        visible: showComplexities
                    },
                    {
                        x: fittedData?.xRange,
                        y: fittedData?.constant,
                        xaxis: 'x2',
                        yaxis: 'y2',
                        type: 'scatter',
                        mode: 'lines',
                        marker: { color: '#98e5df' },
                        name: "Constant",
                        visible: showComplexities
                    },
                    {
                        x: fittedData?.xRange,
                        y: fittedData?.logN,
                        xaxis: 'x2',
                        yaxis: 'y2',
                        type: 'scatter',
                        mode: 'lines',
                        marker: { color: '#98e598' },
                        name: "Log n",
                        visible: showComplexities
                    },
                    {
                        x: fittedData?.xRange,
                        y: fittedData?.nLogN,
                        xaxis: 'x2',
                        yaxis: 'y2',
                        type: 'scatter',
                        mode: 'lines',
                        marker: { color: '#cae598' },
                        name: "N log n",
                        visible: showComplexities
                    },
                    {
                        x: fittedData?.xRange,
                        y: fittedData?.nSquared,
                        xaxis: 'x2',
                        yaxis: 'y2',
                        type: 'scatter',
                        mode: 'lines',
                        marker: { color: '#e59898' },
                        name: "N^2",
                        visible: showComplexities
                    }
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
                        },
                        xaxis2: {
                            // range: [1, fittedData?.linear[fittedData?.linear.length - 1]],
                            gridcolor: '#263238',
                            overlaying: 'x',
                            tickfont: {
                                color: '#263238',
                            }
                        },
                        yaxis2: {
                            // range: [1, fittedData?.linear[(fittedData?.linear.length/4) ** 2]],
                            gridcolor: '#263238',
                            overlaying: 'y',
                            tickfont: {
                                color: '#263238',
                            }
                        }
                    }
                }
            />
        </div>
    );
};

export default Figure;