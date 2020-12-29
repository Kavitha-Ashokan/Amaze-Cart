import React from 'react'
import "../css/Home.css"
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import { Navbar } from './Navbar'
import { Products } from './Products'
import AddProducts from './AddProducts';


export const Home = ({user}) => {
    return (
        <div className="wrapper">
            <Navbar  user={user}/>
            <Router>
                <Link to="/">Products</Link><br/>
                <Link to="/addproducts">Add Products</Link>
                <Switch>
                   <Route exact path="/" component={Products}/>
                    <Route exact path="/addproducts" component={AddProducts}/>
                </Switch>
            </Router>
        </div>
    )
}
