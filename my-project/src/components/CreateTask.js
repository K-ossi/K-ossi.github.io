import React from 'react';

export default function CreateTask() {
    return (
        <button
        className=" bg-white border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl "> 
        <span class="material-icons-outlined">
           checklist
        </span>
        <span className="pl-3 pr-7">To Do List</span>
         </button>
    )
}
