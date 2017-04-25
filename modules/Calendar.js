import React, {Component} from 'react'

class Calendar extends Component{
  render () {
    return (
      <iframe
        src="https://calendar.google.com/calendar/embed?src=dtv47or3teap2bbnh60j56nnok%40group.calendar.google.com&ctz=America/New_York"
        style={{border: '0', marginLeft: '5%'}}
        width="90%"
        height="700px"
        frameBorder="0"
        scrolling="no" />
    )
  }
}

export default Calendar
