import React, {useState, useEffect} from 'react'

const ActivitiesNames = ({day, getActivityNames, date }) => {
    const [dayActivities, setDayActivities] = useState([])
    console.log(day)
    
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    const d = new Date(date)
    const dayOfWeek = weekday[d.getDay()]

        useEffect(() => {
            fetch(`http://localhost:9292/days/${day.id}`)
            .then(response => response.json())
            .then(data => {setDayActivities(data.activities)})
        }, [getActivityNames])
        
            function renderActivities(){
                
                if(dayActivities.length > 0){
                    return (
                        dayActivities.map(activity => {
                            return(
                            <h4 className="summaryActivityName">{activity.name}</h4>
                            )})
                    )
                }else {
                    return( <div>No Activities</div>)
                }
            }
        
    return (

        <>
            <h5 className='activitySummaryDate'>{`${dayOfWeek} ${day.date.split('T')[0].split('-')[1]}-${day.date.split('T')[0].split('-')[2]}`}</h5>
                {renderActivities()}
        </>
    )
}

export default ActivitiesNames
