import React,{useState} from "react";
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const SignIn = () =>{
    const history=useHistory()
   const [name,setName]=useState("")
   const [password,setPassword]=useState("")
   const [email,setEmail]=useState("")
   const [phone,setPhone]=useState("")
   const PostData=()=>{
       if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
       {
        return M.toast({html:"Invalid Email",classes:"#c62828 red darken-3"})
       }
       fetch("/signup",{
           method:"post",
           headers:{
               "Content-type":"application/json"
           },
           body:JSON.stringify({
                name,
                email,
                password,
                phone
           })
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.error){
               M.toast({html:data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:data.message,classes:"#43a047 green darken-1"})
               history.push("/signin")
           }
       }).catch(err=>{
           console.log(err)
       })
   } 
    return(
        <div>
       <div className="signinback" style={{height:"100%",width:"100%"}}>
       <div className="my-card">
            <div className="card auth-card input-field ">
                <div className="sign"><b>CREATE AN ACCOUNT</b></div>
                    <div class="row">
                            <div class="input-field" style={{paddingTop:"5px",width:"100%"}}>
                            
                            <input placeholder="Name" id="first_name" type="text" class="validate" style={{padding:"5px"}} value={name}
                    onChange={(e)=>setName(e.target.value)}/>
                        {/* <label for="first_name"  style={{padding:"0px",color:"#BA0015"}}>Name</label> */}
                        </div>
                        <div class="input-field" style={{paddingTop:"5px",width:"100%"}}>
                        <input placeholder="mail id" id="first_name" type="text" class="validate" style={{padding:"5px"}} value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                        {/* <label for="first_name" style={{padding:"0px",color:"#BA0015"}}>Email Address</label> */}
                        </div>
                        <div class="input-field" style={{paddingTop:"5px",width:"100%"}}>
                        <input placeholder="mobile" id="password" type="number" class="validate" style={{padding:"5px"}} value={phone}
                onChange={(e)=>setPhone(e.target.value)}/>
                
                        {/* <label for="first_name" style={{padding:"0px",color:"#BA0015"}}>Mobile No(optional)</label> */}
                        </div>
                        <div class="input-field" style={{paddingTop:"5px",width:"100%"}}>
                        <input placeholder="Placeholder" id="password" type="password" class="validate" style={{padding:"5px"}} 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                        {/* <label for="first_name" style={{padding:"0px",color:"#BA0015"}}>Password</label> */}
                        </div>
                        <button className="btn waves-effect waves-light" style={{background:"#BA0015",border:"1px solid red"}} type="submit" name="action"
                onClick={()=>PostData()}
                >REGISTER
                    <i className="material-icons right">send</i>
                </button>
                    </div>
               

                <h6><Link to="/signin">Already have an account Login</Link>
                </h6>
            </div>
        </div>
         </div>
       </div>
    )
}
export default SignIn;