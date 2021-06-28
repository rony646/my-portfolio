import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 95%;
    width: 70%;
    background: #313131b9;
    border-radius: 5px;

    @media(max-width: 768px) {
        width: 100%;
    }

    h1 {
        color: #068f24;
    }

    img {
        width: 60%;

        @media(max-width: 768px) {
            width: 100%;
        }
    }

    p {
        color: #ffff;
        width: 70%;
    }

    h1 {
        font-size: 1.6em !important;
        white-space: normal !important;
    }

    .links-container {
        display: flex;
        justify-content: space-evenly;
        width: 80%;

        @media(max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }

        a {
            text-decoration: none;
            color: inherit;
        }
        
        svg {
            color: inherit;
            margin-right: 6px;
        }

        div {
            display: flex;
            align-items: center;
            font-size: 1.2em;
            color: #fff;
            transition: color 0.5s;

            &:hover {
                color: #a5a5a5
            }
        }
    }
`