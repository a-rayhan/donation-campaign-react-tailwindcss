import { useLoaderData } from "react-router-dom";
import Donations from "../../Components/Donations/Donations";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Banner />
            <Donations data={data} />
        </div>
    );
};

export default Home;