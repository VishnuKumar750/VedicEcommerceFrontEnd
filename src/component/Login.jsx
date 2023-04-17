import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BASE_URL, PRODUCTION_URL } from '../../constants';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_START, LOGIN_SUCCESSFUL } from '../redux/user';
import Cookies from 'js-cookie';


const LoginForm = ({ onSubmit }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
 
   const handleSubmit = (event) => {
     event.preventDefault();
     onSubmit({ email, password });
   };
 
   return (
     <form onSubmit={handleSubmit} className='px-8 my-10'>
       
       <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent  py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 
              border-b-[.1em] ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput3"
              placeholder="Email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            <label
              htmlFor="exampleFormControlInput3"
              className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Email address
            </label>
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full border-b-[.1em] rounded border-0 bg-transparent py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput33"
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            <label
              htmlFor="exampleFormControlInput33"
              className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Password
            </label>
          </div>

          <div className="mb-6 flex items-center justify-between">
           
            <a
              href="#!"
              className=" text-white transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >Forgot password?</a
            >
          </div>

          <button
            type="submit"
            className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white bg-blue-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light">
            Sign in
          </button>
     </form>
   );
 };


 
const RegisterForm = ({ onSubmit }) => {
   const [email, setEmail] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
 
   const handleSubmit = (event) => {
     event.preventDefault();
     onSubmit({ email, username, password, confirmPassword, avatar });
   };
 
 
   return (
     <form onSubmit={handleSubmit} className='px-8'>
      
       <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent  py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 
              border-b-[.1em] ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput3"
              placeholder="Email address" />
            <label
              htmlFor="exampleFormControlInput3"
              className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Name
            </label>
          </div>


       <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent  py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 
              border-b-[.1em] ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput3"
              placeholder="Email address" />
            <label
              htmlFor="exampleFormControlInput3"
              className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Email address
            </label>
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full border-b-[.1em] rounded border-0 bg-transparent py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput33"
              placeholder="Password" />
            <label
              htmlFor="exampleFormControlInput33"
              className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Password
            </label>
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full border-b-[.1em] rounded border-0 bg-transparent py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput34"
              placeholder="Password" />
            <label
              htmlFor="exampleFormControlInput34"
              className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Confirm Password
            </label>
          </div>
          

          <button
            type="submit"
            className="inline-block my-4 w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white bg-blue-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light">
            Register
          </button>
     </form>
   );
 };

const Login = ({ setShowLogin } ) => {

   const [isLogin, setIsLogin] = useState(true);
   const dispatch = useDispatch();

   const { isAuthenticated } = useSelector(state => state.user)

   useEffect(() => {
   }, [isAuthenticated])

  const handleLogin = async ({ email, password }) => {
    dispatch(LOGIN_START())
    try {
      
      const { data } = await axios.post(`${ PRODUCTION_URL || BASE_URL}/auth/login`, { email, password });
  
      if(data) {
         const { email, username, img, _id, accessToken } = data;
         dispatch(LOGIN_SUCCESSFUL({ email, username, img, _id, accessToken }))
      }
  
      isAuthenticated && setShowLogin(false);
      console.log(data);
    } catch (error) {
      
    }
  };

  const handleRegister = ({ email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    onRegister({ email, password });
  };

  // console.log(setShowLogin);
  return (
    <div className='z-[9999] left-0 fixed  bg-gray-900 bg-opacity-50 top-0 w-full h-full  flex items-center justify-center'>
      <AiOutlineClose className='absolute top-10 sm:top-0 lg:top-10 right-10 text-[2rem] font-bold cursor-pointer text-white' onClick={() => setShowLogin(false)} />
      <div className='w-[25em] h-[85%] bg-[#1a0404] shadow-md'>
      <div>
      <h2 className='text-[2rem] text-center text-white font-mono font-bold my-4'>{isLogin ? 'Login' : 'Register'}</h2>
      {isLogin ? (
        <LoginForm onSubmit={handleLogin} />
      ) : (
        <RegisterForm onSubmit={handleRegister} />
      )}
      <p className='text-[1rem] px-8 text-white'>
        {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
        <button type="button" onClick={() => setIsLogin(!isLogin)} className='mx-2 text-[1rem] text-blue-500 '>
          {isLogin ? 'Register' : 'Login'}
        </button>
      </p>
    </div>
      </div>
    </div>
  )
}





export default Login