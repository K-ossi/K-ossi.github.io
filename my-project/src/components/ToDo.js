import React from "react";

export default function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <div 
        key={todo.id} 
        className="mt-5 bg-gray-100 text-gray-600 font-bold  border p-2 rounded-full cursor-pointer flex justify-end ">
            <div 
                className={todo.complete }
                onClick={() => toggleTask(todo.id)}
                >
                {todo.task}
            </div>
            <span className=" material-icons-outlined " onClick={() => removeTask(todo.id)}>
            delete
            </span>
        </div>
    )
}

