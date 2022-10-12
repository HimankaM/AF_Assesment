import React, {Component} from "react";
import NewAccountNav from "./NewAccountNav";



function ProductFeed () {
    return (
        <div>
            <h1>WELCOME</h1>
           <br/><br/>
            <NewAccountNav/>
            <br/><br/>
            <a href="/customer" role="button">Buy</a>
            <br/><br/>
            <a href="/trader" role="button">Sell</a>
        </div>
    );
}

export default ProductFeed;