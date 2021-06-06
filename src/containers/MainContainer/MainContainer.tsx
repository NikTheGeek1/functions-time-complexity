import { useState } from 'react';
import Code from '../../components/Code/Code';
import Controls from '../../components/Controls/Controls';
import Figure from '../../components/Figure/Figure';
import './MainContainer.css';
import ts from "typescript";
import getLengthOfArgument from '../../utils/get-length-of-argument';
import measureTime from '../../utils/measure-time';

const MainContainer = () => {
    const [codeSnippet, setCodeSnippet] = useState<string>('');
    const [inputLengths, setInputLengths] = useState<number[]>([]);
    const [functionTimes, setFunctionTimes] = useState<number[]>([]);

    const codeSubmitHandler = (): void => {
        const tsSourceFile = ts.createSourceFile(
            __filename,
            codeSnippet,
            ts.ScriptTarget.Latest
        );
        
        const oldTimes = [...functionTimes];
        const oldInputLengths = [...inputLengths];

        oldTimes.push(getLengthOfArgument(tsSourceFile));
        setFunctionTimes(oldTimes);

        oldInputLengths.push(measureTime(codeSnippet));
        setInputLengths(oldInputLengths);
        console.log(oldInputLengths, 'MainContainer.tsx', 'line: ', '30');
        console.log(oldTimes, 'MainContainer.tsx', 'line: ', '31');
    };

    return (
        <div className="main-container-container">
            <Code value={codeSnippet} onChange={setCodeSnippet} />
            <Controls onCodeSubmit={codeSubmitHandler} />
            <Figure />
        </div>
    );
};

export default MainContainer;