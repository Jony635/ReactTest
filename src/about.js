"use strict";

class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <div>

        <NavigationBar active = "About" home = "../index.html" about = "about.html"/>
        <Clock/> 
        
        </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));