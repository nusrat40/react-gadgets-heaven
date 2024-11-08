import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const Home = () => {

    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        fetch('./categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    

    return (
        <div>
            <Helmet>
                <title>Home | Gadget Heaven</title>
            </Helmet>
            <Banner></Banner>
            <div>
            <div className="text-center lg:mt-36 mb-20 pt-20">
                <h1 className="text-4xl font-bold">Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className="lg:flex gap-20">
                <div >
                <Sidebar key={categories.id} categories={categories}></Sidebar>
                </div>
                <div>
                
                <Outlet></Outlet>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;