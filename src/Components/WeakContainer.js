import React from 'react';
import DayCard from  "./DayCard"
import "../App.css"
const API_KEY = "1cd7cacae4f033c9efb199a32b1f3a03";
class WeekContainer extends React.Component {
  
  constructor(props){
    super(props)
    console.log("this is WeekContainer Constructor")
  this.state = {
    fullData: [],
    dailyData: [],
    city:this.props.city
  }
}

static getDerivedStateFromProps(props, state) {
  console.log("this is getDerivedStateFromProps method")
    if(state.city !== props.city) {
      return {city : props.city}
    } else {
      return state
  }
}
componentDidMount = () => {
  console.log("componentDidMount")
    console.log(this.props.city)
    const weatherURL =
    `https://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${API_KEY}`
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({
        fullData: data.list,
        dailyData: dailyData
      }, () => console.log(this.state))
    })
  }
  // shouldComponentUpdate = () => {
  //   if(this.state.city !== undefined){
  //   console.log("componentDidMount true")
  //     const weatherURL =
  //     `https://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${API_KEY}`
  //     fetch(weatherURL)
  //     .then(res => res.json())
  //     .then(data => {
  //       const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
  //       console.log(dailyData)
  //       this.setState({
  //         fullData: data.list,
  //         dailyData: dailyData
  //       }, () => console.log(this.state))
  //     })
  //     return true
  //   }
  //   else{
  //     console.log("componentDidMount true")
  //     return false;
  //   }
  // }
  
  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
  }

render() {
  console.log("this is WeakContainer render methods")
    return (
      <div className = "dailycards">
        {this.formatDayCards()}
      </div>
    )
  }
}
export default WeekContainer;

