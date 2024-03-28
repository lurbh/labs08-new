

export default function EditTask(props)
{

    return (
        <li key={props.task.id}>
            <span> {props.task.id} </span>
            <input  type="text"
                    name={props.modifiedTaskName}
                    placeholder="Enter new description to update"
                    value={props.modifiedTaskName}
                    onChange={(event)=> props.setModifiedTaskName(event.target.value)}
            />
            <button onClick={()=>{props.updateTask(props.task.id); props.setTaskBeingEdited(0); props.setModifiedTaskName("")}}> Confirm </button>
        </li>
    )
}