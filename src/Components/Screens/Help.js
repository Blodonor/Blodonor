import React from 'react';
import home5 from '../../images/home5.png'

const Help=()=>{
    return(
    <div><h3 style={{textAlign:"center",font:"lobster"}}>Welcome to BLODONOR</h3>
    <h5 style={{textAlign:"center"}}>An ML- Powered Application to find the potential donors</h5>
    <div className="row" style={{marginLeft:"10%"}}>
            <b className="textstyle" style={{padding:"20",color:"#BA0015",margin:"auto auto"}}>Have a look from whom you can receive blood
and to whom you can donate blood.</b>    
            </div>
            <div className="row">
            <img src={home5} style={{display:"block",width:"50%",height:"50%",margin:"auto auto"}}></img>

            </div>
    </div>
    )
}
export default Help