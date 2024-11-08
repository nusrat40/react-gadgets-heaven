import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {

  const location = useLocation();
  const isHomePage = location.pathname === '/';


    return (
        <div className='container mx-auto lg:px-12'>
          <div className={`navbar lg:px-28 lg:py-4  ${isHomePage ? 'lg:bg-[#9538E2] lg:text-white': 'lg:bg-white'}`} >
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            <NavLink
            className={({ isActive }) =>
              `font-bold ${isActive ? 'text-purple-600' : 'hover:text-purple-600'}`
            }
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${isActive ? 'text-purple-600' : 'hover:text-purple-600'}`
            }
            to='/statistics'
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${isActive ? 'text-purple-600' : 'hover:text-purple-600'}`
            }
            to='/dashboard'
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${isActive ? 'text-purple-600' : 'hover:text-purple-600'}`
            }
            to='/trending'
          >
            Trending
          </NavLink>
          </ul>
        </div>
        <Link to='/' className=' text-xl font-bold'>
          Gadget Heaven
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 gap-8 font-bold'>
          <NavLink
            // className={({ isActive }) =>
            //   `font-bold ${isActive ? 'text-purple-600' : 'hover:text-purple-600'}`
            // }
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${isActive ? 'text-purple-600' : ''}`
            }
            to='/statistics'
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${isActive ? 'text-purple-600' : ''}`
            }
            to='/dashboard'
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${isActive ? 'text-purple-600' : ''}`
            }
            to='/trending'
          >
            Trending
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-2">
    <Link className="btn rounded-full"><FiShoppingCart></FiShoppingCart></Link>
    <Link className='btn rounded-full'><CiHeart size={20}></CiHeart></Link>

  </div>
    </div>
        </div>

    );
};

export default Navbar;