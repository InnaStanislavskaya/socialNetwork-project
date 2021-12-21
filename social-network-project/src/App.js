import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <div className='container wrapper'>
          <Header/>
          <Navbar/>
          <div className='content'>
            <Routes>
              <Route exact path="/profile/*" element={<Profile/>}/>
              <Route exact path="/dialogs/*" element={<Dialogs/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
