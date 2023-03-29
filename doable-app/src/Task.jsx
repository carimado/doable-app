import React from "react";

import { FaRegTrashAlt } from "react-icons/fa";

const style = {
    li: `flex justify-between items-center p-2 my-2 bg-slate-200 rounded-md`,
    liChecked: `flex justify-between items-center p-2 my-2 bg-slate-200 rounded-md line-through`,
    task: `flex justify-between items-center`,
    
}

export default function Task({ task }) {

    return (
    <li className={task.completed ? style.liChecked : style.li}>
        <div className={style.task}>
            <input type="checkbox" className={style.checkbox} checked={task.completed ? 'checked' : ''} />
            <p className={task.completed ? style.textComplete : style.text}>{task.text}</p>
            <button className={style.deleteButton}><FaRegTrashAlt /></button>
        </div>
    </li>
    )
}