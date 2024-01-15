const studmodal = require('./modal')

const adduser = async(req,res)=>{
    const { fname,lname,roll_no}=req.body
    try{
        const data = new studmodal({
            fname,lname,roll_no
        })
        const userdata=await data.save()
        res.send({userdata})
    }
    catch(err){
        res.send(err)
    }



}

module.exports={adduser}