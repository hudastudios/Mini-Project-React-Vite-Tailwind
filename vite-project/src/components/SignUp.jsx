import FormSignup from "./Form-Signup";

const SignUp = () => {
    return (

        <div
            className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[140px] pb-[107px] pr-5 pl-[46px] box-border gap-[32px] leading-[normal] tracking-[normal] text-center text-base text-slate-900 font-text-sm-medium lg:pl-[23px] lg:box-border mq750:gap-[16px]"
        >
            <div
                className="w-[1180px] flex flex-row items-start justify-start max-w-full [row-gap:20px] text-center text-17xl text-greyscale-900 font-text-sm-medium mq1050:flex-wrap"
            >
                <div
                    className="flex-1 rounded-tl-2xl rounded-tr-none rounded-br-none rounded-bl-2xl bg-white flex flex-col items-start justify-start p-10 box-border gap-[32px] min-w-[382px] max-w-full mq750:gap-[16px] mq750:pt-[26px] mq750:pb-[26px] mq750:box-border mq750:min-w-full mq1050:flex-1"
                >
                    <img
                        className="self-stretch h-[407px] relative max-w-full overflow-hidden shrink-0 object-contain"
                        loading="lazy"
                        alt=""
                        src="../public/10-1@2x.png"
                    />

                    <div
                        className="self-stretch flex flex-row items-start justify-start py-0 px-[13px] box-border max-w-full"
                    >
                        <div
                            className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full"
                        >
                            <h1
                                className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit mq450:text-3xl mq450:leading-[29px] mq1050:text-10xl mq1050:leading-[38px]"
                            >
                                Unlock Knowledge On-the-Go UStudy
                            </h1>
                            <p
                                className="m-0 self-stretch relative text-base leading-[24px] text-gray"
                            >
                                Seize the moment and help shape the future by starting a career
                                in blockchain now
                            </p>
                        </div>
                    </div>
                </div>
                <FormSignup></FormSignup>
            </div>
            <div
                className="w-[1180px] flex flex-col items-start justify-start gap-[18px] max-w-full mq750:w-0"
            >
                <div
                    className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full"
                >
                    <div
                        className="w-[471px] flex flex-row items-start justify-between gap-[20px] max-w-full lg:hidden mq750:w-[332px]"
                    >
                        <div className="relative leading-[24px] whitespace-nowrap mq750:hidden">
                            Terms & Condition
                        </div>
                        <a
                            className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[105px] whitespace-nowrap"
                        >Privacy Policy</a
                        >
                        <div className="relative leading-[24px] inline-block min-w-[35px]">
                            Help
                        </div>
                        <div className="flex flex-row items-start justify-start">
                            <div className="relative leading-[24px] inline-block min-w-[55px]">
                                English
                            </div>
                            <div
                                className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0"
                            >
                                <img
                                    className="w-5 h-5 relative overflow-hidden shrink-0"
                                    alt=""
                                    src="../public/hugeiconarrowsoutlinedirectiondown-01.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <p
                    className="m-0 self-stretch relative text-sm leading-[20px] font-medium text-main-color-secondary whitespace-nowrap mq750:hidden"
                >
                    @ 2023 UStudy. All Right Reserved.
                </p>
            </div>
        </div>
    )
};

export default SignUp;