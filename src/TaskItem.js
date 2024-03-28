

export default function TaskItem(props){

    return (
        <li key={props.task.id}>
            <span>{props.task.id}</span>
            <span>{props.task.description}</span>
            <input  type="checkbox"
                    checked={props.task.done === true}
                    onChange={(e) => props.checkTask(props.task.id)}
                    value={props.task.description === true}
            />
            <button onClick={()=> { 
                    props.setTaskBeingEdited(props.task.id); 
                    props.setModifiedTaskName(props.task.description)
            }}> Edit </button>
            <button onClick={()=> props.deleteTask(props.task.id)}
            > Delete </button>
        </li>
    )
}
