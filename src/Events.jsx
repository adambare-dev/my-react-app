import './index.css'

import { useState } from "react";
function Ev() {
    const x = useState(20);
    // [20,f];
    console.log(x);
    const [v1, setv1] = x;
    console.log(v1);
    const [initialname, setName] = useState('guest');
    const [pick, setPick] = useState();
    function uppdateNmae(e) {
        setName(e.target.value);
    }
    function updateItems(e) {
        setPick(e.target.value);
    };
    const [count, setCount] = useState(0);

    function increaseBtn() {
        setCount((prev) => {
            return prev + 1;
        });
    };
    function decreaseBtn() {
        setCount((prev) => {
            return prev - 1;
        });
    };

    function resetBtn() {
        setCount(0)
       
    };
    return (
        <div className="midSect">
            <input type="text" placeholder="enter your name" onChange={uppdateNmae} />
            <p>Name:{initialname}</p>
            <select name="" id="" value={pick} onChange={updateItems}>
                <option value="">select item</option>
                <option value="Appla">Appla</option>
                <option value="banana">banana</option>
                <option value="Orange">Orange</option>
            </select>
            <p>{pick}</p>


            <button onClick={decreaseBtn}>decrese button</button>
            <button onClick={increaseBtn}>increse button</button>
            <button onClick={resetBtn}>reset button</button>
            <h2>{count}</h2>
        </div>

    );

}
export default Ev