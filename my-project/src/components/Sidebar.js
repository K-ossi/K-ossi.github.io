import React, { useState }  from 'react';
import CreateEventButton from './CreateEventButton';
import SmallCalendar from './SmallCalendar';
import Labels from './Labels';
import Form from './Form';


export default function Sidebar() {

    const [show,setShow] = useState(false);

    return (
        
        <aside className="bg-gray-100 rounded border border-purple-300 p-5 w-64">

        <button
        onClick={()=>setShow(!show)}
        className=" bg-white border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl "> 
        <span class="material-icons-outlined">
           checklist
        </span>
        <span className="pl-3 pr-7">To Do List</span>
         </button> 

             {show? < Form/> : null}
            <CreateEventButton/>
            <SmallCalendar/>
            <Labels/>
        </aside>
    )
}
