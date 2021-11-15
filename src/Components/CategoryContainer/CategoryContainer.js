import React, { useState, useEffect } from 'react'
import { Grid, Col } from '../Grid'
import { Container } from './styled'
import ProductCard from '../ProductCard/ProductCard'
import { getFirestore } from '../../services/firebase'
import Cafe from '../../img/coffee.gif'

const CategoryContainer = ({ catId }) => {
    //Aca vamos a incluir nuestra logica de fetch a firebase
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            try {
                const db = getFirestore()
                const productsCollection = db.collection(`products`)
                const productsSnapshot = catId ?
                    await productsCollection.where('categories', '==', catId).limit(8).get()
                    :
                    await productsCollection.orderBy('price', 'desc').limit(20).get();

                const products = productsSnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(products)
                setLoading(false)
            } catch (error) {
                console.log('Error', error)
            }
        }
        getProducts()
    }, [catId])

    return (
        <Container>
            {loading ? (
                <img className="gif" src={Cafe} />
            ) : (
                <Grid rowGap={30} colGap={30}>
                    {products.map(({ name, image, description, id }, index) =>
                        <Col desktop={3} tablet={6} mobile={12} key={index}>
                            <ProductCard name={name} image={image} description={description} id={id} />
                        </Col>
                    )}
                </Grid>
            )}

        </Container>
    )
}

export default CategoryContainer
