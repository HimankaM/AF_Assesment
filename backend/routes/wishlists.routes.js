const Router=require("@koa/router");
const {createwishlist,getwishlist,getwishlists,updatewishlist,deletewishlist}=require('../api/wishlist.api');
const router=new Router({
    prefix:'/wishlists'
})

router.get('/',async ctx=>{
    ctx.body=await getwishlists();
})
router.post('/',async ctx=>{
    let wishlist =ctx.request.body;
    wishlist=await createwishlist(wishlist);
    ctx.response.status=200;
    ctx.body=wishlist;
})

router.get('/:id',async ctx=>{
    const id=ctx.params.id;
    ctx.body=await getwishlist(id);
})

router.delete('/:id',async ctx=>{
    const id=ctx.params.id;
    await deletewishlist(id);
})
router.put('/:id',async ctx=>{
    const id=ctx.params.id;
    let wishlist=ctx.request.body;
    wishlist=await updatewishlist(wishlist);
    ctx.responce.status=200;
    ctx.body=wishlist;
})

module.exports=router;