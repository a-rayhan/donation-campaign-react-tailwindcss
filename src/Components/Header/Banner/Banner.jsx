const Banner = () => {
    return (
        <div className="h-[600px] mb-20">
            <div className="h-full w-full relative">
                <img src="https://plus.unsplash.com/premium_photo-1683141170766-017bf7a2ecb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" className="w-full h-full object-cover" />

                <div className="bg-white h-full w-full absolute left-0 top-0 opacity-80"></div>
            </div>

            <div className="absolute top-2/4 left-2/4 -translate-x-2/4  -translate-y-2/4 ">
                <h2 className="text-4xl font-semibold mb-7">
                    I Grow By Helping People In Need
                </h2>

                <div className="bg-white flex justify-between ps-8 rounded-xl w-[500px] mx-auto border border-black">
                    <input type="text" placeholder="Search here...." className="bg-transparent border-none outline-none w-[300px] text-xl" />

                    <button className="bg-[#FF444A] px-8 py-3 rounded-r-xl text-xl text-white font-medium">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;