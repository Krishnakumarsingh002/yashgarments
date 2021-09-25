import React from 'react'
import './CheckoutPro.css'
// import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';



function CheckoutPro({id, image, title , price,size}) {
    
    const [{} , dispatch] = useStateValue();

    const removeFromCart = () => {

        dispatch({
            type:  "REMOVE_FROM_CART",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct_imagecont">
                <img className="checkoutProduct_image" src={image} alt="product_image"/>
            </div>

            <div className="checkoutProduct_info">
                {title}
                <br></br>
                <small>&#8377;</small> {price}

                {/* <div className="checkoutProduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <StarIcon/>
                    ))}
                </div> */}
                <p>Size:</p>
                {(size.age) ? <p>Age: {size.age}-{size.age+1}</p> : ""}
                {(size.length) ? <p>Length: {size.length} in</p> : ""}
                {(size.waist) ? <p>Waist: {size.waist} in</p> : ""}
                {(size.chest) ? <p>Waist: {size.chest} in</p> : ""}
                {(size.number) ? <p>Number: {size.number}</p> : ""}
                <button onClick={removeFromCart}>Remove from Basket</button>
                

            </div>

            
        </div>
    )
}

export default CheckoutPro
