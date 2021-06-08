import './Controls.css';
import Button from '../Button/Button';

const Controls = ({onCodeSubmit}: {onCodeSubmit: () => void}) => {

    return (
        <div className="controls-container">
            <Button title="Execute" onClick={onCodeSubmit} />
        </div>
    );
};

export default Controls;