import type {Request,Response,NextFunction} from "express"
import jwt from "jsonwebtoken"

export default (req:Request,res:Response,next:NextFunction)=>{

    if(req.body.username == "admin" && req.body.password == "admin"){
        const refreshToken = jwt.sign({username:req.body.username},"8cd0db5c019c4c1566f7be04e1eea1b785971f35e8e5b3c443c0fa9133599f91d860e41719b7cd1249d21c655cbc40fa5c479688cab796297817dbc26088a529",{expiresIn:"7d"})
        const accessToken = jwt.sign({password:req.body.username},"2c1c54dc6c612e33a00f43988ae265311302a283ae345c0ebbeace47e2159c1229735293bf5fd845e06353d7e81dcd70fa291f13e70ea3eb9b527fb8adcb48be",{expiresIn:"15m"})
        res.cookie("refreshToken",refreshToken,{
            sameSite:"strict",
            httpOnly:true,
            maxAge:1000*60*60*24*7
        })
        res.cookie("accessToken",accessToken,{
            httpOnly:true,
            sameSite:"strict"
        })
        res.json({refreshToken,accessToken})
    }


}