import { AiOutlineCheck } from "react-icons/ai";
const Success = () => {
    return (
        <>
            <div className="grid place-content-center">
                <div className="">
                    <div className="bg-white drop-shadow-lg p-10 min-h-[25vh] w-[50vw] grid grid-rows-4 place-content-center">
                        <div className="text-center  ">
                            <div className="bg-green-500 text-white rounded-full w-16 h-16 top-10 left-80 absolute">
                                <span>
                                    <AiOutlineCheck className="w-10 h-10 text-center absolute top-3 left-3" />
                                </span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-center text-xl font-semibold mb-10 absolute top-[6.5rem] left-56">
                                <span>Payment Received Successfully</span>
                            </h3>
                            <h4 className="text-center text-base font-semibold text-green-600 mt-12 top-12">
                                Your application has been submitted successfully
                            </h4>
                            <p className="text-j left-40 absolute text-sm mt-0.5 w-2/3">
                                We are currently processing your request, and{" "}
                                <span className="font-medium">
                                    it will take approximately 4-5 days.
                                </span>
                                You will receive a courier tracking number on your registered
                                mobile number once the process is completed. For any queries or
                                assistance, please feel to contact our support team.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Success;
