import {Link} from 'react-router-dom'
import { ToAbsoluteUrl } from '../../Utils/ToAbsoluteUrl'

const Error500= () => {
  return (
    <div className='d-flex flex-column flex-root'>
      {/*begin::Authentication - Error 500 */}
      <div className='d-flex flex-column flex-column-fluid'>
        {/*begin::Content*/}
        <div className='d-flex flex-column flex-column-fluid text-center p-10 py-lg-15'>
          <Link to='/dashboard' className='mb-10 pt-lg-10'>
            <img
              alt='Logo'
              src={ToAbsoluteUrl('/media/logos/default.svg')}
              className='h-40px mb-5'
            />
          </Link>
          <div className='pt-lg-10 mb-10'>
            <h1 className='fw-bolder fs-2qx text-gray-800 mb-10'>System Error</h1>
            <div className='fw-bold fs-3 text-muted mb-15'>
              Something went wrong!
              <br />
              Please try again later.
            </div>
            <div className='text-center'>
              <Link to='/dashboard' className='btn btn-lg btn-primary fw-bolder'>
                Go to homepage
              </Link>
            </div>
          </div>
          <div
            className='d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px'
            style={{
              backgroundImage: `url('${ToAbsoluteUrl('/media/illustrations/sketchy-1/17.png')}')`,
            }}
          ></div>
        </div>
        {/* <div className='d-flex flex-center flex-column-auto p-10'>
          <div className='d-flex align-items-center fw-bold fs-6'>
            <a href='https://keenthemes.com' className='text-muted text-hover-primary px-2'>
              About
            </a>
            <a href='mailto:support@keenthemes.com' className='text-muted text-hover-primary px-2'>
              Contact
            </a>
            <a href='https://1.envato.market/EA4JP' className='text-muted text-hover-primary px-2'>
              Contact Us
            </a>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export {Error500}
