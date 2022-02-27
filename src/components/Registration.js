import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { register } from './redux/actions';

function Registration1() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    //fxn that dispatch register action
    const handleRegistration = (firstname, lastname, username, email, password, bio) =>{
        dispatch(register(firstname, lastname, username, email, password, bio))
    }
    const handleSubmit = (e) =>{
      //prevents form from reloading when submitted
        e.preventDefault();
        const profileDetails = {firstname, lastname, username, email, password, bio}
        handleRegistration(firstname, lastname, username, email, password, bio);
        console.log(profileDetails);
        //alternate way to dispatch actions without creating a seperate fxn for it
        // dispatch(registers(firstname, lastname, username, email, password, bio))
        navigate('/profile');
    }
    return (
        <div className="container">
        <h1 className="text-center">Register</h1>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
          <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
          <label htmlFor="firstname">First Name</label>
          <input
          id="firstname" 
          type="text" 
          className="form-control"
          required
          value={firstname}
          onChange={(e) =>{setFirstname(e.target.value)}}
          />
        </div>
         <div className="form-group mb-4">
          <label htmlFor="lastname">Last Name</label>
          <input
          id="lastname" 
          type="text" 
          className="form-control" 
          required
          value={lastname}
          onChange={(e) =>{setLastname(e.target.value)}}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="username">Username</label>
          <input
          id="username" 
          type="text" 
          className="form-control" 
          required
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
          required
          value={email}
          onChange={(e) =>{setEmail(e.target.value)}}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password">Password</label>
          <input
          id="password" 
          type="password" 
          className="form-control" 
          required
          value={password}
          onChange={(e) =>{setPassword(e.target.value)}}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" 
          className="form-control"
          required
          rows={4}
          value={bio}
          onChange={(e) =>{setBio(e.target.value)}}
          ></textarea>
      </div>
      <div className="text-center">
          <button className="btn btn1">Register</button>
      </div>
      <p className='text-center'>Already have an account yet?</p>
           <Link to={'/'} className='nav-link text-center'>Sign in</Link>
      </form>
      </div>
          <div className="col-md-3"></div>
        </div>
         </div>
      );
}

export default Registration1;