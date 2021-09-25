import React, {useState} from 'react'
import HomeIcon from '@material-ui/icons/Home';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom"
import {useStateValue} from './StateProvider'
import './Header.css'
import Popup from "./Popup"



export default function Header() {

    const [{basket,user},dispatch] = useStateValue();
    const [buttonPop,setButtonPop] = useState(false);
    
    let usernam = "";
    if(user)
    {
        let id = user.displayName.indexOf(" ");
        usernam= user.displayName.substr(0,id); 
    }

    return (
        
        <div className="header_container">
            <div className="header_logo"><img src="https://image.freepik.com/free-vector/people-letter-y-initial-logo_8586-51.jpg" alt="headerlogo" /></div>
            <div className="menus white">
                <div className="home flex white hover padding">
                    <Link className="text-link flex " to="/">
                    <HomeIcon className="white" />
                    
                    <h5>Home</h5>
                    </Link>
                </div>
                <div className="others flex ">
                <Link className="text-link flex " to="/myorders">
                    <AddCircleOutlineIcon className="white" />
                    <h5>My Orders</h5>
                </Link>
                </div>
            </div>
            <div className="userdetails flex white">
                <div className="user flex ">
                    <PersonIcon className="white" />
                    <p>Hello,</p><h5>{(user) ? usernam : 'Guest'} </h5>
                </div>
                {(user) ? (                
                <div className="hover padding">
                <p className="log" onClick = {() => setButtonPop(true)}>LogOut</p>
                </div>

                ) : 
                <div  className= "hover">
                <Link className="text-link" to= "/login" >
                    <span className= "padding" >Log In</span>
                </Link>
                </div>
                }
                <Popup trigger={buttonPop} setTrigger= {setButtonPop}>
                    <p>Do you really want to Logout? </p>

                </Popup>
                    <Link className="text-link flex hover " to="/checkout"> 
                <div className="flex white padding">
                    <ShoppingCartIcon className="white" />
                    <h5>{basket.length}</h5>
                </div>
                    </Link>
            </div >
            </div>
            
            )
}
