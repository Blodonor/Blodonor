import './App.css';
import React,{useEffect,createContext,useReducer, useContext, useState} from "react"
import {BrowserRouter,Route,Switch,useHistory,ProtecedRoute} from "react-router-dom"
import NavBar from './Components/NavBar'
import {initialState, reducer} from "./reducers/userReducer"
import Footer from './Components/Footer'
import Home from './Components/Screens/Home'
import SignUp from './Components/Screens/SignUp'
import SignIn from './Components/Screens/SignIn'
import Help from './Components/Screens/Help'
import NewProfile from './Components/Screens/Account'
import AdminSignIn from './Components/Screens/AdminSignIn'
import Page404 from './Components/Screens/404page'
import AllServices from './Components/Screens/Services'
import Services from './Components/Screens/RequestForm'
import Requests from './Components/Screens/Requests'
import Donors from './Components/Screens/DonorsForm'
import DonorsList from './Components/Screens/DonorList'
import Responsesuccess from './Components/Screens/Responsesuccess';
export const UserContext = createContext()

const Routing=()=>{
  const history = useHistory()
  const {state,dispatch}=useContext(UserContext)
  const [user1,setUser]=useState("")
  const reloadi=()=>{
    return window.location.reload()
  }
  useEffect(()=>{
    const user =JSON.parse(localStorage.getItem("user"))
    const admin =JSON.parse(localStorage.getItem("admin"))
    const jwt =localStorage.getItem("jwt")

    setUser(jwt)

    if(admin){
      dispatch({type:"USER",payload:admin})
      }
    else if(user){
      dispatch({type:"USER",payload:user})
    }
    
    else{
      if(user || admin){
        history.push('/')
      }

    }
   
  },[])
  const requests="/"+user1+"/requests"
  const donors="/"+user1+"/donorslist"

  return(
    <Switch>
        <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/signup">
      <SignUp/> 
    </Route>
    <Route path="/signin">
      <SignIn/> 
    </Route>
    
    <Route path="/adminsignin">
      <AdminSignIn/>
    </Route>
    <Route path="/services/requestform">
      <Services/>
    </Route>
    <Route path={requests}>
      <Requests/>
    </Route>
    <Route path="/services/bloodonationform">
      <Donors/>
    </Route>
    <Route path={donors}>
      <DonorsList/>
    </Route>
    <Route path="/responsesuccess">
      <Responsesuccess/>
    </Route>
    <Route path="/services">
      <AllServices/>
    </Route>
    <Route path="/account">
      <NewProfile/>
    </Route>
    <Route path="/help">
      <Help/>
    </Route>
    <Route>
      <Page404/>
      </Route>
  </Switch>
  )
}
function App() {
  
  const [state,dispatch] =useReducer(reducer,initialState)
   
  return (
    <UserContext.Provider value={{state,dispatch}}>
        <BrowserRouter>
        <NavBar/>
        <Routing/>
        </BrowserRouter>
        <Footer/>
    </UserContext.Provider>
      );
}

export default App;
