import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"
// import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='container wrapper'>
        <Header/>
        <Navbar/>
        <div className='content'>
          <Profile/>
        </div>
      </div>
    </div>
  );
}

export default App;
