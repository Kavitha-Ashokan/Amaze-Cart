import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {Home} from './components/Home'
import {ProductsContextProvider} from './global/ProductContext';
import { Signup } from './components/Signup';
import {Login} from './components/Login';
import {auth,db} from './config/config';
import { CartContextProvider } from './global/CartContext';
import { Cart } from './components/Cart';


class App extends Component {
  state={
    user:null
  }
  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      if(user){
        db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot=>{
          this.setState({
            user:snapshot.data().Name
          })
        })
      }
      else{
        this.setState({
          user:null
        })
      }
    })
  }
  render() {
    return (
      <ProductsContextProvider>
        <CartContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={()=><Home user={this.state.user}/>} />
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/cartproducts" component={()=><Cart user={this.state.user}/>}/>
        </Switch>
      </Router>
      </CartContextProvider>
      </ProductsContextProvider>
    )
  }
}

export default App
 