import { NavLink, useParams } from "react-router-dom";

const DonationCard = ({ donationData }) => {
    const { id, image, category, title, category_bg, card_bg, text_color } = donationData;

    const { donateId } = useParams();

    return (
        <NavLink to={`/donate/${id}`}>
            <div className={`w-[238px] ${card_bg} rounded-lg cursor-pointer`}>
                <div className="w-full h-44 rounded-t-lg mb-1">
                    <img src={image} alt="" className="rounded-t-lg h-full w-full object-cover" />
                </div>

                <div className="p-4">
                    <button className={`${category_bg} px-5 py-1 rounded-md mb-3 text-xs ${text_color} font-medium`}>
                        {category}
                    </button>

                    <h2 className={`font-medium mb-5 ${text_color}`}>
                        {title}
                    </h2>
                </div>
            </div>
        </NavLink >
    );
};

export default DonationCard;