import React, { useState } from 'react'
import "./Login.css"
const Login = () => {
  const [show, setShow] = useState(true)


  return (
    <div className=' container card loginParent p-4'  >
      <img className='ins-logo' src="https://github.com/MdMoin788/ALL_IMAGES_PREFESSIONALLY/blob/main/AssertsInsta/Instagramlogo.png?raw=true" alt="logo" />
      <div className="row">
        {/* <!-- Pills navs --> */}
        {/* <ul className="nav nav-pills nav-justified mb-3"  >
          <li className="nav-item ms-2" onClick={() => setShow(true)}>
            <span className={`nav-link  ${show == true && "active"}`}
            >Login</span>
          </li>
          <li className="nav-item" onClick={() => setShow(false)}>
            <span className={`nav-link  ${show == false && "active"}`}
            >Register</span>
          </li>
        </ul> */}
        {/* <!-- Pills navs --> */}

        {/* <!-- Pills content --> */}
        <div className="tab-content">

          {show ?

            <div className="">
              <form>

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
                  <label className="form-label"  for="loginName">Email or Phone</label>
                  <input type="email" placeholder='Email or Phone' className="form-control" />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-2">
                  <label className="form-label" for="loginPassword">Password</label>
                  <input type="password" placeholder='password' className="form-control" />
                </div>

                {/* <!-- 2 column grid layout --> */}


                {/* <!-- Submit button --> */}
                <button className="btn btn-primary btn-block mb-4 mt-4 col-12">Sign in</button>
                <div className="row mb-3">



                  <div className="text-center">
                    <a >Forgot password?</a>

                  </div>
                </div>
                {/* <!-- Register buttons --> */}
                <div className="text-center">
                  <p>Not a member? <span className='text-primary fs-6 ms-1 fw-bold' onClick={() => setShow(false)}>Register</span></p>
                </div>
              </form>
            </div>

            :



            <div className="">
              <form>
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
                  <label className="form-label" for="loginName">Email or username</label>
                  <input type="email" id="loginName" placeholder='Email or Phone' className="form-control" />
                </div>

                {/* <!-- full name input --> */}
                <div className="form-outline mb-2">
                  <label className="form-label" for="fullName" >Full Name</label>
                  <input type="text" id="fullName" placeholder='Full Name' className="form-control" />
                </div>
                {/* <!-- user name input --> */}
                <div className="form-outline mb-2">
                  <label className="form-label" for="username" >User Name</label>
                  <input type="text" id="username" placeholder='User Name' className="form-control" />
                </div>
                {/* <!-- Password input --> */}
                <div className="form-outline mb-2">
                  <label className="form-label" for="loginPassword" >Password</label>
                  <input type="password" id="loginPassword" placeholder='password' className="form-control" />
                </div>



                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-primary btn-block mb-3 col-12 mt-4">Sign Up</button>
                {/* <!-- Login buttons --> */}
                <div className="text-center">
                  <p>Not a member ? <span className='text-primary fs-6 ms-1 fw-bold' onClick={() => setShow(true)}>Login</span></p>
                </div>
              </form>
            </div>


          }


        </div>

      </div>


    </div>

  )
}

export default Login
