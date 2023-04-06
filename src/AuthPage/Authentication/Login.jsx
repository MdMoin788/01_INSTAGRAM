import React, { useState } from 'react'
const Login = () => {
  const [show, setShow] = useState(true)


  return (
    <div className='container card p-4' style={{ width: "25%", margin: "auto", marginTop: "10%", }}>
      <div className="row">
        {/* <!-- Pills navs --> */}
        <ul className="nav nav-pills nav-justified mb-3"  >
          <li className="nav-item ms-2" onClick={() => setShow(true)}>
            <span className={`nav-link  ${show == true && "active"}`}
            >Login</span>
          </li>
          <li className="nav-item" onClick={() => setShow(false)}>
            <span className={`nav-link  ${show == false && "active"}`}
            >Register</span>
          </li>
        </ul>
        {/* <!-- Pills navs --> */}

        {/* <!-- Pills content --> */}
        <div className="tab-content">

          {show ?

            <div className="">
              <form>
                <div className="text-center mb-3">
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

                <p className="text-center">or</p>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-2">
                  <label className="form-label" for="loginName">Email or username</label> 
                  <input type="email" className="form-control" />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-2">
                  <label className="form-label" for="loginPassword">Password</label>
                  <input type="password" className="form-control" />
                </div>

                {/* <!-- 2 column grid layout --> */}
                <div className="row mb-3">


                  {/* <div className="col-md-6 d-flex justify-content-center">
                    <a >Forgot password?</a>
                  </div> */}
                  <div className="text-center">
                    <a >Forgot password?</a>

                  </div>
                </div>

                {/* <!-- Submit button --> */}
                <button className="btn btn-primary btn-block mb-4 col-12">Sign in</button>

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                  <p>Not a member? <a href="#!">Register</a></p>
                </div>
              </form>
            </div>

            :



            <div className="">
              <form>
                <div className="text-center mb-3">
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

                <p className="text-center">or</p>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-2">
                  <label className="form-label" for="loginName">Email or username</label> 
                  <input type="email" id="loginName" className="form-control" />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-2">
                  <label className="form-label" for="loginPassword">Password</label>
                  <input type="password" id="loginPassword" className="form-control" />
                </div>



                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-primary btn-block mb-3 col-12 mt-4">Sign Up</button>

                {/* <!-- Register buttons --> */}

              </form>
            </div>


          }


        </div>

      </div>


    </div>

  )
}

export default Login
