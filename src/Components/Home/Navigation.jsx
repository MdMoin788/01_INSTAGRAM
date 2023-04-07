import React from 'react'
import "./Navigation.css"
const Navigation = () => {
    return (
        <>
            <img className='ins-logo px-0 mb-5' style={{ width: "100%" }} src="https://github.com/MdMoin788/ALL_IMAGES_PREFESSIONALLY/blob/main/AssertsInsta/Instagramlogo.png?raw=true" alt="logo" />
            <div className='ms-4  sidebanavigation '>
                {/* option  */}
                <div className='optionsShow mb-3 '>
                    <i className="fa-solid fa-house fs-5"></i>
                    <p className='ms-2 TextShowHide '>Home</p>
                </div>
                {/* option  */}
                <div className='optionsShow mb-3 '>
                    <i className="fa-solid fa-magnifying-glass fs-5  mt-1"></i>
                    <p className='ms-2 TextShowHide '>Search</p>
                </div>
                {/* option  */}
                <div className='optionsHide mb-3  show '>
                    <i className="fa-sharp fa-regular fa-compass fs-5 mt-1 TextShowHide"></i>
                    <p className='ms-2 TextShowHide '>Explore</p>
                </div>
                {/* option  */}
                <div className='optionsShow mb-3  '>
                    <i className="fa-solid fa-video fs-5 mt-1"></i>
                    <p className='ms-2 TextShowHide '>Reeals</p>
                </div>
                {/* option  */}
                <div className='optionsHide mb-3 show  '>
                    <i className="fa-regular fa-message fs-5 mt-1 TextShowHide"></i>
                    <p className='ms-2 TextShowHide '>Messages</p>
                </div>
                {/* option  */}
                <div className='optionsHide show mb-3  '>
                    <i className="fa-regular fa-heart fs-5 mt-1 TextShowHide"></i>
                    <p className='ms-2 TextShowHide '>Notification</p>
                </div>
                {/* option  */}
                <div className='optionsShow mb-3 '>
                    <i className="fa-sharp fa-solid fa-plus mt-1 fs-5"></i>
                    <p className='ms-2 TextShowHide '>Create</p>
                </div>
                {/* option  */}
                <div className='optionsShow mb-3  '>
                    <i className="fa-sharp fa-regular fa-circle mt-1 fs-2"></i>
                    <p className='ms-2 TextShowHide '>Profile</p>
                </div>
                {/* option  */}
                <div className='optionsHide mb-3  mt-4 '>
                    <i className="fa-solid fa-bars fs-5 mt-1 TextShowHide"></i>
                    <p className='ms-2 TextShowHide '>More</p>
                </div>
            </div>
        </>
    )
}
export default Navigation
