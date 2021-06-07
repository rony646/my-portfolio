
import React from 'react';

import { Container } from './styles';

import techBgImg from '../../assets/tech-bg.png';
import outlookLogo from '../../assets/outlook.png';
import whatsappLogo from '../../assets/whatsapp.png';

const HomePage: React.FC = () => {
    return(
        <Container>
            <div className="content-container">
                <h1>
                    HI, I’M RONY A <br/>FRONTEND DEVELOPER <br/>FROM BRAZIL!
                </h1>

                <h2>{`<About me />`}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aliquam turpis in egestas consequat molestie. Integer molestie pellentesque 
                    consequat vitae pulvinar orci sit. Placerat donec pulvinar id vitae. 
                    Id rhoncus, senectus aliquet pellentesque elementum.
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

            <div className="img-container">
               <img src={techBgImg} alt="tech logos" />
            </div>
        </Container>
    );
};

export default HomePage;