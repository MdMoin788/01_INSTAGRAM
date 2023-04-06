import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='d-flex flex-column flex-root'>
      <div className='d-flex flex-column flex-center flex-column-fluid p-10'>
        <img
        style={{width:"100px", margin:'auto'}}
          src="https://imgs.search.brave.com/6_P9bMbQulDnEEjIy6rugC7UdlX93R2ZfpmgiJy1-UU/rs:fit:1200:1200:1/g:ce/aHR0cDovL3BsdXNw/bmcuY29tL2ltZy1w/bmcvaW5zdGFncmFt/LWxvZ28tZXBzLXBu/Zy1pbnN0YWdyYW0t/bG9nby0xNzg0LnBu/Zw"
          alt=''
          className='mw-100 mb-10 h-lg-450px mt-4 mb-4'
        />

        <h3 className='fw-bold mb-10 text-center mb-4' style={{ color: '#A3A3C7' }}>
          Seems there is nothing here
        </h3>
        <Link to='/' className='btn btn-primary '>
          Return Home
        </Link>
      </div>
    </div>
  )
}

export { Error404 }
