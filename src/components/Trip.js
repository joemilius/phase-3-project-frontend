import React, { useEffect } from 'react'
import DaysContainer from './Days/DaysContainer.js'
import { FaChevronDown,FaCalendar, FaList } from "react-icons/fa"
import { useState } from 'react'
import ActivitySummary from './Activities/ActivitySummary.js'

const Trip = ({ trip }) => {
    const [isHidden, setIsHidden] = useState(false)
    const [isListShowing, setIsListShowing] = useState(false)
    const [thisTrip, setThisTrip] = useState([])
    const [getActivityNames, setGetActivityNames] = useState(false)
    const [dayActivities, setDayActivities] = useState({})

    function daysOnTrip(){
        if(trip.start_date && trip.end_date){
            const start = trip.start_date.split('T')[0]
            const end = trip.end_date.split('T')[0]
            const startYear = (start.split('-')[0])
            const startMonth = (start.split('-')[1])
            const startDay = (start.split('-')[2])
            const endYear = (end.split('-')[0])
            const endMonth = (end.split('-')[1])
            const endDay = (end.split('-')[2])

            let newStartDate = new Date(`${startMonth}-${startDay}-${startYear}`)
            let newEndDate = new Date(`${endMonth}-${endDay}-${endYear}`)

            var Difference_In_Time = newEndDate.getTime() - newStartDate.getTime();
            var tripLength = Difference_In_Time / (1000 * 3600 * 24);
            return tripLength
        }
    }

    function tripLength(strDate, endDate){
        if(trip.start_date && trip.end_date){
            const start = strDate.split('T')[0]
            const end = endDate.split('T')[0]
            const startMonth = start.split('-')[1]
            const startDay = start.split('-')[2]
            const endMonth = end.split('-')[1]
            const endDay = end.split('-')[2]
            return `${startMonth}/${startDay} - ${endMonth}/${endDay}`
        }
    }


    function handleNotes(){
        setIsHidden(!isHidden)
    }

    function showList(){
        setIsListShowing(!isListShowing)
    }

    useEffect(() => {
       
            fetch(`http://localhost:9292/trips/${trip.id}`)
            .then(response => response.json())
            .then(data => {
                setThisTrip(...thisTrip, data)})
    
    }, [])

    console.log(thisTrip)

    return (
        <div>
        <div class='container-fluid'>
                <img className='coverImg' src='https://www.state.gov/wp-content/uploads/2020/11/shutterstock_186964970-scaled.jpg'></img>
                <div className='trip_container'>
                <h1 className='trip_location'>Trip to {trip.location}</h1>
                <h4 className='trip_dates'><FaCalendar className='tripCardCalendar'></FaCalendar>{tripLength(trip.start_date, trip.end_date)}</h4>
                <FaList className='listOption' onClick={showList}></FaList>
            </div>
        </div>
                <div className='insertSectionSpaceOrange'></div>
            {isListShowing ? (<div className='tripList'>
                        <div>
                            <ActivitySummary 
                                days = {thisTrip.days}
                                isListShowing={isListShowing}
                                getActivityNames={getActivityNames}
                                dayActivities={dayActivities} 
                                setDayActivities={setDayActivities}
                            />
                        </div>
                    </div>) : (null)}

           
            
            <DaysContainer 
                daysOnTrip = {daysOnTrip}
                trip = {trip}
                getActivityNames={getActivityNames}
                setGetActivityNames={setGetActivityNames}
                
            />

        </div>
    )
}

export default Trip
