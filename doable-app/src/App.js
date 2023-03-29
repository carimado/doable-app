// import InputBox from './InputBox';
// import TaskList from './TaskList';

import Task from './Task';

import { useState, useEffect } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";


const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#56CCF2]`,
  container: `w-full max-w-[500px] m-auto bg-slate-100 rounded-lg p-4 shadow-xl`,
  header: `text-3xl font-bold text-slate-900 text-center p-2 text-gray-800`,
  form: `flex flex-col items-center`,
  input: `w-full p-2 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-300`,
  button: `w-full p-2 mt-2 rounded-lg bg-slate-900 text-slate-100 font-bold`,
  count: `text-sm text-slate-900 text-center p-2 text-gray-800`,
};

function App() {
  const [tasks, setTask] = useState([]);

  // Create Todo

  // Read Todo
  useEffect(() => {
    const q = query(collection(db, "tasks"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let tasksArr = [];
      console.log(tasksArr.text)
      querySnapshot.forEach((doc) => {
        tasksArr.push({...doc.data(), id: doc.id });
      });
      setTask(tasksArr);
    }
    )
    return unsubscribe;
  }, []);
  // Update Todo
  // Delete Todo

  // const handleAddTask = (newTask) => {
  //   setTask([...tasks, newTask]);
  // };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.header}>Doable App</h1>
        <form className={style.form}>
          <input type="text" className={style.input} placeholder="Add a task" />
          <button type="submit" className={style.button}>Add</button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <Task key={index} task={task} />
          ))}
        </ul>
        <p className={style.count}>You have 2 Tasks Left</p>
      </div>
    </div>
  );
          }

{/* <InputBox onTaskAdd={handleAddTask}/>
<TaskList tasks={tasks} setTask={setTask} /> */}

export default App;
