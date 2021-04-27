import {Link, useHistory } from "react-router-dom"
import React,{useState,useEffect} from 'react'
import M from 'materialize-css'

const Services=()=>{
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
               history.push('/')
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
    return(
        <div>
        <div>
        <div className="my-card">
             <div className="card form-card input-field ">
                 <div className="sign1"><b>Request Form</b></div>
                     <div class="row" style={{paddingTop:"20px"}}>
                     <div class="col s12 m4 l2">
                     <label className="textstyle" style={{color:"#BA0015"}}>Patient's Name</label>
                        </div>
                        <div class="col s12 m9 l10">
                            <input 
                                type="text"
                                style={{padding:"20px"}}
                                placeholder=" "
                                value={patient_name}
                                onChange={(e)=>setPatient_name(e.target.value)}>
                            </input>
                            </div>
                            <div class="col s12 m4 l2">
                     <label className="textstyle" style={{color:"#BA0015"}}>Guardian's Name</label>
                        </div>
                        <div class="col s12 m9 l10">
                            <input 
                                type="text"
                                placeholder=""
                                style={{padding:"20px"}}
                                value={guardian_name}
                                onChange={(e)=>setGuardian_name(e.target.value)}>
                            </input>
                            </div> 
                        <div class="col s12 m12 l2">
                     <label className="textstyle" style={{color:"#BA0015"}}>Phone Number</label>
                        </div>
                        <div class="col s12 m12 l10">
                            <input 
                                type="text"
                                placeholder=""
                                value={phone}
                                style={{padding:"20px"}}
                                onChange={(e)=>setPhone(e.target.value)}>
                            </input>
                            </div>
                            <div class="col s12 m4 l2">
                     <label className="textstyle" style={{color:"#BA0015"}}>Hospital Name</label>
                        </div>
                        <div class="col s12 m9 l10">
                            <input 
                                type="text"
                                placeholder=""
                                value={hospital}
                                style={{padding:"20px"}}
                                onChange={(e)=>setHospital(e.target.value)}>
                            </input>
                            </div>
                           
                            <div class="col s12 m4 l2">
                     <label className="textstyle" style={{color:"#BA0015"}}>
                         Hospital Address
                     </label>
                        </div>
                        <div class="col s12 m9 l10">
                            <input 
                                type="text"
                                placeholder=""
                                style={{padding:"20px"}}
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}>
                            </input>
                            </div>

                            <div class="col s12 m4 l2">
                     <label className="textstyle" style={{color:"#BA0015"}}>
                         Required BloodGroup
                     </label>
                        </div>
                        <div class="col s12 m9 l10">
                            <input 
                                type="text"
                                placeholder=""
                                style={{padding:"20px"}}
                                value={bloodgroup}
                                onChange={(e)=>setBloodgroup(e.target.value)}>
                            </input>
                            </div>

                            </div>
                              
                        <div className="file-field input-field">
                            <div className="btn" style={{backgroundColor:"#BA0015"}}>
                            <span><i className="material-icons" >person</i></span>
                            <input type="file" onChange={(e)=>setImage(e.target.files[0])}></input>
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="upload patient photo" style={{padding:"20px"}}></input>
                            </div>
                            </div>
                         <button className="btn waves-effect waves-light" style={{background:"#BA0015",border:"1px solid red"}} type="submit" name="action"
                 onClick={()=>postDetails()}
                 >Submit Response
                     {/* <i className="material-icons right">send</i> */}
                 </button>
                     </div>
             </div>
         </div>
        </div>
    )
}
export default Services