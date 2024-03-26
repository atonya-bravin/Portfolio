import { Divider } from "semantic-ui-react";

const Footer = () => {
    return(
        <div className="ui w-full footer container">
            <Divider className=""/>
            <div className="ui grid bg-white">
                <div className="six wide column">
                    <h1 id="Logo">Bravin Atonya</h1>
                    <p>
                        My success is an allegiance to changing the life of my circle(the people with no 
                        ability to help themselves). I will and I must.
                    </p>
                </div>
                <div className="six wide column" id="centered-content-container">
                    <div className="text-[28px] ">
                        <a href="/" className="four wide column"><i className="ui github icon"></i></a>
                        <a href="/"><i className="ui twitter icon"></i></a>
                        <a href="/"><i className="ui linkedin icon"></i></a>
                    </div>
                </div>
                <div className="four wide column" id="centered-content-container">
                    <div className="text-center font-bold text-[16px]">
                        <div>bravinatonya.brani@gmail.com</div>
                        <div>0111883753</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;