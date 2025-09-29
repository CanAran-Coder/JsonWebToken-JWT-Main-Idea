# Main Idea Of JsonWebToken(JWT)


## Short Description
We use jsonwebtoken for authentication.Forexample login and register systems.
When you register a web page, backend returns hashed tokens for you.
We call this keys Access Token and Refresh Token.
Access token has short age(forexample 15 minute), Refresh token has long age(forexample 7 day).
You can access protected routes with access token but when access token time end, you can't access the pages.
If you have refresh token, you can renew your access token and you can access pages again.
We use refresh token for renew our access token, we use access token for acess protected pages.
This is basic main idea of jsonwebtoken.In interprise project you can put tokens into databases but we will see main idea in this example.

## Photo Description

We have this 2 page right now.

<img width="2936" height="1608" alt="Screen Shot 2025-09-29 at 17 46 00 PM" src="https://github.com/user-attachments/assets/be18243d-81a5-4c0a-9fee-e6c1618e0e5d" />
<img width="2932" height="1602" alt="Screen Shot 2025-09-29 at 17 46 14 PM" src="https://github.com/user-attachments/assets/b5a82d5f-19b5-4432-b2be-3c5d68385e3a" />
<img width="2940" height="1608" alt="Screen Shot 2025-09-29 at 18 22 22 PM" src="https://github.com/user-attachments/assets/f1ff7f45-b890-4e97-af9e-fb22ec5c4101" />

When we register with username:admin and password:admin we can get the tokens.But i will explain to you how it work.

when you you logged in this codes working:
```bash

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

  ```
In this code you need to give payload , secret key and expire time for jwt.sign.
You can create secret key with ```bash 
node
require("crypto").randomBytes(64).toString("hex") ```

Do not forget use .env for tokens this is importand for secure but i won't use for education.
After that we will use httpOnly cookies because we can't reach it with js.This mean, this is secure for normal cookies.
Samesite strict is not allows other sites requests.This can block csrf attacks.

So we can get the tokens on frontend with ```bash 
    async function handleLogin(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const response = await axios.post("/login",{username,password})
        userState.setAccessToken(response.data.accessToken)
    }```

UserState is zustand storage.You can use contextAPI,Redux,Zustand etc.
Generally access token is hidden in ram(storage).Refresh token is hidden in cookie (httpOnly) or you can use database for it but it is more complex.
We take the key into the ram on frontend.


