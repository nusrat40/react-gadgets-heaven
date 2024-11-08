import { useEffect, useState } from "react";
import { getAllAddToCart, getAllWishList, removeFromAddToCart, removeFromWishList } from "../Utils";
import DashboardCards from "../components/DashboardCards";
import WishListCards from "../components/WishListCards";
import { showSection } from "../Utils/dashboard";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import '../css/modal.css'
import group from '../assets/Group.png'
import { Helmet } from "react-helmet-async";


Modal.setAppElement('#root');


const Dashboard = () => {

    const [gadgets,setGadgets]=useState([]);

    const [totalPrice,setTotalPrice]=useState(0);

    const [isModalOpen,setIsModalOpen]=useState(false);
    const navigate=useNavigate();

    useEffect(()=>{
        const all=getAllAddToCart();
        setGadgets(all);

        handleTotalPrice(all);
    },[])

    const handleTotalPrice = items=>{
        const total = items.reduce((acc,item)=> acc + item.price,0);
        setTotalPrice(total);

    }

    const[wishListGadgets,setWishListGadgets]=useState([]);

    useEffect(()=>{
        const allWishList=getAllWishList();
        setWishListGadgets(allWishList);
    },[])

    const handleRemoveFromCart=product_id=>{
        removeFromAddToCart(product_id);
        const all=getAllAddToCart();
        setGadgets(all);
        handleTotalPrice(all);
    }

    const handleRemoveFromWishList = product_id=>{
        removeFromWishList(product_id);
        const allWishList=getAllWishList();
        setWishListGadgets(allWishList);
    }

    const handleSort =sortBy=>{

        const all=getAllAddToCart();
        
        if(sortBy == 'price'){
            const sorted = [...all].sort((a,b)=>b.price - a.price)
            setGadgets(sorted);
        }
    }

    const handlePurchase=()=>{
         setIsModalOpen(true);
         setGadgets([]);
         setTotalPrice(0);
    }

    const handleModalClose=()=>{
        setIsModalOpen(false);
        navigate("/");
    }


   

    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div className="bg-[#9538E2] text-white text-center h-64 flex flex-col justify-center items-center gap-3 rounded-xl">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="lg:w-1/3">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex gap-4">
                    
                    <button onClick={()=>showSection('cart')} className="btn btn-outline w-[120px] text-white" >Cart
                    </button>
                    
                    <button onClick={()=>showSection('wishlist')} className="btn btn-outline w-[120px] text-white">Wish List</button>
                </div>
            </div>

            <div id="cartSection">
            <nav className="flex lg:flex-row flex-col justify-between mt-10 mb-10">
                <h1 className="text-2xl font-bold">Cart</h1>
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                    <p className="text-2xl font-bold">Total Cost:{totalPrice}</p>

                    <button onClick={()=>handleSort('price')} className="btn btn-outline btn-primary rounded-2xl">Sort byPrice</button>

                    <button className={`btn btn-outline btn-primary rounded-2xl ${totalPrice ===0 ? "disabled" : ""}`}
                    onClick={handlePurchase}>Purchase</button>

                </div>
            </nav>
               <div className="space-y-4"> 
               {
                    gadgets.map(gadget=><DashboardCards handleRemoveFromCart={handleRemoveFromCart} key={gadget.product_id} gadget={gadget}></DashboardCards>)
                }
               </div>
            </div>

            <div id="wishlistSection" className="hidden">
                
                <nav className="mt-10 mb-10">
                <h1 className="text-2xl font-bold">WishList</h1>
                </nav>
                <div>
                {
                  wishListGadgets.map(gadget=><WishListCards handleRemoveFromWishList={handleRemoveFromWishList} key={gadget.product_id} gadget={gadget}></WishListCards>)
                }
                </div>
            </div>


            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleModalClose}
                contentLabel="Purchase Confirmation"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <div className="text-center space-y-3">
                <div className="flex justify-center items-center"> 
                <img  src={group} alt="" />
                </div>
                <h2 className="text-2xl font-bold">Payment Successfully</h2>
                <p className="text-gray-500">Thanks for purchasing</p>
                <button onClick={handleModalClose} className="btn mx-auto block">Close</button>
                </div>
            </Modal>
        </div>
    );
};

export default Dashboard;