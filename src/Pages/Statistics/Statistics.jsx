import { PieChart } from "@mui/x-charts";

const donation = `${100}`;
const donated = 30;

const Statistics = () => {
    return (
        <div className="flex justify-center items-center my-20">
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: `${donation}`, label: 'Donation' },
                            { id: 1, value: `${donated}`, label: 'Donated' },
                        ],
                    },
                ]}
                width={300}
                height={400}
            />
        </div>
    );
};

export default Statistics;