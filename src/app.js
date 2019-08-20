'use strict';

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {date: new Date()};
    }

    render()
    {
        var date_formatted = this.formatDate(this.state);

        return <div>
            
            <h1>Hey folks!</h1>
            <h3>Today is {date_formatted} </h3>
            {/* <p>Name: {this.props.name}</p> */}
        </div>;
    }

    componentDidMount()
    {
        this.intervalID = setInterval
        (
            ()=>{this.setState({date: new Date()}), 1000}
        );
    }

    componentWillUnmount()
    {
        clearInterval(this.intervalID);
    }

    formatDate(state)
    {
        let date = state.date;
        
        let week_day;
        switch(date.getDay())
        {
            case 1:
                week_day = "Monday";
                break;
            case 2:
                week_day = "Tuesday"
                break;
            case 3:
                week_day = "Wednesday"
                break;
            case 4:
                week_day = "Thursday"
                break;
            case 5:
                week_day = "Friday"
                break;
            case 6:
                week_day = "Saturday"
                break;
            case 0:
                week_day = "Sunday"
                break;
        }

        let day = date.getDate().toString();
        if(day.length == 1)
            day = '0' + day;

        let month = (date.getMonth()+1).toString();
        if(month.length == 1)
            month = '0' + month;

        let hours = date.getHours().toString();
        if(hours.length == 1)
            hours = '0' + hours;

        let minutes = date.getMinutes().toString();
        if(minutes.length == 1)
            minutes = '0' + minutes;

        let seconds = date.getSeconds().toString();
        if(seconds.length == 1)
            seconds = '0' + seconds;

        return week_day + " " + day + "/" + month + "/" + date.getFullYear() + " " + hours + ":" + minutes + ":" + seconds; 
    }
}

ReactDOM.render(<App name = "ReactTest"/>, document.getElementById("root"));