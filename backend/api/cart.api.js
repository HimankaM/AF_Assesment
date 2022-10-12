const {getAll,getById,save,update,removeById}=require('../dao/cart.dao');

const createProduct=async({name,description,qty,price})=>{
    const product={
        name,
        description,
        qty,
        price
    }
    return await save(product);

}

const getProducts=async()=>{
    return await getAll();
}

const getProduct=async id=>{
    return await getById(id);
}

const deleteProduct=async id=>{
    return await removeById(id);
}

const updateProduct=async(id,{name,description,qty,price})=>{
    const product={
        name,
        description,
        qty,
        price
    }
    return await update(id,{product});
}
module.exports={
    createProduct,
    getProduct,
    getProducts,
    deleteProduct,
    updateProduct
}