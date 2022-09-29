import React, {useState} from 'react';
import logo from './logo.svg';
import './AdDesigner.css';


export function AdDesigner(){
    const [flavor, setFlavor] = useState<string>("Strawberry");

    return ( 
    <div className="AdDesigner">
        <h1>Ad Designer</h1>
        <div className="ad-container">
        <p>Vote for:</p>
        <p>{flavor}</p>
        </div>
        <div className='flavor-button'>
            <p>What to support</p>
            <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
            <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
            <button onClick={() => setFlavor("Starwberry")}>Strawberry</button>
        </div>
        <div>
            <p>Color Theme</p>
            <button>Light</button>
            <button>Dark</button>
        </div>
        <div>
            <p>Font Size</p>
            <button>Down</button>
            <button>Up</button>
        </div>
    </div>
    );
}

export default AdDesigner;
