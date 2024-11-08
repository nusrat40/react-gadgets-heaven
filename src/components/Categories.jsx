import { useLoaderData, useParams } from "react-router-dom";
import GadgetCards from "./GadgetCards";
import { useEffect, useState } from "react";


const Categories = () => {
    
    const data=useLoaderData();

    const obj=useParams();
    const {category}=obj;
    
    const [gadgets,setGadgets]=useState([]);
    useEffect(()=>{
        if(category){
            const filteredByCategory=[...data].filter(gadget=>gadget.category === category)
            setGadgets(filteredByCategory);
        }
        else{
            setGadgets(data);
        }
    },[data,category])
    
    
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    gadgets.map(gadget =><GadgetCards key={gadget.product_id} gadget={gadget}></GadgetCards>)
                }
            </div>
        </div>
    );
};

export default Categories;