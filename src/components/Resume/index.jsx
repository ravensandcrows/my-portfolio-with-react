function Resume() {
    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
      
    return (
        <section className="margin-top" >
            <div className="my-2">
                <h3 className="resume-h3" id="front-end">Front-end Proficiencies</h3>
                <p className="resume-p">Languages/Libraries:</p>
                <ul className="skills">
                    <div className="row">
                        <div className="column-borderless">
                            <li>HTML</li>
                        </div>
                        <div className="column-borderless">
                            <li>CSS</li>
                        </div>
                        <div className="column-borderless">
                            <li>JavaScript</li>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column-borderless">
                            <li>jQuery</li>
                        </div>
                        <div className="column-borderless">
                            <li>React</li>
                        </div>
                        <div className="column-borderless">
                            <li>Bootstrap</li>
                        </div>
                    </div>
                </ul>
                <p className="resume-p">Key Proficiencies:</p>
                <ul className="margin-left">
                    <li className="proficiencies">HTML/CSS Proficiency:</li>
                    <ul className="prof-items">
                        <li>Strong understanding of HTML5 semantics and structure.</li>
                        <li>Expertise in CSS3 for styling and layout, including Flexbox and Grid.</li>
                        <li>Knowledge of responsive design principles and mobile-first development.</li>
                    </ul>
                    <li className="proficiencies">JavaScript and Frameworks:</li>
                    <ul className="prof-items">
                        <li>Proficient in JavaScript for creating interactive web pages.</li>
                        <li>Familiarity with modern JavaScript frameworks/libraries (e.g., React, Angular, Vue.js).</li>
                        <li>Understanding of ES6+ features and concepts like modules, arrow functions, and async/await.</li>
                    </ul>
                    <li className="proficiencies">Version Control:</li>
                    <ul className="prof-items">
                        <li>Experience with version control systems, particularly Git.</li>
                        <li>Ability to manage code repositories on platforms like GitHub.</li>
                    </ul>
                    <li className="proficiencies">Cross-Browser Compatibility:</li>
                    <ul className="prof-items">
                        <li>Skill in ensuring compatibility across various web browsers and devices.</li>
                        <li>Knowledge of tools and techniques for debugging and testing in multiple browsers (e.g., BrowserStack, Developer Tools).</li>
                    </ul>
                    <li className="proficiencies">Search Engine Optimization (SEO):</li>
                    <ul className="prof-items">
                        <li>Understanding of on-page SEO techniques including proper use of meta tags, header tags, and structured data.</li>
                        <li>Familiarity with tools for monitoring and analyzing SEO performance (e.g., Google Search Console, SEO plugins).</li>
                        <li>Experience with implementing SEO-friendly design and development practices to enhance site visibility and ranking on search engines.</li>
                    </ul>
                    <li className="proficiencies">Performance Optimization:</li>
                    <ul className="prof-items">
                        <li>Techniques for optimizing web performance (e.g., minification, image optimization, lazy loading).</li>
                        <li>Understanding of web performance metrics and tools like Google Lighthouse.</li>
                    </ul>
                    <li className="proficiencies">Accessibility:</li>
                    <ul className="prof-items">
                        <li>Knowledge of web accessibility standards (WCAG) and best practices.</li>
                        <li>Experience in creating accessible web interfaces and using tools like aXe or Lighthouse for accessibility testing.</li>
                    </ul>
                    <li className="proficiencies">Tooling and Workflow:</li>
                    <ul className="prof-items">
                        <li>Familiarity with build tools and task runners (e.g., Webpack, Gulp).</li>
                        <li>Proficiency with package managers like npm or Yarn.</li>
                    </ul>
                    <li className="proficiencies">APIs and Backend Integration:</li>
                    <ul className="prof-items">
                        <li>Ability to work with RESTful APIs and handle asynchronous data fetching.</li>
                        <li>Basic understanding of backend technologies and how front-end interfaces interact with servers.</li>
                    </ul>
                    <li className="proficiencies">Testing and Debugging:</li>
                    <ul className="prof-items">
                        <li>Experience with front-end testing frameworks (e.g., Jest, Mocha, Jasmine).</li>
                        <li>Skill in identifying and resolving bugs and performance issues.</li>
                    </ul>
                </ul>

                <hr></hr>

                <div className='resume-header'>
                    <nav className='resume-nav'>
                        <ul className='resume-ul'>
                            <li className='resume-li'>
                                <button onClick={()=>scrollToElement('front-end')} className='resume-button'>Front-End</button>
                            </li>
                            <li className='resume-li'>
                                <button onClick={()=>scrollToElement('back-end')} className='resume-button'>Back-End</button>
                            </li>
                            <li className='resume-li'>
                                <a className="resume-button" target="_blank" href="https://www.linkedin.com/in/kaliblackstorm">LinkedIn</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                

                <h3 className="resume-h3" id="back-end">Back-end Proficiencies</h3>
                <p className="resume-p">Languages/Frameworks/Databases:</p>
                <ul className="skills">
                    <div className="row">
                        <div className="column-borderless">
                            <li>APIs</li>
                        </div>
                        <div className="column-borderless">
                            <li>Node</li>
                        </div>
                        <div className="column-borderless">
                            <li>Express</li>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column-borderless">
                            <li>MySQL, Sequelize</li>
                        </div>
                        <div className="column-borderless">
                            <li>MongoDB, Mongoose</li>
                        </div>
                        <div className="column-borderless">
                            <li>GraphQL</li>
                        </div>
                    </div>
                </ul>
                <p className="resume-p">Key Proficiencies:</p>
                <ul className="margin-left">
                    <li className="proficiencies">JavaScript and Node.js:</li>
                    <ul className="prof-items">
                        <li>Proficiency in JavaScript, including ES6+ features and asynchronous programming.</li>
                        <li>Strong experience with Node.js for server-side development.</li>
                        <li>Familiarity with Node.js frameworks such as Express.js for building APIs and web applications.</li>
                    </ul>
                    <li className="proficiencies">Database Management (MySQL and MongoDB):</li>
                    <ul className="prof-items">
                        <li>Proficiency in working with relational databases (MySQL) and understanding of SQL queries, joins, indexing, and transactions.</li>
                        <li>Experience with NoSQL databases (MongoDB), including schema design, indexing, and aggregation.</li>
                        <li>Knowledge of ORMs/ODMs like Sequelize for MySQL and Mongoose for MongoDB.</li>
                    </ul>
                    <li className="proficiencies">Data Modeling and Schema Design:</li>
                    <ul className="prof-items">
                        <li>Ability to design efficient and scalable database schemas for both MySQL and MongoDB.</li>
                        <li>Understanding of data normalization, denormalization, and trade-offs between relational and document-based databases.</li>
                    </ul>
                    <li className="proficiencies">RESTful API Development:</li>
                    <ul className="prof-items">
                        <li>Expertise in designing and implementing RESTful APIs.</li>
                        <li>Understanding of API authentication and authorization mechanisms (e.g., JWT, OAuth).</li>
                        <li>Experience with versioning, documentation, and testing of APIs.</li>
                    </ul>
                    <li className="proficiencies">Performance Optimization:</li>
                    <ul className="prof-items">
                        <li>Techniques for optimizing database performance, including query optimization and caching strategies.</li>
                        <li>Knowledge of load balancing, connection pooling, and other server-side performance enhancements.</li>
                    </ul>
                    <li className="proficiencies">Security Best Practices:</li>
                    <ul className="prof-items">
                        <li>Understanding of security practices for web applications, including data encryption, secure authentication, and protection against common vulnerabilities (e.g., SQL injection, XSS).</li>
                        <li>Implementation of security measures for database access and operations.</li>
                    </ul>
                    <li className="proficiencies">Deployment and DevOps:</li>
                    <ul className="prof-items">
                        <li>Experience with deploying and managing Node.js applications in various environments (e.g., cloud platforms like AWS, Azure, Heroku).</li>
                        <li>Familiarity with containerization tools like Docker and orchestration tools like Kubernetes.</li>
                        <li>Knowledge of CI/CD pipelines for automated testing, integration, and deployment.</li>
                    </ul>
                    <li className="proficiencies">Version Control:</li>
                    <ul className="prof-items">
                        <li>Experience with version control systems, particularly Git.</li>
                        <li>Ability to manage code repositories on platforms like GitHub.</li>
                    </ul>
                    <li className="proficiencies">Testing and Debugging:</li>
                    <ul className="prof-items">
                        <li>Experience with unit testing and integration testing for back-end applications using frameworks like Mocha, Chai, or Jest.</li>
                        <li>Skill in debugging server-side issues and performance bottlenecks.</li>
                    </ul>
                    <li className="proficiencies">Continuous Learning and Adaptability:</li>
                    <ul className="prof-items">
                        <li>Commitment to staying updated with the latest back-end technologies, tools, and best practices.</li>
                        <li>Ability to quickly learn and adopt new databases, frameworks, and methodologies.</li>
                    </ul>
                </ul>
            </div>
        </section>
    );
}

export default Resume;