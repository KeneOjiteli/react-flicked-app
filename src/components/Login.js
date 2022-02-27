import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function Login() {
   const {register, handleSubmit, formState: {errors}} = useForm();
   const [error, setError] = useState('');
   const navigate = useNavigate();
   const onSubmit = (data) =>{
    if(data.email === 'admin@example.com' && data.password === '1234'){
      localStorage.setItem('authenticated', 'true');
      console.log(data);
      navigate('/home');
    }else{
       setError('Email and password is wrong');
    }
   }
    return ( 
        <div className="container">
           <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                 <h1 className='mt-4'>Welcome to flicked -- login your details</h1><hr/>
                 <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
                  {error && <p className='text-danger'>{error}</p>}
                 <div className="form-group mb-4">
                 <label htmlFor="email">Email</label>
                 <input 
                 type="email" 
                 className="form-control" 
                 {...register('email', {required: true})}/>
               </div>
               {errors.email && <p className='text-danger'>Email is required</p>}
               <div className="form-group mb-4">
                 <label htmlFor="pwrd">Password</label>
                 <input 
                 type="password" 
                 className="form-control" 
                 {...register('password', {required: true})}/>
               </div>
               {errors.password && <p className='text-danger'>Password is required</p>}
               <div className="text-center">
               <button className="btn btn1">Login</button>
               </div>
               <p className='text-center'>Don't have an account yet?</p>
               <Link to={'/register'} className='nav-link text-center'>click here to register</Link>
               </form>
              </div>
              <div className="col-md-3"></div>
           </div>
        </div>
     );
}

export default Login;