const ErrorModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div
                className="w-[322px] rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start p-6 box-border gap-[20px] max-w-full z-[3]"
            >
                <div className="self-stretch flex flex-row items-center justify-end">
                    <div
                        className="overflow-hidden flex flex-row items-center justify-end w-4 h-4"
                    >
                        <img onClick={onClose}
                            className="hover:size-3 relative"
                            alt=""
                            src="../public/vector-1.svg"
                        />
                    </div>
                </div>
                <div
                    className="self-stretch flex-1 flex flex-col items-center justify-start gap-[12px]"
                >
                    <img
                        className="w-[252px] flex-1 relative max-h-full object-contain"
                        loading="lazy"
                        alt=""
                        src="../public/frame-1000008454-1@2x.png"
                    />

                    <div
                        className="self-stretch flex flex-col items-start justify-start"
                    >
                        <p className="m-0 text-base self-stretch relative leading-[20px]">
                            Your email or password is incorrect. Please try again!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ErrorModal;