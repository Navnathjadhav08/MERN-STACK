const studmodal = require(`./studmodel`)

const adduser = async(req,res)=>{
    const {fname,lname,mobno}=req.body

    try{
        const data = new studmodel({
            fname,lname,mobno
        })
        const userdata = await data.save()
        res.send({userdata});

    }
    catch(err)
    {
        console.log(err);
        res.send(err)
    }

}

export