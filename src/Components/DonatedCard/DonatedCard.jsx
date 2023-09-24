const DonatedCard = ({ donate }) => {
    const { id, image, category, title, price, category_bg, card_bg, text_color } = donate;
    return (
        <div>
            <div className={`w-full h-full ${card_bg} rounded-lg cursor-pointer flex`}>
                <div className={`w-48 h-full mb-4 rounded-s-lg`}>
                    <img src={image} alt="" className="w-full h-full object-cover rounded-s-lg" />
                </div>

                <div className="p-4">
                    <button className={`${category_bg} ${text_color} px-5 py-1 rounded-md mb-3 text-xs`}>
                        {category}
                    </button>

                    <h2 className="font-medium text-lg">
                        {title}
                    </h2>

                    <p className={`${text_color} font-medium text-xl mb-5`}>
                        ${price}
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