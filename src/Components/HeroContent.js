import { Link } from "react-router-dom";

const HeroContent = () => {
    return(
        <div className="ui grid container gap-[3em]" id="hero-content">
            <div className="nine wide column">
                <h1 className="underline text-[20px]">Software Developer | UX/UI Engineer | API Engineer</h1>
                <p>As a versatile professional, I wear multiple hats in the tech industry. 
                    As a Programmer, I leverage my coding expertise to develop robust and efficient 
                    software solutions. As a UI/UX Designer, I focus on creating seamless and visually 
                    appealing user interfaces, ensuring an exceptional user experience. Additionally, as 
                    a Backend Engineer, I architect and optimize the server-side of applications, handling 
                    data storage, processing, and ensuring smooth functionality behind the scenes. 
                    My diverse skill set allows me to contribute comprehensively to the development 
                    lifecycle, from front-end design to back-end implementation.
                </p>
                <div className="w-full items-center">
                    <Link to="/projects">
                        <button className="ui button primary inverted" id="hero-button">
                            View Projects
                        </button>
                    </Link>
                    <a href="https://drive.google.com/file/d/1WnbXXQ4g_zr1cYR9MSuGwLb3kbfneOdw/view?usp=drive_link">
                        <button className="ui button red inverted">
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
            <div className="six wide column" id="hero-image-container">

            </div>
        </div>
    );
};

export default HeroContent;