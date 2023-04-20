import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_START, LOGIN_SUCCESSFUL, REGISTER_FAILED, REGISTER_START, REGISTER_SUCCESSFUL } from '../redux/user';
import { FaUserCircle } from 'react-icons/fa';
import { login, register } from '../api/api';


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
   const [emailError, setEmailError] = useState('');
   const [username, setUsername] = useState('');
   const [usernameError, setUsernameError] = useState('');
   const [password, setPassword] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [confirmPasswordError, setConfirmPasswordError] = useState('');
   const [avatar, setAvatar] = useState(null);
   const [avatarPreview, setAvatarPreview] = useState(null);
   

  const handleAvatarChange = (e) => {
      const reader = new FileReader();
      
      reader.onload = () => {
          if(reader.readyState === 2) {
              setAvatarPreview(reader.result);
              setAvatar(reader.result);
          }
      }
      reader.readAsDataURL(e.target.files[0]);
  }

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
  };

  const validateUsername = () => {
    if (!username) {
      setUsernameError('Username is required.');
    } else {
      setUsernameError('');
    }
  };
  
  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required.');
    } else if (password.length > 5) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };
  
  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password.');
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  
    validateEmail();
    validateUsername();
    validatePassword();
    validateConfirmPassword();
  
    
  
    onSubmit({ username, email, password, confirmPassword, avatar });
  };
 
 
   return (
     <form onSubmit={handleSubmit} className='px-8'>
      <div className="relative mb-6 flex items-center justify-between" data-te-input-wrapper-init>
        { !avatarPreview ?
          <FaUserCircle className='text-white w-12 h-12'/>
          :
          <img src={avatarPreview} alt="avatar" className='w-12 h-12 '/>
        }
            <label htmlFor='avatar' className='text-white cursor-pointer border-2 w-[80%] text-center py-2'>upload Image</label>
            <input
              type="file"
              accept='image/*'
              className="hidden"
              id="avatar"
              onChange={handleAvatarChange}
              />
          </div>
    
       <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent  py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 px-4 
              border-b-[.1em] ease-linear border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:peer-focus:border-primary"
              id="name"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
            <label
              htmlFor="name"
              className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Name
            </label>
            {usernameError && <span className='text-red-500'>{usernameError}</span>}
          </div>


       <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="email"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent  py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 px-4 
              border-b-[.1em] ease-linear border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:peer-focus:border-primary"
              id="email"
              value={email}
              placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/>
            <label
              htmlFor="email"
              className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Email address
            </label>

            {emailError && <span className='text-red-400'>{emailError}</span>}
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent  py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 px-4 
              border-b-[.1em] ease-linear border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:peer-focus:border-primary"
              id="password"
              value={password}
              placeholder="Password" onChange={(e) => setPassword(e.target.value)}
              />
            <label
              htmlFor="password"
              className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Password
            </label>
            
            {passwordError && <span className='text-red-500'>{passwordError}</span>}

          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent  py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 px-4 
              border-b-[.1em] ease-linear border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:peer-focus:border-primary"
              id="confirmPassword"
              placeholder="Password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              />
            <label
              htmlFor="confirmPassword"
              className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Confirm Password
            </label>
            {confirmPasswordError && <span className='text-red-500'>{confirmPasswordError}</span>}
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

const Login = ({ showLogin, setShowLogin } ) => {

   const [isLogin, setIsLogin] = useState(true);
   const dispatch = useDispatch();

   const { loading, isAuthenticated } = useSelector(state => state.user)

  const handleLogin = async ({ email, password }) => {
    dispatch(LOGIN_START())
    try {
      const data = await login({ email, password })
      if(data) {
         const { email, username, img, _id, accessToken } = data;
         setTimeout(() => {
           dispatch(LOGIN_SUCCESSFUL({ email, username, img, _id, accessToken }))
         }, 2000);
      }
    } catch (error) {
      dispatch(LoginFailed(error.response.data.msg))
    }
  };

  useEffect(() => {
    if(isAuthenticated) {
      setShowLogin(!showLogin);
    }
  },[isAuthenticated])

  const handleRegister = async ({ username, email, password, confirmPassword, avatar }) => {
    dispatch(REGISTER_START())
    try {
      const data = await register({ username, email, password, img: avatar });

      if(data) {
        const { email, username, img, _id, accessToken } = data;
        setTimeout(() => {
          dispatch(REGISTER_SUCCESSFUL({ email, username, img, _id, accessToken }))
        }, 2000);
      }
    } catch(err) {
      dispatch(REGISTER_FAILED(err.response.data.msg))
    } 
  };

  if(loading) {
    return <div className='z-[9999] left-0 fixed    bg-gray-900 bg-opacity-50 top-0 w-full h-full  flex items-center justify-center text-white'>
    <div
    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span
    >
  </div>
    </div>
  }

  // console.log(setShowLogin);
  return (
    <div className='z-[9999] left-0 fixed bg-gray-900 bg-opacity-50 top-0 w-full h-full  flex items-center justify-center' onClick={() => setShowLogin(false)}>
      <div className='w-[25em] py-8 bg-[#1a0404] shadow-md' onClick={(e) => {e.stopPropagation()}}>
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