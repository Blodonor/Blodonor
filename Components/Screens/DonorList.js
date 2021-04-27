import React,{useContext, useEffect,useRef,useState} from "react";
import {Link} from 'react-router-dom'
import { CSVLink } from "react-csv";
import {UserContext} from '../../App'
import M from 'materialize-css'
const   DonorsList=()=>{
    const headers = [
        { label: "Name", key: "name" },
        { label: "email", key: "email" },
        { label: "phone", key: "phone" },
        { label: "bloodgroup", key: "bloodgroup" }
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
            // console.log(result)
            setData(result.Posts)
          //  setLike(result.Posts.likes)
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
             setData(newData)
        })
    }
    const reloadPage=()=> {
        window.location.reload()
      }
    const filterData=data.filter(data2=>{
        return data2.bloodgroup.toLowerCase().includes(search.toLowerCase())
    })
    console.log(filterData)
    const CSVReport = {
        data: filterData,
        headers: headers,
        filename: "donors"+new Date()+'.csv'
      };
    return(
        <div>
        
        <div className="search">
        <input type="search" placeholder="Search.." onChange={(e)=>setSearch(e.target.value)}></input>
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