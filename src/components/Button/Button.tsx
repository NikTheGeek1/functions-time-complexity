import './Button.css';

const Button = ({title, onClick}: {title: string, onClick: () => void}) => {

    return (
        <button className="btn submit-code-btn" onClick={onClick}>{title}</button>
    );
};

export default Button;