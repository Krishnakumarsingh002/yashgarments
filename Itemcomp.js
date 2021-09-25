import React,{useState} from 'react';
import MoneyIcon from '@material-ui/icons/Money';
import "./Itemcomp.css"
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { useStateValue } from './StateProvider';

export default function Itemcomp() { 
    const [{itempage}, dispatch] = useStateValue();
    const [side,setSide]= useState(false);
    const [currimg,setcurrimg] = useState(itempage.image);
    const [size,setsize] = useState({})

    const addToCart = () => {
        //dispatch the item into the data layer
        setSide(true);
        setTimeout(() => {setSide(false)},2000);
        console.log(size)


        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: itempage.id,
                title: itempage.title,
                image: itempage.image,
                price: itempage.price,
                size: size,
            },
        });
    }
    const backtohome = () => {
        dispatch({
            type: 'REMOVE_FROM_PAGE',
            itempage: null,
        })
    }


    return (
    <>
        { (side) ?
            <div className="side_pop">
                <p>Item Added Succesfully!</p>
            </div> : ""

        }
        
        <div className="newproduct">
            <div className="item_container">
                <div className="left_col">
                    <div className="swiper">
                        <img onClick={()=>{setcurrimg((itempage.image))}} src={itempage.image}  alt="imgoftshirt"/>
                        {
                            itempage.otherimg.map((ur) => (

                                <img  onClick={() =>{setcurrimg(ur)}}src={ur}  alt="imgoftshirt"/>
                            ))
                        }
                        
                        
                       
                        
                    </div>
                    <div className="mainimg">
                    <img src={currimg}  alt="imgoftshirt"/>
                        
                    </div>
                </div>
                <div className="right_col">
                   <div className="title">
                       <h4>{itempage.title}</h4>
                       <div className="back_btn">
            <button onClick = {backtohome}>BACK</button>
        </div>
                   </div>
                   
                   <div className="pricebox margin">
                   <span style={{fontSize: "25px",fontWeight: "600", color:"rgb(54, 134, 17)"}}>
                       ₹{itempage.price} &nbsp;</span><span>
                           <strike style={{fontSize: "20px",fontWeight: "100",color: "rgb(148 ,139, 139)"}}>
                           ₹{((itempage.price*5)/3).toFixed()}</strike>
                               </span>
                   <span style={{fontSize: "17px",fontWeight: "600", color:"rgb(247, 147, 22)"}}>&nbsp;40% Off</span>
                   </div>

                   <div className="sizearr">
                       Select a size:
                       <ul>
                      { itempage.size.map((ele)=>(
                          <li className={(size===ele) ? "clicked" : "mclass"} onClick={()=>{setsize(ele)}}>
                              <div className="size_box">
                                  {(ele.age) ?<span>Age: {ele.age}-{ele.age+1}</span> : ""}
                                  {(ele.length) ? <p>Length: {ele.length} inches</p> : ""}
                                  {(ele.toplength) ? <p>Top-Length: {ele.toplength} inches</p> : ""}
                                  {(ele.topchest) ? <p>TopChest: {ele.topchest} inches</p> : ""}
                                  {(ele.lowlength) ? <p>Lower-Length: {ele.lowlength} inches</p> : ""}
                                  {(ele.lowwaist) ? <p>Lower-Waist: {ele.lowwaist} inches</p> : ""}
                                  {(ele.chest) ? <p>Chest: {ele.chest} inches</p> : ""}
                                  {(ele.waist) ? <p>Waist: {ele.waist} inches</p>: ""}
                                  {(ele.number) ? <p>Number: {ele.number}</p>: ""}
                              </div>

                          </li>
                       ))  
                       }                    
                       </ul>
                   </div>
                   <div className="isinStock">
                       <h4 style={{color: "blue"}}> In Stock</h4>
                   </div>
                   <div className="free">
                        <LocalShippingIcon className= "margin" style={{color: "brown",display: "inline"}}/>
                        <span>Free Delivery</span> 
                   </div>
                   <div className="cod margin">
                       <MoneyIcon/><span>Cash On Delivery Available</span>
                   </div>
                   <ul className="ab">
                       <li><button onClick={addToCart} className="atc"><ShoppingCartIcon className="shoppingcart"/>ADD TO CART</button></li>
                       <li><button className="bn"><FlashOnIcon className="shoppingcart"/>BUY NOW</button></li>
                   </ul>
                </div>
            </div>
        </div>
        </>
    )}