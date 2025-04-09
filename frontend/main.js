axios.defaults.withCredentials = true;
async function send(Name,password){
    try{
    const response =await axios.post("http://localhost:3000/signup",
        {},{
            headers:{
                Name:Name,
                password:password
            }
        }
    )
}
catch(error){
    console.log(error);
    alert("error has occured");
}
}
async function signup(){ //signup value extractor
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    let val=await send(email,password);
    
}
async function send2(Name,password){
    try{
    const response =await axios.get("http://localhost:3000/signin",
        {
            headers:
            {
                Name:Name,
                password:password
            }
        }
    )
}
catch(error){
    console.log(error);
    alert("error has occured");
}
}
async function signin(){//signin value extractor

    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    let val=await send2(email,password);
    
}