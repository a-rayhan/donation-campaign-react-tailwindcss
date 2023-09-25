import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveDonateId } from "../../Utility/LocalStorage";

const DonationDetails = () => {

    const [donate, setDonate] = useState([]);

    const donates = useLoaderData();

    const { donateId } = useParams();

    useEffect(() => {
        const findDonateId = donates.find(donate => donate.id == donateId);
        setDonate(findDonateId);
    }, [donateId, donates]);

    const handleAddToDonation = () => {
        saveDonateId(donate.id)
    }

    return (
        <div className="py-20 max-w-[1024px] mx-auto px-6">
            <div>
                <div className="w-full h-[450px] bg-slate-500 rounded-xl mb-10 relative">
                    <img src={donate.image} alt="" className="w-full h-full object-cover rounded-xl" />

                    <div className="w-full h-32 bg-black rounded-b-xl absolute bottom-0 opacity-60">
                    </div>

                    <button onClick={handleAddToDonation} className={`absolute bottom-8 left-8 text-white ${donate.text_color} bg-blue-500 px-10 py-4 rounded-md font-medium text-xl`}>
                        Donate ${donate.price}
                    </button>
                </div>

                <div>
                    <h1 className="text-3xl font-semibold mb-4">
                        {donate.title}
                    </h1>

                    <p className="text-lg">
                        {donate.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;