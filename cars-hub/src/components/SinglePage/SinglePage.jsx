import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';

function Singleproduct() {
    const [car, setCars] = useState([]);
    const { addItem } = useCart();
    const { id } = useParams();
    const [images, setImages] = useState([]);
    const [message, setMessage] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/user/${userId}`, {
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
    const handleAddToCart = () => {
        const itemToAdd = {
            id: car.id,
            name: `${car.year} ${car.make} ${car.model}`, // Example for constructing the name
            image: images[1].imageUrl, // Assuming you have the image URL in your car object
            price: car.price,
            quantity: 1 // Assuming you always add one item at a time
        };
        addItem(itemToAdd);
        setMessage('Car added to Test Drive');
    };

    useEffect(() => {
        fetchCarData();
        fetchImageData();
    }, [id]);

    const fetchCarData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/car/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCars(data);
        } catch (error) {
            console.error('Error fetching car data:', error);
        }
    };

    const fetchImageData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/image/carImage/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setImages(data);
            if (data && data[1]) { // Check if images[1] exists
                setActiveImage(data[1].imageUrl); // Set activeImg to images[1].imageUrl
            }
        } catch (error) {
            console.error('Error fetching image data:', error);
        }
    };

    const [activeImg, setActiveImage] = useState(); // Initialize activeImg state variable

    if (!car) {
        return <p>Loading...</p>;
    }

    return (
        <div className='flex  justify-center items-center  gap-16'>
            <div className='flex  md:flex-row flex-col justify-center align-middle md:p-36'>
                <div className='flex flex-col gap-6 justify-center'>
                   <div> <img src={activeImg} alt="" className=' aspect-square object-cover  rounded-md  ' /></div>
                    <div className='flex flex-row justify-between gap-1 h-24 md:w-1/5 w-1/6'>
                        {images.length > 0 && images.map((image, index) => (
                            <img key={index} src={image.imageUrl} alt="Main Image" onClick={() => setActiveImage(image.imageUrl)} />
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-4 justify-center md:mt-0 mt-16 md:ml-32 ml-12 lg:w-2/4'>
                    <p className='text-gray-700 text-lg'>
                        {car.year}
                    </p>
                <span className='text-3xl font-bold'>{car.make} {car.model}</span>
                <div className='flex gap-3 '>
                    <div className='bg-slate-300 text-base p-2 rounded-lg font-semibold'>{car.mileage}KM</div>
                    <div className='bg-slate-300 text-base p-2 rounded-lg font-semibold'> {car.fuel_type}</div>
                    <div className='bg-slate-300 text-base p-2 rounded-lg font-semibold'> {car.transmission_type}</div>

                </div>


                <h6 className='text-2xl'>Rs {car.price}</h6>
                <div className='flex flex-row items-center pt-4'>

                    {/* <button className='bg-blue-400 font-semibold px-5 py-2 text-white rounded-md' onClick={() => handleAddToCart(car)}>Book Test Drive</button> */}


                    {userData ? (
                        <button className='bg-blue-400 font-semibold px-5 py-2 text-white rounded-md' onClick={handleAddToCart}>Book Test Drive</button>
                    ) : (
                        <Link to="/login" className='bg-red-400 font-semibold px-5 py-2 text-white rounded-md'>Login to Book Test Drive</Link>
                    )}
                    {message && <p className='pl-5'>{message}</p>}
                </div>
            </div>
            </div>
             </div>


    );
};

// export default CarDetail;



export default Singleproduct



