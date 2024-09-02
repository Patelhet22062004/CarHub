import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaCar } from 'react-icons/fa';
import Shop from '../Shop/Shop';
import Home from '../../Home';
import Error from '../../Error';
import Contact from '../../Contact/Contact';
import About1 from '../../About1/About1';
import Login from '../Login/Login';
import Cart from '../../Cart/Cart';
import SinglePage from '../SinglePage/SinglePage';
import Checkout from '../../Checkout/Checkout';
import Signup from '../Signup/Signup';
import Video from "../Page/Video/Video";
import Profile from '../Profile/Profile';
import { CgProfile } from "react-icons/cg";
import car from "../../../public/images/images/car.jpg"
import user from "../../../public/images/images/user.png"
import TicketPage from '../Ticketpage/Ticketpage';
import { useCart } from 'react-use-cart';

function Navbar() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const userId = localStorage.getItem('userId');
    const { totalItems } = useCart();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/${userId}`, {
                    headers: {
                        'Content-type': 'application/json',
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const userData = await response.json();
                setUserData(userData);
            } catch (error) {
                setError('Could not fetch user data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

    const handleLogout = () => {
        // Clear user data from state and local storage
        setUserData(null);
        localStorage.removeItem('userId');
        // Redirect to the login page
        
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Router>
                    <nav className="relative bg-white shadow dark:bg-gray-800">
                        <div className="container px-6 md:py-3 mx-auto md:flex">
                            <div className="flex items-center justify-between">
                                <Link to="/">
                                    <img className="w-auto md:h-24 h-16" src="public/images/images/logos/Logo.png" alt="" />
                                </Link>
                                <div className="flex md:hidden">
                                    <button
                                        onClick={toggleMenu}
                                        type="button"
                                        className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                        aria-label="toggle menu"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-between`}>
                                <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
                                    <Link to="/home" className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">Home</Link>
                                    <Link to="/shop" className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">Shop</Link>
                                    <Link to="/about" className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">About</Link>
                                    <Link to="/contact" className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">Contact</Link>
                                </div>
                                <div className="relative flex gap-3  md:mt-0">

                                    {userData ? (
                                        <>
                                        <Link to="/cart" className="relative">
                                        <img src={car} className='h-20 w-20 hover:scale-110 transition-all' />
                                        {totalItems > 0 && <span className="absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 bg-red-500 text-white rounded-full">{totalItems}</span>}
                                    </Link>

                                        <Link to="/profile" className='mx-2'>
                                            <img src={user} className='h-7 w-7 mt-[17px] hover:scale-110 transition-all' />
                                            {userData && <span className="">{userData.user.firstName}</span>}
                                        </Link>
                                        </>
                                    ) : (
                                        <div>
                                            <Link to="/login">
                                                <button className='bg-indigo-500 w-fit text-white mt-3 rounded px-3 mx-2 py-2'>Login</button>
                                            </Link>
                                            <Link to="/Signup">
                                                <button className='bg-indigo-500 w-fit text-white mt-3 rounded px-3 py-2'>Signup</button>
                                            </Link>
                                        </div>
                                    )}
                                    {userData && ( // Only render logout button if user is logged in
                                        <div>
                                           <Link to='/login'> <button onClick={handleLogout} className='bg-indigo-500 w-fit text-white mt-3 rounded px-3 py-2'>Logout</button>
                                           </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route path='/about' element={<About1 />} />
                        <Route path='/' element={<Video />} />

                        <Route path='/home' element={<Home />} />
                        <Route path='/shop' element={<Shop />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='*' element={<Error />} />
                        <Route path='/profile/' element={<Profile />} />
                        <Route path='/ticketpage' element={<TicketPage />} />
                        <Route path='/singlepage/:id' element={<SinglePage />} />
                    </Routes>

                </Router>
            )}
        </>
    )
}

export default Navbar;
