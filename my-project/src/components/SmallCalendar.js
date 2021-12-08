import React, { useState, useEffect, useContext } from 'react';
import dayjs from 'dayjs';
import Chevron from 'react-chevron';
import {getMonth} from '../util';
import GlobalContext from '../context/GlobalContext';


export default function SmallCalendar() {

    const [currentMonthInx, setCurrentMonthInx] = useState(
        dayjs().month()
    );
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    useEffect(()=>{
        setCurrentMonth(getMonth(currentMonthInx));
    },[currentMonthInx]);

    const {monthIndex, 
        setSmallCalendarMonth,
        setDaySelected,
        daySelected
    } = useContext(GlobalContext)
    
    useEffect(() => {
       setCurrentMonthInx(monthIndex);
    }, [monthIndex]);

    function handlePrevMonth(){
        setCurrentMonthInx(currentMonthInx- 1);
    }
    function handleNextMonth(){
        setCurrentMonthInx(currentMonthInx + 1);
    }
    function getDayClass(day){
        const format = "DD-MM-YY"
        const nowDay = dayjs().format(format);
        const currDay = day.format(format);
        const slcDay = daySelected && daySelected.format(format);
        if(nowDay === currDay){
            return "bg-purple-500 rounded-full text-white";
        }else if(currDay === slcDay){
            return "bg-purple-100 rounded-full text-purple-600 font-bold";
        }else{
            return "";
        }
    }

    return (
        <div className = "mt-10">
            <header className="flex justify-between">
                <p className="text-gray-500 font-bold">
                    {dayjs(new Date(dayjs().year(),currentMonthInx)).format("MMMM YYYY")}
                </p>
               <div>
               <button onClick = {handlePrevMonth}>
                    <span className = "cursor-pointer text-gray-600 mx-2">
                    <Chevron direction={'left'}/>
                    </span>
                </button>
                <button onClick = {handleNextMonth}>
                    <span className = " cursor-pointer text-gray-600 mx-2">
                    <Chevron direction={'right'}/>
                    </span>
                </button>
               </div>
            </header>
            <div className = " bg-white border border  rounded grid grid-cols-7 grid-rows-6">
                {currentMonth[0].map((day,i)=>(
                    <span key={i} className="  border rounded bg-purple-300  text-sm py-1 text-center">
                        {day.format("dd").charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row,i)=>(
                    <React.Fragment key={i}>
                        {row.map((day,idx)=>(
                            <button key={idx} 
                            onClick={()=>{
                                setSmallCalendarMonth(currentMonthInx);
                                setDaySelected(day);
                            }}
                            className={`  py-1 w-full ${getDayClass(day)}`}>
                                <span className="text-sm">
                                    {day.format("D")}
                                </span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}
