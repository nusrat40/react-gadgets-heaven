import { useLoaderData } from "react-router-dom";
import TrendingCards from "../components/TrendingCards";
import { Helmet } from "react-helmet-async";


const Trending = () => {

    const data=useLoaderData();

    const trendingGadgets = data.filter(gadget=>gadget.rating > 4.7);

    // console.log(trendingGadgets);
    


    return (
        <div>
            <Helmet>
                <title>Trending | Gadget Heaven</title>
            </Helmet>
             <div className="bg-[#9538E2] text-white text-center h-64 flex flex-col justify-center items-center gap-3 rounded-xl">
                <h1 className="text-2xl font-bold">Trending</h1>
                <p className="lg:w-1/3">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <nav className="mt-10 mb-10">
                <h1 className="text-2xl font-bold">Trending This Week</h1>
                </nav>
                <div className="space-y-4">
                {
                    trendingGadgets.map(gadget =><TrendingCards key={gadget.product_id} gadget={gadget}></TrendingCards>)
                }
            </div>
        </div>
    );
};

export default Trending;