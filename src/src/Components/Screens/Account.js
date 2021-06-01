import React,{useEffect,useState,useContext} from "react";
import {UserContext} from '../../App'
import { Link } from 'react-router-dom'

const NewProfile = () =>{
    const {state,dispatch}=useContext(UserContext)
    const [mypics,setPics]=useState([])
    const [user,setUser]=useState()
    useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setPics(result.mypost)
        })
     },[])
    return(
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                    src={mypics?mypics.photo:""}
                    ></img>
                </div>
                <div>
                    <h4>{mypics?mypics.name:"you are not a donor"}</h4>
                    <h5>{mypics?mypics.email:""}</h5>
                    <div style={{display:"flex",justifyContent:"space-around",width:"108%"}}>
                    </div>
                   
                </div>
            </div>
                    <table style={{margin:"10px",border:"2px red"}}>
                        <tr>
                        <th>Fields</th>
                        <th>Details</th>
                        </tr>
                        
                        <tr>
                        <th>your name</th>
                        <td>{mypics?mypics.name:"No data avilable"}</td>
                        </tr>
                        <tr>
                        <th>blood group</th>
                        <td>{mypics?mypics.bloodgroup:"No data avilable"}</td>
                        </tr>
                        <tr>
                        <th>email address</th>
                        <td>{mypics?mypics.email:"No data avilable"}</td>
                        </tr>
                        <tr>
                        <th>Mobile Number</th>
                        <td>{mypics?mypics.phone:"No data avilable"}</td>
                        </tr>
                        <tr>
                        <th>Your Address</th>
                        <td>{mypics?mypics.address:"No data avilable"}</td>
                        </tr>
                    </table>
        </div>
    )
}
export default NewProfile