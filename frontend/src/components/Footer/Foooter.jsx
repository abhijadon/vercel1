import React from 'react'
const Header = () => {
    return (
        <header className='min-w-full md:w-full py-3 leading-[80px] flex items-center bg-[#666666] relative top-10'>
            <div className="container">
                <div className="">
                    {/* ===========logo start=========== */}
                    <div className="flex items-center justify-center gap-[10px]">
                        {/* <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center" >

                        </span> */}
                        <div className="leading-[20px] flex items-center text-white text-[16px] md:text-[17px] font-medium">
                            <p>©2023 SODE Couselling Services LLP</p>
                        </div>
                    </div>
                    {/* =============logo end============= */}

                </div>
            </div>
        </header>
    )
}

export default Header
