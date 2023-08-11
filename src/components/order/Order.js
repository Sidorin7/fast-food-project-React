import BtnOrder from '../btnOrder/BtnOrder';
import './order.css';

import burger from './burger.png'

const Order = () => {
    return ( 
        <section className="order">
      <div className="container">
        <img src={burger} alt="" className="order__img"/>

        <div className="order__text">
          <h3 className="order__title">Burger King</h3>
          <p className="order__desc">Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.</p>
          <span className="order__price">$6</span>
          <span className="order__price order__price--old">$8</span>
          <BtnOrder/>
        </div>
      </div>
    </section>
     );
}
 
export default Order;