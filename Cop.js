import React from 'react'
import './CheckoutPro.css'

// import StarIcon from '@material-ui/icons/Star';




function Cop({id, image, title , price,size,date,time}) {
    
    
    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct_imagecont">
                <img className="checkoutProduct_image" src={image} alt="product_image"/>
            </div>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>

                <p className="checkoutProduct_price"><strong>&#8377; {price}</strong></p>

                {/* <div className="checkoutProduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <StarIcon/>
                    ))}
                    </div> */}
            </div>
            <div className="moreinfo">
                Size:
                <p>Age: {size.age}-{size.age+1}</p>
                <p>length: {size.length}</p>
                <p>waist: {size.waist}</p>
            </div>
            <div className="del_info">
                Ordered On:
                <p>{date}</p>
                <p>{time}</p>
            </div>

            
        </div>
    )
}

export default Cop
