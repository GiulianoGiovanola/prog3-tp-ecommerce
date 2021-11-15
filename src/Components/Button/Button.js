import React from 'react'
import { Button as ButtonContainer} from './styled'
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <ButtonContainer>
            <a><Link to={`/shop`}>Buy our products now!</Link></a>
        </ButtonContainer>
    )
}

export default Button
