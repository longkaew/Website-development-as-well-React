import React from 'react';
import './App.css';
import stud from './stud';
import home from './home';
import unifrom from './unifrom';
import football from './football';
import stud1 from './stud1';
import stud2 from './stud2';
import stud3 from './stud3';
import stud4 from './stud4';
import stud5 from './stud5';
import stud6 from './stud6';
import stud7 from './stud7';
import stud8 from './stud8';
import uifrom1 from './uifrom1';
import uifrom2 from './uifrom2';
import uifrom3 from './uifrom3';
import uifrom4 from './uifrom4';
import uifrom5 from './uifrom5';
import uifrom6 from './uifrom6';
import uifrom7 from './uifrom7';
import uifrom8 from './uifrom8';
import football1 from './football1';
import football2 from './football2';
import football3 from './football3';
import football4 from './football4';
import football5 from './football5';
import football6 from './football6';
import football7 from './football7';
import football8 from './football8';
import app from "./firebase";
import { AuthProvider } from "./Auth";
import image1 from './0f08c3c0-7089-45ad-abfd-760611afeb06_200x200.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./home";
import Login from "./Login";
import SignUp from "./SigUp";
import buy from './buy';
import PrivateRoute from "./PrivateRoute";
function App() {
  return (
    <AuthProvider>
    <Router>   
      <header className="fon ">
      <nav class="navbar navbar-expand-lg navbar-dark App-header font-weight-bolder ">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div className="mr-5"><img className="rounded" src={image1} width="150" ></img></div>
    <div class="nav justify-content-center" >
      <a class="nav-item nav-link active" > <Link to="/"><font color="white" >หน้าหลัก</font></Link ></a>
      <a class="nav-item nav-link" > <Link to="/stud"><font color="white">รองเท้าฟุตบอล</font></Link></a>
      <a class="nav-item nav-link" > <Link to="/unifrom"><font color="white">ชุดแข่ง</font></Link></a>
      <a class="nav-item nav-link" ><Link to="/football"><font color="white">อุปกรณ์เสริม</font></Link> </a>
      <a class="nav-item nav-link" href="/login"><font color="white">login</font></a>
      <a class="nav-item nav-link" href="/signup"><font color="white">signup</font></a>
      <button onClick={() => app.auth().signOut()}>Sign out</button> 
    </div>
  </div>
</nav>
</header>      
               <PrivateRoute  path="/buy" component={buy} />
               <Route  path="/" exact component={home} />
               <Route  path="/login" component={Login} />
               <Route  path="/signup" component={SignUp} />
               <Route path="/stud"  component={stud} />
               <Route path="/unifrom"  component={unifrom} />
               <Route path="/football"  component={football} />
               <Route path="/show1"  component={stud1} />
               <Route path="/show2"  component={stud2} />
               <Route path="/show3"  component={stud3} />
               <Route path="/show4"  component={stud4} />
               <Route path="/show5"  component={stud5} />
               <Route path="/show6"  component={stud6} />
               <Route path="/show7"  component={stud7} />
               <Route path="/show8"  component={stud8} />

               <Route path="/uifrom1"  component={uifrom1} />
               <Route path="/uifrom2"  component={uifrom2} />
               <Route path="/uifrom3"  component={uifrom3} />
               <Route path="/uifrom4"  component={uifrom4} />
               <Route path="/uifrom5"  component={uifrom5} />
               <Route path="/uifrom6"  component={uifrom6} />
               <Route path="/uifrom7"  component={uifrom7} />
               <Route path="/uifrom8"  component={uifrom8} />

               <Route path="/football1"  component={football1} />
               <Route path="/football2"  component={football2} />
               <Route path="/football3"  component={football3} />
               <Route path="/football4"  component={football4} />
               <Route path="/football5"  component={football5} />
               <Route path="/football6"  component={football6} />
               <Route path="/football7"  component={football7} />
               <Route path="/football8"  component={football8} />
 
</Router>
</AuthProvider>
  );
}

export default App;
