import React from 'react'
import { Container } from './styled'
import { Link } from 'react-router-dom'

const ProductCard = ({ name, image, description, id }) => {
    return (
        <Container>
            <img src={image} alt={name} />
            <div className="contenedor">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <Link className="buttonView" to={`/product/${id}`}>Buy now</Link>
        </Container>
    )
}
export default ProductCard
