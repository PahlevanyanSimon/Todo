import './App.css';
import {useState} from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFooter from "./TodoFooter";

function App() {
    const [todos, setTodos] = useState([
        {
            id: Date.now(),
            text: "Learn JS",
            isCompleted: false,
            editable: false
        },

        {
            id: Date.now() + 1,
            text: "Learn CSS",
            isCompleted: false,
            editable: false
        },

        {
            id:  Date.now() + 2,
            text: "Learn React",
            isCompleted: false,
            editable: false
        }
    ])



  return (
    <div className="App">
        <TodoForm onAdd={(text) => {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    text: text,
                    isCompleted: false,
                    editable: false
                }
            ])
        }}/>
      <TodoList
          todos = {todos}
          onDelete={(todo) => {
            setTodos((todos.filter((t) => t.id !== todo.id)))
          }}
          onEdit={(todo, value) => {
              const finded = todos.find((t) => t.id === todo.id)
              finded.text = value
              setTodos([...todos])
          }}
          onChange={(newTodo) => {
             setTodos( todos.map((todo) => {
                  if(todo.id === newTodo.id) {
                      return newTodo;
                  }
                  return todo;
              }))

          }}
      />
        <TodoFooter todos={todos} onClearCompleted={() => {
           setTodos( todos.filter((todo) => !todo.isCompleted))
        }} />
    </div>
  );
}

export default App;
