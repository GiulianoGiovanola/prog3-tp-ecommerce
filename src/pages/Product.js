import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { default as ProductComp } from "../Components/Product/Product";
import { CartContext } from "../Contexts/CartContext";
import { getFirestore } from "../services/firebase";
import { Container } from '../Components/pageProduct/styled'
import Cafe from '../img/coffee.gif'
import Exclamation from '../img/exclamation.svg'

const Product = () => {
  const { prodId } = useParams();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const addToCartWithFeedback = (product) => {
    addToCart(product);
    setShowNotification(product.name);
    setTimeout(() => {
        setShowNotification(false);
    }, 5000);
    
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const db = getFirestore();
      try {
        const itemsCollection = db.collection(`products`);
        const itemSnapshot = await itemsCollection.doc(prodId).get();
        if (!itemSnapshot.exists) {
          console.log("No matching documents.");
          return;
        }

        setProduct({ id: itemSnapshot.id, ...itemSnapshot.data() });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [prodId]);

  //Aca vamos a consultarle a firebase los datos de este producto usando el prodId

  return (
    <Container>
      {showNotification && <p className="productoAgregado"><img className="exclamation" src={Exclamation} />{`Product added to cart: ${showNotification}`}</p>}
      {loading ? (
        <img className="gif" src={Cafe} />
      ) : (
        <ProductComp
          prodId={prodId}
          product={product}
          addToCart={addToCartWithFeedback}
        />
      )}
    </Container>
  );
};

export default Product;