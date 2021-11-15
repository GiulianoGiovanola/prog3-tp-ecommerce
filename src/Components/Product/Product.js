import React from 'react'
import { Container } from './styled'
import { Grid, Col } from '../Grid/index'

const Product = ({ prodId, product, addToCart }) => {

    return (
        <Container>
            <Grid>
                <Col desktop={6} tablet={6} mobile={12}>
                    <div className="contInfo">
                        <h1>{product.name}</h1>
                        <p><strong className="subtitulos">Round and Balanced:</strong> {product.description}</p>
                        <p><strong className="subtitulos">Size of Cup:</strong> {product.size}</p>
                        <p><strong className="subtitulos">Aromatic profile:</strong> {product.aromatic}</p>
                        <button onClick={() => addToCart({...product, quantity:1})}>Add to cart</button>  
                    </div>
                </Col>
                <Col desktop={6} tablet={6} mobile={12}>
                    <img src={product.image} alt={product.name} />
                </Col>
            </Grid>
        </Container>
    )
}

export default Product