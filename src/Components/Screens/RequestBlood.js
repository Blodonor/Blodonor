import { useHistory } from "react-router-dom"
import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
const RequestBlood = ()=>{
    const history = useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")
    const [bgroup,setBgroup]=useState("")
    useEffect(()=>{
       if(url){
        fetch("/post",{
            method:"post",
            body:JSON.stringify({
                title,
                body,
                pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
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
        fetch("Image upload: https://api.cloudinary.com/v1_1/dlav3gtms/image/upload",{
           method:"post",
           body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
       })
   }
    return(
        <div className="card auth-card"
        style={{
            margin:"10px auto",
            maxWidth:"500px",
            padding:"20px"
        }}
        >
            <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}></input>
            <input 
            type="text"
            placeholder="Body"
            value={body}
            onChange={(e)=>setBody(e.target.value)}></input>
            <div className="file-field input-field">
                <div className="btn">
                <span>File</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])}></input>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"></input>
                </div>
                <div>
                <form action>
                    <p>
                    <label>
                        <input class="with-gap" name="group1" type="radio"  />
                        <span>Green</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input class="with-gap" name="group1" type="radio"  />
                        <span>Green</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input class="with-gap" name="group1" type="radio"  />
                        <span>Green</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input class="with-gap" name="group1" type="radio" />
                        <span>Green</span>
                    </label>
                    </p>
                </form> 
                </div>
                </div>
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                onClick={()=>postDetails()}>SUBMIT POST</button>

        </div>
    )
}
export default RequestBlood