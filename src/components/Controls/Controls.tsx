import './Controls.css';
import Button from '../Button/Button';

const Controls = ({onCodeSubmit, onFitComplexities}: {
    onCodeSubmit: () => void
    onFitComplexities: () => void
}) => {

    return (
        <div className="controls-container">
            <Button title="Execute" onClick={onCodeSubmit} />
            <Button title="Fit complexities" onClick={onFitComplexities} />
        </div>
    );
};

export default Controls;