"use strict";

class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let prefix = "../resources/";

        return <div>

        <NavigationBar active = "Gallery" home = "../index.html" about = "about.html" gallery = "gallery.html"/>
        
        <Gallery images = {[prefix + "fregadora1.jpg", prefix + "fregadora2.jpg", prefix + "furgoneta1.jpg",
                            prefix + "Aspiradora1.jpg", prefix + "suelo_brillante.jpg", 
                            prefix + "suelo_marmol.jpg", prefix + "logo.jpg"]}/>

        </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));