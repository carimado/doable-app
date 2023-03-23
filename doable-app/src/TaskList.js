export default function TaskList({tasks}) {
    return (
        <div>
            {tasks.map((task, index) => (
                <div key={index}>{task}</div>
            ))}
        </div>
    )
}