import React, { useState, useEffect } from 'react'
import { Container } from './styled';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png'
import Cart from '../../img/shopping_cart_white_24dp.svg'
import { getFirestore } from "../../services/firebase";

const Navbar = () => {
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const db = getFirestore();
      try {
        const itemsCollection = db.collection(`categories`);
        const itemSnapshot = await itemsCollection.get();
        const cats = itemSnapshot.docs.map((doc) => {
          return { catId: doc.id, ...doc.data() };
        });

        setCategories(cats);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
        <img className="logo" src={Logo} />
        <nav>
            <ul>
                <li>
                    <a>
                        <Link to={`/`}>Home</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <Link to={`/shop`}>Shop</Link>
                    </a>
                </li>
                {!loading &&
                    categories.map(({ catId, name }) => (
                    <li>
                        <Link to={`/category/${catId}`}>{name}</Link>
                    </li>
                    )
                )}
                <li>
                    <a>
                        <Link to={`/checkout`}><img className="imgSociales" src={Cart} /></Link>
                    </a>
                </li>
            </ul>
        </nav>
    </Container>
  );
};

export default Navbar;