import { Checkbox } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";

import { useState } from "react";

const style = {
    li: `flex justify-between items-center p-2 my-2 bg-slate-200 rounded-md`,
    liChecked: `flex justify-between items-center p-2 my-2 bg-slate-200 rounded-md line-through`,
}

export default function TaskList({ setTask, tasks }) {
    const [isChecked, setIsChecked] = useState();

    const handleDeleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTask(newTasks);
    };

    return (
        <div className={style.taskContainer}>
            {tasks.map((task, index) => (
                <li className={style.li} key={index}>
                    <Checkbox
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    {isChecked ? <strike>{task}</strike> : <span>{task}</span>}
                    <button onClick={() => handleDeleteTask(index)}>{<FaRegTrashAlt />}</button>
                </li>
            )).reverse()}
        </div>
    )
}