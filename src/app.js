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

        return week_day + " " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + state.date.toLocaleTimeString(); 
    }
}

ReactDOM.render(<App name = "ReactTest"/>, document.getElementById("root"));