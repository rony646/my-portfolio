
import React from 'react';

import { Container } from './styles';

const HomePage: React.FC = () => {
    return(
        <Container>
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
        </Container>
    );
};

export default HomePage;