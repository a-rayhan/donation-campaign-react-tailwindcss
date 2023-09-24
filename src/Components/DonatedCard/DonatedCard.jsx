const DonatedCard = () => {
    return (
        <div>
            <div className="w-full h-full bg-slate-400 rounded-lg cursor-pointer flex">
                <div className="w-48 h-full bg-blue-500 mb-4 rounded-s-lg"></div>

                <div className="p-4">
                    <button className="bg-slate-300 px-5 py-1 rounded-md mb-3 text-xs">
                        Health
                    </button>

                    <h2 className="font-medium text-lg">
                        Clean water for children
                    </h2>

                    <p className="font-medium text-xl mb-5">
                        $290.00
                    </p>

                    <button className="px-5 py-1 rounded-md mb-3 font-medium text-white bg-blue-500">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DonatedCard;