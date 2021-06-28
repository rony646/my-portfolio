
import React from 'react';

import { Container, ArrowContainer } from './styles';

import techBgImg from '../../assets/tech-bg.png';
import outlookLogo from '../../assets/outlook.png';
import whatsappLogo from '../../assets/whatsapp.png';
import arrowDown from '../../assets/arrowDown.gif';

const HomePage: React.FC = () => {
    return(
        <>
            
            <Container>
                {/* <Slide> */}
                    <div className="content-container">
                        <h1>
                            HI, I’M RONY A <br/>FRONTEND DEVELOPER <br/>FROM BRAZIL!
                        </h1>

                        <h2>{`<About me />`}</h2>
                        <p>
                            Welcome to my website, my name is Rony and I'm a Frotend Developer from Brazil that loves
                            technology and coding. Actually I'm working as Software Developer Intern using React.js, Typescript, material-ui,
                            styled components and also using Figma for prototyping.
                        </p>

                        <h2 style={{color: '#15b325'}}>{`<Talk to me />`}</h2>

                        <div className="contact" >
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/rony-p-11a738117/" target="blank">
                                        <i className="devicon-linkedin-plain colored"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://github.com/rony646" target="blank">
                                        <i className="devicon-github-original" ></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="mailto:ronypeterson646@outlook.com" target="blank">
                                        <span>
                                            <img src={outlookLogo} alt="outlook logo"></img>
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://wa.me/5531994529271?&text=Olá,%20Rony!%20Vi%20seu%20contato%20pelo%20seu%20site,%20está%20disponível%20agora?" target="blank">
                                        <span>
                                            <img src={whatsappLogo} alt="whatsapp logo"></img>
                                        </span>
                                    </a>
                                </li>

                            </ul>
                            
                        </div>

                    </div>
                {/* </Slide> */}

                    <div className="img-container">
                        <img src={techBgImg} alt="tech logos" />
                    </div>
                
               

                <ArrowContainer>
                    <img src={arrowDown} alt="scroll down indicator" height="100%" />
                    <span>Scroll down to see more</span>
                </ArrowContainer>
            </Container>
        </>
    );
};

export default HomePage;