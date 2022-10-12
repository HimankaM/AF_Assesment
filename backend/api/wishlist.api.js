const {getAll,getById,save,update,removeById}=require('../dao/wishlist.dao');

const createwishlist=async({name,description,price})=>{
    const wishlist={
        name,
        description,
        
        price
    }
    return await save(wishlist);

}

const getwishlists=async()=>{
    return await getAll();
}

const getwishlist=async id=>{
    return await getById(id);
}

const deletewishlist=async id=>{
    return await removeById(id);
}

const updatewishlist=async(id,{name,description,price})=>{
    const wishlist={
        name,
        description,
        
        price
    }
    return await update(id,{wishlist});
}
module.exports={
    createwishlist,
    getwishlist,
    getwishlists,
    deletewishlist,
    updatewishlist
}