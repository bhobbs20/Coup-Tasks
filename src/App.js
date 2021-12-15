import React, {useState, useRef } from 'react';
import './App.css';
import { MdDeleteForever, MdFactCheck } from 'react-icons/md';

function App() {
    const [todoList, setTodoList] = useState([]);
    const [currentTask, setCurrentTask] = useState("")

    const inputTask = useRef(null)

    const addTask = () => {
        setTodoList([...todoList, {task: currentTask, completed: false}])
        inputTask.current.value = "";
        setCurrentTask("")
    }

    const deleteTask = (taskToDelete) => {
        setTodoList(
            todoList.filter((task) => {
                return task.task !== taskToDelete;
            })
        );
    };

    const completeTask = (taskToComplete) => {
        setTodoList(todoList.map((task) => {
            return task.task === taskToComplete
                ? {task: taskToComplete, completed: true}
                : {task: task.task, completed: !!task.completed };
            })
        );
    };

    return (
        <div className="container-fluid mx-auto ">
            <h1 className="text-3xl font-bold text-center text-blue-800 mt-10 mb-4">
                Create a Coup Task
            </h1>

            <div className="container mx-auto flex justify-center mb-10">
                <div className=" max-w-lg shadow-md flex flex-col px-10 py-10">
                    <input
                        ref={inputTask}
                        type="text"
                        className="rounded text-blue-800"
                        placeholder="Task..."
                        onKeyDown={(event) => {if (event.keyCode === 13) {addTask()}}}
                        onChange={(event) => {setCurrentTask(event.target.value);
                        }}
                    />
                    <button
                        onClick={addTask}
                        className="mt-4 px-2 py-2 bg-blue-800 hover:bg-blue-600 text-white rounded shadow-md">
                        Add Task
                    </button>
                </div>



            </div>
            <hr className="text-blue-800"/><h1 className="text-3xl font-bold text-center text-blue-800 mt-10 mb-2">
            My Coup Tasks
        </h1>
            <div className="container mx-auto flex justify-center ">

                <div className=" max-w-lg flex flex-col px-10 py-10  ">
                    <ul className="place-items-center">
                        {todoList.map((val, key) => {
                            return (
                                <div id="task">
                                    <li key={key} className="bg-blue-800 text-white px-16 py-4 rounded shadow-md my-4 justify-items-center ">{val.task} <span> <button onClick={() => deleteTask(val.task)}><MdDeleteForever /></button></span> <span><button onClick={() => completeTask(val.task)}><MdFactCheck /></button></span></li>
                                    {val.completed ? (
                                        <p className="text-green-300">Task completed</p>
                                    ) : (
                                        <p className="text-red-300">Task Incomplete</p>
                                    )}
                                </div>
                            )
                        })}

                    </ul>
                </div>
            </div>


        </div>
    );
}

export default App;
