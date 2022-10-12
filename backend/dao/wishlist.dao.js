const wishlists=require('../dal/index').db('store').collection('wishlist');
const ObjectId=require('mongodb').ObjectId;

const save =async({name,description,price})=>{
    const result =await wishlists.insertOne({name,description,price});
    console.log(result);
    return result;
}

const getAll=async()=>{
    const cursor =await wishlists.find();
    return cursor.toArray();
}

const getById=async(id)=>{
    return await wishlists.findOne({_id:ObjectId(id)});
}

const update=async(id,{name,description,price})=>{
    const result=await wishlists.replaceOne({_id:ObjectId(id)},{name,description,price});
    console.log(result);
    return result;
}

const removeById=async id=>{
    await wishlists.deleteOne({_id:ObjectId(id)});
}
module.exports={getAll,getById,removeById,save,update};