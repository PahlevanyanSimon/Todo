

function TodoFooter({todos, onClearCompleted}) {

    const completedSize = todos.filter((todo) => todo.isCompleted === true).length

    return (
        <div>
            <span>{completedSize}/{todos.length}</span>
            <button onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoFooter
