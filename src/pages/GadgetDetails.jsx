import { list } from "postcss";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { addToCart, addToWishList, getAllAddToCart, getAllWishList } from "../Utils";


const GadgetDetails = () => {

    const data=useLoaderData();

    const {product_id}=useParams();

    const [isAddToCart,setIsAddToCart]=useState(false);
    const [isWishList,setIsWishList]=useState(false);



    const [gadget,setGadget]=useState({})
    useEffect(()=>{
        const singleData = data.find(gadget => gadget.product_id == product_id)
        setGadget(singleData);

        const all=getAllAddToCart();
        const isExist =all.find(item=>item.product_id==singleData.product_id);
        if(isExist)
        {
          setIsAddToCart(true);
        }

        const allWishList=getAllWishList();
        const isAllWishList=allWishList.find(item=>item.product_id==singleData.product_id);
        if(isAllWishList)
        {
          setIsWishList(true);
        }




    },[data,product_id])

    const {specification=[]}=gadget;
    // console.log(specification);



    const handleAddToCart=(gadget)=>{

      addToCart(gadget);
      setIsAddToCart(true);

    }

    const handleWishList=(gadget)=>{
      addToWishList(gadget);
      setIsWishList(true);

    }




    


    return (
        <div className='lg:mb-96'>
              <div className="hero bg-[#9538E2] rounded-xl py-12 lg:relative ">
        <div className="hero-content text-center text-white mb-36">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">Product Details</h1>
            <p className="py-6 w-2/3 ">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
          </div>
        </div>
      </div>

      <div className='lg:absolute left-60 -mt-40 border-2 bg-white p-5 rounded-lg lg:w-[1000px] lg:h-[500px] lg:flex gap-4 '>
         <div>
           <img className="lg:w-[420px] lg:h-[350px] rounded-lg" src={gadget.product_image} alt="" />
            
         </div>
         <div className="space-y-2">
         <h1 className="text-2xl font-bold">{gadget.product_title}</h1>
        <p>Price: {gadget.price}</p>
        <button className="btn btn-sm border-[#309C08] text-[#309C08]">In Stock</button>
        <p className="text-gray-500">{gadget.description}</p>
        <h4 className="font-bold">Specification:</h4>
        <div>
            {
                specification.map((name,index)=><li className="text-gray-500" key={index}>{name}</li>)
            }
        </div>
       
        <h4 className="font-bold">Rating:</h4>
       <div className="flex gap-3">
       <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
       <p>{gadget.rating}</p>
       </div>

       <div className="flex gap-3">
       <button disabled={isAddToCart} onClick={()=>handleAddToCart(gadget)} className="btn rounded-3xl bg-[#9538E2] text-white">Add To Card 
        <MdOutlineShoppingCart></MdOutlineShoppingCart>
       </button>
       <button disabled={isWishList} onClick={()=>handleWishList(gadget)} className='btn rounded-full bg-[#9538E2] text-white'><CiHeart size={30}></CiHeart></button>
       </div>
       
         </div>
      </div>

        </div>
    );
};

export default GadgetDetails;