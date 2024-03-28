

export default function AddTaskForm(props)
{
    return (
        <>
            <h2>Create new Task</h2>
            <div>
                <label>Task Description: </label>
                <input  type="text" 
                        name="newTaskName"
                        value={props.newTask}
                        onChange={(event)=> props.setTaskName(event.target.value)}
                />
            </div>
            <button onClick={props.addTask}>Add Task</button>
        </>
    )
}