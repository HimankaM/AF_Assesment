const users=require('../dal/index').db('store').collection('user');
const ObjectId=require('mongodb').ObjectId;

const save =async({name,email,role,password})=>{
    const result =await users.insertOne({name,email,role,password});
    console.log(result);
    return result;
}

const getAll=async()=>{
    const cursor =await users.find();
    return cursor.toArray();
}

const getById=async(id)=>{
    return await users.findOne({_id:ObjectId(id)});
}

const update=async(id,{name,email,role,password})=>{
    const result=await users.replaceOne({_id:ObjectId(id)},{name,email,role,password});
    return result.ops[0];
}

const removeById=async id=>{
    await users.deleteOne({_id:ObjectId(id)});
}
module.exports={getAll,getById,removeById,save,update};