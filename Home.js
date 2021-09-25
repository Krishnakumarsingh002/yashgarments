import React,{useState,useEffect} from 'react';
import Header from './Header';
import Product from "./Product";
import { db } from './firebase';
import firebase from './firebase';
import {useStateValue} from "./StateProvider"

import Itemcomp from './Itemcomp';

import './Home.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


export default function Home() { 
    const [{itempage}, dispatch] = useStateValue();
    const [loading,setloading] = useState(false);
    const [path,setPath] = useState("");
    const [itpage,setitpage] = useState(false);
    const [products,setProducts] = useState([]);
    const [bigproducts,setbigProducts] = useState([]);
    
    const ref = firebase.storage().ref();    
    const [banners,setbanners] = useState([])
    

    useEffect( ()=>{

        // .doc('items')
        // .collection('Jeans')
        if(path !== ""){
            setloading(true);
          db
          .collection(`${path}`)
          .onSnapshot( (snapshot) =>  (
               setProducts(snapshot.docs.map(doc =>(
                  {id: doc.id,
                  data: doc.data()}
          )))
          ))
          setloading(false);
        }
          db
          .collection('banners')
          .doc('banners')
          .get()
          .then((snapshot) => { 
              
              setbanners(snapshot.data().banarr)
            })
        //     setInterval(() => {
        //         const f = lft;
        //         setlft((f-100));
        //     }, 4000);
        },[path]);
    return (
        <div>
            <Header/>
            {
            (itempage == null) ? 
            <>
            
            <div className="menu_bar">
                <ul className="menu_list">
                    <li><span>Kids - Boys (0-8 years) <KeyboardArrowDownIcon className="kb" /></span>
                    <div className="submenu_1">
                    <ul>
                        <li onClick={()=>{setPath("BoyKids/items/T-shirt")}}>T-Shirt</li>
                        <li onClick={()=>{setPath("BoyKids/items/Shirt")}}>Shirt</li>
                        <li onClick={()=>{setPath("BoyKids/items/Jeans")}}>Jeans Pants</li>
                        <li onClick={()=>{setPath("BoyKids/items/CombinedSets")}}>Combined Sets</li>
                        <li onClick={()=>{setPath("BoyKids/items/Shorts")}}>Shorts (Necker)</li>
                        <li onClick={()=>{setPath("BoyKids/items/tshirtjacket")}}>T-shirt with Jacket</li>
                        <li onClick={()=>{setPath("BoyKids/items/hoodie")}}>Hoodie</li>
                    </ul>
                    </div>
                    </li>
                    <li><span>Kids - Girls (0-8 years) <KeyboardArrowDownIcon className="kb"/></span>
                    <div className="submenu_1">
                    <ul>
                        <li onClick={()=>{setPath("GirlKids/items/Jeans")}}>Jeans Pants</li>
                        <li onClick={()=>{setPath("GirlKids/items/Frock")}}>Frock</li>
                        <li onClick={()=>{setPath("GirlKids/items/SkirtTopSet")}}>Skirt Top Sets</li>
                        <li onClick={()=>{setPath("GirlKids/items/JeansTopSet")}}>Jeans Top Sets</li>
                        <li onClick={()=>{setPath("GirlKids/items/Dungaree")}}>Dungaree</li>
                    </ul>
                    </div>
                    </li>
                   
                    <li><span>Boys <KeyboardArrowDownIcon className="kb"/></span>
                    <div className="submenu_1">
                    <ul>
                        <li onClick={()=>{setPath("Boys/items/T-shirt")}}>T-Shirt</li>
                        <li onClick={()=>{setPath("Boys/items/Shirt")}}>Shirt</li>
                        <li onClick={()=>{setPath("Boys/items/Jeans")}}>Jeans Pants</li>
                        <li onClick={()=>{setPath("Boys/items/lower")}}>Lower</li>
                    </ul>
                    </div>
                    </li>
                
                    
                    <li><span>Girls <KeyboardArrowDownIcon className="kb"/></span>
                    <div className="submenu_1">
                    <ul>
                        <li onClick={()=>{setPath("Girls/items/Top")}}>Tops</li>
                        <li onClick={()=>{setPath("Girls/items/Shirt")}}>Shirt</li>
                        <li onClick={()=>{setPath("Girls/items/Shirt")}}>Jeans Pants</li>
                        <li onClick={()=>{setPath("Girls/items/Shirt")}}>Combined Sets</li>
                    </ul>
                    </div>
                    </li>
                   
                </ul>
            </div>
            
            <div className="bannercont">
                {/* {console.log(lft)} */}
                
            <div className="banner" >
                {/* {console.log(trans)} */}
                { banners.map((b)=> (
               <img src={b} alt="afdfdf" />
               
               ))
            }
               
            </div>               
            </div>
            <div className="afterheader"> 
                <div className="block">
                    <ul className= "list">
                    {
                        (loading) ? 
                        <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/10/loadi
                        ng-screen-featured-image.jpg" alt = "loading please wait"/> :
                        products.map((pro) => {
                            return <li><Product id={pro.id} 
                            title={pro.data.title} 
                            price={pro.data.price}
                             image={pro.data.fileUrl} 
                             key={pro.id} 
                             size={pro.data.size}
                             otherimg={pro.data.otherurl}
                             /></li>
                        })      
                    }

                        </ul>    
                </div>
            </div>
            </>
             : <Itemcomp/>}


        </div>
    )

}
