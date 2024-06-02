import DashboardPagination from "./DashboardPagination";
import Logout from "./Logout";

const Dashboard = () => {
    return (
        <div
            className="w-full relative bg-main-color-white overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-base text-main-color-secondary font-text-sm-medium mq950:pl-5 mq950:pr-5 mq950:box-border">
            <div
                className="w-[264px] bg-main-color-white flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border gap-[20px] mq950:hidden">
                <div className="self-stretch h-[92px] relative text-[26.2px]">
                    <div
                        className="absolute top-[0px] left-[0px] bg-main-color-white box-border w-full flex flex-row items-center justify-start pt-[31.3px] px-6 pb-[30px] h-full border-b-[1px] border-solid border-violet-50">
                        <div className="flex flex-row items-center justify-start py-0 px-0 gap-[4.1px]">
                            <div
                                className="rounded-[5.36px] bg-main-color-primary flex flex-row items-center justify-center pt-1 px-[5px] pb-[4.1px]">
                                <img className="h-[21.4px] w-[19.2px] relative" alt="" src="../public/subtract.svg" />
                            </div>
                            <a
                                className="[text-decoration:none] h-[19px] relative tracking-[-0.04em] font-bold text-[inherit] inline-block min-w-[90px] mq450:text-[21px]">UStudy</a>
                        </div>
                    </div>
                    <div
                        className="absolute top-[27px] left-[250px] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-violet-50 flex flex-row items-center justify-center py-3 px-1 z-[1]">
                        <img className="h-[11.7px] w-1.5 relative" alt="" src="../public/vector.svg" />
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 text-sm text-slate-600">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[28px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                            <div className="self-stretch flex flex-row items-start justify-start py-0.5 px-0">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Menu
                                </div>
                            </div>
                            <div
                                className="self-stretch flex flex-col items-start justify-start gap-[4px] text-base text-main-color-secondary">
                                <div
                                    className="self-stretch rounded-lg flex flex-row items-start justify-start py-2 pr-1.5 pl-2.5 gap-[8px] text-main-color-black">
                                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                        <img className="w-5 h-5 relative" alt="" src="../public/dashboard.svg" />
                                    </div>
                                    <div className="flex-1 relative leading-[24px] font-medium">
                                        Dashboards
                                    </div>
                                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                        <img className="w-5 h-5 relative overflow-hidden shrink-0" alt=""
                                            src="../public/arrowoutlineanglesmalldown.svg" />
                                    </div>
                                </div>
                                <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2 px-2.5 gap-[8px]">
                                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                        <img className="w-5 h-5 relative" alt="" src="../public/teacher.svg" />
                                    </div>
                                    <a
                                        className="[text-decoration:none] w-[152px] relative leading-[24px] font-medium text-[inherit] flex items-center shrink-0">Teachers
                                    </a>
                                    <img className="h-5 w-5 relative overflow-hidden shrink-0 hidden" alt=""
                                        src="../public/arrowoutlineanglesmalldown1.svg" />
                                </div>
                                <div
                                    className="self-stretch rounded-lg bg-violet-50 flex flex-row items-start justify-start py-2 px-2.5 gap-[8px]">
                                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                        <div className="flex flex-row items-start justify-start">
                                            <img className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]" alt=""
                                                src="../public/hugeiconeducationoutlinestudents.svg" />

                                            <div className="h-5 w-5 relative overflow-hidden shrink-0">
                                                <div className="absolute h-[69.5%] w-[88.5%] top-[13.5%] right-[5.5%] bottom-[17%] left-[6%]">
                                                    <img
                                                        className="absolute h-[65.47%] w-[42.94%] top-[24.46%] right-[0.56%] bottom-[10.07%] left-[56.5%] max-w-full overflow-hidden max-h-full object-contain"
                                                        alt="" src="../public/student@2x.png" />

                                                    <img
                                                        className="absolute h-full w-[66.1%] top-[0%] right-[33.9%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                                        alt="" src="../public/student-1@2x.png" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        className="[text-decoration:none] w-[152px] relative leading-[24px] font-medium text-[inherit] flex items-center shrink-0">Students</a>
                                    <img className="h-5 w-5 relative overflow-hidden shrink-0 hidden" alt=""
                                        src="../public/arrowoutlineanglesmalldown2.svg" />
                                </div>
                                <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2 px-2.5 gap-[8px]">
                                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                        <img className="w-5 h-5 relative object-cover" loading="lazy" alt="" src="../public/course@2x.png" />
                                    </div>
                                    <div className="w-[152px] relative leading-[24px] font-medium flex items-center shrink-0">
                                        Course
                                    </div>
                                    <img className="h-5 w-5 relative overflow-hidden shrink-0 hidden" alt=""
                                        src="../public/arrowoutlineanglesmalldown2.svg" />
                                </div>
                                <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2 px-2.5 gap-[8px]">
                                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                        <img className="w-5 h-5 relative object-cover" loading="lazy" alt="" src="../public/resource@2x.png" />
                                    </div>
                                    <div className="w-[152px] relative leading-[24px] font-medium flex items-center shrink-0">
                                        Resource
                                    </div>
                                    <img className="h-5 w-5 relative overflow-hidden shrink-0 hidden" alt=""
                                        src="../public/arrowoutlineanglesmalldown1.svg" />
                                </div>
                                <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2 px-2.5 gap-[8px]">
                                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                        <img className="w-5 h-5 relative overflow-hidden shrink-0" loading="lazy" alt=""
                                            src="../public/hugeiconeducationbulkdiploma.svg" />
                                    </div>
                                    <div className="w-[152px] relative leading-[24px] font-medium flex items-center shrink-0">
                                        Certificate
                                    </div>
                                    <img className="h-5 w-5 relative overflow-hidden shrink-0 hidden" alt=""
                                        src="../public/arrowoutlineanglesmalldown1.svg" />
                                </div>
                                <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2 px-2.5 gap-[8px]">
                                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                        <img className="w-5 h-5 relative" loading="lazy" alt="" src="../public/chat.svg" />
                                    </div>
                                    <div className="w-[152px] relative leading-[24px] font-medium flex items-center shrink-0">
                                        Chat
                                    </div>
                                    <img className="h-5 w-5 relative overflow-hidden shrink-0 hidden" alt=""
                                        src="../public/arrowoutlineanglesmalldown2.svg" />
                                </div>
                                <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2 px-2.5 gap-[8px]">
                                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                        <img className="w-5 h-5 relative" loading="lazy" alt="" src="../public/transaction.svg" />
                                    </div>
                                    <div className="w-[152px] relative leading-[24px] font-medium flex items-center shrink-0">
                                        Transaction
                                    </div>
                                    <img className="h-5 w-5 relative overflow-hidden shrink-0 hidden" alt=""
                                        src="../public/arrowoutlineanglesmalldown2.svg" />
                                </div>
                                <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2 px-2.5 gap-[8px]">
                                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                        <img className="w-5 h-5 relative object-cover" loading="lazy" alt="" src="../public/app-page@2x.png" />
                                    </div>
                                    <div className="w-[152px] relative leading-[24px] font-medium flex items-center shrink-0">
                                        App Pages
                                    </div>
                                    <img className="h-5 w-5 relative overflow-hidden shrink-0 hidden" alt=""
                                        src="../public/arrowoutlineanglesmalldown1.svg" />
                                </div>
                                <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2 px-2.5 gap-[8px]">
                                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                        <img className="w-5 h-5 relative" loading="lazy" alt="" src="../public/authentication.svg" />
                                    </div>
                                    <div className="w-[152px] relative leading-[24px] font-medium flex items-center shrink-0">
                                        Authentication
                                    </div>
                                    <img className="h-5 w-5 relative overflow-hidden shrink-0 hidden" alt=""
                                        src="../public/arrowoutlineanglesmalldown1.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                            <div className="self-stretch flex flex-row items-center justify-start py-0.5 px-0">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Help
                                </div>
                            </div>
                            <div
                                className="self-stretch flex flex-col items-start justify-start gap-[4px] text-base text-main-color-secondary">
                                <div
                                    className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 pr-[34px] pl-2.5 gap-[8px]">
                                    <img className="h-5 w-5 relative" loading="lazy" alt="" src="../public/setting.svg" />

                                    <a className="[text-decoration:none] flex-1 relative leading-[24px] font-medium text-[inherit]">Setting</a>
                                    <img className="h-5 w-5 relative overflow-hidden shrink-0 hidden" alt=""
                                        src="../public/arrowoutlineanglesmalldown1.svg" />
                                </div>
                                <div
                                    className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 pr-[34px] pl-2.5 gap-[8px]">
                                    <img className="h-5 w-5 relative" loading="lazy" alt="" src="../public/support.svg" />

                                    <a className="[text-decoration:none] flex-1 relative leading-[24px] font-medium text-[inherit]">Support</a>
                                    <img className="h-5 w-5 relative overflow-hidden shrink-0 hidden" alt=""
                                        src="../public/arrowoutlineanglesmalldown1.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                    <div className="flex-1 rounded-lg bg-violet-50 flex flex-col items-start justify-start p-3 gap-[12px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[14px]">
                                <b className="h-6 flex-1 relative leading-[16px] font-semibold flex items-center">New Course</b>
                                <img className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" loading="lazy" alt=""
                                    src="../public/interfacesolidremove.svg" />
                            </div>
                            <p className="m-0 self-stretch relative text-sm text-slate-600">
                                Check out the new dashboard view. Pages now load faster.
                            </p>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-center py-[31px] px-5 relative gap-[10px]">
                            <img
                                className="self-stretch flex-1 absolute !m-[0] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                                alt="" src="../public/image@2x.png" />

                            <div className="flex flex-row items-start justify-start relative gap-[3px] z-[1]">
                                <div className="h-7 w-7 relative rounded-[437.06px] bg-blue-50"></div>
                                <img className="h-[8.7px] w-[8.7px] absolute !m-[0] top-[9.6px] left-[9.6px] overflow-hidden shrink-0 z-[1]"
                                    loading="lazy" alt="" src="../public/arrowsoildplay.svg" />
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-xs text-main-color-primary">
                            <button
                                className="cursor-pointer [border:none] py-1.5 px-[21px] bg-main-color-primary rounded-md flex flex-row items-start justify-start hover:bg-mediumslateblue">
                                <div
                                    className="relative text-xs leading-[16px] font-medium font-text-sm-medium text-blue-50 text-left inline-block min-w-[45px]">
                                    Dismiss
                                </div>
                            </button>
                            <div className="rounded-md flex flex-row items-start justify-start py-1 px-3">
                                <u className="relative [text-decoration:underline] leading-[20px] font-medium inline-block min-w-[73px]">What’s
                                    new?</u>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 text-main-color-black">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                        <div
                            className="flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[8px_6px] min-w-[150px]">
                            <img className="h-10 w-10 relative object-contain" loading="lazy" alt="" src="../public/profile@2x.png" />

                            <div className="flex-1 flex flex-col items-start justify-start gap-[1px] min-w-[130px]">
                                <b className="self-stretch relative font-semibold">Neurotic Spy</b>
                                <div className="self-stretch relative text-xs whitespace-nowrap">
                                    neurotic@taildo.com
                                </div>
                            </div>
                        </div>
                        <img className="h-6 w-6 relative overflow-hidden shrink-0" loading="lazy" alt=""
                            src="../public/interfaceoutlinelogout-01.svg" />
                    </div>
                </div>
            </div>
            <section
                className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-[calc(100%_-_264px)] text-left text-sm text-slate-300 font-text-sm-medium mq950:max-w-full">
                <div className="self-stretch flex flex-row items-start justify-between p-6 gap-[20px] mq750:flex mq750:justify-between ">
                    <div
                        className="w-[252px] rounded-980xl bg-main-color-white box-border flex flex-row items-start justify-start py-2.5 px-3 gap-[8px] border-[1.5px] border-solid border-violet-50">
                        <img className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" alt=""
                            src="../public/hugeiconinterfaceoutlinesearch-03.svg" />

                        <div className="w-[164px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                            <a
                                className="[text-decoration:none] self-stretch h-2.5 relative leading-[20px] text-[inherit] flex items-center">Search</a>
                        </div>
                        <img className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" alt=""
                            src="../public/hugeiconinterfacebulkfilter-6.svg" />
                    </div>
                    <div
                        className="w-[298px] flex flex-row items-start justify-start gap-[33.3px] text-[8px] text-main-color-white mq450:gap-[17px] mq750:gap-[0] mq750:w-0 mq750:pr-16">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[14px] mq750:hidden">
                            <div
                                className="flex-1 rounded-[99px] flex flex-row items-start justify-start p-2 gap-[10px] border-[1.5px] border-solid border-lavender">
                                <img className="h-6 w-6 relative overflow-hidden shrink-0" loading="lazy" alt=""
                                    src="../public/hugeiconinterfacebulknotificationringing.svg" />

                                <div
                                    className="w-3 rounded-980xl bg-red-500 hidden flex-col items-center justify-center py-0.5 px-[3px] box-border">
                                    <div className="h-2 relative leading-[8px] font-medium inline-block">
                                        2
                                    </div>
                                </div>
                            </div>
                            <div
                                className="h-11 w-11 rounded-980xl box-border flex flex-row items-start justify-start py-2.5 px-2 border-[1.5px] border-solid border-lavender">
                                <img className="h-6 w-6 relative overflow-hidden shrink-0" loading="lazy" alt=""
                                    src="../public/hugeiconcommunicationbulkchat-01.svg" />
                            </div>
                            <div
                                className="h-11 w-11 rounded-980xl box-border flex flex-row items-start justify-start py-2.5 px-2 border-[1.5px] border-solid border-lavender">
                                <img className="h-6 w-6 relative overflow-hidden shrink-0" loading="lazy" alt=""
                                    src="../public/hugeiconinterfacebulksetting.svg" />
                            </div>
                        </div>
                        <div className="h-[42px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border mq750:hidden">
                            <div className="w-[1.5px] h-[41.5px] relative box-border border-r-[1.5px] border-solid border-lavender"></div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-base">
                            <div className="flex flex-row items-start justify-start gap-[6px]">
                                <div className="flex flex-row flex-wrap items-start justify-start">
                                    <img className="h-10 w-10 relative object-cover" alt="" src="../public/profile@2x.png" />

                                    <div className="hidden flex-col items-start justify-start min-w-[130px]">
                                        <div
                                            className="self-stretch h-[22px] relative font-semibold flex items-center shrink-0 whitespace-nowrap">
                                            Neurotic Spy
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                                    <img className="w-6 h-6 relative overflow-hidden shrink-0" alt=""
                                        src="../public/arrowoutlineanglesmalldown-1.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="self-stretch flex flex-row items-start justify-start py-0 px-[23px] box-border max-w-full text-[20px] text-slate-800">
                    <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[20px]">
                        <div className="w-[346px] flex flex-col items-center justify-start gap-[10px] max-w-full mq750:pl-2">
                            <b className="self-stretch h-[15px] relative font-semibold flex items-center mq450:text-base">Students
                            </b>
                            <div className="self-stretch h-2.5 relative text-sm text-slate-600 flex items-center">
                                Let’s check your update today
                            </div>
                        </div>
                        <div className="w-[109px] flex flex-row items-start justify-start text-sm text-slate-600">
                            <Logout></Logout>
                        </div>
                    </div>
                </div>
                <div
                    className="self-stretch flex flex-row items-start justify-start py-0 px-[23px] box-border max-w-full text-base text-main-color-black">
                    <div className="flex-1 flex flex-col items-center justify-start max-w-full">
                        <div
                            className="self-stretch rounded-lg bg-main-color-white flex flex-col items-start justify-start p-5 box-border max-w-full">
                            <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
                                <nav
                                    className="m-0 self-stretch flex flex-row flex-wrap items-center justify-start gap-[16px] max-w-full whitespace-nowrap text-left text-sm text-slate-600 font-text-sm-medium mq750:justify-center mq750:pb-5">
                                    <div
                                        className="flex-1 rounded-lg bg-slate-50 flex flex-row items-center justify-start py-3 px-4 box-border gap-[12px] min-w-[505px] max-w-full mq700:min-w-full">
                                        <img className="h-6 w-6 relative min-h-[24px]" alt="" src="../public/search.svg" />

                                        <input
                                            className="w-[calc(100%_-_56px)] [border:none] [outline:none] font-text-sm-medium text-sm bg-[transparent] h-6 flex-1 relative leading-[24px] text-slate-300 text-left flex items-center min-w-[250px] max-w-[calc(100%_-_36px)] p-0"
                                            placeholder="Search by ID, product, or others..." type="text" />
                                    </div>
                                    <button
                                        className="cursor-pointer [border:none] py-3 px-4 bg-slate-50 rounded-lg flex flex-row items-center justify-start gap-[8px] hover:bg-gainsboro">
                                        <img className="h-6 w-6 relative min-h-[24px]" alt="" src="../public/filter.svg" />

                                        <a
                                            className="[text-decoration:none] relative text-sm leading-[24px] font-text-sm-medium text-slate-600 text-left inline-block min-w-[41px]">Filters</a>
                                    </button>
                                    <div
                                        className="rounded-lg bg-slate-50 flex flex-row items-center justify-start py-3 px-4 gap-[8px] whitespace-nowrap">
                                        <img className="h-6 w-6 relative" loading="lazy" alt="" src="../public/calendar.svg" />

                                        <div className="relative inline-block min-w-[113px]">
                                            April 11 - April 24
                                        </div>
                                    </div>
                                </nav>
                                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                                    <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                                        <div
                                            className="self-stretch flex flex-row items-center justify-start py-0 pr-0 pl-2 gap-[32px] border-b-[1px] border-solid border-slate-100 mq700:gap-[16px] mq975:flex-wrap mq975:pr-2 mq975:box-border mq750:hidden">
                                            <div className="rounded-xl flex flex-row items-center justify-start py-2.5 pr-[101px] pl-0 gap-[8px]">
                                                <a
                                                    className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[45px]">Name</a>
                                                <img className="h-4 w-4 relative overflow-hidden shrink-0" alt="" src="../public/arrowsdownup.svg" />
                                            </div>
                                            <div
                                                className="flex-1 rounded-xl flex flex-row items-center justify-start py-2.5 pr-[200px] pl-0 box-border gap-[8px] min-w-[72px] mq450:pr-5 mq450:box-border">
                                                <div className="relative leading-[24px] font-medium inline-block min-w-[56px]">
                                                    Email
                                                </div>
                                                <img className="h-4 w-4 relative overflow-hidden shrink-0" alt="" src="../public/arrowsdownup.svg" />
                                            </div>
                                            <div
                                                className="w-[122px] rounded-xl flex flex-row items-center justify-start py-2.5 pr-[13px] pl-3 box-border gap-[8px]">
                                                <div className="flex-1 relative leading-[24px] font-medium">
                                                    Enrolled
                                                </div>
                                                <img className="h-4 w-4 relative overflow-hidden shrink-0" alt="" src="../public/arrowsdownup.svg" />
                                            </div>
                                            <div className="rounded-xl flex flex-row items-center justify-start py-2.5 pr-[17px] pl-3 gap-[8px]">
                                                <div className="relative leading-[24px] font-medium inline-block min-w-[39px]">
                                                    Price
                                                </div>
                                                <img className="h-4 w-4 relative overflow-hidden shrink-0" alt="" src="../public/arrowsdownup.svg" />
                                            </div>
                                            <div className="rounded-xl flex flex-row items-center justify-start py-2.5 pr-[38px] pl-3 gap-[8px]">
                                                <div className="relative leading-[24px] font-medium inline-block min-w-[50px]">
                                                    Status
                                                </div>
                                                <img className="h-4 w-4 relative overflow-hidden shrink-0" alt="" src="../public/arrowsdownup.svg" />
                                            </div>
                                            <div
                                                className="w-[134px] rounded-xl flex flex-row items-center justify-start py-[18px] px-3 box-border">
                                                <div className="flex-1 relative leading-[24px] font-medium">
                                                    Action
                                                </div>
                                            </div>
                                        </div>
                                        <DashboardPagination></DashboardPagination>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Dashboard;