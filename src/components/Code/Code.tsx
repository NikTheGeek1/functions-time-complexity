import './Code.css';
import { Controlled as CodeMirror } from 'react-codemirror2';
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/mode/javascript/javascript.js');



const Code = ({value, onChange}:{value: string, onChange: (value: string) => void}) => {
    return (
        <div className="code-container">
            <CodeMirror
            className="code-mirror"
                value={value}
                options={{
                    mode: 'javascript',
                    theme: 'material',
                    lineNumbers: true
                }}
                onBeforeChange={(editor, data, v) => {
                    onChange(v);
                }}
            />
        </div>
    );
};

export default Code;