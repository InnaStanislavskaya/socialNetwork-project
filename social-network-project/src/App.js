import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



function App(props) {
  
  return (
    <BrowserRouter>
      <div className="App">
        <div className='container wrapper'>
          <HeaderContainer/>
          <Navbar/>
          <div className='content'>
            <Routes>
              {/* <Route exact path="/*" element={<ProfileContainer/>}/> */}
              <Route exact path="/profile/*" element={<ProfileContainer/>}/>
              <Route exact path="/profile/:userId" element={<ProfileContainer/>}/>
              <Route exact path="/dialogs/*" element={<DialogsContainer/>}/>
              <Route exact path="/users/*" element={<UsersContainer/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
