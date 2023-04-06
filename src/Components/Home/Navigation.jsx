import React from 'react'

const Navigation = () => {
    return (
        <>
            <img className='ins-logo px-0 mb-4' style={{ width: "100%" }} src="https://github.com/MdMoin788/ALL_IMAGES_PREFESSIONALLY/blob/main/AssertsInsta/Instagramlogo.png?raw=true" alt="logo" />
            <div className='ms-4 ' style={{ width: "100%", display: "flex", flexDirection: 'column', justifyContent: "", height: "100%" }}>
                <div className='d-flex mb-3'>
                    <i class="fa-solid fa-house fs-4"></i>
                    <p className='ms-2 '>Home</p>
                </div>
                <div className='d-flex mb-3'>
                    <i class="fa-solid fa-magnifying-glass fs-4"></i>
                    <p className='ms-2 fw-bold'>Home</p>
                </div>
                <div className='d-flex mb-3'>
                    <i class="fa-sharp fa-regular fa-compass fs-4"></i>
                    <p className='ms-2 fw-bold'>Home</p>
                </div>
                <div className='d-flex mb-3'>
                    <i class="fa-solid fa-video fs-4"></i>
                    <p className='ms-2 fw-bold'>Home</p>
                </div>
                <div className='d-flex mb-3'>
                    <i class="fa-regular fa-heart fs-4"></i>
                    <p className='ms-2 fw-bold'>Home</p>
                </div>
                <div className='d-flex mb-3 mt-4'>
                <i className="fa-solid fa-bars fs-4"></i>
                    <p className='ms-2 fw-bold'>More</p>
                </div>
               
            </div>

        </>
    )
}

export default Navigation
