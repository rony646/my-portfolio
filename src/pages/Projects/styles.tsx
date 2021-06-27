import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  
    height: 100vh;

    h1 {
        color: #15b325;
        font-weight: bold;
        transition: color 0.3s;
        white-space: nowrap;
        font-size: 2em !important;
            
        &:hover {
            color: #05811096;
        }
             
        @media(max-width: 768px) {
            font-size: 2.3em;
        }
    }

    .swiper-container {
        /* background: green; */
        width: 70vw;
        height: 630px;
        overflow: hidden;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        /* background: red; */
        text-align: center;
    }

    .swiper-button-next, .swiper-button-prev {
        color: #15b325;
    }
`