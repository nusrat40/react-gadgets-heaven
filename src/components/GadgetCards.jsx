import { Link } from "react-router-dom";


const GadgetCards = ({gadget}) => {

    const {product_title,product_image,price,product_id}=gadget;


    return (
        <div className="border p-6 rounded-xl space-y-2">
            <img className="rounded-lg" src={product_image} alt="" />
            <h2 className="font-bold">{product_title}</h2>
            <p className="text-gray-500">Price:{price}</p>
            <button className="btn btn-outline btn-primary rounded-2xl"><Link to={`/gadget/${product_id}`}>View Details</Link></button>

        </div>
    );
};

export default GadgetCards;