import React,{useContext, useEffect,useRef,useState} from "react";
import {Link} from 'react-router-dom'
import { CSVLink } from "react-csv";
import {UserContext} from '../../App'
import M from 'materialize-css'
const   DonorsList=()=>{
    const headers = [
        { label: "Donor Name", key: "name" },
        { label: "Email Address", key: "email" },
        { label: "Phone Number", key: "phone" },
        { label: "Bloodgroup", key: "bloodgroup" },
        {label:"Date",key:"createdAt"},
        {label:"Photo",key:"photo"}
      ];
       
    const logomodel = useRef(null)
    const [data,setData]=useState([])
    const [search,setSearch]=useState('')
    const {state,dispatch}=useContext(UserContext)
    useEffect(()=>{
        fetch('/donorslist',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setData(result.Posts)

        })
        M.Modal.init(logomodel.current)
     },[])
    const deletePost=(postid)=>{
        console.log(postid)
        fetch(`/deletepost/${postid}`,{
            method:"delete",
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
             console.log(result)
             const newData = data.filter(item=>{
                 return item._id !== result._id
             })
             console.log(newData)
             setData(newData)
        })
    }
    const reloadPage=()=> {
        window.location.reload()
      }
    const filterData=data.filter(data2=>{
        return data2.bloodgroup.toLowerCase().includes(search.toLowerCase())
    })
   
    const CSVReport = {
        data: filterData,
        headers: headers,
        filename: "donors"+search+new Date()+'.csv'
      };
    return(
        <div>
        
        <div className="input-field search" >
        <input type="text" style={{padding:"20px"}} placeholder="Search.." onChange={(e)=>setSearch(e.target.value)}></input>
        </div>
        <div className="home">
            {
                filterData.map(item=>{
                    return(
                        <div className="card cards" key={item._id}> 
                        <h5><Link className="material-icons"
                        onClick={()=>deletePost(item._id)}>delete</Link></h5>
                        <div className="card-image">
                            <img src={item.photo} style={{height:"50%",width:"70%",margin:"auto"}} alt="none"></img>
                    </div>
                    <div className="card-content">
                        <h6>{item.name}</h6>
                        <p>{item.bloodgroup}</p>
                        <p>date: {item.createdAt}</p>
                    </div>
                </div>
                )
            })
            } 
        </div>
        <div style={{textAlign:"center"}}>
            <button>
      <CSVLink {...CSVReport}>Export to CSV</CSVLink></button>
      </div>
        </div>
        )
}

export default DonorsList