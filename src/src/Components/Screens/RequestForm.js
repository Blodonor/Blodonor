import {Link, useHistory } from "react-router-dom"
import React,{useState,useEffect,useContext} from 'react'
import M from 'materialize-css'
import {UserContext} from '../../App'
const Services=()=>{
    const {state,dispatch} =useContext(UserContext)
    const history = useHistory()
    const [patient_name,setPatient_name] = useState("")
    const [guardian_name,setGuardian_name] = useState("")
    const [phone,setPhone] = useState("") 
    const [image,setImage] = useState("")
    const [hospital,setHospital]=useState("")
    const [bloodgroup,setBloodgroup]=useState("")
    const [address,setAddress]=useState("")
    const [url,setUrl] = useState("")
    
    useEffect(()=>{
       if(url){
        fetch("/requestform",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                patient_name,
                guardian_name,
                phone,
                hospital,
                address,
                bloodgroup,
                pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
    
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:"Response Sent",classes:"#43a047 green darken-1"})
            //   console.log(data)
               history.push('/responsesuccess')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    },[url])
    const postDetails = ()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","blodonor")
        data.append("cloud_name","dlav3gtms")
        fetch("https://api.cloudinary.com/v1_1/dlav3gtms/image/upload",{
           method:"post",
           body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
            
           if(data.error){
            M.toast({html: "please enter all fields",classes:"#c62828 red darken-3"})
         }
        })
        .catch(err=>{
            console.log(err)
       })
   }
   const renderlist=()=>{
       if(state){
       return(
    [<li><button className="btn waves-effect waves-light" style={{background:"#BA0015",border:"1px solid red"}} type="submit" name="action"
    onClick={()=>postDetails()}
    >Submit Response
        {/* <i className="material-icons right">send</i> */}
    </button></li>])}
    else{
        return(
            [<li>You are still submitting as a guest user, we recommend you to create an account</li>,
            <li><Link to="/signup"><button className="btn waves-effect waves-light" style={{background:"#BA0015",border:"0px solid red",color:"white",borderRadius:"10px"}} type="submit" name="action"
            // onClick={()=>postDetails()}
            
            >create an account and submit
                {/* <i className="material-icons right">send</i> */}
            </button></Link></li>,
           
            <li>or</li>,
        
            <li><button className="btn waves-effect waves-light" style={{background:"#BA0015",border:"0px solid red",borderRadius:"10px"}} type="submit" name="action"
            onClick={()=>postDetails()}
            >Submit Response
                {/* <i className="material-icons right">send</i> */}
            </button></li>]
            
            )}
}
    return(
        <div>
        <div>
        <div className="my-card">
             <div className="card form-card input-field ">
                 <div className="textstyle" style={{color:"#BA0015"}}><b>PLEASE CALM DOWN, WE WILL TRY TO GET A POTENTIAL DONOR FOR YOU</b></div>
                     <div class="row" style={{paddingTop:"20px"}}>
                     <text class="row">
                     <text class="col s7 m7 l8">
                     <label className="textstyle">Patient's Name<text style={{color:"#BA0015"}}>*</text></label>
                        </text>
                        <text class="col s6 m6 l6"></text>
                        </text>
                        <div class="row">
                        <text class="col s3 m2 l3"></text>
                        <text class="col s12 m9 l6">
                            <input 
                                type="text"
                                style={{padding:"20px",textAlign:""}}
                                placeholder="E.g. Naveen"
                                value={patient_name}
                                onChange={(e)=>setPatient_name(e.target.value)}>
                            </input>
                            </text>
                     </div>
                     
                     <text class="row">
                     <div class="col s7 m7 l8">
                     <label className="textstyle">Guardian's Name<text style={{color:"#BA0015"}}>*</text></label>

                        </div>
                        <div class="col s6 m6 l6"></div>
                        </text>
                        <div class="row" >
                        <div class="col s3 m2 l3"></div>
                        <div class="col s12 m9 l6">
                        <input 
                                type="text"
                                placeholder="E.g. Naveen"
                                style={{padding:"20px"}}
                                value={guardian_name}
                                onChange={(e)=>setGuardian_name(e.target.value)}>
                            </input>
                            </div>
                     </div>
                     <text class="row">
                     <div class="col s7 m7 l8">
                     <label className="textstyle">Mobile Number<text style={{color:"#BA0015"}}>*</text></label>
                        </div>
                        <div class="col s6 m6 l6"></div>
                        </text>
                        <div class="row" >
                        <div class="col s3 m2 l3"></div>
                        <div class="col s12 m9 l6">
                        <input 
                                type="number"
                                placeholder="E.g. 9123456789"
                                value={phone}
                                style={{padding:"20px"}}
                                onChange={(e)=>setPhone(e.target.value)}>
                            </input>
                            </div>
                     </div>
                     <text class="row">
                     <div class="col s7 m7 l8">
                     <label className="textstyle">Hospital Name<text style={{color:"#BA0015"}}>*</text></label>

                        </div>
                        <div class="col s6 m6 l6"></div>
                        </text>
                        <div class="row" >
                        <div class="col s3 m2 l3"></div>
                        <div class="col s12 m9 l6">
                        <input 
                                type="text"
                                placeholder="E.g. Appollo Hospital"
                                value={hospital}
                                style={{padding:"20px"}}
                                onChange={(e)=>setHospital(e.target.value)}>
                            </input>
                            </div>
                     </div>
                     <text class="row">
                     <div class="col s7 m7 l8">
                     <label className="textstyle">Hospital Address<text style={{color:"#BA0015"}}>*</text></label>        </div>
                        <div class="col s6 m6 l6"></div>
                        </text>
                        <div class="row" >
                        <div class="col s3 m2 l3"></div>
                        <div class="col s12 m9 l6">
                        <input 
                                type="text"
                                placeholder="E.g. Secunderabad"
                                style={{padding:"20px"}}
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}>
                            </input>
                            </div>
                     </div>
                     <text class="row">
                     <div class="col s7 m7 l8">
                     <label className="textstyle">Required BloodGroup<text style={{color:"#BA0015"}}>*</text></label>   </div>
                        <div class="col s6 m6 l6"></div>
                        </text>
                        <div class="row" >
                        <div class="col s3 m2 l3"></div>
                        <div class="col s12 m9 l6">
                        <select class="browser-default" onChange={(e)=>setBloodgroup(e.target.value)}>
                                <option value="" disabled selected>Choose your option</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>

                            </select>
                            </div>
                     </div>
                     
                    
                        </div>
                        <div className="row">  
                            <div class="col s12 m3 l3"></div>
                        <div class="col s12 m6 l6">
                        <div className="file-field input-field">
                            <div className="btn" style={{backgroundColor:"#BA0015"}}>
                            <span><i className="material-icons" >person</i></span>
                            <input type="file" onChange={(e)=>setImage(e.target.files[0])}></input>
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Upload patient photo" style={{padding:"20px"}}></input>
                            </div>
                            </div></div>
                            </div>
                        <ul>{renderlist()}</ul>
                     </div>
             </div>
         </div>
        </div>
    )
}
export default Services