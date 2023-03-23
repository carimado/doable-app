import { Checkbox } from "@mui/material";
import { useState } from "react";

export default function TaskList({ setTask, tasks }) {
    const [isChecked, setIsChecked] = useState();

    const handleDeleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTask(newTasks);
    };



    return (
        <div>
            {tasks.map((task, index) => (
                <div key={index}>
                    <Checkbox
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    {isChecked ? <strike>{task}</strike> : <span>{task}</span>}
                    <button onClick={() => handleDeleteTask(index)}>Delete</button>
                </div>
            )).reverse()}
        </div>
    )
}