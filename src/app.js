'use strict';

class Clock extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.state = {date: new Date()};
    }

    render()
    {
        var date_formatted = this.formatDate(this.state);

        return <div className = "inlineElem">
            <h1>Hey folks!</h1>
            <h3>Today is {date_formatted} </h3>
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

class SwitchButton extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {powered: false};

        this.onClick = this.onClick.bind(this);
    }

    render()
    {
        return <button onClick = {this.onClick}>{this.state.powered ? "ON" : "OFF"}</button>
    }

    onClick(state)
    {
        this.setState( (state) => ({powered: !state.powered}));
    }
}

class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <div className = "inlineElem">
        <Clock/>
            {/* <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul> */}

        <SwitchButton/>

        <div className = "video">
            <iframe width="949" 
                    height="534" src="https://www.youtube.com/embed/668nUCeBHyY" frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
        

        </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));