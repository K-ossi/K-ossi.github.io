import React, { useContext } from 'react';
import plPng from '../assets/plus.png';
import GlobalContext from '../context/GlobalContext';

export default function CreateEventButton() {
 
    const {setShowEventModal} = useContext(GlobalContext)
    return (
        <button 
        onClick={() => setShowEventModal(true)}
         className=" mt-5 bg-white border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
            <img src={plPng} alt="plus" className="w-6 h-6"/>
            <span className="pl-3 pr-7"> Додати подію  </span>
        </button>
    )
}
