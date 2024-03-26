import Footer from "./Footer";
/*import HeroContent from "./HeroContent";*/
import HeroMenu from "./HeroMenu";
import { Outlet } from "react-router-dom";

const App = () => {
    return(
        
        <div className="ui container" id="App">
            <HeroMenu />
            {
            /*
                <HeroContent />
                <Projects />
            */}
            <Outlet />
            <Footer />
        </div>
        
    );
}

export default App;