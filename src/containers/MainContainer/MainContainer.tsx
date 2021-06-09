import { useState } from 'react';
import Code from '../../components/Code/Code';
import Controls from '../../components/Controls/Controls';
import Figure from '../../components/Figure/Figure';
import './MainContainer.css';
import ts, { SourceFile } from "typescript";
import getLengthOfArgument from '../../utils/get-length-of-argument';
import measureTime from '../../utils/measure-time';
import Button from '../../components/Button/Button';
import initialFunctionString from '../../constants/initial-function';
import FullScreenModal from '../../components/FullScreenModal/FullScreenModal';
import fitComplexities, { FittedDataType } from '../../utils/fit-complexities';

const MainContainer = () => {
    const [codeSnippet, setCodeSnippet] = useState<string>(initialFunctionString);
    const [showFittedComplexities, setShowFittedComplexities] = useState<boolean>(false);
    const [fittedData, setFittedData] = useState<FittedDataType>();
    const [inputLengths, setInputLengths] = useState<number[]>([]);
    const [functionTimes, setFunctionTimes] = useState<number[]>([]);
    const [tsSourceFile, setTsSourceFile] = useState<SourceFile>(ts.createSourceFile(
        __filename,
        initialFunctionString,
        ts.ScriptTarget.Latest
    ));
    const [showShouldRedrawModal, setShowShouldRedrawModal] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<undefined | string>();

    const toggleFittedComplexities = () => {
        if (!showFittedComplexities) {
            const fittedDataObj = fitComplexities(inputLengths, functionTimes);
            setFittedData(fittedDataObj);
        }
        setShowFittedComplexities(oldState => !oldState);
    };

    const drawPlot = (redraw: boolean, tsSourceFileArg?: SourceFile) => {
        const oldTimes = redraw ? [] : [...functionTimes];
        const oldInputLengths = redraw ? [] : [...inputLengths];

        try {
            const argumentLength = getLengthOfArgument(tsSourceFileArg || tsSourceFile);
            oldInputLengths.push(argumentLength);
            setInputLengths(oldInputLengths);
        } catch (error) {
            setErrorMessage(error.message);
            console.log(error);
        }
        try {
            const time = measureTime(codeSnippet);
            oldTimes.push(time);
            setFunctionTimes(oldTimes);
        } catch (error) {
            setErrorMessage(error.message);
            console.log(error);
        }
    };

    const redrawModalAnswer = (answer: boolean) => {
        drawPlot(answer);
        setShowFittedComplexities(false);
        setShowShouldRedrawModal(false);
    };

    const codeSubmitHandler = (): void => {
        const tsSF = ts.createSourceFile(
            __filename,
            codeSnippet,
            ts.ScriptTarget.Latest
        );

        if (tsSF.statements[0] &&
            tsSourceFile.statements[0] &&
            tsSF.statements[0].end !== tsSourceFile.statements[0].end
        ) {
            setShowShouldRedrawModal(true);
        } else {
            drawPlot(false, tsSF);
        }
        setTsSourceFile(tsSF);
    };

    return (
        <div className="main-container-container">
            {showShouldRedrawModal &&
                <FullScreenModal>
                    <div className="modal-centered-container">
                        <p className="redraw-message">I noticed a change in the code. <br />Should I re-draw the figure?</p>
                        <Button title="No" onClick={() => redrawModalAnswer(false)} />
                        <Button title="Yes" onClick={() => redrawModalAnswer(true)} />
                    </div>
                </FullScreenModal>
            }
            {errorMessage &&
                <FullScreenModal>
                    <div className="modal-centered-container">
                        <p className="something-is-wrong-msg">Something is wrong!<br />
                        This has to do either with: <p className="error-message">{errorMessage[0].toUpperCase() + errorMessage.slice(1)}</p>
                        or with the format of the function.<br />
                        Functions should have the following format:</p>
                        <div className="error-message-code-outer-container">
                            <Code value={initialFunctionString} />
                        </div>
                        <Button title="Got it!" onClick={() => setErrorMessage(undefined)} />
                    </div>
                </FullScreenModal>
            }

            <Code value={codeSnippet} onChange={setCodeSnippet} />
            <Controls onCodeSubmit={codeSubmitHandler} onFitComplexities={toggleFittedComplexities} />
            <Figure data={{ times: functionTimes, inputLengths }} fittedData={fittedData} showComplexities={showFittedComplexities}/>
        </div>
    );
};

export default MainContainer;