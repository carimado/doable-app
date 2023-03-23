import './App.css';
import InputBox from './InputBox';
import TaskList from './TaskList';
import { useState } from 'react';

function App() {
  const [tasks, setTask] = useState([]);

  const handleAddTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  return (
    <div className="App">
      <InputBox onTaskAdd={handleAddTask}/>
      <TaskList tasks={tasks} setTask={setTask} />
    </div>
  );
}

export default App;
