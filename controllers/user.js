const userModel=require('../model/user');


async function signup(req,res) {

    const { userName, email, password }=req.body;

    const user= await userModel.findOne({userName , email})

if(!user){
     await userModel.create({
        userName,
        email,
        password,
    })

    return res.render("login")
}

else return res.render("login")
    
}




async function login(req,res) {

    const { userName, password }=req.body;

    const user= await userModel.findOne({userName , password})

if(user){
    return res.render("display")

}

else return res.render("signup")
    
}




module.exports={
    signup,
    login
}