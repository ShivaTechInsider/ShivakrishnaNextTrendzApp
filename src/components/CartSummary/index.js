// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './index.css'

class CartSummary extends Component {
  state = {totalPrice: 0}
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          let sum = 0
          cartList.map(
            eachCartItemObject =>
              (sum =
                sum + eachCartItemObject.quantity * eachCartItemObject.price),
          )
          return (
            <div>
              <h1 className="">Order Total:{sum}</h1>
              <p>{cartList.length} Items in cart</p>
              <Link to="/bill">
                <button className="checkOutBtn">Checkout</button>
              </Link>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default CartSummary
