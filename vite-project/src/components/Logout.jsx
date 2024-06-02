import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
    const token = localStorage.getItem('access_token');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access_token');

        setTimeout(() => {
            navigate('/')
        }, 1000)
    }

    return (
        <div>
            {token &&
                <div onClick={handleLogout}
                    className="cursor-pointer flex-1 shadow-[0px_15px_50px_rgba(175,_176,_185,_0.15)] rounded-lg flex flex-col items-center justify-center py-2 px-3.5 border-[1.5px] border-solid border-slate-200">
                    <div className="cursor-pointer flex flex-row items-center justify-start gap-[2px]">
                        <img className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" alt=""
                            src="../public/hugeiconinterfaceoutlinelogout-01.svg" />

                        <div className="relative leading-[20px] inline-block min-w-[55px]">
                            Log out
                        </div>
                    </div>
                </div>}
        </div>);
};

export default Logout;