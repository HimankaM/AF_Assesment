import React, {Component} from "react";


function NewAccountNav () {

    return (
        <div>
            <header>
                <a href="/customer"><h1>Shopping</h1></a>
            </header>

            <div>

                <a href="/c" role="button">Create Customer Account</a>
                <br/>
                <a href="/createtarder" role="button">Create Trader Account</a>
                <br/>
                <a href="/customer/wishlist" role="button">Wishlist</a>
                <br/>
                <a href="/customer/cart" role="button">Cart</a>
            </div>

        </div>
    );
}

export default NewAccountNav;