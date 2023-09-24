import DonatedCard from "../../Components/DonatedCard/DonatedCard";

const Donation = () => {
    return (
        <div className="my-20 max-w-[1024px] mx-auto px-6">
            <div className="grid grid-cols-2 gap-5">
                <DonatedCard />
                <DonatedCard />
                <DonatedCard />
            </div>

            <div className="flex justify-center mt-16">
                <button className="px-10 py-3 rounded-lg mb-3 font-medium text-white bg-blue-500 text-xl">
                    See All
                </button>
            </div>
        </div>
    );
};

export default Donation;