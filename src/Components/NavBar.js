import React,{useEffect,useRef,useContext, useState} from "react"
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const NavBar=()=>{
    const [sidebar,setSidebar]=useState(false)
    const showSidebar=()=>setSidebar(!sidebar)
    const logoutmodel = useRef(null)
    const side = useRef(null)

    useEffect(()=>{
        M.Modal.init(logoutmodel.current)
     },[])
    useEffect(()=>{
        M.Sidenav.init(side.current)
     },[])
     const logout=()=>
     {
       localStorage.clear()
  
    }
    const renderList=()=>{
        return[<li key="3"><Link to="/createpost" className="sidenav-close">Create Post</Link></li>, 
        <li key="3"><Link to="/createpost" className="sidenav-close">Create Post</Link></li>,]
    }
    return(
        <nav>
          
        <div className="nav-wrapper blue">
          <Link to="/" className="brand-logo" style={{margin:"0px 20px"}}>Blodonor</Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
          <li key="3"><Link to="/createpost" className="sidenav-close">Create Post</Link></li>
        <li key="3"><Link to="/createpost" className="sidenav-close">Create Post</Link></li>
          </ul>
          <ul className="sidenav" id="mobile-demo" ref={side} >
              
         {renderList()}
         
        </ul>
        </div>
        <div id="modal1" className="modal" ref={logoutmodel} style={{color:"black",alignItems:"center"}}>
                  <div className="modal-content">
                  <h4>Are You Sure</h4>
                  <p>You are trying to logout</p>
                  </div>
                  <div className="modal-footer">
                  <a  className="modal-close waves-effect waves-green btn-flat" onClick={()=>logout()}>Yes</a>
                  <a  className="modal-close waves-effect waves-green btn-flat">No</a>

                  </div>
              </div>
    </nav>
    
)
}
export default NavBar
