const koa =require('koa');
const bodyParser=require('koa-bodyparser');
const productRoutes=require('./routes/products.routes');
const userRoutes=require('./routes/user.routes');
const wishlistRoutes=require('./routes/wishlists.routes');
const cartRoutes= require('./routes/cart.routes')
const cors = require('@koa/cors');

const app=new koa();
app.use(cors());
app.use(bodyParser());
app.use(productRoutes.routes()).use(productRoutes.allowedMethods());
app.use(userRoutes.routes()).use(userRoutes.allowedMethods());
app.use(wishlistRoutes.routes()).use(wishlistRoutes.allowedMethods());
app.use(cartRoutes.routes()).use(cartRoutes.allowedMethods());

app.listen(8000);
console.log("Application is running on port 8000");