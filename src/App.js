import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css'; 
import Feed from "./Feed";
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { useEffect } from 'react';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in 
        dispatch(
          login({
            email: userAuth.email, 
            uid : userAuth.uid, 
            displayName : userAuth.displayName,
            photoUrl : userAuth.photoURL,
          })
        )

      } else{
        //user is logged out
        dispatch(logout());
         
      }
    })
  },[])
  return (
    <div className="app">
      <Header/>  
      
      {!user ? <Login/> : (
          <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
      )}
      
    </div>
  );
}

export default App;
