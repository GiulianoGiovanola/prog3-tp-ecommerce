import styled from 'styled-components';

const Footer = styled.footer`
    background-color: #333030;
    color: #fff;
    width: 100%;
    text-align: center;
    align-self: flex-end;
    display: flex;
    padding: 2em 0;

    .logo{
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 40%;
        }  
    }

    nav{
        width: 33%;

        h3{
            font-size: 18px;
            width: 36%;
            margin: 0 auto;
            text-align: left;
        }

        ul{
            padding: 0;

            li{
                list-style: none;
                line-height: 20px;
                padding: 0.75em 0;
                width: 36%;
                margin: 0 auto;
                text-align: left;

                a{
                    color: #fff;
                    text-decoration: none;
                    transition: color .5s;

                    .imgSociales{
                        padding-right: 0.5em;
                        width: 15%;
                        vertical-align: middle;
                        fill: #fa2b57;
                        
                    }
                }

                a:hover{
                    color: #fa2b57;
                }
            }
        }
    }
    
`

export { Footer }