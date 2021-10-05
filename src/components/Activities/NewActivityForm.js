import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa"
import { Button, Form } from 'semantic-ui-react'



const NewActivityForm = ({ getActivityNames, setGetActivityNames, day_id, onNewActivitySubmit}) => {
    const [newActivity, setNewActivity] = useState({
        name: "",
        description: "",
        start_time: "start_time",
        end_time: "end_time"
    })


    function parseTime(timeString){
      if (timeString === '') return null;
      var d = new Date();
      var time = timeString.match(/(\d+)(:(\d\d))?\s*(p?)/i);
      d.setHours( parseInt(time[1],10) + ( ( parseInt(time[1],10) < 12 && time[4] ) ? 12 : 0) );
      d.setMinutes( parseInt(time[3],10) || 0 );
      d.setSeconds(0, 0);
      return d;
    }

    function handleValue(event) {
        setNewActivity({
          ...newActivity,
          [event.target.name]: event.target.value
        });
      }

    function handleNewActivity(event) {
        event.preventDefault();
        if(newActivity.start_time === 'start_time' || newActivity.end_time === 'end_time'){
          alert('Please select a start time and end time')

        } else {
          
          const createdActivity =
          {
              name: newActivity.name,
              description: newActivity.description,
              start_time: parseTime(newActivity.start_time),
              end_time: parseTime(newActivity.end_time),
              day_id: day_id
          }
          
          fetch(`http://localhost:9292/activities`, {
            method : 'POST',
            headers : {
              "Content-type" : "application/json"
            },
            body : JSON.stringify(createdActivity)
          })
          .then(response => response.json())
          .then(data => {onNewActivitySubmit(data)})
          setNewActivity({
              name: "",
              description: "",
              start_time: "start_time",
              end_time: "end_time"
          })
          setGetActivityNames(!getActivityNames)
        } 
      }

    return (
        <div>
            <form className='activityForm' onSubmit={handleNewActivity}>
                <input id='activityForm' placeholder='Activity' name='name' value={newActivity.name} onChange={handleValue}/>
                <input id='activityForm' placeholder='description' name='description' value={newActivity.description} onChange={handleValue}/>
                <select id='start_time' name='start_time' value={newActivity.start_time} onChange={handleValue}>
                    <option value='start_time' selected>Start Time</option>
                    <option value='0:00'>12:00 am</option>
                    <option value='0:30'>12:30 am</option>
                    <option value='1:00'>1:00 am</option>
                    <option value='1:30'>1:30 am</option>
                    <option value='2:00'>2:00 am</option>
                    <option value='2:30'>2:30 am</option>
                    <option value='3:00'>3:00 am</option>
                    <option value='3:30'>3:30 am</option>
                    <option value='4:00'>4:00 am</option>
                    <option value='4:30'>4:30 am</option>
                    <option value='5:00'>5:00 am</option>
                    <option value='5:30'>5:30 am</option>
                    <option value='6:00'>6:00 am</option>
                    <option value='6:30'>6:30 am</option>
                    <option value='7:00'>7:00 am</option>
                    <option value='7:30'>7:30 am</option>
                    <option value='8:00'>8:00 am</option>
                    <option value='8:30'>8:30 am</option>
                    <option value='9:00'>9:00 am</option>
                    <option value='9:30'>9:30 am</option>
                    <option value='10:00am'>10:00 am</option>
                    <option value='10:30'>10:30 am</option>
                    <option value='11:00'>11:00 am</option>
                    <option value='11:30'>11:30 am</option>
                    <option value='12:00pm'>12:00 pm</option>
                    <option value='12:30pm'>12:30 pm</option>
                    <option value='1:00pm'>1:00 pm</option>
                    <option value='1:30pm'>1:30 pm</option>
                    <option value='2:00pm'>2:00 pm</option>
                    <option value='2:30pm'>2:30 pm</option>
                    <option value='3:00pm'>3:00 pm</option>
                    <option value='3:30pm'>3:30 pm</option>
                    <option value='4:00pm'>4:00 pm</option>
                    <option value='4:30pm'>4:30 pm</option>
                    <option value='5:00pm'>5:00 pm</option>
                    <option value='5:30pm'>5:30 pm</option>
                    <option value='6:00pm'>6:00 pm</option>
                    <option value='6:30pm'>6:30 pm</option>
                    <option value='7:00pm'>7:00 pm</option>
                    <option value='7:30pm'>7:30 pm</option>
                    <option value='8:00pm'>8:00 pm</option>
                    <option value='8:30pm'>8:30 pm</option>
                    <option value='9:00pm'>9:00 pm</option>
                    <option value='9:30pm'>9:30 pm</option>
                    <option value='10:00pm'>10:00 pm</option>
                    <option value='10:30pm'>10:30 pm</option>
                    <option value='11:00pm'>11:00 pm</option>
                    <option value='11:30pm'>11:30 pm</option>
                </select>
                <select id='end_time' name='end_time' value={newActivity.end_time} onChange={handleValue}>
                    <option value='end_time' selected>End Time</option>
                    <option value='0:00'>12:00 am</option>
                    <option value='0:30'>12:30 am</option>
                    <option value='1:00'>1:00 am</option>
                    <option value='1:30'>1:30 am</option>
                    <option value='2:00'>2:00 am</option>
                    <option value='2:30'>2:30 am</option>
                    <option value='3:00'>3:00 am</option>
                    <option value='3:30'>3:30 am</option>
                    <option value='4:00'>4:00 am</option>
                    <option value='4:30'>4:30 am</option>
                    <option value='5:00'>5:00 am</option>
                    <option value='5:30'>5:30 am</option>
                    <option value='6:00'>6:00 am</option>
                    <option value='6:30'>6:30 am</option>
                    <option value='7:00'>7:00 am</option>
                    <option value='7:30'>7:30 am</option>
                    <option value='8:00'>8:00 am</option>
                    <option value='8:30'>8:30 am</option>
                    <option value='9:00'>9:00 am</option>
                    <option value='9:30'>9:30 am</option>
                    <option value='10:00'>10:00 am</option>
                    <option value='10:30'>10:30 am</option>
                    <option value='11:00'>11:00 am</option>
                    <option value='11:30'>11:30 am</option>
                    <option value='12:00pm'>12:00 pm</option>
                    <option value='12:30pm'>12:30 pm</option>
                    <option value='1:00pm'>1:00 pm</option>
                    <option value='1:30pm'>1:30 pm</option>
                    <option value='2:00pm'>2:00 pm</option>
                    <option value='2:30pm'>2:30 pm</option>
                    <option value='3:00pm'>3:00 pm</option>
                    <option value='3:30pm'>3:30 pm</option>
                    <option value='4:00pm'>4:00 pm</option>
                    <option value='4:30pm'>4:30 pm</option>
                    <option value='5:00pm'>5:00 pm</option>
                    <option value='5:30pm'>5:30 pm</option>
                    <option value='6:00pm'>6:00 pm</option>
                    <option value='6:30pm'>6:30 pm</option>
                    <option value='7:00pm'>7:00 pm</option>
                    <option value='7:30pm'>7:30 pm</option>
                    <option value='8:00pm'>8:00 pm</option>
                    <option value='8:30pm'>8:30 pm</option>
                    <option value='9:00pm'>9:00 pm</option>
                    <option value='9:30pm'>9:30 pm</option>
                    <option value='10:00pm'>10:00 pm</option>
                    <option value='10:30pm'>10:30 pm</option>
                    <option value='11:00pm'>11:00 pm</option>
                    <option value='11:30pm'>11:30 pm</option>
                </select>
                <button className='addActivityBtn' type="submit"><FaPlus></FaPlus>ACTIVITY</button>
            </form>
            
        </div>
    )
}

export default NewActivityForm
