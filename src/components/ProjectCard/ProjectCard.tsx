import React from 'react';

import { Container } from './styles';

import { Icon } from '@iconify/react';
import webicon from '@iconify-icons/mdi/web';
import githubFill from '@iconify-icons/akar-icons/github-fill';

interface ProjectCardProps {
    projectName: string;
    description: string;
    thumbNail: string;
    projectLink: string | null;
    gitHubLink: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ( { projectName, description, thumbNail, projectLink, gitHubLink } ) => {
    return(
        <Container>
            <h1>{projectName}</h1>
            <img src={thumbNail} alt="Project thumbnail"/>
            <p>
               {description}
            </p>
            <div className="links-container">
                {projectLink ? <div>
                    <Icon icon={webicon}/>
                    <a href={projectLink} target="blank">Project Link</a>
                </div> : ''}
                
                <div>
                    <Icon icon={githubFill}/>
                    <a href={gitHubLink} target="blank">Code on GitHub</a>
                </div>
                
            </div>
        </Container>
    );
};

export default ProjectCard;