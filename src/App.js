import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Homepage from './components/Homepage';
import CreateArticle from './components/CreateArticle';
import Profile from './components/Profile';
import Registration from './components/Registration';
import ArticleDetails from './components/ArticleDetails';
import PrivateRoute from './components/PrivateRoute';
import EditArticle from './components/EditArticle';
import EditedProfile from './components/EditedProfile';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="App-header container">
        <Routes>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/editedprofile' element={<EditedProfile/>}/>
          <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
          <Route path="/create" element={<PrivateRoute><CreateArticle/></PrivateRoute>}/>
          <Route path='/details/:id' element={<PrivateRoute><ArticleDetails/></PrivateRoute>}/>
          <Route path='/edit/:id' element={<PrivateRoute><EditArticle/></PrivateRoute>}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;


