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
        
        try {
            const argumentLength = getLengthOfArgument(tsSourceFile);
            oldTimes.push(argumentLength);
            setFunctionTimes(oldTimes);
        } catch (error) {
            console.log(error);
        }
        try {
            const time = measureTime(codeSnippet);
            oldInputLengths.push(time);
            setInputLengths(oldInputLengths);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="main-container-container">
            <Code value={codeSnippet} onChange={setCodeSnippet} />
            <Controls onCodeSubmit={codeSubmitHandler} />
            <Figure data={{times: functionTimes, inputLengths}}/>
        </div>
    );
};

export default MainContainer;