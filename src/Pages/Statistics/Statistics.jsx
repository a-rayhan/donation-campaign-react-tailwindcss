import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { getStoredDonateIds } from "../../Utility/LocalStorage";

const Statistics = () => {
    const [findDonationIds, setFindDonationIds] = useState([]);
    const [noFound, setNoFound] = useState("");

    const allDonations = useLoaderData();

    useEffect(() => {
        const storedDonationIds = getStoredDonateIds();

        const donationIds = [];

        for (const id of storedDonationIds) {
            const donation = allDonations.find(donation => donation.id === id);

            if (donation) {
                donationIds.push(donation)
            }
        }

        setFindDonationIds(donationIds);
    }, []);

    const data = [
        {
            name: "Remaining Total Donations",
            value: allDonations.length - findDonationIds.length,
        },
        { name: "You Donated", value: findDonationIds.length },
    ];

    const RADIAN = Math.PI / 180;

    const hello = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    const colours = ["#1d4ed8", "#991B1B"];

    return (
        <div className="mt-14">
            {noFound ? (
                <div className="flex flex-col mt-8 lg:mt-0 justify-center items-center px-4 lg:px-0 h-[100vh] w-full">
                    <PieChart width={400} height={400}>
                        <Pie data={data} cx="50%" cy="50%" labelLine={false} label={hello} outerRadius={180} fill="#8884d8" dataKey="value">
                            {
                                data.map((entry, index) => (<Cell key={`cell-${index}`} fill={colours[index % colours.length]} />))
                            }
                        </Pie>
                        <Tooltip />
                    </PieChart>

                    <div className="flex flex-col md:flex-row mt-6 items-center">
                        <div className="my-4 flex gap-2 mr-6">
                            <p className="text-lg font-medium">
                                You Donated { }
                            </p>
                            <span className="px-10 lg:px-8 rounded-md bg-[#991B1B]"></span>
                        </div>

                        <div className="flex gap-2">
                            <p className="text-lg font-medium">
                                Remaining Remaining Remaining Total Donations
                            </p>
                            <span className=" px-10 lg:px-8 rounded-md bg-[#1d4ed8]"></span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col mt-8 lg:mt-0  justify-center  items-center px-4 lg:px-0 h-[70vh] w-full">
                    <PieChart width={400} height={400}>
                        <Pie data={data} cx="50%" cy="50%" labelLine={false} label={hello} outerRadius={180} fill="#8884d8" dataKey="value">
                            {
                                data.map((entry, index) => (<Cell key={`cell-${index}`} fill={colours[index % colours.length]} />))
                            }
                        </Pie>
                        <Tooltip />
                    </PieChart>

                    <div className="flex flex-col md:flex-row mt-6 items-center">
                        <div className="my-4 flex justify-center items-center gap-2 mr-6">
                            <p className="text-lg font-medium">You Donated </p>
                            <span className="w-4 h-4 rounded-full bg-[#991B1B]"></span>
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            <p className="text-lg font-medium">Remaining Total Donations </p>
                            <span className="w-4 h-4 rounded-full bg-[#1d4ed8]"></span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Statistics;