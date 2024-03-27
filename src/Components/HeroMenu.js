import { useState } from "react";
import handleMenuLinks from "../Helpers/Menu";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const HeroMenu = ()=>{
    const [active, setActive] = useState("active right item");
    const [inactive, setInactive] = useState("item");
    
    return(
        <Menu>
            <div href="/" className="item" id="Logo">
                Bravin Atonya
            </div>
            <div onClick={()=>{setActive("active right item"); setInactive("item")}} className={active} id="active-item">
                <Link to="/about">
                    About
                </Link>
            </div>
            <div href="/" className={inactive} onClick={()=>{setInactive("active item");setActive("right item")}}>
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