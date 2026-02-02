import React,{useState} from "react";

function TaskTracker(){
    const [task, setTask] = useState<string>("");
    const [taskList, setTaskList] = useState<string[]>([]);

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if(task.trim() === "") return;
        setTaskList([...taskList,task]);
        setTask("");
    }

    const handleDelete = (index : Number) => {
        setTaskList(taskList.filter((_,i) => i !== index));
    }

    return <>
         <div
         style={{
            height:"90%",
            width:"90%",
            border:"5px solid green",
            borderRadius:"10px",
            display:"flex",
            flexDirection:"column"
         }}>
            <h1 style={{
                textAlign:"center",
                textDecoration:"underline"

            }}>Daily Task Tracker</h1>
            <form onSubmit={handleSubmit}>
                <label
                style={{
                    margin:"10px"
                }}>Add Task:</label>
                <input 
                style={{
                    textAlign:"center",
                    margin:"10px"
                }}
                type="text" 
                placeholder="Enter your task here"
                value={task}
                onChange={(e) => setTask(e.target.value)}></input>
                <button
                style={{
                    margin:"10px"
                }}
                type="submit"
                >Submit</button>
            </form>
            <div>
                <ul
                style={{
                    listStyle:"none"
                }}>
                    {taskList.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button
                            style={{
                                margin:"10px"
                            }}
                            onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
         </div>
    </>
}

export default TaskTracker;
