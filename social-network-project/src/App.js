import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App(props) {
  
  return (
    <BrowserRouter>
      <div className="App">
        <div className='container wrapper'>
          <Header/>
          <Navbar/>
          <div className='content'>
            <Routes>
              <Route exact path="/profile/*" element={<Profile postsData={props.postsData}/>}/>
              <Route exact path="/dialogs/*" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
