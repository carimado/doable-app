export default function TaskList({ setTask, tasks }) {

    const handleDeleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTask(newTasks);
    };

    return (
        <div>
            {tasks.map((task, index) => (
                <div key={index}>
                    <span>{task}</span>
                    <button onClick={() => handleDeleteTask(index)}>Delete</button>    
                </div>
            ))}
        </div>
    )
}