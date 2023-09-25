const DonatedCard = ({ donate }) => {
    const { id, image, category, title, price, category_bg, card_bg, text_color } = donate;
    return (
        <div>
            <div className={`w-full h-full ${card_bg} bg-blue-100 rounded-lg cursor-pointer flex flex-col md:flex-row`}>
                <div className={`md:w-48 h-full mb-4 rounded-xl md:rounded-s-lg`}>
                    <img src={image} alt="" className="w-full h-full object-cover rounded-t-xl md:rounded-s-lg" />
                </div>

                <div className="p-4">
                    <button className={`${category_bg} bg-blue-200 ${text_color} text-blue-500 px-5 py-2 md:py-1 rounded-md mb-4 md:mb-3 md:text-xs`}>
                        {category}
                    </button>

                    <h2 className="font-semibold text-xl md:text-lg">
                        {title}
                    </h2>

                    <p className={`${text_color} text-blue-500 font-semibold text-2xl md:text-xl mb-5`}>
                        ${price}
                    </p>

                    <button className="px-5 py-3 md:py-1 rounded-md mb-3 font-medium text-white bg-blue-500">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DonatedCard;