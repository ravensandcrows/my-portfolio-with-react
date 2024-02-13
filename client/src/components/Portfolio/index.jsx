import { useState } from 'react';
import Project from "../Project";

function Portfolio(){
    const [projects] = useState ([
        {
            name: 'E-Versity',
            description: 'React, MERN',
            photo: "eversity",
            link: "https://e-versity.onrender.com/",
            repo: "https://github.com/ravensandcrows/e-versity.git"
        },
        {
            name: 'Travel With Me',
            photo: "travelwithme",
            description: 'MySQL, Express, HandleBars',
            link: "https://pure-anchorage-91977-4dec50670cac.herokuapp.com/",
            repo: "https://github.com/ravensandcrows/social_media_platform.git"
        },
        {
            name: 'Wine and Dine',
            photo: 'wineanddine',
            description: 'JavaScript',
            link: "https://irimeroi.github.io/recipes-api/",
            repo: "https://github.com/ravensandcrows/recipes-api.git"
        },
        {
            name: 'SVG Logo Generator',
            photo: 'svglogogen',
            description: 'Node, Jest, JS, Inquirer',
            link: "https://drive.google.com/file/d/187cAfnzZRE6DT7ThtczOo1HukCuhVwN6/view",
            repo: "https://github.com/ravensandcrows/svg_generator.git"
        },
        {
            name: 'ReadMe Generator',
            photo: 'readme',
            description: 'Node, JS, Inquirer',
            link: "https://drive.google.com/file/d/1jkhhzbwglWDK3yqO1Qwf6QUKgQ7vDAog/view",
            repo: "https://github.com/ravensandcrows/readme_generator.git"
        },
        {
            name: 'Quiz Game',
            photo: 'quiz',
            description: 'HTML, CSS, JS',
            link: "https://ravensandcrows.github.io/",
            repo: "https://github.com/ravensandcrows/code_quiz_game.git"
        },
        {
            name: 'Employee Tracker',
            photo: 'employee',
            description: 'MYSQL, JS',
            link: "https://drive.google.com/file/d/1P7JrNYbzbuRLYRugNYQ_EdAfppcEt2SS/view",
            repo: "https://github.com/ravensandcrows/employee_tracker.git"
        },
        {
            name: 'Weather Dashboard',
            photo: 'weather',
            description: 'JavaScript',
            link: "https://ravensandcrows.github.io/weather_dashboard/",
            repo: "https://github.com/ravensandcrows/weather_dashboard.git"
        },
        {
            name: 'Work Day Planner',
            photo: 'planner',
            description: 'JavaScript',
            link: "https://ravensandcrows.github.io/work_day_planner/",
            repo: "https://github.com/ravensandcrows/work_day_planner.git"
        },
        {
            name: 'Note Taker',
            photo: 'notes',
            description: 'Express, Javascript',
            link: "https://warm-ocean-32017-3da30a6fefb4.herokuapp.com",
            repo: "https://github.com/ravensandcrows/note_taker.git"
        },
        {
            name: 'Password Generator',
            photo: 'passgen',
            description: 'HTML, CSS, JS',
            link: "https://ravensandcrows.github.io/password_generator/",
            repo: "https://github.com/ravensandcrows/password_generator.git"
        },
        {
            name: 'E-Commerce Backend',
            photo:'ecom',
            description: 'MYSQL, Sequelize',
            link: "https://drive.google.com/file/d/1HS5BwriIE5MGnUD9h2bWSpQ81X4PCMES/view",
            repo: "https://github.com/ravensandcrows/E-Commerce_ORM.git"
        },
        {
            name: 'Sample Webpage',
            photo: 'sample',
            description: 'HTML, CSS, SEO',
            link: "https://ravensandcrows.github.io/Sample_Webpage/",
            repo: "https://github.com/ravensandcrows/Sample_Webpage.git"
        },
        {
            name: 'AI Ethics Blog',
            photo: 'ethics',
            description: 'Handlebars, Sequelize, Express',
            link: "https://fierce-waters-17081-228a9c282954.herokuapp.com",
            repo: "https://github.com/ravensandcrows/AI-Ethics-Blog.git"
        },
        {
            name: 'Regex Tutorial',
            photo: 'regex',
            description: 'Regex',
            link: "https://gist.github.com/ravensandcrows/4f6c820febf84ea559adff72be27db03",
            repo: "https://gist.github.com/ravensandcrows/"
        },
        {
            name: 'Social Network API',
            photo: 'socapi',
            description: 'Express, MongoDB, JS',
            link: "https://drive.google.com/file/d/1oxIkwI5IiMct-JVIXbuj05obt3Nb2CQX/view",
            repo: "https://github.com/ravensandcrows/social-media-api.git"
        },
        {
            name: 'Text Editor',
            photo: 'editor',
            description: 'PWA',
            link: "https://enigmatic-spire-15733-b296b96ab6e2.herokuapp.com",
            repo: "https://github.com/ravensandcrows/text_editor.git"
        },
        {
            name: 'Simple Portfolio',
            photo: 'portfolio',
            description: 'HTML, CSS',
            link: "https://ravensandcrows.github.io/my_portfolio/",
            repo: "https://github.com/ravensandcrows/my_portfolio.git"
        },
        {
            name: 'Redux Store',
            photo: 'redux',
            description: 'Coming Soon',
            link: "",
            repo: ""
        },
        {
            name: 'Book Search Engine',
            photo: 'book',
            description: 'Coming Soon',
            link: "",
            repo: ""
        },
        {
            name: 'Coming Soon',
            photo: 'soon',
            description: 'Coming Soon',
            link: "",
            repo: ""
        },
    ])
    return(
        <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>   
    );
};

export default Portfolio;