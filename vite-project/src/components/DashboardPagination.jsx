import { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const DashboardPagination = () => {
    const [User, setName] = useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
    });

    const getName = () => {
        axios
            .get(`https://reqres.in/api/users?page=${pagination?.page}`)
            .then((res) => {
                console.log(res);
                const response = res?.data?.data;
                const page = res?.data?.page;

                setName(response);

                const pagination = {
                    page: res.data.page,
                    perPage: res.data.per_page,
                    totalPage: res.data.total_pages,
                    nextPage: page < 2 ? (page + 1) : 0,
                    previousPage: page >= 1 ? (page - 1) : 0,
                    total: res.data.total,
                    showing: (page * 6)

                };

                setPagination(pagination);
            })

            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getName();
    }, []);

    useEffect(() => {
        getName();
    }, [pagination?.page]);

    const handleNext = () => {
        setPagination({
            ...pagination,
            page: pagination?.page + 1,
        });
    };

    const handleBack = () => {
        setPagination({
            ...pagination,
            page: pagination?.page - 1,
        });
    };

    console.log(pagination.previousPage);


    return (
        <div className="self-stretch flex flex-col justify-center items-center">
            {User.map((item) => (
                <div
                    className="self-stretch overflow-x-auto flex flex-col justify-center max-w-full">

                    <Link to={`/Detailuser/${item?.id}`}
                        className="self-stretch box-border flex flex-row items-center justify-start py-0 px-2 gap-[32px] border-b-[1px] border-solid border-slate-100 hover:bg-slate-200 no-underline text-black mq750:overflow-scroll">
                        <div className="w-[170px] flex flex-row items-start justify-start py-2.5 px-0 box-border gap-[12px]">
                            <img className="h-10 w-10 relative object-contain shrink-0 rounded-full" alt="" src={item?.avatar} />

                            <div className="flex-1 flex flex-col items-start justify-start min-w-[130px]">
                                <div className="self-stretch relative leading-[24px] font-medium">
                                    {item?.first_name} {item?.last_name}
                                </div>
                                <div className="self-stretch relative text-sm leading-[20px] text-slate-600">
                                    {item?.id}
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 rounded-xl flex flex-row items-center justify-start py-2.5 px-0">
                            <div className="flex-1 relative leading-[24px]">
                                {item?.email}
                            </div>
                        </div>
                        <div
                            className="rounded-xl flex flex-row items-center justify-start py-2.5 pr-2.5 pl-3 text-slate-600">
                            <div className="relative leading-[24px] inline-block min-w-[100px]">
                                05 Jan, 2024
                            </div>
                        </div>
                        <div className="rounded-xl flex flex-row items-center justify-start py-2.5 px-3 text-slate-600">
                            <div className="relative leading-[24px] inline-block min-w-[68px] whitespace-nowrap">
                                $445.00
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start py-1 pr-[25px] pl-[11px]">
                            <button
                                className="cursor-pointer [border:none] py-2 px-[22px] bg-green-100 rounded-md flex flex-row items-center justify-center hover:bg-honeydew">
                                <div
                                    className="relative text-sm leading-[20px] font-medium font-text-sm-medium text-green-600 text-left inline-block min-w-[43px]">
                                    Active
                                </div>
                            </button>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[14px]">
                            <div className="rounded bg-main-color-primary flex flex-row items-start justify-start p-1.5">
                                <img className="h-5 w-5 relative overflow-hidden shrink-0" alt=""
                                    src="../public/interfaceoutlineeye.svg" />
                            </div>
                            <div className="rounded bg-green-500 flex flex-row items-start justify-start p-1.5">
                                <img className="h-5 w-5 relative overflow-hidden shrink-0" alt=""
                                    src="../public/notes-and-taskoutlinenotesedit.svg" />
                            </div>
                            <div className="rounded bg-red-500 flex flex-row items-start justify-start p-1.5">
                                <img className="h-5 w-5 relative overflow-hidden shrink-0" alt="" src="../public/-trash.svg" />
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
            <div
                className="self-stretch h-12 flex flex-row flex-wrap items-center justify-between pt-[18px] px-[11px] pb-0 box-border min-w-[591px] gap-[20px] text-sm text-slate-600 mq750:justify-normal mq750:gap-0">
                <div className="w-[247px] flex flex-row items-start justify-start">
                    <div className="flex-1 relative leading-[20px] font-medium">
                        Showing {pagination?.showing} of {pagination?.total} results
                    </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[28px] text-main-color-primary">
                    <img disabled={!pagination?.previousPage} onClick={handleBack} className="h-7 w-7 rounded-481xl object-contain" loading="lazy" alt=""
                        src="../public/arrow@2x.png" />

                    <div className="h-8 w-[7px] flex flex-row items-start justify-start py-1.5 px-0 box-border relative">
                        <div
                            className="absolute !m-[0] top-[6px] left-[0px] leading-[20px] font-medium inline-block min-w-[7px]">
                            {pagination?.page}
                        </div>
                    </div>
                    <div
                        className="h-7 w-7 rounded-481xl bg-violet-100 flex flex-col items-center justify-center p-1 box-border">
                        <button className="bg-transparent m-0 flex items-center justify-center" disabled={!pagination.nextPage} onClick={handleNext}>
                            <img className="w-5 h-5 relative overflow-hidden shrink-0 object-contain" src="../public/arrowoutlineanglesmallleft@2x.png" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPagination;