import React from 'react'
const Header = () => {
    return (
        <header className='min-w-full md:w-full py-3 leading-[80px] flex items-center bg-[#0970b8] fixed z-[9] mb-16'>
            <div className="container">
                <div className="">
                    {/* ===========Nav start=========== */}
                    <div className="grid place-content-center">
                        {/* <span></span> */}
                        <div className="leading-[20px] flex items-center text-[16px] text-white md:text-[18px] font-medium">
                            <p>Online Registration For Degree Delivery</p>
                        </div>
                    </div>
                    {/* =============Nav end============= */}

                </div>
            </div>
        </header>
    )
}

export default Header
