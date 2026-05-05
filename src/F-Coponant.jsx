import './App.css'
import React, { useState } from 'react'

function F_Coponant() {
    const [dark, setDark] = useState(false);
    function hundleToggole() {
        setDark(prev => !prev);
    };

    const [items, setItems] = useState([
        /*   {
              txt: "hello",
              id: 1,
              complited: false
          },
          {
              txt: "welcome",
              id: 2,
              complited: true
          },
          {
              txt: "hello",
              id: 3,
              complited: false
          }, */
    ]);
    const [input, setInput] = useState('');


    function addItem() {
        if (input.trim() === "") return;
        const newItem = {
            txt: input,
            id: Date.now(),
            complited: false
        };
        setItems(prev => [...prev, newItem]);
        setInput("");
    };
    function removeItem(id) {
        setItems(items.filter((item) => item.id !== id));
    };





    const conStyle = {
        backgroundColor: dark ? "black" : "#fff",
        color: dark ? "#ffff" : "#242424",
        /*  width: "350px",
         margin: "3rem auto",
         padding: "1.25rem",
         borderRadius: ".5rem" */
    };
    const inputGroup = {
        //boxShadow: dark ? " 0 1px 2px rgba(211, 207, 207, 0.87)" : "rgba(0,0,0,0.1)",
        borderBottom: dark ? "1px solid white" : "none"
    };


    return (
        <>
            <div style={conStyle} className='cont'>
                <div className="input-grup">
                    <h2>my To do App</h2>
                    <input type="text"
                        placeholder='enter task'
                        value={input}
                        onChange={(e) => setInput(e.target.value)} />
                    <button onClick={addItem} title='add task' className='btn'>add item</button>
                </div>


                <ul className='lists'>
                    {items.map((item) => <li key={item.id} style={inputGroup}><small>{item.txt}</small>
                        <button onClick={() => removeItem(item.id)} title='do you want to remove this task'>delete</button>

                    </li>)}
                </ul>
                <p style={{ textAlign: "center", marginTop: "2rem" }}>{items.length < 1 ? "No tasks yet" : "task " + items.length}</p>

                <button onClick={hundleToggole} style={{ border: "none", cursor: "pointer" }}
                    title={dark ? "switch to light" : "switch to dark"}>{dark ? "⚪" : "⚫"}</button>

            </div>

        </>
    );


}

export default F_Coponant