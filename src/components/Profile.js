//useSelector is used to get state of the objects
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { edit } from './redux/actions.js';
import { useNavigate } from 'react-router-dom'; 

function Profile() {
  // useSelector takes d current state as an argument and returns 
  // whatever data you want from it and it allows you to store the return values inside 
  // a variable within the scope of your fxnal components instead of passing down as props
  const { details } = useSelector((currentState) => currentState.registration);
  const [firstname, setFirstname] = useState(details.firstname);
  const [lastname, setLastname] = useState(details.lastname);
  const [username, setUsername] = useState(details.username);
  const [email, setEmail] = useState(details.email);
  const [password, setPassword] = useState(details.password);
  const [bio, setBio] = useState(details.bio);
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEdit = (firstname, lastname, username, email, password, bio) =>{
    dispatch(edit(firstname, lastname, username, email, password, bio))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
     handleEdit(firstname, lastname, username, email, password, bio);
     const editedprofile = alert('profile edited successfully');
    console.log(editedprofile);
    // navigate('/editedprofile');
  }
    return ( 
      <div className="container">
      <h1 className="text-center">Profile</h1>
      <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
          <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
          <label htmlFor="fname">First Name</label>
          <input
          id="fname" 
          type="text" 
          className="form-control" 
          value={firstname}
          onChange={(e) =>{setFirstname(e.target.value)}}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="lname">Last Name</label>
          <input
          id="lname" 
          type="text" 
          className="form-control" 
          value={lastname}
          onChange={(e) =>{setLastname(e.target.value)}}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="uname">Username</label>
          <input
          id="uname" 
          type="text" 
          className="form-control" 
          value={username}
          onChange={(e) =>{setUsername(e.target.value)}}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email">Email</label>
          <input
          id="email" 
          type="email" 
          className="form-control" 
          value={email}
          onChange={(e) =>{setEmail(e.target.value)}}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="pwrd">Password</label>
          <input
          id="pwrd" 
          type="password" 
          className="form-control" 
          value={password}
          onChange={(e) =>{setPassword(e.target.value)}}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" 
          className="form-control"
          rows={4}
          value={bio}
          onChange={(e) =>{setBio(e.target.value)}}
          ></textarea>
      </div>
      <div className="text-center">
          <button className="btn btn1">Update Profile</button>
      </div>
      </form>
      </div>
          <div className="col-md-3"></div>
      </div>
      
      </div>
     );
}
export default Profile;

