const measureTime = (codeSnippet: string): number => {
    const t1 = performance.now();
    eval(codeSnippet);
    const t2 = performance.now();
    return (t2 - t1) / 1000;
};

export default measureTime;
