import React from 'react'
import {Link} from 'react-router-dom'
const AllServices=()=>{
    return(
       <div>
       <div className="my-card">
            <div className="card auth-card input-field" style={{maxWidth:"80%"}}>
             
                    <div class="row" style={{padding:"15px"}}>
            
                        <div class="input-field" style={{padding:"20px"}}>    
                       
                        <Link to="/services/bloodonationform">
                        <button className="btn-large waves-effect waves-light" style={{background:"#BA0015",border:"1px solid red"}} type="submit" name="action"
               
                >Become a donor
                </button></Link>
                <div  class="input-field" style={{padding:"20px"}}>
                    <Link to="/services/requestform">
                <button className="btn-large waves-effect waves-light" style={{visibility:"visible",background:"#BA0015",border:"1px solid red"}} 

                >Click here to get help from donor
                </button></Link>
                </div>                  
        </div>
         </div>
       </div>
       </div>
       </div>
    )
}
export default AllServices