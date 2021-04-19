import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Screens/Home'
import SignUp from './Components/Screens/SignUp'
function App() {
  return (
    <BrowserRouter>
   
    <NavBar/>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/signup">
      <SignUp/> 
    </Route>
    </BrowserRouter>
  );
}

export default App;
