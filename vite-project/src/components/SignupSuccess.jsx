import { Link } from "react-router-dom";

const SignupSuccessModal = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div
                className="w-[322px] rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start pr-6 pl-6 pb-6 box-border max-w-full z-[3]"
            >

                <div
                    className="self-stretch flex-1 flex flex-col items-center justify-start"
                >
                    <img
                        className="flex-1 relative max-h-full object-contain"
                        loading="lazy"
                        alt=""
                        src="../public/checkgreen.png"
                    />

                    <div
                        className="self-stretch flex flex-col items-start justify-start"
                    >
                        <div className="m-0 text-base self-stretch relative leading-[20px] flex flex-col gap-4 justify-center items-center">
                            <div><b>Congratulations</b></div>
                            <div>your account has been successfully created,</div>
                            <Link to={'/'}><button className="button w-40 h-10 text-white bg-[#16a34a] rounded-md hover:bg-[#14532d]">continue to Sign In</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignupSuccessModal;