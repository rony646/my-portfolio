import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import { Container } from './styles';

import SwiperCore, { Navigation } from 'swiper/core';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

import { data } from '../../data/projectsData';
import { Slide } from 'react-awesome-reveal';

SwiperCore.use([Navigation]);

const Projects: React.FC = () => {
    return(
        <Slide direction="up">
            <Container>
                <h1>SOME OF MY PROJECTS</h1>

                <div className="slider-container">
                    <Swiper navigation={true} slidesPerView={1}>
                        {
                            data.map(item => (
                                <SwiperSlide>
                                    <ProjectCard 
                                        projectName={item.projectName}
                                        description={item.description}
                                        thumbNail={item.thumbNail}
                                        projectLink={item.link}
                                        gitHubLink={item.gitHubLink}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </Container>
        </Slide>
    )
};

export default Projects;