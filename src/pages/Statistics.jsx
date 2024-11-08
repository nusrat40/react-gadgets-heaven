import { Helmet } from "react-helmet-async";


const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
            <div className="bg-[#9538E2] text-white text-center h-64 flex flex-col justify-center items-center gap-3 rounded-xl">
                <h1 className="text-2xl font-bold">Statistics</h1>
                <p className="lg:w-1/3">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <h1 className="text-6xl font-bold text-[#9538E2] text-center mt-10">No Data to Show Statistics</h1>
        </div>
    );
};

export default Statistics;