import styled from 'styled-components';

export const Container = styled.div`
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
`