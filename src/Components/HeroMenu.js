import Menu from "./Menu";
import { Link } from "react-router-dom";

const HeroMenu = ()=>{
    return(
        <Menu>
            <div href="/" className="item" id="Logo">
                Bravin Atonya
            </div>
            <div className="active right item">
                <Link to="/about">
                    About
                </Link>
            </div>
            <div href="/" className="item">
                <Link to="/projects">
                    Projects
                </Link>
            </div>
            <div href="/" className="right item">
                <button className="ui button primary">
                    Hire Me
                </button>
            </div>
        </Menu>
    );
};

export default HeroMenu;