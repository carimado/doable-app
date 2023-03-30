import React from "react";

import { FaRegTrashAlt } from "react-icons/fa";

const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liChecked: `flex justify-between p-4 my-2 bg-slate-200 capitalize`,
    checkbox: `cursor-pointer`,
    task: `flex`,
    text: `ml-2 text-slate-900`,
    textChecked: `ml-2 text-slate-900 line-through`,
    deleteButton: `cursor-pointer flex items-center`,

}

export default function Task({ task, toggleChecked }) {

    return (
    <li className={task.completed ? style.liChecked : style.li}>
        <div className={style.task}>
            <input onChange={() => toggleChecked(task)} type="checkbox" className={style.checkbox} checked={task.completed ? 'checked' : ''} />
            <p onClick={() => toggleChecked(task)} className={task.completed ? style.textChecked : style.text}>{task.text}</p>
        </div>
        <button className={style.deleteButton}><FaRegTrashAlt /></button>
    </li>
    )
}