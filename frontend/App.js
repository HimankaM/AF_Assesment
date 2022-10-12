import React from "react";
import Main from "./components/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductsViewCustomer from "./components/ProductsViewCustomer";
import AddToCart from "./components/AddToCart";
import CartListview from "./components/CartListView";
import AddToWishList from "./components/AddToWishList";
import WishListview from "./components/WishListView";
import CreateCustomer from "./components/CreateCustomer";
import CreateTrader from "./components/CreateTrader";
import ProductsViewTrader from "./components/ProductsViewTrader";
import ProductsViewCustomer from "./components/ProductsViewCustomer";
import ViewCustomers from "./components/ViewCustomers";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";



function App() {
    return (
        <BrowserRouter>
            <div>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Main/>}/>

                    <Route exact path="/customer" element={<ProductsViewCustomer/>}/>
                    <Route exact path="/cart/:id" element={<AddToCart/>} />
                    <Route exact path="/customer/cart" element={<CartListview/>}/>
                    <Route exact path="/wishlist/:id" element={<AddToWishList/>} />
                    <Route exact path="/customer/wishlist" element={<WishListview/>}/>
                    <Route exact path="/createcustomer" element={<CreateCustomer />} />
                    <Route exact path="/createtrader" element={<CreateTrader />} />
                    <Route exact path="/trader" element={<ProductsViewTrader />} />
                    <Route exact path="/admin/viewcustomers" element={<ViewCustomers />} />
                    <Route exact path="/addproduct" element={<AddProduct />} />
                    <Route exact path="/admin/update/:id" element={<UpdateProduct/>} />

                    {/*<Route path="/product/:slug" element={<ProductView/>}/>*/}
                </Routes>
            </div>
        </BrowserRouter>



        );
}

export default App;

