

import React, {useState} from "react"

const ToDoForm = (props) => {

    const [todo, setTodo] = useState()

    const handleChanges = (e) => {
        setTodo(e.target.value)
    }

    return (
        <div>
            
                <input 
                    type="text"
                    name="todo"
                    value={todo}
                    onChange={handleChanges}
                />
                <button onClick={() => {
                    props.dispatch({type: "ADD_TODO", payload:todo})
                    setTodo("")
                }}>+</button>
            
            <button onClick={()=> props.dispatch({type: "CLEARED"})}>Clear Completed</button>
        </div>
    )
}

export default ToDoForm;