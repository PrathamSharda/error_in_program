const express=require("express");
const jwt=require("jsonwebtoken");
const cors=require("cors");
const cookieParser=require("cookie-parser");
const secretKey="jjt12";
const app=express();

let DataBase=[];  // Data Base of the code for simplicity

app.use(cors({
    origin: (origin, callback) => {
        callback(null, true);
    },
    credentials: true
}));

app.use(cookieParser());
app.use(function(req,res,next){
    console.log(DataBase);
    next();
});

app.post("/signup",function(req,res){
    try{
        const Name=req.headers.name;
        const password=req.headers.password;
        if(Name!==""&&Name!==undefined&&password!==""&&password!==undefined){
            DataBase.push({
                Name:Name,
                password:password
            })
            res.send("successfully signed up");
        }else{
            throw "user already exits";
        }
    }catch(error){
        console.log(error);
        res.status(403).send("bad auth");
    }
})




app.get("/signin",function(req,res){
    try{
    const Name=req.headers.name;
    const password=req.headers.password;
    const token=req.cookies.token;
    if(token){
        const verify=jwt.verify(token,secretKey);
        if(verify){
            res.send("user already enetered");
        }else{
            throw "bad token"
        }
    }else{
    if(Name!==""&&Name!==undefined&&password!==""&&password!==undefined){
        const finder=DataBase.find(function(u){
            if(u.Name==Name&&u.password==password){
                return true;
            }
        })

        if(finder){
        const newToken=jwt.sign(
            {

            username:finder.username

            },secretKey);

    console.log(newToken);

    res.cookie("token",newToken,{
        httpOnly:true,
        secure:true,
        maxAge:0.1*60*60*1000
    });
    res.send("user signin");

}else{
    throw "user not found";
}
}
      else{
        throw "name/password is wrong";
      }

    
    } 
}catch(error){
        console.log(error);
        res.status(403).send("bad auth");
    }
})

app.listen(3000);

console.log("server started, listening on http/localhost:3000");