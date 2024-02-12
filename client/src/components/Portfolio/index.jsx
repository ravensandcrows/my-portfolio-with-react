import './Portfolio.css'

function Portfolio(){
    return(
        <section>
            <div id="work">
                <h2>My Work</h2>
            </div>
            <div className="card" id="first-project">
                <div className="text-box">
                {/* <a href="https://pure-anchorage-91977-4dec50670cac.herokuapp.com/" target=”_blank”> */}
                    <h3>Travel With Me</h3>
                    <p>MySQL, Express, HandleBars</p>
                {/* </a> */}
            </div>
        </div>
        <div className="projects">
            {/* Project group 1 */}
            <div className='row'>
                {/* Recipes API */}
                <div className='column'>
                    <div className='card' id='recipes-api'>
                        <div className="text-box">
                            {/* <a href="https://irimeroi.github.io/recipes-api/" target="_blank"> */}
                                <h3>Wine and Dine</h3>
                            {/* </a> */}
                            <p>Javascript, APIs</p>
                        </div>
                    </div>
                </div>
                {/* SVG LOGO */}
                <div className='column'>
                    <div className='card' id='svg-logo'>
                        <div className="text-box">
                            {/* <a href="https://drive.google.com/file/d/187cAfnzZRE6DT7ThtczOo1HukCuhVwN6/view" */}
                                {/* target="_blank"> */}
                                <h3>SVG Logo Generator</h3>
                            {/* </a> */}
                            <p>Node, Jest, JS, Inquirer</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Projects Group 2  */}
            <div className='row'>
                {/*  Read me Generator  */}
                <div className='column'>
                    <div className='card' id='readme'>
                        <div className="text-box">
                            {/* <a href="https://drive.google.com/file/d/1jkhhzbwglWDK3yqO1Qwf6QUKgQ7vDAog/view" */}
                                {/* target="_blank"> */}
                                <h3>ReadMe Generator</h3>
                            {/* </a> */}
                            <p>Node, Inquirer, JS</p>
                        </div>
                    </div>
                </div>
                {/* Code Quiz Game */}
                <div className='column'>
                    <div className="card" id="quiz-game">
                        <div className="text-box">
                            <a href="https://ravensandcrows.github.io/code_quiz_game/" target="_blank">
                                <h3>Quiz Game</h3>
                            </a>
                            <p>HTML, CSS, JS</p>
                        </div>
                    </div>
                </div>
            </div>
             {/* Projects Group 3 */}
            <div className='row'>
                {/* Employee Tracker  */}
                <div className='column'>
                    <div className='card' id='employee-tracker'>
                        <div className="text-box">
                            {/* <a href="https://github.com/ravensandcrows/employee_tracker.git" target="_blank"> */}
                                <h3>Employee Tracker</h3>
                            {/* </a> */}
                            <p>MySQL</p>
                        </div>
                    </div>
                </div>
                {/* Weather Dashboard */}
                <div className='column'>
                    <div className='card' id='weather-dashboard'>
                        <div className="text-box">
                            {/* <a href="https://ravensandcrows.github.io/weather_dashboard/" target="_blank"> */}
                                <h3>Weather Dashboard</h3>
                            {/* </a> */}
                            <p>Javascript, API</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Projects Group 4 */}
            <div className='row'>
                {/* Work Day Planner */}
                <div className='column'>
                    <div className='card' id='workday-planner'>
                        <div className="text-box">
                            {/* <a href="https://ravensandcrows.github.io/work_day_planner/" target="_blank"> */}
                                <h3>Work Day Planner</h3>
                            {/* </a> */}
                            <p>JS, APIs</p>
                        </div>
                    </div>
                </div>
                {/* Note Taker */}
                <div className='column'>
                    <div className='card' id='note-taker'>
                        <div className="text-box">
                            {/* <a href="https://warm-ocean-32017-3da30a6fefb4.herokuapp.com" target="_blank"> */}
                                <h3>Note Taker App</h3>
                            {/* </a> */}
                            <p>Express</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Projects Group 5 */}
            <div className='row'>
                {/* Password Generator */}
                <div className='column'>
                    <div className='card' id='pass-generator'>
                        <div className="text-box">
                            {/* <a href="https://ravensandcrows.github.io/password_generator/" target="_blank"> */}
                                <h3>Password Generator</h3>
                            {/* </a> */}
                            <p>HTML, CSS, JS</p>
                        </div>
                    </div>
                </div>
                {/* E-Commerce Backend  */}
                <div className='column'>
                    <div className='card' id='e-com'>
                        <div className="text-box">
                            {/* <a href="https://drive.google.com/file/d/1HS5BwriIE5MGnUD9h2bWSpQ81X4PCMES/view" target="_blank"> */}
                                <h3>E-Commerce Backend</h3>
                            {/* </a> */}
                            <p>Sequelize (ORM), MySQL</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Projects Group 6*/}
            <div className='row'>
                {/* Sample Webpage  */}
                <div className='column'>
                    <div className='card' id='sample'>
                        <div className="text-box">
                            {/* <a href="https://ravensandcrows.github.io/Sample_Webpage/" target="_blank"> */}
                                <h3>Sample Webpage</h3>
                            {/* </a> */}
                            <p>HTML, CSS</p>
                        </div>
                    </div>
                </div>
                {/*  Tech Blog  */}
                <div className='column'>
                    <div className='card' id='blog'>
                        <div className="text-box">
                            {/* <a href="https://fierce-waters-17081-228a9c282954.herokuapp.com" target="_blank"> */}
                                <h3>AI Ethics Blog</h3>
                            {/* </a> */}
                            <p>Handlebars, Sequelize, Express</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Projects Group 7 */}
            <div className='row'>
                 {/* Regex Tutorial*/}
                <div className='column'>
                    <div className='card' id='regex'>
                        <div className="text-box">
                             {/* <a href="" target="_blank"> */}
                                <h3>Regex Tutorial</h3>
                            {/* </a> */}
                            <p>Regex, GIST</p>
                        </div>
                    </div>
                </div>
                {/* Social Network API*/}
                <div className='column'>
                    <div className='card' id='soc-api'>
                        <div className="text-box">
                            <a href="https://drive.google.com/file/d/1oxIkwI5IiMct-JVIXbuj05obt3Nb2CQX/view" target="_blank">
                                <h3>Social Network API</h3>
                            </a>
                            <p>Express, MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>
             {/* Projects Group 8 */}
            <div className='row'>
                 {/* Text Editor*/}
                <div className='column'>
                    <div className='card' id='txt-edit'>
                        <div className="text-box">
                            {/* <a href="https://enigmatic-spire-15733-b296b96ab6e2.herokuapp.com" target="_blank"> */}
                                <h3>Text Editor</h3>
                            {/* </a> */}
                            <p>PWA</p>
                        </div>
                    </div>
                </div>
                {/* Portfolio */}
                <div className='column'>
                    <div className='card' id='react'>
                        <div className="text-box">
                            {/* <a href="" target="_blank"> */}
                                <h3>Simple Portfolio</h3>
                            {/* </a> */}
                            <p>HTML, CSS</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Projects Group 9  */}
            <div className='row'>
                {/* Book Search Engine */}
                <div className='column'>
                    <div className='card' id='book'>
                        <div className="text-box">
                            {/* <a href="" target="_blank"> */}
                                <h3>Book Search Engine</h3>
                            {/* </a> */}
                            <p>MERN, Apollo</p>
                        </div>
                    </div>
                </div>
                 {/* Redux Store */}
                <div className='column'>
                    <div className='card' id='redux'>
                        <div className="text-box">
                            <a href="" target="_blank">
                                <h3>Redux Store</h3>
                            </a>
                            <p>Redux</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Projects Group 10*/}
            <div className='row'>
                {/* Book Search Engine  */}
                <div className='column'>
                    <div className='card' id='project-3'>
                        <div className="text-box">
                            <a href="" target="_blank">
                                <h3>Coming Soon</h3>
                            </a>
                            <p>Coming Soon</p>
                        </div>
                    </div>
                </div>
                 {/* Coming Soon */}
                <div className='column'>
                    <div className='card' id='coming-soon'>
                        <div className="text-box">
                            <a href="" target="_blank">
                                <h3>Coming Soon</h3>
                            </a>
                            <p>Coming Soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Portfolio;