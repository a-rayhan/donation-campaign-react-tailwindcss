import DonationCard from "../DonationCard/DonationCard";

const Donations = ({data}) => {
    return (
        <div className="mb-20 max-w-[1024px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                {
                    data.map(donationData => <DonationCard key={donationData.id} donationData={donationData} />)
                }
            </div>
        </div>
    );
};

export default Donations;