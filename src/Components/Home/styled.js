import styled from 'styled-components'

const Container = styled.div`

display: flex;
justify-content: space-evenly;
align-items: center;
margin: 1em auto;
color: #333030;

img{
    width: 39%;
    min-height: 200px;
}

div{
    padding: 0 5em;

    h1{
        font-size: 50px;
        font-weight: 800;
        line-height: 10px;
    }
    h3{
        font-size: 30px;
        font-weight: 500;
        margin-bottom: 2em;
    }
}
`

export {Container}