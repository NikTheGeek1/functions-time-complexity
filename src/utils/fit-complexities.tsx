import { linearRegression, linearRegressionLine, BayesianClassifier } from 'simple-statistics'
export type FittedDataType = {
    xRange: number[];
    linear: number[];
    logN: number[];
    constant: number[];
    nLogN: number[];
    nSquared: number[];
};


const fitComplexities = (x: number[], y: number[]): FittedDataType => {
    const diffY = [];
    for (let i = 1; i < y.length; i++) {
        diffY.push(y[i] - y[i - 1]);
    }   
    const data = [];
    const bc = new BayesianClassifier();
    const linearData = [1,2,3,4,5,6,7,8,9];
    const quadraticData = linearData.map(i => i**2);
    bc.train({
        complexity: linearData
    }, 'linear');
    bc.train({
        complexity: quadraticData
    }, 'quadratic')
    debugger

    console.log(diffY, 'fit-complexities.tsx', 'line: ', '15');
    console.log(x, y, 'fit-complexities.tsx', 'line: ', '12');
    //@ts-ignore: 
    const xRange = [...Array(x.length).keys()];
    const linear = [...xRange];
    const logN = xRange.map(num => Math.log(num));
    const constant = xRange.map(_ => 1);
    const nLogN = xRange.map(num => num * Math.log(num));
    const nSquared = xRange.map(num => num ** 2);
    return { xRange, linear, logN, constant, nLogN, nSquared };
};

export default fitComplexities;