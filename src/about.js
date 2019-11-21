"use strict";

var navBar = undefined;
var content = undefined;
var img = undefined;

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        img = <Image src = "../resources/testImage.jpg" sticky_height = "200"/>;    
    }

    render()
    {
        return <div>
        {img} 
      
        <NavigationBar active = "About" home = "../index.html" about = "about.html" gallery = "gallery.html"/>
        
        <div id = "content">
        <Clock/> 
        </div>
               
        </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));

function OnPageLoaded()
{
    window.onscroll = OnScroll;
    navBar = document.getElementById("NavBar");
    content = document.getElementById("content");
}


function OnScroll()
{
    if (window.pageYOffset >= (window.innerWidth * img.props.sticky_height / 1920)) 
    {
        navBar.classList.add("sticky")
        content.classList.add("content");
        
        if(window.innerWidth > 1000)
        {
            content.style.paddingTop = "55px"
        }
        else
        {
            content.style.paddingTop = "190px"
        }       
    } 
    else 
    {
        navBar.classList.remove("sticky");
        content.classList.remove("content");

        content.style.paddingTop = "20px"
    }
}