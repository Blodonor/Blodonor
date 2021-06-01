import React from 'react'
import {Redirect,useHistory,Link} from 'react-router-dom'
import thanks from '../../images/thanks.png'
const Responsesuccess=()=>{
    const history=useHistory()
    const myFunction=()=> {
        return 
      }
    return(
        <div>
            <div className="row">
            <div className="col s1 m1 l1"></div>
            <div className="col s3 m4 l3 magic"><img src={thanks} style={{height:'80%',width:"80%"}}/>
</div>
            <div className="col s3 m4 l1"></div>
            <div className="col s12 m7 l5 textstyle thank" style={{alignContent:"center"}}>
            <text>Your request has been submitted successfully, we will get back to you as soon as possible.</text>
            <h6><a href='/'>the page redirect to home page in 5 seconds..(If not click here)</a></h6>
        </div>  
        
        <div>{setTimeout( function(){
            window.location.href = '/';
         }, 5000)}</div> 
            </div>
            </div>
    )
}
export default Responsesuccess