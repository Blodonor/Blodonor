import React,{useEffect,useRef,useContext, useState} from "react"
import {Link,useHistory} from 'react-router-dom'

import {UserContext} from '../App'
import M from 'materialize-css'
const NavBar = () =>{
    const {state,dispatch} =useContext(UserContext)
    const [sidebar,setSidebar]=useState(false)
    const showSidebar=()=>setSidebar(!sidebar)
    const logoutmodel = useRef(null)
    const side = useRef(null)
  
    const history =useHistory()
    useEffect(()=>{
      M.Modal.init(logoutmodel.current)
   },[])
   useEffect(()=>{
    M.Sidenav.init(side.current)
 },[])
   const logout=()=>
   {
     localStorage.clear()
    dispatch({type:"CLEAR"})
    history.push('/signin')
  }
    const renderList=()=>{
      //  console.log(state)
    //    console.log(state,dispatch)
        if(state){
          if(state.name){
            return [
              <li key="5">
              <button data-target="modal1" className="btn #c62828 red darken-3 modal-trigger sidenav-close">Logout
             </button>
             </li>,
              <li> <Link to="/" className="sidenav-close">Home</Link></li>,
              <li key="2"><Link to='/services' className="sidenav-close">Service</Link></li>,
              <li key="3"><Link to="/help" className="sidenav-close">Help</Link></li>,
              <li key="7"><Link to="/bloodonationform" className="sidenav-close">
                <button className="btn #c62828 red darken-3">Become a donor
               </button></Link>
             </li>,
             ]
              }
              else{
                return [
               <li key="5">
              <button data-target="modal1" className="btn #c62828 red darken-3 modal-trigger sidenav-close">Logout
             </button>
             </li>,
               <li> <Link to="/" className="sidenav-close">Home</Link></li>,
               <li key="2"><Link to='/services' className="sidenav-close">Service</Link></li>,
               <li key="3"><Link to="/account" className="sidenav-close">Account</Link></li>, 
               <li key="3"><Link to="/help" className="sidenav-close">Help</Link></li>,   
                <li key="7"><Link to="/bloodonationform" className="sidenav-close">
                <button className="btn #c62828 red darken-3">Become a donor
               </button></Link>
               </li>
                 ]
              }
        }
        else{
          return [
            <li> <Link to="/" className="sidenav-close">Home</Link></li>,
            <li key="2"><Link to='/services' className="sidenav-close">Service</Link></li>,
            <li key="3"><Link to="/account" className="sidenav-close">Account</Link></li>, 
            <li key="3"><Link to="/help" className="sidenav-close">Help</Link></li>,
           <li  key="6"><Link to="/signin" className="sidenav-close">Signin</Link></li>,
          //  <li  key="7"><Link to="/signup" className="sidenav-close">Signup</Link></li>,
          //  <li key="12"><Link to="/adminsignin" className="sidenav-close">Admin Login</Link></li>
           ]
        }
    }
    return(
        <nav>
        <div className="nav-wrapper" style={{background:"#EFF0F3"}}>
          {/* <Link to="/" className="brand-logo" style={{margin:"0px 20px"}}>Blodonor</Link> */}
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className=" hide-on-med-and-down" style={{marginLeft:"40px"}}>
          {renderList()}
          </ul>
          <ul className="sidenav" id="mobile-demo" ref={side} >
              
         {renderList()}
         
        </ul>
        </div>
        <div id="modal1" className="red modal" ref={logoutmodel} style={{color:"black",alignItems:"center"}}>
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
