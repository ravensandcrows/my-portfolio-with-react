import { removeHyphensAndCapitalize } from '../../utils/helpers';
import * as projects from '../../assets'

function Project({ project }) {
    const { name, photo, repo, link, description } = project;

    return (
        <div className="project" key={name}>
            <img
                src={projects[photo]}
                alt={removeHyphensAndCapitalize(name)}
                className="project-bg"
            />
            <div className="project-text">
                <h3>
                    <a href={link} target="_blank">{removeHyphensAndCapitalize(name)}</a>
                    &nbsp;
                    <a href={repo}>
                        <i className="fab fa-github" />
                    </a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Project;
