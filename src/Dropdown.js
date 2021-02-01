import { useState } from 'react';
const Dropdown = () => {
    const [input, setInput] = useState("")
    return (
        <div className="container mt-2" >
            <input type="text" value={input} />&nbsp;
            <select onChange={(e) => {
                setInput(e.target.value)
            }}>
                <option value="hi">Hi</option>
                <option value="hello">Hello</option>
                <option value="hola">Hola</option>
            </select>
        </div>
    );
}

export default Dropdown;