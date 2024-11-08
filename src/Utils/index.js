//Add to cart

import { toast } from "react-toastify";

//get all gadgets from local storage
const getAllAddToCart=()=>{
    const allStr =localStorage.getItem('add-to-cart');
    if(allStr)
    {
        const all = JSON.parse(allStr);
        return all;
    }
    else{
        return [];
    }
}


//add gadget to cart
const addToCart=gadget=>{
    const all =getAllAddToCart();
    
    const isExist =all.find(item=>item.product_id==gadget.product_id);
    if(isExist)
        return toast.error('Gadget already exists!');
    
        all.push(gadget);
        const allStr=JSON.stringify(all);
        localStorage.setItem('add-to-cart',allStr);
        toast.success('Gadget successfully added!');
    
    
}


//remove gadget from cart
const removeFromAddToCart = product_id=>{
    const all =getAllAddToCart();
    const remaining =all.filter(item=>item.product_id != product_id);

    localStorage.setItem('add-to-cart', JSON.stringify(remaining));
    toast.success('Successfully removed!');
}



//wish List
//get all gadgets from local storage
const getAllWishList=()=>{
    const allWishListStr =localStorage.getItem('wish-list');
    if(allWishListStr)
    {
        const allWishList = JSON.parse(allWishListStr);
        return allWishList;
    }
    else{
        return [];
    }
}


//add gadget to wish List
const addToWishList=gadget=>{
    const allWishList =getAllWishList();
    
    const isExist =allWishList.find(item=>item.product_id==gadget.product_id);
    if(isExist)
        return toast.error('Gadget already exists to wish List!');
    
        allWishList.push(gadget);
        const allWishListStr=JSON.stringify(allWishList);
        localStorage.setItem('wish-list',allWishListStr);
        toast.success('Gadget successfully added to wish list!');
    
    
}


//remove gadget from wish list
const removeFromWishList = product_id=>{
    const allWishList =getAllWishList();
    const remaining =allWishList.filter(item=>item.product_id != product_id);

    localStorage.setItem('wish-list', JSON.stringify(remaining));
    toast.success('Successfully removed!');
}


export {addToCart,getAllAddToCart,getAllWishList,addToWishList,removeFromAddToCart,removeFromWishList}