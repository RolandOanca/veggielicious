
import CartContext from '../../store/cart-context';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Cart.module.css';
import close from "../../assets/close.svg";

import { useCart } from 'react-use-cart';
import { Container, Row, Col, Image } from 'react-bootstrap';


const Cart = (props) => {
  const {
    isEmpty,
    totalUniqueItems,
    items, 
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem, 
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1>Your Cart is Empty</h1>
  return (
    <div>
      <Container>
        <Row>
          {items.map((item, id) => {
            return (
              <Col sm={12} key={item.id}>
                <div className={classes.card}>
                  <div className={classes.menu_item}>
                    <Image src={item.image} fluid className={classes.menu_img}/>
                  </div>
                  <div className={classes.menu_item_inner}>
                    <div className="py-1"></div>
                    <h3 className="text-center mt-3 px-2">{item.name}</h3>
                    <h3 className="pb-3 text-center">Price: <b>{item.price}</b></h3>
                    <div className="d-flex justify-content-center">
                    <button className={classes.cart_btn} onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                    <button className={classes.cart_btn} onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <div className="py-4"></div>
                    <button className={classes.cart_btn_remove} onClick={() => removeItem(item.id)}><Image src={close}/></button>
                    <h2 className={classes.total_items}><small>items:</small> {totalItems}</h2>
                  </div>
                </div>
            </Col>
            )
          })}
          
        </Row>
      </Container>
    </div>
  )
  
}

export default Cart;



