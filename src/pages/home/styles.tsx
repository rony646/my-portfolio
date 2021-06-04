import stlyed from 'styled-components';

export const Container = stlyed.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 40px;
    top: 80px;
    
    @media(max-width: 768px) {
        top: 10px;
        // background: green;
    }
   
    
    h1 {
        color: #149021;
        font-size: 2.3em;
    }

    a, h1 {
        color: #149021;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
       
        &:hover {
            color: #046b0c97;
        }
    }

    h2, p {
        color: #fff;
    }

    p {
        width: 40%;
        text-align: left;

        @media(max-width: 768px) {
            width: 70%;
        }
    }

    a {
        font-size: 1.4em
    }
`