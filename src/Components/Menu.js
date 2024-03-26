import { Component } from "react";

class Menu extends Component{
    render(){
        return(
            <div className="ui pointing secondary menu">
                {this.props.children}
            </div>
        );
    };
};

export default Menu;