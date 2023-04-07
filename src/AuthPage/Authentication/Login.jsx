import React, { useState } from 'react'
import "./Login.css"
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios"
const Login = () => { 
  const [show, setShow] = useState(true)
  // user registration 
  const [register, setRegister] = useState({ email: '', password: "", full_name: '', user_name: '', token: Math.random() })
  const [loader, setLoader] = useState(false)
  // console.log('register', register);
  const registerHandler = () => {
    // if (register?.full_name && register?.email && register?.user_name && register?.full_name) {
    // const resisteration = axios.post('/register', register)
    // if (resisteration?.data?.user?.full_name) {
    //   toast.success("Register Successful")
    //setShow(true)
    // }
    // else {
    //   toast.success("Something went wrong")
    // }
    // }
    localStorage.setItem('user', register)
  }
  // user login
  const [login, setlogin] = useState({ email: '', password: "", token: Math.random() })
  const loginHandler = () => {
    // if (login?.email && login?.password) {
    //   const login = axios.post('/login', register)
    //   if (login?.data?.user?.email) {
    //     localStorage.setItem('user', login.data?.user)
    //     toast.success("login Successful")
    //   }
    //   else {
    //     toast.success("Email or Password is wrong")
    //   }
    // }
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 5000)

    if (!loader) {
      if (login?.email && login?.password) {
        localStorage.setItem('user', JSON.stringify(login))
        window.location.href = '/dashboard';
      }
    }
  }
  return (
    <div className=' container card loginParent p-4'  >
      <img className='ins-logo' src="https://github.com/MdMoin788/ALL_IMAGES_PREFESSIONALLY/blob/main/AssertsInsta/Instagramlogo.png?raw=true" alt="logo" />
      <div className="row">
        <div className="tab-content">
          {show ?
            <div className="">
              <div className="text-center mb-3 mt-3">
                <p>Sign in with</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-google"></i>
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-github"></i>
                </button>
              </div>
              <div className='d-flex justify-content-between mb-2'>
                <div className="text-center border mt-3" style={{ width: "50%", height: "1px" }}></div>
                <div className="text-center mt-1">OR</div>
                <div className="text-center border mt-3" style={{ width: "50%", height: "1px" }}></div>
              </div>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-2">
                <label className="form-label">Email or Phone</label>
                <input type="email" placeholder='Email or Phone' className="form-control" name='email' onChange={(event) => setlogin({ ...login, [event.target.name]: event.target.value })} />
              </div>
              {/* <!-- Password input --> */}
              <div className="form-outline mb-2">
                <label className="form-label" >Password</label>
                <input type="password" placeholder='password' name='password' className="form-control" onChange={(event) => setlogin({ ...login, [event.target.name]: event.target.value })} />
              </div>
              {/* <!-- 2 column grid layout --> */}
              {/* <!-- Submit button --> */}
              <button className="btn btn-primary btn-block mb-4 mt-4 col-12" onClick={loginHandler}>
                {
                  loader ? "Signing....." : "Sign in"
                }
              </button>
              <div className="row mb-3">
                <div className="text-center">
                  <span >Forgot password?</span>
                </div>
              </div>
              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>Not a member? <span className='text-primary fs-6 ms-1 fw-bold' onClick={() => setShow(false)} >Register</span></p>
              </div>
            </div>
            :
            <div className="">
              <div className="text-center mb-3 mt-3">
                <p>Sign Up with</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-google"></i>
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-github"></i>
                </button>
              </div>
              <div className='d-flex justify-content-between mb-2'>
                <div className="text-center border mt-3" style={{ width: "50%", height: "1px" }}></div>
                <div className="text-center mt-1">OR</div>
                <div className="text-center border mt-3" style={{ width: "50%", height: "1px" }}></div>
              </div>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-2">
                <label className="form-label">Email or Phone</label>
                <input type="email" id="loginName" placeholder='Email or Phone' name='full_name' className="form-control" onChange={(event) => setRegister({ ...register, [event.target.name]: event.target.value })} />
              </div>
              {/* <!-- full name input --> */}
              <div className="form-outline mb-2">
                <label className="form-label"  >Full Name</label>
                <input type="text" name="full_name" placeholder='Full Name' className="form-control" onChange={(event) => setRegister({ ...register, [event.target.name]: event.target.value })} />
              </div>
              {/* <!-- user name input --> */}
              <div className="form-outline mb-2">
                <label className="form-label"  >User Name</label>
                <input type="text" name="user_name" placeholder='User Name' className="form-control" onChange={(event) => setRegister({ ...register, [event.target.name]: event.target.value })} />
              </div>
              {/* <!-- Password input --> */}
              <div className="form-outline mb-2">
                <label className="form-label"  >Password</label>
                <input type="password" name="password" placeholder='password' className="form-control" onChange={(event) => setRegister({ ...register, [event.target.name]: event.target.value })} />
              </div>
              {/* <!-- Submit button --> */}
              <button className="btn btn-primary btn-block mb-3 col-12 mt-4" onClick={registerHandler}>   {
                  loader ? "Register....." : "Sign Up"
                }</button>
              {/* <!-- Login buttons --> */}
              <div className="text-center">
                <p>Not a member ? <span className='text-primary fs-6 ms-1 fw-bold' onClick={() => setShow(true)}>Login</span></p>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
export default Login
