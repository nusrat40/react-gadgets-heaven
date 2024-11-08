import { IoIosRemoveCircleOutline } from "react-icons/io";

const DashboardCards = ({gadget,handleRemoveFromCart}) => {

    const{product_title,product_image,description,price,product_id}=gadget;


    return (
        <div>
           
            <div className="lg:flex gap-20 justify-between items-center border-2 p-4 rounded-xl">
            <div className="lg:flex gap-6 ">
                 <img className="w-[300px] h-[160px] rounded-xl" src={product_image} alt="" />
                 <div className="space-y-2">
                    <h2 className="text-2xl font-bold">{product_title}</h2>
                    <p className="text-gray-500">{description}</p>
                    <p className="font-bold">Price: {price}</p>
                 </div>
            </div>
            <div onClick={()=>handleRemoveFromCart(product_id)}>
            <IoIosRemoveCircleOutline size={30} color="red"></IoIosRemoveCircleOutline>
            </div>
            </div>
        </div>
    );
};

export default DashboardCards;