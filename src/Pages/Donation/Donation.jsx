import { useLoaderData } from "react-router-dom";
import DonatedCard from "../../Components/DonatedCard/DonatedCard";
import { getStoredDonateIds } from "../../Utility/LocalStorage";
import { useEffect, useState } from "react";

const Donation = () => {
    const donations = useLoaderData();

    const [findDonationIds, setFindDonationIds] = useState([]);
    const [dataLength, setDatalength] = useState(4);

    useEffect(() => {
        const storedDonationIds = getStoredDonateIds();

        const donationIds = [];

        for (const id of storedDonationIds) {
            const donation = donations.find(donation => donation.id === id);

            if (donation) {
                donationIds.push(donation)
            }
        }

        setFindDonationIds(donationIds);
    }, []);
    return (
        <div className="my-20 max-w-[1024px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-5">
                {
                    findDonationIds.slice(0, dataLength).map(donate => <DonatedCard key={donate.id} donate={donate} />)
                }
            </div>

            <div className={`flex justify-center mt-16 ${findDonationIds.length <= 4 && 'hidden'} ${dataLength === findDonationIds.length && 'hidden'}`}>
                <button onClick={() => setDatalength(findDonationIds.length)} className="px-10 py-3 rounded-lg mb-3 font-medium text-white bg-green-700 text-xl">
                    See All
                </button>
            </div>
        </div>
    );
};

export default Donation;