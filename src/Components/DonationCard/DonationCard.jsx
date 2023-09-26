import { NavLink, useParams } from "react-router-dom";

const DonationCard = ({ donationData }) => {
    const { id, image, category, title, category_bg, card_bg, text_color } = donationData;

    const { donateId } = useParams();

    return (
        <NavLink to={`/donate/${id}`}>
            <div style={{ backgroundColor: `${card_bg}` }} className={`lg:w-[238px] rounded-2xl lg:rounded-lg cursor-pointer`}>
                <div className="w-full h-56 lg:h-44 rounded-t-lg mb-3 lg:mb-1">
                    <img src={image} alt="" className="rounded-t-2xl lg:rounded-t-lg h-full w-full object-cover" />
                </div>

                <div className="p-4">
                    <button style={{
                        backgroundColor: `${category_bg}`,
                        color: `${text_color}`
                    }} className='px-5 py-1 rounded-md mb-4 lg:mb-3 text-lg lg:text-xs font-medium'>
                        {category}
                    </button>

                    <h2 style={{ color: `${text_color}` }} className={`font-medium mb-5 text-2xl lg:text-base text-blue-500`}>
                        {title}
                    </h2>
                </div>
            </div>
        </NavLink >
    );
};

export default DonationCard;