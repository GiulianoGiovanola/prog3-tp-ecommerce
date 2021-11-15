import React from 'react'
import { Footer as ContainerFooter } from './styled';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png'
import Facebook from '../../img/icons8-facebook-rodeado-de-círculo.svg'
import Instagram from '../../img/icons8-instagram.svg'
import Whatsapp from '../../img/whatsapp_white_24dp.svg'
import Legal from '../../img/description_white_24dp.svg'
import Send from '../../img/local_shipping_white_24dp.svg'


const Footer = () => {
    return (
        <ContainerFooter>
            <div className="logo">
                <img className="logo" src={Logo} />
            </div>
            <nav>
                <h3>Encontranos en</h3>
                <ul>
                    <li><Link to={`/facebook`}><img className="imgSociales"  src={Facebook} />Coffee Station</Link></li>
                    <li><Link to={`/instagram`}><img className="imgSociales"  src={Instagram} />CoffeeStation</Link></li>
                    <li><Link to={`/whatsapp`}><img className="imgSociales" src={Whatsapp} />+54 11 2345-6789</Link></li>
                </ul>
            </nav>
            <nav>
                <h3>Te puede interesar</h3>
                <ul>
                    <li><Link to={`/legales`}><img className="imgSociales" src={Legal}/>Legales</Link></li>
                    <li><Link to={`/envio`}><img className="imgSociales" src={Send}/>Metodos de envío</Link></li>
                </ul>
            </nav>
        </ContainerFooter>
    )
}

export default Footer
