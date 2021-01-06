import React from 'react';

function Footer({user}){

return(
    <div className={`${user?'login':'footer-align'}`}>
        <center>
        <h6 className="footer-contact">Toll-Free 180040404 amazecart@gmail.com</h6>
        <h6 className="footer-site">© 2020-2021, www.amaze-cart.herokuapp.com</h6>
        </center>
    </div>
)
}
export default Footer;
