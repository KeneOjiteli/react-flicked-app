import '../App.css';
// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registers } from './redux/actions';

function Registration() {
  const{register,  formState: {errors}} = useForm(
    {defaultValues: {firstname: '', lastname: '', username: '',email: '', password: '', bio: ''}}
    );
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [bio, setBio] = useState('');
  
  const navigate = useNavigate();
  //invoke useDispatch hook and store in a variable dispatch
  const dispatch = useDispatch();
  // const { details } = useSelector((currentState) => currentState.registration);
  // const handleRegistration = (firstname, lastname, username, email, password, bio) =>{
  //   dispatch(registers(firstname, lastname, username, email, password, bio))
  //  }

  const handleSubmit = (e, firstname, lastname, username, email, password, bio) =>{
    e.preventDefault();
    const article ={firstname, lastname, username, email, password, bio};
    console.log(article);
    //an alternate way of dispatching actions
    //  dispatch(registers(firstname, lastname, username, email, password, bio))
    // handleRegistration(firstname1, lastname1, username1, email1, password1, bio1);
    // console.log(handleRegistration());
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
          // onChange={(e) =>{setFirstname(e.target.value)}}
          {...register("firstname", {required: true})} 
          />
        </div>
         {errors.firstname && <p className='text-danger'>First name is required</p>}
         <div className="form-group mb-4">
          <label htmlFor="lastname">Last Name</label>
          <input
          id="lastname" 
          type="text" 
          className="form-control" 
          // value={lastname}
          // onChange={(e) =>{setLastname(e.target.value)}}
          {...register("lastname", {required: true})}
          />
        </div>
        {errors.lastname && <p className='text-danger'>Last name is required</p>}
        <div className="form-group mb-4">
          <label htmlFor="username">Username</label>
          <input
          id="username" 
          type="text" 
          className="form-control" 
          // value={username}
          // onChange={(e) =>{setUsername(e.target.value)}}
          {...register("username", {required: true})}
          />
        </div>
        {errors.username && <p className='text-danger'>User name is required</p>}
        <div className="form-group mb-4">
          <label htmlFor="email">Email</label>
          <input
          id="email" 
          type="email" 
          className="form-control" 
          // value={email}
          // onChange={(e) =>{setEmail(e.target.value)}}
          {...register("email", {required: true})}
          />
        </div>
        {errors.email && <p className='text-danger'>Email is required</p>}
        <div className="form-group mb-4">
          <label htmlFor="password">Password</label>
          <input
          id="password" 
          type="password" 
          className="form-control" 
          // value={password}
          // onChange={(e) =>{setPassword(e.target.value)}}
          {...register("password", {required: true})}
          />
        </div>
        {errors.password && <p className='text-danger'>Password is required</p>}
        <div className="form-group mb-4">
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" 
          className="form-control"
          rows={4}
          // 
          {...register("bio", {required: true})}
          ></textarea>
      </div>
      {errors.bio && <p className='text-danger'>Bio is required</p>}
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

export default Registration;