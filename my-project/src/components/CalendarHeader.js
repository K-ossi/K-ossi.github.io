import React, { useContext } from 'react';
import Chevron from 'react-chevron';
import calPng from './../assets/cal.png';
import GlobalContext from '../context/GlobalContext';
import dayjs from 'dayjs';


export default function CalendarHeader() {

    const {monthIndex, setMonthIndex} = useContext(GlobalContext);
    function handlePrevMonth(){
        setMonthIndex(monthIndex - 1);
    }
    function handleNextMonth(){
        setMonthIndex(monthIndex + 1);
    }
    function handleReset(){
        setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random(): dayjs().month());
    }


    return (
        <header className="px-4 py-2 flex items-center bg-purple-100">
            <img src={calPng} alt="cal" className ="mr-2 w-12 h-12" />
            <h1 className = "mr-10 text-xl text-gray-500 font-bold"> Planner </h1>
            <button onClick = {handleReset} className="bg-white border border-purple-400 rounded py-2 px-4 mr-5 bg-white"> Today</button>
            <button onClick = {handlePrevMonth}>
                <span className="material-icon-outlined cursor-pointer text-gray-700 mx-3 ">
                <Chevron direction={'left'}/>
                </span>
            </button>
            <button onClick = {handleNextMonth}>
                <span className="material-icon-outlined cursor-pointer text-gray-700 mx-3">
                <Chevron direction={'right'}/>
                </span>
            </button>
            <h2 className = "ml-4 text-xl text-gray-500 ">
                {dayjs (new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
            </h2>
        </header>
    )
}
