import styled from 'styled-components'

const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

border-radius: 10px;
background-color: #fff;
color: #000;
padding: 1em 0 0;

img{
    width: 60%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 1em 0;
}

.contenedor{
    padding: 0 0.5em 2em;
    text-align: center;
    padding: 0 0.5em;
}

h2{
    font-size: 20px;
}

p{
    font-size: 15px;
    margin-bottom: 1.5em;
}

.buttonView{
    text-decoration: none;
    background-color: #fa2b57;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 100%;
    height: 7vh;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
}
`

export {Container}