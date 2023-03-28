import InputBox from './InputBox';
import TaskList from './TaskList';
import { useState } from 'react';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#56CCF2]`,
  container: `w-full max-w-[500px] m-auto bg-slate-100 rounded-lg p-4 shadow-xl`,
  header: `text-3xl font-bold text-slate-900 text-center p-2 text-gray-800`,

  count: `text-sm text-slate-900 text-center p-2 text-gray-800`,
};

function App() {
  const [tasks, setTask] = useState([]);
  console.log(tasks)

  const handleAddTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>

        <h1 className={style.header}>Doable App</h1>
        <InputBox onTaskAdd={handleAddTask}/>
        <TaskList tasks={tasks} setTask={setTask} />
        <p className={style.count}>You have 2 Tasks Left</p>
      </div>
    </div>

  )
  ;
}


export default App;
