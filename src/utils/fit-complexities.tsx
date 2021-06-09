export type FittedDataType = {
    xRange: number[];
    linear: number[];
    logN: number[];
    constant: number[];
    nLogN: number[];
    nSquared: number[];
};

const fitComplexities = (x: number[], y: number[]): FittedDataType => {
    //@ts-ignore: 
    const xRange = [...Array(x.length).keys()];
    const linear = [...xRange];
    const logN = xRange.map(num => Math.log(num));
    const constant = xRange.map(_ => 1);
    const nLogN = xRange.map(num => num * Math.log(num));
    const nSquared = xRange.map(num => num**2);
    return {xRange, linear, logN, constant, nLogN, nSquared};
};

export default fitComplexities;