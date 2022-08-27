import {useState} from "react";


function TodoForm({onAdd}) {

  const [text, setText] = useState("")

  return (
      <form onSubmit={(e) => {
          e.preventDefault();
          setText("")
            onAdd(text)
      }}>
          <input type="text" value={text} onChange={(evt) => {
              setText(evt.target.value)
          }}/>
          <button>Add</button>
      </form>
  )


}

export default TodoForm;
