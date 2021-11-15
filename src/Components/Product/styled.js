import styled from 'styled-components'

const Container = styled.div`

display: flex;
align-items: center;
width: 75%;
margin: 4em auto 0;
background-color: #fff;
padding: 2em;
height: 60vh;
border-radius: 15px;
box-shadow: 0px 10px 30px -2px rgba(0, 0, 0, 0.2);

img{
    width: 65%;
    margin: 0 auto;
    display: block;
    border-radius: 30px;
    min-height: 200px;
}

.contInfo{
    padding-left: 2em;
}

.subtitulos{
    font-weight: 600;
}

h1, p{
    color: #333030;
    margin: 0;
}

p{
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin: 1em 0 1em;
}

button{
    padding: 1em;
    font-family: 'Montserrat', 'Poppins', 'sans-serif'; 
    font-size: 14px;
    color: #fff;
    width: 100%;
    display: block;
    margin: 2em auto 0;
    background-color: #fa2b57;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
    font-weight: 600;
    text-transform: uppercase;
}
`

export {Container}