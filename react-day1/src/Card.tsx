import Greeting from './Greeting';
import Attribution from './Attribution';
import './Card.css';
import {useState} from "react";



export default function Card(){
    const [count, setCount] = useState(0);
    // let [count, setCount] = useState(10);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

    // //Every second it incremented our count
    // setTimeout(() => {
    //     setCount(count + 1);
    //     // console.log(count);
    // }, 1000); //, 1000) execute every second

    // const evenOrOdd = count % 2 === 0 ? 'Even' : 'Odd';
    
    return( 
    <div className= 'Card'>
        <Greeting></Greeting>
        <Attribution></Attribution>
        <p>Count: {count}</p>
        {/* {count % 2 === 0 && <p>Even</p>} */}
        {/* {count % 2 !== 0 && <p>Odd</p>} */}
        {/* {count % 2 === 0 && <p>Wow Even!</p>} */}
        {count % 2 === 0 ? <p>Even</p> : <p>Odd</p>}
    <button onClick = {increaseCount}>Increase Count</button>
    <button onClick = {decreaseCount}>Decrease Count</button>

    </div>
    );
}


