import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';



function App(props) {
  
  return (
    <BrowserRouter>
      <div className="App">
        <div className='container wrapper'>
          <Header/>
          <Navbar/>
          <div className='content'>
            <Routes>
              <Route exact path="/" element={<Profile/>}/>
              <Route exact path="/profile/*" element={<Profile/>}/>
              <Route exact path="/dialogs/*" element={<DialogsContainer/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
