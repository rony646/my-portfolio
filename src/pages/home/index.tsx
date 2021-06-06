
import React from 'react';

import { Container } from './styles';

import techBgImg from '../../assets/tech-bg.png';

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

                <a href="/">{`<Talk to me />`}</a>

            </div>

            <div className="img-container">
               <img src={techBgImg} alt="tech logos" />
            </div>
        </Container>
    );
};

export default HomePage;