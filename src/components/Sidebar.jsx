import { NavLink } from "react-router-dom";


const Sidebar = ({categories}) => {


    return (
        <div className=" p-2">
               <button className="btn mb-3">
               <NavLink >All products</NavLink>
               </button>
               <div className="flex flex-col gap-3">
                {
                    categories.map(category=><button key={category.id} className="btn">
                        <NavLink  to={`/category/${category.category}`}>{category.category}</NavLink>
                    </button>)
                }
               </div>
               
            
        </div>
    );
};

export default Sidebar;