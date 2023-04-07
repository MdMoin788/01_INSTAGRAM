import React from 'react'
import "./Navigation.css"
const Navigation = () => {
    return (
        <>
            <img className='ins-logo px-0 mb-5' style={{ width: "100%" }} src="https://github.com/MdMoin788/ALL_IMAGES_PREFESSIONALLY/blob/main/AssertsInsta/Instagramlogo.png?raw=true" alt="logo" />
            <div className='ms-4  sidebanavigation '>
                <div className='d-flex mb-3'>
                    <i class="fa-solid fa-house fs-5"></i>
                    <p className='ms-2 show '>Home</p>
                </div>
                <div className='d-flex mb-3'>
                    <i class="fa-solid fa-magnifying-glass fs-5  mt-1"></i>
                    <p className='ms-2 show '>Search</p>
                </div>
                <div className='d-flex mb-3 '>
                    <i class="fa-sharp fa-regular fa-compass fs-5 mt-1 show"></i>
                    <p className='ms-2 show '>Explore</p>
                </div>
                <div className='d-flex mb-3 '>
                    <i class="fa-solid fa-video fs-5 mt-1"></i>
                    <p className='ms-2 show '>Reeals</p>
                </div>
                <div className='d-flex mb-3 '>
                    <i class="fa-regular fa-message fs-5 mt-1 show"></i>
                    <p className='ms-2 show '>Messages</p>
                </div>
                <div className='d-flex mb-3 '>
                    <i class="fa-regular fa-heart fs-5 mt-1 show"></i>
                    <p className='ms-2 show '>Notification</p>
                </div>
                <div className='d-flex mb-3'>
                    <i class="fa-sharp fa-solid fa-plus mt-1 fs-5"></i>
                    <p className='ms-2 show '>Create</p>
                </div>
                <div className='d-flex mb-3 '>
                    <i class="fa-sharp fa-regular fa-circle mt-1 fs-2"></i>
                    <p className='ms-2 show '>Profile</p>
                </div>
                <div className='d-flex mb-3 mt-4 '>
                    <i className="fa-solid fa-bars fs-5 mt-1 show"></i>
                    <p className='ms-2 show '>More</p>
                </div>

            </div>

        </>
    )
}

export default Navigation
