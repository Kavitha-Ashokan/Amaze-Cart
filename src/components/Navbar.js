import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import logo from "../images/shopping.svg"
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import {useHistory} from 'react-router-dom'
import {auth} from '../config/config'
import { CartContext } from '../global/CartContext'

export const Navbar = ({user}) => {

    const {totalQty} = useContext(CartContext);

    const history = useHistory();

    const logout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }
    return (
        <div className="navbox">
            <div className="leftside">
                <img src={logo} alt=""/>
            </div>
            <h1 className="navbox-head">Amaze Cart</h1>
            {console.log(user)}
           {!user && <div className="rightside">
                <Link to="signup" className="navlinks">SignUp</Link>
                <Link to="login" className="navlinks">LogIn</Link>
            </div>}
            {user&&<div className="rightside">
                <span><Link to="/" className="navlink">{user}</Link></span>
                <span><Link to="cartproducts"><Icon icon={cart}/></Link></span>
                <div className="relative"><span className="no-of-products">{totalQty}</span>
                </div>
                <span><button className="logout-btn" onClick={logout}>LOGOUT</button></span>
                </div>}
        </div>
    )
}
