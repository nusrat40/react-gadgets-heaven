import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
    return (
        <div>
            <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Bounce
/>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-232px)] container mx-auto px-12'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;