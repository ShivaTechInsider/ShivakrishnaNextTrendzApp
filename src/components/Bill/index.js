import {Component} from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './index.css'

class Bill extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value

          return (
            <div className="billBgContainer">
              <div className="headingsContainer">
                <h1 className="itemheadStyle">Item Name</h1>
                <h1 className="itemheadStyle">Item Id</h1>
                <h1 className="itemheadStyle">Quantity</h1>
                <h1 className="itemheadStyle">Price</h1>
                <h1 className="itemheadStyle">Gst</h1>
                <h1 className="itemheadStyle">GST+Price</h1>
              </div>
              {cartList.map(eachCartItemObject => (
                <div className="itemsDescContainer">
                  <p className="itemDescPara">{eachCartItemObject.title}</p>
                  <p className="itemDescPara">{eachCartItemObject.id}</p>
                  <p className="itemDescPara">{eachCartItemObject.quantity}</p>
                  <p className="itemDescPara">{eachCartItemObject.price}</p>
                  <p className="itemDescPara">5%</p>
                  <p className="itemDescPara">
                    {eachCartItemObject.price * eachCartItemObject.quantity +
                      eachCartItemObject.price *
                        eachCartItemObject.quantity *
                        0.05}
                  </p>
                </div>
              ))}
              <h1 className="totalPrice">Total Bill {}</h1>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Bill
