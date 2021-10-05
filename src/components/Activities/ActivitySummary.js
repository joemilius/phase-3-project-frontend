import React from 'react'
import ActivitiesNames from './ActivitiesNames'
import { FaBookOpen } from "react-icons/fa"


function ActivitySummary({ days, isListShowing, getActivityNames, dayActivities, setDayActivities}) {

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

     console.log(days) 

    return (
        <ul>   
            <h1>Activities Summary</h1>
            {days.map(day => {
                return (
                    <>
                    <ActivitiesNames 
                        day={day}
                        date={day.date} 
                        getActivityNames={getActivityNames} 
                        isListShowing={isListShowing} 
                        dayActivities={dayActivities} 
                        setDayActivities={setDayActivities}
                    />
                    </>
                )
            })}
        </ul>
    )
}

export default ActivitySummary
