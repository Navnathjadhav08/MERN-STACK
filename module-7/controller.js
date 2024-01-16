const studmodel = require('./modal')

const adduser =async(req,res)=>{

    const{fname,lname,roll_no}=req.body

    try{
        const data=new studmodel({
            fname,lname,roll_no
        })
        const userdata=await data.save()
        res.send({userdata});
    }
    catch(err)
    {
        // console.log(err);
        res.send(err)
    }
}

const getdata=async(req,res)=>{
    try{
        const data=await studmodel.find()
        res.status(200).send({data})
    }
    catch(err){
        console.log(err);
        res.status(400).send(err)
    }
}

const updatedata1 =async(req,res)=>{
const{fname,lname,roll_no}=req.body

try{
        const data = await studmodel.updateOne(
            {fname:req.params.fname},
            {$set:{fname,lname,roll_no}}
        )
        if(data.modifiedCount>0){
            res.status(200).send(
                {msg:"data  updated Succesfully"}
            )
        }
        else{
            res.status(200).send(
                {msg:"data not updated Succesfully"}
            )
        }
    }
    catch(err)
    {
        // console.log(err);
        res.send(err)
    }
}
module.exports={adduser,getdata,updatedata1}