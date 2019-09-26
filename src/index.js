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

        this.state = {powered: true};

        this.onClick = this.onClick.bind(this);
    }

    render()
    {
        return <button onClick = {this.onClick}>{this.state.powered ? "ON" : "OFF"}</button>
    }

    onClick(state)
    {
        this.setState( (state) => 
        {
            var newState = {powered: !state.powered};

            if(newState.powered && !mainAudio.playing)
            {
                mainAudio.play();
                mainAudio.playing = true;
            }

            else if(!newState.powered && mainAudio.playing)
            {
                mainAudio.pause();
                mainAudio.currentTime = 0;
                mainAudio.playing = false;
            }

            return newState;
        })
    }
}

class MainBar extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <div className = "MainBar">
            <ul id = "MainBar" className = "MainBar">
                <li className = "MainBar"><a className = "MainBar" href = "index.html">Home</a></li>
                <li className = "MainBar"><a className = "MainBar" href="">News</a></li>
                <li className = "MainBar"><a className = "MainBar" href="">Contact</a></li>
                <li className = "MainBar"><a className = "MainBar" href="test.html">About</a></li>
            </ul>
        </div>
    }
}

class Image extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <div className = "ImageContainer">
            <img src = "../resources/testImage.jpg"></img>
        </div>
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
        return <div>
            <Image/>
            <MainBar/>
            
            <div id = "content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget sagittis nunc. 
                    Fusce tempor lacus at odio accumsan euismod. In sem velit, dictum sit amet ultricies vitae, iaculis ac turpis. Mauris ac malesuada nisi. 
                    In aliquam ligula vel neque pretium dapibus. Praesent rhoncus nisi viverra, accumsan mi vel, pharetra magna. Fusce id fringilla mauris. 
                    Nullam convallis, lorem vel convallis tempus, metus neque tincidunt nibh, in commodo neque leo tempor orci.
                    Mauris ex lectus, aliquam eget cursus id, finibus ac quam. Proin iaculis erat quis ligula sollicitudin, nec condimentum justo auctor. 
                    Nam vulputate nisi eu nulla convallis, eget tempor odio bibendum. Mauris id neque ac mauris tempus rhoncus. Etiam at dolor dolor. 
                    Donec facilisis non nunc eleifend sollicitudin. Proin faucibus, ipsum sed porttitor rhoncus, massa velit porttitor diam, sed dictum dui sapien vitae arcu. 
                    Cras at tellus vel magna pellentesque maximus.
                </p>

                <p>
                    Nam et tortor tellus. Integer efficitur mollis elit, a aliquet elit dictum ut. Donec pellentesque dolor in urna bibendum, vel pellentesque nisi bibendum. Vivamus pharetra tellus nisi, in egestas diam sollicitudin id. Phasellus nec semper magna. Nullam maximus mauris non tortor vestibulum blandit. Sed elementum dolor porttitor turpis tempus pretium. Cras sodales magna nec pretium consectetur. Donec diam ipsum, consequat auctor lorem et, viverra finibus est. Etiam molestie, orci a accumsan facilisis, orci sem tempor urna, a fringilla leo orci a risus. Duis eu quam ante. Morbi quis condimentum felis.
                </p>

                <p>
                    Donec fermentum tincidunt commodo. Praesent ultricies risus id sapien accumsan volutpat. Quisque mi orci, ultricies ac sodales sit amet, dapibus sit amet nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent pretium ligula nunc, eu blandit risus ullamcorper sit amet. Donec eleifend est sit amet leo venenatis ornare. Fusce tempor mollis dolor, vel eleifend velit aliquet tempor. Vestibulum laoreet felis est, ac scelerisque sapien suscipit varius. Nunc convallis scelerisque sapien eget rhoncus. In quis tempor lectus, vitae tempus dui. Ut elementum mi ac elit accumsan, non aliquam dui venenatis. Praesent porttitor pellentesque libero in eleifend.
                </p>

                <p>
                    Morbi faucibus ac odio eget commodo. Donec lectus purus, mollis id malesuada ut, vestibulum in lectus. Cras dictum lacus quis augue varius sagittis. Proin tristique pretium lacus, a hendrerit nisi accumsan id. Aliquam tristique tempor diam, vel dictum magna placerat a. Sed dignissim vestibulum lorem a tempor. Sed id mi non tortor faucibus volutpat. Sed quis magna dolor. Phasellus a ligula ut enim tristique tincidunt. Integer ornare eu libero a consequat.
                </p>

                <p>
                    Donec imperdiet ut metus id commodo. Praesent eget fringilla ex. Phasellus eu molestie urna, ut tincidunt diam. Suspendisse vitae cursus est. Sed sit amet augue vitae dolor euismod lobortis. Etiam blandit augue non varius dapibus. Aliquam imperdiet pretium nibh. Mauris gravida posuere consectetur.
                </p>

                <p>
                    Nulla accumsan elit a euismod sagittis. Suspendisse luctus auctor nibh, nec tempus nibh consectetur non. Ut hendrerit tellus sem, ut rhoncus risus tincidunt id. Duis elit ex, tempus at pretium eget, aliquet sit amet velit. Nunc sit amet lacinia leo. Nunc venenatis nisl eget ligula tincidunt vehicula. Fusce ornare quam purus, eu semper enim sodales vel. Sed sagittis urna turpis, ac molestie lorem auctor non. Mauris quis ligula luctus, pretium tellus non, faucibus quam. Fusce sit amet mauris ac ipsum ultricies mattis. Duis faucibus nisi ut sem sagittis laoreet. Fusce quis sagittis nibh. Nullam vitae nulla neque. Aliquam elementum ultricies erat sollicitudin mollis.
                </p>

                <p>
                    Proin pulvinar elementum quam ut varius. Sed pretium urna nibh, sit amet porta metus feugiat eget. Phasellus condimentum dui felis, vitae sodales sapien tempus eget. Curabitur tincidunt ligula at leo accumsan vehicula. Morbi blandit nulla vitae est tempus tincidunt. Phasellus condimentum hendrerit metus, a convallis ante pellentesque ut. Nulla fringilla arcu eu ipsum volutpat, at sodales urna facilisis. Aliquam vestibulum, nulla et luctus laoreet, est justo euismod nunc, ac maximus erat tortor vel massa. Etiam lacinia id justo et placerat. Cras ex metus, pulvinar eu ultrices a, convallis viverra velit. Nulla blandit mauris et urna malesuada, eu placerat lectus ultrices.              
                </p>

            
            </div>

            
            
        </div>      
    }
}

var mainAudio = undefined;
var mainBar = undefined;
var content = undefined

function OnPageLoaded()
{
    window.onscroll = OnScroll;
    mainBar = document.getElementById("MainBar");
    content = document.getElementById("content");
}


function OnScroll()
{
    if (window.pageYOffset >= 200) 
    {
        mainBar.classList.add("sticky")
        content.classList.add("content");
    } 
    else 
    {
        mainBar.classList.remove("sticky");
        content.classList.remove("content");
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));