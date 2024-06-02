import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const DetailUserSection = () => {

    const param = useParams();

    console.log(param?.id);

    const [detail, setDetail] = useState({})
    const navigate = useNavigate();

    const getDetail = async () => {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${param?.id}`);
            setDetail(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error.response);
        }
    };

    useEffect(() => {
        getDetail();
    }, []);

    return (
        <div
            className="self-stretch flex flex-row items-start justify-start py-0 px-[23px] box-border max-w-full text-left text-xl text-slate-800 font-text-xl-semi-bold"
        >
            <div
                className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full"
            >
                <div
                    className="self-stretch flex flex-row items-center justify-between py-0 px-px gap-[20px] mq450:flex-wrap"
                >
                    <div
                        className="flex flex-col items-center justify-start gap-[10px]"
                    >
                        <div
                            className="[text-decoration:none] self-stretch relative font-semibold text-[inherit] mq450:text-base"
                        > {detail.first_name} {detail.last_name}
                        </div>
                        <div
                            className="h-2.5 relative text-sm text-slate-600 flex items-center"
                        >
                            Let’s check your update today
                        </div>
                    </div>
                    <button
                        className="cursor-pointer py-2 px-3.5 bg-main-color-primary shadow-[0px_15px_50px_rgba(175,_176,_185,_0.15)] rounded-lg flex flex-col items-center justify-center border-[1.5px] border-solid border-slate-200"
                    >
                        <Link to={'/Dashboard'}
                            className="flex flex-row items-center justify-start gap-[10px]"
                        >
                            <img
                                className="h-[15px] w-2.5 relative"
                                alt=""
                                src="../public/BacktoList.png"
                            />

                            <div
                                className="relative text-sm leading-[20px] font-text-xl-semi-bold text-white text-left"
                            >
                                Back to students list
                            </div>
                        </Link>
                    </button>
                    <div
                        className="self-stretch shadow-[0px_15px_50px_rgba(175,_176,_185,_0.15)] rounded-lg bg-main-color-black hidden flex-col items-center justify-center py-2.5 px-3 text-right text-sm text-main-color-white"
                    >
                        <div
                            className="w-[114px] flex-1 flex flex-row items-center justify-start gap-[2px]"
                        >
                            <img
                                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                                alt=""
                                src="../public/hugeiconinterfaceoutlineplus.svg"
                            />

                            <div className="self-stretch flex-1 relative leading-[140%]">
                                Add Teachers
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="self-stretch rounded-lg bg-main-color-white flex flex-col items-start justify-start pt-2 px-5 pb-5 box-border gap-[24px] max-w-full text-sm text-main-color-black"
                >
                    <div
                        className="self-stretch box-border flex flex-row items-center justify-start pt-2 px-0 pb-1.5 max-w-full border-b-[1px] border-solid border-slate-200"
                    >

                    </div>
                    <div
                        className="self-stretch flex flex-row items-center justify-start"
                    >
                        <div className="flex flex-row items-end justify-start">
                            <div className="flex flex-row items-end justify-start">
                                <img
                                    className="h-[75px] w-[75px] relative rounded-[1337.95px] object-cover"
                                    loading="lazy"
                                    alt=""
                                    src={detail.avatar}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full"
                    >
                        <div
                            className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full"
                        >
                            <div
                                className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[347px] max-w-full mq675:min-w-full"
                            >
                                <div
                                    className="self-stretch relative leading-[24px] font-medium"
                                >
                                    Full Name *
                                </div>
                                <div
                                    className="self-stretch rounded-lg bg-main-color-white box-border flex flex-row items-center justify-start py-2 px-[15px] max-w-full border-[1px] border-solid border-slate-200"
                                >
                                    <div
                                        className="w-full [border:none] [outline:none] font-text-xl-semi-bold text-sm bg-[transparent] h-6 flex-1 relative leading-[24px] text-main-color-black text-left inline-block min-w-[250px] max-w-full p-0"
                                    >
                                        {detail.first_name} {detail.last_name}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[347px] max-w-full mq675:min-w-full"
                            >
                                <div
                                    className="self-stretch relative leading-[24px] font-medium"
                                >
                                    User ID
                                </div>
                                <div
                                    className="self-stretch rounded-lg bg-main-color-white box-border flex flex-row items-center justify-start py-2 px-[15px] max-w-full border-[1px] border-solid border-slate-200"
                                >
                                    <div
                                        className="w-full [border:none] [outline:none] font-text-xl-semi-bold text-sm bg-[transparent] h-6 flex-1 relative leading-[24px] text-main-color-black text-left inline-block min-w-[250px] max-w-full p-0"

                                    >
                                        {detail.id}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full"
                        >
                            <div
                                className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[347px] max-w-full mq675:min-w-full"
                            >
                                <div
                                    className="self-stretch relative leading-[24px] font-medium"
                                >
                                    Email
                                </div>
                                <div
                                    className="self-stretch rounded-lg bg-main-color-white box-border flex flex-row items-center justify-start py-2 px-[15px] max-w-full border-[1px] border-solid border-slate-200"
                                >
                                    <div
                                        className="w-full [border:none] [outline:none] font-text-xl-semi-bold text-sm bg-[transparent] h-6 flex-1 relative leading-[24px] text-main-color-black text-left inline-block min-w-[250px] whitespace-nowrap max-w-full p-0"

                                    >
                                        {detail.email}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[347px] max-w-full mq675:min-w-full"
                            >
                                <div
                                    className="self-stretch relative leading-[24px] font-medium"
                                >
                                    User Status
                                </div>
                                <div
                                    className="self-stretch rounded-lg bg-main-color-white box-border flex flex-row items-center justify-start py-2 px-[15px] max-w-full border-[1px] border-solid border-slate-200"
                                >
                                    <div
                                        className="w-full [border:none] [outline:none] font-text-xl-semi-bold text-sm bg-[transparent] h-6 flex-1 relative leading-[24px] text-main-color-black text-left inline-block min-w-[250px] whitespace-nowrap max-w-full p-0"

                                    >
                                        Active
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="self-stretch box-border flex flex-row items-center justify-start pt-2 px-0 pb-1.5 max-w-full text-xl border-b-[1px] border-solid border-slate-200"
                    >
                        <div
                            className="flex-1 relative leading-[28px] font-semibold inline-block max-w-full mq450:text-base mq450:leading-[22px]"
                        >
                            Address
                        </div>
                    </div>
                    <div
                        className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full"
                    >
                        <div
                            className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full"
                        >
                            <div
                                className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[347px] max-w-full mq675:min-w-full"
                            >
                                <div
                                    className="self-stretch relative leading-[24px] font-medium"
                                >
                                    Country
                                </div>
                                <div
                                    className="self-stretch rounded-lg bg-main-color-white box-border flex flex-row items-center justify-start py-2 px-[15px] gap-[12px] max-w-full border-[1px] border-solid border-slate-200 mq675:flex-wrap"
                                >

                                    <p
                                        className="m-0 flex-1 relative leading-[24px] inline-block min-w-[60px] max-w-full"
                                    >
                                        Bangladesh
                                    </p>
                                    <img
                                        className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                                        alt=""
                                        src="../public/arrowoutlineanglesmalldown3.svg"
                                    />
                                </div>
                            </div>
                            <div
                                className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[347px] max-w-full mq675:min-w-full"
                            >
                                <div
                                    className="self-stretch relative leading-[24px] font-medium"
                                >
                                    City
                                </div>
                                <div
                                    className="self-stretch rounded-lg bg-main-color-white box-border flex flex-row items-center justify-start py-2 px-[15px] max-w-full border-[1px] border-solid border-slate-200"
                                >
                                    <div
                                        className="w-full [border:none] [outline:none] font-text-xl-semi-bold text-sm bg-[transparent] h-6 flex-1 relative leading-[24px] text-main-color-black text-left inline-block min-w-[250px] max-w-full p-0"

                                    >
                                        Dhaka
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full"
                        >
                            <div
                                className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[347px] max-w-full mq675:min-w-full"
                            >
                                <div
                                    className="self-stretch relative leading-[24px] font-medium"
                                >
                                    Address
                                </div>
                                <div
                                    className="self-stretch rounded-lg bg-main-color-white box-border flex flex-row items-center justify-start py-2 px-[15px] max-w-full border-[1px] border-solid border-slate-200"
                                >
                                    <div
                                        className="w-full [border:none] [outline:none] font-text-xl-semi-bold text-sm bg-[transparent] h-6 flex-1 relative leading-[24px] text-main-color-black text-left inline-block min-w-[250px] max-w-full p-0"

                                    >
                                        Mirpur-10, Dhaka 1231, Bangladesh
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[347px] max-w-full mq675:min-w-full"
                            >
                                <div
                                    className="self-stretch relative leading-[24px] font-medium"
                                >
                                    Postal Code
                                </div>
                                <div
                                    className="self-stretch rounded-lg bg-main-color-white box-border flex flex-row items-center justify-start py-2 px-[15px] max-w-full border-[1px] border-solid border-slate-200"
                                >
                                    <div
                                        className="w-full [border:none] [outline:none] font-text-xl-semi-bold text-sm bg-[transparent] h-6 flex-1 relative leading-[24px] text-main-color-black text-left inline-block min-w-[250px] max-w-full p-0"

                                    >
                                        1231
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-slate-600"
                        >

                        </div>
                    </div>
                    <div
                        className="w-40 hidden flex-row items-center justify-end text-center text-base text-main-color-white"
                    >
                        <div
                            className="h-12 flex-1 rounded-lg bg-main-color-primary overflow-hidden flex flex-row items-center justify-center py-3.5 px-8 box-border"
                        >
                            <div className="relative leading-[150%] font-medium">Update</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DetailUserSection;