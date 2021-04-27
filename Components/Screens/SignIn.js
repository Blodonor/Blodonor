import React,{useState,useContext} from "react";
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
import { UserContext } from '../../App'

const SignIn = () =>{
    const {state,dispatch} = useContext(UserContext)
    const history=useHistory()
   const [password,setPassword]=useState("")
   const [email,setEmail]=useState("")
   const PostData=()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
    {
     return M.toast({html:"Invalid Email",classes:"#c62828 red darken-3"})
    }
    fetch("/signin",{
        method:"post",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
             email,
             password
        })
    })
    .then(res=>res.json())
    .then(data=>{
       // console.log(data)
        if(data.error){
            M.toast({html:data.error,classes:"#c62828 red darken-3"})
        }
        else{
            localStorage.setItem("jwt",data.token)
            localStorage.setItem("user",JSON.stringify(data.user))
            dispatch({type:"USER",payload:data.user})
            M.toast({html:"Login Success",classes:"#43a047 green darken-1"})
            history.push("/")
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
                <div className="sign1"><b>LOGIN</b></div>
                    <div class="row" style={{padding:"15px"}}>
            
                        <div class="input-field" style={{paddingTop:"25px",width:"100%"}}>    
                        <input placeholder="email id"
                         id="password" 
                         type="text" 
                         class="validate" 
                         style={{padding:"5px"}} 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}/>
                        <label for="first_name" style={{padding:"0px",color:"#BA0015",fontSize:"25px"}}>Email Address</label>
                        </div>
                        <div class="input-field" style={{paddingTop:"25px",width:"100%"}}>
                        <input placeholder="password" id="password" type="password" class="validate" style={{padding:"5px"}} value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                        <label for="first_name" style={{padding:"0px",color:"#BA0015",fontSize:"25px"}}>Password</label>
                        </div>
                        
                        <button className="btn waves-effect waves-light" style={{background:"#BA0015",border:"1px solid red"}} type="submit" name="action"
                onClick={()=>PostData()}
                >SIGN IN
                    <i className="material-icons right">send</i>
                </button>
                    </div>
                <h6><Link to="/signup">Already have an account Signin</Link>
                </h6>
            </div>
        </div>
         </div>
       </div>
    )
}
export default SignIn;