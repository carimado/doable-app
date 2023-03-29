import React from "react";

import { FaRegTrashAlt } from "react-icons/fa";

const style = {

}

export default function Task({ task }) {

    return (
    <li className={style.li}>
        <div className={style.task}>
            <input type="checkbox" className={style.checkbox} />
            <p className={style.taskName}>{task.text}</p>
            <button className={style.deleteButton}><FaRegTrashAlt /></button>
        </div>
    </li>
    )
}