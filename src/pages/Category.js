import React from 'react'
import { useParams } from 'react-router-dom'
import CategoryContainer from '../Components/CategoryContainer/CategoryContainer'
import Footer from '../Components/Footer/Footer'

const Category = () => {

    const {catId} = useParams()

    return (
        <div>
            <CategoryContainer catId={catId || null}/>
            <Footer/>
        </div>
    )
}

export default Category
