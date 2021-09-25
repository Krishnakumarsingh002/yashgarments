import React from 'react'
import "./Checkout.css"
import {Link} from 'react-router-dom'
import Subtotal from "./Subtotal"
import { useStateValue } from "./StateProvider";
import CheckoutPro from './CheckoutPro';

export default function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <>
            <div className="checkout">
                <div className="checkout_content">
                    <div className="left">
                        <div className="head flexpro">
                            <div className="heading ">
                                <h5>My Cart({basket.length})</h5>
                            </div>
                            <div className="box2">
                                <div className="delivery flexpro">
                                    <p>Deliver to : <strong>Pincode -: </strong> </p>
                                    <input placeholder="Enter Delivery Pincode" className="pincode" type="text" />
                                    <button className="check">Check</button>
                                </div>
                            </div>
                        </div>
                        { (basket.length > 0) ? 
                            
                        <>
                            <div className="product_list">
                                {basket.map((item) => (
                                    <CheckoutPro
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        size={item.size}
                                    />
                                ))}


                            </div>
                            
                        </>
                              : <div style={{margin: "auto", color: "darkgray"}}>
                                 <h2 style={{fontWeight :"400"}}>Cart Empty</h2>
                             </div> }
                    </div>

                    <div className="right">
                        <Subtotal basket={basket} />
                        {
                            (basket.length) ? 
                    <div className="placeorder">
                        <Link to="/payment">
                                <button>Proceed to Checkout</button>
                        </Link>
                    </div>:""
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
