import { PieChart } from "@mui/x-charts";

const Statistics = () => {
    return (
        <div className="flex justify-center items-center my-20">
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 10},
                            { id: 1, value: 15},
                        ],
                    },
                ]}
                width={500}
                height={400}
            />
        </div>
    );
};

export default Statistics;