import { AiOutlineClose } from "react-icons/ai";
import "./pop.css";
import React from "react";
const PopUp = (props) => {
    return props.trigger ? (
        <>
            <div className="popup">
                <div className="md:w-[36vw]">
                    <div
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                        className="bg-white drop-shadow-lg md:p-10 p-5 md:min-h-[50vh] min-w-full"
                    >
                        <div className="popup-inner text-black relative">
                            <span className=".close-btn absolute top-0 right-0 text-gray-600 text-lg">
                                <button onClick={() => props.setTrigger(false)}>
                                    <AiOutlineClose />
                                </button>{" "}
                                {props.children}
                            </span>
                        </div>

                        <h3 className="text-red-600 font-[600] text-base">Note :</h3>

                        <div className="text-justify">
                            <div className="m-5">
                                <h4 className="text-sky-500 ">Eligbility:</h4>
                                <p className="text-black">
                                    Only students who have successfully completed their course
                                    eligible to apply for degree dispatch
                                </p>
                            </div>

                            <div className="m-5">
                                <h4 className="text-sky-500 ">Address Confirmation:</h4>
                                <p className="text-black">
                                    Provide a valid and correct postal address for the delivery of
                                    the degree certificate.
                                </p>
                            </div>

                            <div className="m-5">
                                <h4 className="text-sky-500 ">Confirmation and Tracking:</h4>
                                <p className="text-black">
                                    Upon successfully registration, you will receive a
                                    confirmation email along with a tracking number to monitor the
                                    progress of you degree dispatch.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        ""
    );
};

export default PopUp;
