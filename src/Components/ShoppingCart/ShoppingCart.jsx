import React from 'react';
import styles from './shopping.module.scss'
import {connect} from 'react-redux'
import {addedBeveragesInCart, removeBeveragesInCart} from '../../actions'

const RenderRow = ({id, name, count,total, index,onIncrease, removeBeveragesInCart}) => {
    return (
      <tr >
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>$ {total}</td>
        <td>
          <button className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
          <button className="btn btn-outline-success btn-sm float-right"  >
            <i className="fa fa-plus-circle" onClick={() => onIncrease(id)} />
          </button>
          <button className="btn btn-outline-warning btn-sm float-right" >
            <i className="fa fa-minus-circle" onClick={() => removeBeveragesInCart(id)}/>
          </button>
        </td>
      </tr>
    )
  }

const ShoppingCart = ({cartItems, totalPrice,onIncrease,removeBeveragesInCart}) => {
    return (
        <div className={styles.shoppingCartTable}>
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
            {/* <RenderRow/> */}
          {cartItems.map((item, index) => {
            return <RenderRow {...item} key={item.id} index={index}
            onIncrease={onIncrease}
            removeBeveragesInCart={removeBeveragesInCart}
            />
          })}
        </tbody>
      </table>

      <div className={styles.total}>
        Total: ${totalPrice}
      </div>
    </div>
    );
};

const mapStateToProps = ({beverage:{cartItems,totalPrice}}) => {
    return {
        cartItems,
        totalPrice
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      onIncrease: (id) => dispatch(addedBeveragesInCart(id)),
      removeBeveragesInCart: (id) => dispatch(removeBeveragesInCart(id))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps) (ShoppingCart);