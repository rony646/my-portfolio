import stlyed from 'styled-components';

export const Container = stlyed.div`
    h1 {
        color: #149021;
        width: 500px;
        font-size: 2.3em;
    }

    a, h1 {
        color: #149021;
        font-weight: bold;
    }

    h2, p {
        color: #fff;
    }

    p {
        width: 600px;
        text-align: left;
    }

    a {
        font-size: 1.4em
    }
`