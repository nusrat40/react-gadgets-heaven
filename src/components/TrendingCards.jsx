

const TrendingCards = ({gadget}) => {

    const{product_title,product_image,description,price,product_id,rating}=gadget;


    return (
        <div>

<div className="flex flex-col lg:flex-row gap-20 justify-between items-center border-2 p-4 rounded-xl">
            <div className="flex flex-col lg:flex-row gap-6 ">
                 <img className="w-[300px] h-[160px] rounded-xl" src={product_image} alt="" />
                 <div className="space-y-2">
                    <h2 className="text-2xl font-bold">{product_title}</h2>
                    <p className="text-gray-500">{description}</p>
                    <p className="font-bold">Price: {price}</p>
                    <p className="text-gray-500">Rating: {rating}</p>
                    <button className="btn rounded-3xl bg-[#9538E2] text-white">Add to cart</button>
                 </div>
            </div>
            </div>
            
        </div>
    );
};

export default TrendingCards;