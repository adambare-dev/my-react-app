//import './todoApp.css'
import "./myTodo.css"
import { useState } from "react";
function Task_tracker() {
    //=== Componant Logic ===
    const [tasks, setTasks] = useState([]);
    const [myInput, setInput] = useState('');

    //Addding Task function
    function addTask() {
        if (myInput.trim() === "") {
            return;
        } else {
            const newTask = {
                txt: myInput,
                id: Date.now(),
                complited: false
            };
            setTasks(prev => ([...prev, newTask]));
            // setTasks([...tasks, newTask]);
            setInput('');
        };
    };

    //delte task function

    function delteTask(id) {
        setTasks(tasks.filter((task) => {
            return task.id !== id;
        }));
    };

    //toggle task
    /*  function toogleTask(id) {
         setTasks(tasks.map((task) => {
             if (task.id === id)
                 return { ...task, complited: !task.complited };
             task;
         }));
     }; */
    function toogleTask(id) {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, complited: !task.complited };
            }
            return task; // ✅ this was missing
        }));
    }
    // === Componant UI === 
    return (
        <div className="toDoContainer">
            <h2>task tracker app</h2>

            <div className="inputs">
                <input type="text"
                    value={myInput}
                    placeholder="enter task..."
                    onChange={(e) => setInput(e.target.value)} />
                <button onClick={addTask}>Add task</button>
            </div>

            <ul>
                {tasks.map((task) => {
                    return <li key={task.id} className={task.complited ? "done" : ""}>
                        <input type="checkbox" onClick={() => toogleTask(task.id)}
                            title={task.complited ? "undo" : "mark as read"} />
                        <span>{task.txt}</span>
                        <small onClick={() => delteTask(task.id)} title="do you want to remove this task" className="deltebtn">&times;</small>

                    </li>
                })}
            </ul>
            <p>task number: {tasks.length}</p>

        </div>
    );

};

export default Task_tracker;


