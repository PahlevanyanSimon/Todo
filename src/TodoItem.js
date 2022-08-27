import {useState} from "react";


function TodoItem({todo, onChange, onEdit, onDelete, }) {
     const [edit, setEdit] = useState(todo.editable)
    return (
        <div className="Item">
            <label>
                <input type="checkbox" checked={todo.isCompleted} onChange={(e) =>{
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}/>

                { !edit ?  <div> {todo.text} </div> : <input value={todo.text} onChange={(e) =>
                  onEdit(todo,e.target.value)
                }/> }

                <button onClick={( element) => {
                    setEdit(!edit)
                }}>Edit</button>
                <button onClick={() => {
                    onDelete(todo);
                }}>X</button>
            </label>
        </div>
    )
}

export default TodoItem;
