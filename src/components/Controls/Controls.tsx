import './Controls.css';

const Controls = ({onCodeSubmit}: {onCodeSubmit: () => void}) => {

    return (
        <div className="controls-container">
            <button className="btn submit-code-btn" onClick={onCodeSubmit}>Submit</button>
        </div>
    );
};

export default Controls;