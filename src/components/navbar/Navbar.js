import './navbar.css'
import logo from '../../img/icons/logo.png'
import BtnOrder from '../btnOrder/BtnOrder';

const Navbar = () => {
    return (
        <header className="header">
        <div className="container">
          <img src={logo} alt="Логотип" className="header__logo"/>
    
          <nav className="header__nav">
            <ul className="header__list">
              <li><a className="active" href="#!">HOME</a></li>
              <li><a href="#!">PAGES</a></li>
              <li><a href="#!">OUR OFFER</a></li>
              <li><a href="#!">PRICING</a></li>
              <li><a href="#!">SHOP</a></li>
            </ul>
          </nav>
    
          <BtnOrder/>
        </div>
      </header>
      );
}
 
export default Navbar;