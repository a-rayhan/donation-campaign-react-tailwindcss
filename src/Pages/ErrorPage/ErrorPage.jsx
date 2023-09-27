import Navbar from "../../Components/Header/Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div>
            <Navbar />
            
            <div className="px-20">
                <p className="mt-20 text-center text-2xl font-semibold">
                    Sorry, this page not found in this website!
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;