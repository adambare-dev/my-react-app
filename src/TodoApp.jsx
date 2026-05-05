//import './todoApp.css'
import "./myTodo.css"
import { useState } from "react";
function TodoApp() {
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
                id: new Date().getSeconds(),
                complited: false
            };
            setTasks([...tasks, newTask]);
            setInput('');
        }
    };

    //delte task function

    function delteTask(id) {
        setTasks(tasks.filter((task) => {
            return task.id !== id;
        }));
    };

    //toggle task
    function toogleTask(id) {
        setTasks(tasks.map((task) => {
            if (task.id === id)
                return { ...task, complited: !task.complited };
            task;
        }))
    };
    // === Componant UI === 
    return (
        <div className="toDoContainer">
            <h1>hell react</h1>

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
                        <input type="checkbox" onClick={() => toogleTask(task.id)} />
                        <span>{task.txt}</span>
                        <button onClick={() => delteTask(task.id)} title="do you want to remove this task">❌</button>
                    </li>
                })}
            </ul>
            <p>task number: {tasks.length}</p>

        </div>
    );

};

export default TodoApp


