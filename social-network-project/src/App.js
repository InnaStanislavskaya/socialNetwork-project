import './App.css';
import React from 'react';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import {initializeApp} from "./Redux/app-reducer";
import { connect } from 'react-redux';
import { compose } from 'redux';



class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp()
}
  render(){
    if(!this.props.initialized) {
      return <div>Pleas wait!!!</div>
    }
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
                <Route exact path="/login/*" element={<Login/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})


export default compose(
  connect(mapStateToProps, {initializeApp})
)(App)


