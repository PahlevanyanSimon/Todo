import TodoItem from "./TodoItem";


function TodoList({todos, onChange, onEdit, onDelete}) {
    return (
        <div>
            { todos.map((todo) => {
                return (
                  <TodoItem
                      key ={todo.id}
                      todo={ todo}
                      onChange={onChange}
                      onEdit={onEdit}
                      onDelete={onDelete}
                  />
                )
            })}
    </div>
    )
}

export default TodoList;
