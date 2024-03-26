const Projects = () => {
    return(
        <>
            <div className="ui header underline font-bold centered">Software Development</div>
            <div class="ui divided items">
                <div class="item">
                    <div class="ui tiny image">
                        <img src="/images/IntAlert.png"/>
                    </div>
                    <div class="content">
                        <a class="header">IntAlert</a>
                        <div class="meta">Description</div>
                        <div class="description">
                            <p>
                                This is a project that tries to clean the internet by providing a 
                                plartform for the internet users to lauch complains on insigtful 
                                content on the internet. The team hopes that the application will help 
                                create a more sane internet community.
                            </p>
                        </div>
                        <div class="extra">
                            <a href="https://github.com/atonya-bravin/IntAlert"
                                className="text-[28px]"><i className="ui icon github"></i></a>
                            <a 
                                href="https://intalert-application.onrender.com/"
                            >
                                <button className="ui button red inverted">Play Live</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="ui tiny image">
                        <img src="/images/Turent.png"/>
                    </div>
                    <div class="content">
                        <a class="header">TuRent Community</a>
                        <div class="meta">Description</div>
                        <div class="description">
                            <p>
                            TuRent community is a web based application that tries to solve the problem 
                            of house screening by tenants and house advertisment by landlords.
                            </p>
                        </div>
                        <div class="extra">
                            <a href="https://github.com/atonya-bravin/TuRent_community"
                            className="text-[28px]">
                                <i className="ui icon github"></i>
                            </a>
                            <button className="ui button red inverted">Play Live</button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="ui header underline font-bold centered">UI/UX Engineering</div>
            <div class="ui divided items">
                <div class="item">
                    <div class="ui tiny image">
                        <img src="/images/ElimuHub.png"/>
                    </div>
                    <div class="content">
                        <a class="header">ElimuHub</a>
                        <div class="meta">Description</div>
                        <div class="description">
                            <p>
                                ElimuHub is a groundbreaking application designed to revolutionize the 
                                education industry by seamlessly digitizing every aspect of the educational 
                                experience. Built with a vision to bring sanity and efficiency to education, 
                                ElimuHub serves as a comprehensive platform where students, educators, and 
                                administrators can converge, collaborate, and access a myriad of educational 
                                resources. 
                            </p>
                        </div>
                        <div class="extra">
                            <a
                                href="https://www.figma.com/proto/5o7KJYqSX3Ne6SjSTQYheY/ElimuHub-Re-design?node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down-width">
                                <button className="ui button primary inverted">Preview Design</button>
                                </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="ui header underline font-bold centered">API Engineering</div>
            <div class="ui divided items">
                <div class="item">
                    <div class="ui tiny image">
                        <img src="/images/ElimuHubAPI.png"/>
                    </div>
                    <div class="content">
                        <a class="header">ElimuHub</a>
                        <div class="meta">Description</div>
                        <div class="description">
                            <p>
                                ElimuHub is a groundbreaking application designed to revolutionize the 
                                education industry by seamlessly digitizing every aspect of the educational 
                                experience. Built with a vision to bring sanity and efficiency to education, 
                                ElimuHub serves as a comprehensive platform where students, educators, and 
                                administrators can converge, collaborate, and access a myriad of educational 
                                resources. 
                            </p>
                        </div>
                        <div class="extra">
                            <a href="https://github.com/atonya-bravin/ElimuHub"
                            className="text-[28px]">
                                <i className="ui icon github"></i>
                            </a>
                            <a href="https://www.postman.com/universal-robot-983243/workspace/public/collection/27533464-a64b344d-0c7d-4a74-94e1-d431a068f530?action=share&creator=27533464">
                                <button className="ui button red inverted">Play Live</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="ui tiny image">
                        <img src="/images/EventsAPI.png"/>
                    </div>
                    <div class="content">
                        <a class="header">Events API</a>
                        <div class="meta">Description</div>
                        <div class="description">
                            <p>
                               This is an application I created under the HNGX community. The application 
                               tries to make the ins and outs of event management easier.
                            </p>
                        </div>
                        <div class="extra">
                            <a href="https://github.com/atonya-bravin/Team-Events-Nodejs-Backend" 
                            className="text-[28px]">
                                <i className="ui icon github"></i>
                            </a>
                            <a href="https://www.postman.com/universal-robot-983243/workspace/public/collection/27533464-b9d2c05d-97be-42aa-9dfd-570c7820966d?action=share&creator=27533464">
                                <button className="ui button red inverted">Play Live</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="last">

            </div>
        </>
    );
};

export default Projects;