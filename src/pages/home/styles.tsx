import stlyed from 'styled-components';

export const Container = stlyed.div`
    display: flex;
    
    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        // background: #53a85856;

        @media(max-width: 1024px) {
            display: none;
            width: 0%;
        }
    }

    .content-container {
        // background: #ff000057;
        position: relative;
        display: flex;
        flex-direction: column;
        // background: #8080804c;
        justify-content: center;
        aling-items: center;
        width: 50%;
        height: 100vh;
        box-sizing: border-box;
        padding-left: 120px;
        
        @media(max-width: 768px) {
            justify-content: flex-start;
            padding-left: 40px;
        }

        @media(max-width: 1024px) {
           width: 100%;
        }

        ul {
            list-style: none;
            // background: gray;
            padding: 0;
        
            li {
                display: inline-block;
                margin-right: 20px;
                a {
                    text-decoration: none;
                    color: #fff;

                    i {
                        font-size: 1.5em
                    }

                    span {
                        img {
                            height: 1.5em
                        }
                    }
                }
            }
        }

        
       
        
        h1 {
            color: #15b325;
            font-weight: bold;
            transition: color 0.3s;
            color: #15b325;
            font-size: 2.5em;
            
            &:hover {
                color: #05811096;
            }
             
            @media(max-width: 768px) {
               font-size: 2.3em;
            }
        }
    
        h2, p {
            color: #fff;
            transition: color 0.3s;
    
            &:hover {
                color: #c4c3c3;
            }
        }
        
        h2 {
            margin: 0;
            margin-top: 0px;
        }
    

        p {
            width: 60%;
            text-align: left;
    
            @media(max-width: 768px) {
                width: 70%;
            }
        }
    
        a {
            margin-top: 20px;
            font-size: 1.7em
        }

    }
   
`