import Particles from 'react-particles-js';
import { GlobalStyle } from './global/globalStyle';

import HomePage from './pages/home';

function App() {

  return (
    <>
        <Particles 
          className="particle-canvas"
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 2200,
                }
              },
              color: {
                value: '#149021'
              },
              shape: {
                polygon: {
                  nb_sides: 5
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  sync: true,
                  size_min: 10
                }
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                }
              }
            }
          }}
        />
        <GlobalStyle />
        <HomePage />
    </>
  );
}

export default App;
