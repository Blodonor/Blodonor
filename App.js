import './App.css';
import React,{useEffect,createContext,useReducer, useContext} from "react"
import {BrowserRouter,Route,Switch,useHistory,ProtecedRoute} from "react-router-dom"
import NavBar from './Components/NavBar'
import {initialState, reducer} from "./reducers/userReducer"
import Footer from './Components/Footer'
import Home from './Components/Screens/Home'
import SignUp from './Components/Screens/SignUp'
import RequestBlood from './Components/Screens/RequestBlood'
import SignIn from './Components/Screens/SignIn'
import AdminSignIn from './Components/Screens/AdminSignIn'
import Services from './Components/Screens/Services'
import Requests from './Components/Screens/Requests'
import Donors from './Components/Screens/DonorsForm'
import DonorsList from './Components/Screens/DonorList'
export const UserContext = createContext()

const Routing=()=>{
  const history = useHistory()
  const {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
    const user =JSON.parse(localStorage.getItem("user"))
    const admin =JSON.parse(localStorage.getItem("admin"))
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
    console.log(state)
  },[])
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
    <Route path="/requestblood">
      <RequestBlood/>
    </Route>
    <Route path="/adminsignin">
      <AdminSignIn/>
    </Route>
    <Route path="/services/requestform">
      <Services/>
    </Route>
    <Route path="/requests">
      <Requests/>
    </Route>
    <Route path="/bloodonationform">
      <Donors/>
    </Route>
    <Route path="/donorslist">
      <DonorsList/>
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
    </UserContext.Provider>
      );
}

export default App;
