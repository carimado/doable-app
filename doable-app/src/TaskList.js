import { Checkbox } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";

import { useEffect, useState } from "react";

import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

const style = {
    li: `flex justify-between items-center p-2 my-2 bg-slate-200 rounded-md`,
    liChecked: `flex justify-between items-center p-2 my-2 bg-slate-200 rounded-md line-through`,
}

export default function TaskList({ setTask, tasks }) {
    const [isChecked, setIsChecked] = useState();

    useEffect(() => {
        const q = query(collection(db, "tasks"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const tasks = [];
            querySnapshot.forEach((doc) => {

                tasks.push(doc.data().task);
            });
            setTask(tasks);
        }
        )
        return unsubscribe;
    }, []);

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