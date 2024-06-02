import { Link } from "react-router-dom";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import SignupSuccessModal from "./SignupSuccess";
import ErrorModalSignup from "./ErrorModalSignup";

const FormSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);
    const [errorSignUp, setErrorSignup] = useState(null);

    const navigate = useNavigate();

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleRegister = async () => {
        const payload = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post(
                'https://reqres.in/api/register',
                payload
            );
            console.log(response);

            const token = response.data.token;
            setToken(token);
            localStorage.setItem('access_token', token) //menyimpan token di dalam localstorage

            // setTimeout(() => {
            //     navigate('/');
            // }, 3000);

        } catch (error) {
            console.log(error.response.data.error);
            setErrorSignup(error.response.data.error)
        }
    };

    return (
        <div
            className="m-0 flex-[0.9531] rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none bg-white flex flex-col items-start justify-start py-5 px-[52px] box-border gap-[16px] min-w-[385px] max-w-full mq750:pl-[26px] mq750:pr-[26px] mq750:box-border mq750:min-w-full mq1050:flex-1"
        >
            <div
                className="self-stretch flex flex-col items-center justify-start gap-[24px]"
            >
                <div
                    className="self-stretch flex flex-col items-center justify-start gap-[20px]"
                >
                    <h1
                        className="m-0 self-stretch relative text-17xl leading-[40px] font-semibold font-text-sm-medium text-slate-800 text-center whitespace-nowrap mq450:text-3xl mq450:leading-[24px] mq1050:text-10xl mq1050:leading-[32px]"
                    >
                        Sign Up
                    </h1>
                    <div
                        className="self-stretch relative text-base leading-[24px] font-text-sm-medium text-slate-400 text-center"
                    >
                        Welcome back, you’ve been missed!
                    </div>
                </div>
                <div
                    className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap mq750:flex mq750:justify-center mq750:items-center"
                >
                    <button
                        className="cursor-pointer py-3.5 px-[34px] bg-[transparent] rounded-lg flex flex-row items-center justify-center gap-[10px] whitespace-nowrap border-[1px] border-solid border-slate-300 hover:bg-silver-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100"
                    >
                        <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="../public/icon.svg"
                        />

                        <div
                            className="relative text-base leading-[24px] font-medium font-text-sm-medium text-slate-400 text-left"
                        >
                            Sign With Google
                        </div>
                    </button>
                    <button
                        className="cursor-pointer py-3.5 px-10 bg-[transparent] rounded-lg flex flex-row items-center justify-center gap-[10px] whitespace-nowrap border-[1px] border-solid border-slate-300 hover:bg-silver-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100"
                    >
                        <img className="h-5 w-5 relative" alt="" src="../public/icon-1.svg" />

                        <div
                            className="relative text-base leading-[24px] font-medium font-text-sm-medium text-slate-400 text-left inline-block min-w-[122px]"
                        >
                            Sign With Apple
                        </div>
                    </button>
                </div>
            </div>
            <div
                className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full"
            >
                <div className="self-stretch h-6 relative max-w-full">
                    <div
                        className="absolute top-[0px] left-[222.1px] text-base leading-[24px] font-text-sm-medium text-slate-400 text-center flex items-center justify-center w-[38.7px] mq750:hidden"
                    >
                        OR
                    </div>
                    <div
                        className="absolute top-[12px] left-[279.3px] box-border w-[209px] h-[0.3px] border-t-[0.3px] border-solid border-slate-400 mq750:hidden"
                    ></div>
                    <div
                        className="absolute top-[12px] left-[0px] w-[488px] flex flex-col items-start justify-start gap-[27.7px] max-w-full mq750:justify-center mq750:items-center"
                    >
                        <div
                            className="w-[209px] h-[0.3px] relative box-border border-t-[0.3px] border-solid border-slate-400 mq750:w-[375px]"
                        ></div>
                    </div>
                </div>
            </div>
            <div
                className="self-stretch flex flex-col items-start justify-start gap-[8px]"
            >
                <div
                    className="self-stretch relative text-base leading-[24px] font-text-sm-medium text-slate-900 text-left"
                >
                    Email
                </div>
                <div
                    className="self-stretch rounded-xl bg-text-color-100 flex flex-row items-start justify-start py-3.5 px-4 gap-[12px] border-[1px] border-solid border-slate-300"
                >
                    <div
                        className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0"
                    >
                        <div className="w-5 h-5 relative overflow-hidden shrink-0">
                            <div
                                className="absolute h-[82.5%] w-[91%] top-[9%] right-[4.5%] bottom-[8.5%] left-[4.5%] rounded box-border border-[1.5px] border-solid border-darkslategray"
                            ></div>
                            <img
                                className="absolute h-[33.5%] w-[83.5%] top-[29%] right-[8%] bottom-[37.5%] left-[8.5%] max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="../public/vector-3014.svg"
                            />
                        </div>
                    </div>
                    <input onChange={handleChangeEmail}
                        className="w-[150px] [border:none] [outline:none] font-text-sm-medium text-base bg-[transparent] h-6 relative leading-[24px] text-slate-400 text-left inline-block p-0"
                        placeholder="Input Email Address"
                        type="text"
                    />
                </div>
            </div>
            <div
                className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full"
            >
                <div
                    className="self-stretch relative text-base leading-[24px] font-text-sm-medium text-slate-900 text-left"
                >
                    Password
                </div>
                <div
                    className="self-stretch rounded-xl bg-text-color-100 box-border flex flex-row items-start justify-start py-3.5 px-[15px] gap-[12px] max-w-full border-[1px] border-solid border-slate-300 mq750:flex-wrap"
                >
                    <div
                        className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0"
                    >
                        <img
                            className="w-5 h-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="../public/deviceoutlinelock.svg"
                        />
                    </div>
                    <input onChange={handleChangePassword}
                        className="w-[calc(100%_-_70px)] [border:none] [outline:none] font-text-sm-medium text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-slate-400 text-left inline-block min-w-[255px] max-w-full p-0"
                        placeholder="Input Password"
                        type="text"
                    />

                    <div
                        className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0"
                    >
                        <img
                            className="w-5 h-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="../public/interfaceoutlineeyedisable.svg"
                        />
                    </div>
                </div>
            </div>
            <div
                className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full"
            >
                <div
                    className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap"
                >
                    <div className="flex flex-row items-start justify-start gap-[10px]">
                        <div
                            className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0"
                        >
                            <input className="m-0 w-5 h-5 rounded" type="checkbox" />
                        </div>
                        <div
                            className="relative text-base leading-[24px] font-text-sm-medium text-slate-400 text-center inline-block min-w-[110px]"
                        >
                            Remember Me
                        </div>
                    </div>
                    <div
                        className="relative text-base leading-[24px] font-text-sm-medium text-red-500 text-center"
                    >
                        Forget Password?
                    </div>
                </div>
            </div>
            <button onClick={handleRegister}
                className="cursor-pointer [border:none] py-4 px-5 bg-main-color-primary self-stretch rounded-xl flex flex-row items-start justify-center whitespace-nowrap hover:bg-mediumslateblue"
            >
                <div
                    className="relative text-base leading-[24px] font-medium font-text-sm-medium text-slate-50 text-left inline-block min-w-[60px]"
                >
                    Sign Up
                </div>
            </button>
            <p
                className="m-0 self-stretch relative text-base leading-[24px] text-center"
            >
                <span className="font-text-sm-medium">
                    <span className="text-slate-400">have an account?</span>
                    <span className="text-main-color-primary"> </span>
                </span>
                <Link to='/'>
                    <span className="text-main-color-primary">
                        <span className="font-semibold font-text-sm-medium">Sign In</span>
                    </span>
                </Link>
            </p>
            {token && <SignupSuccessModal></SignupSuccessModal>}
            {errorSignUp && <ErrorModalSignup onClose={() => setErrorSignup(false)} errorSignUp={errorSignUp}></ErrorModalSignup>}
        </div>
    )
};

export default FormSignup