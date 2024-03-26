import App from "../Components/App";
import HeroContent from "../Components/HeroContent";
import Projects from "../Components/Projects";

const home_route = {
    path: '/',
    element: <App />,
    children: [
        {
            path: '/',
            element: <HeroContent />
        },
        {
            path: '/projects',
            element: <Projects />
        },
        {
            path: '/about',
            element: <HeroContent />
        }
    ]
};

export default home_route;