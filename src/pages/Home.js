import React, {useContext} from 'react'
import Cafe from '../img/cafe.png'
import { Container } from '../Components/Home/styled'
import Button from '../Components/Button/Button';

const Home = () => {

    return (
        <Container>
            
            <div>
                <h1>Step into the light</h1>
                <h3>with our special coffe flavours</h3>
                <Button/>
            </div>
            <img src={Cafe} />
            
        </Container>
    )
}

export default Home
