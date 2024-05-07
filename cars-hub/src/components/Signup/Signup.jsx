import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUpForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNo, setMobileNo] = useState('');


    // firstName, lastName, email, streetAddress,city,state,zipCode,country

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!firstName || !lastName || !email || !password || !mobileNo) {
            let missingFields = [];
            if (!firstName) {
                missingFields.push("First Name");
            }
            if (!lastName) {
                missingFields.push("Last Name");
            }
            if (!email) {
                missingFields.push("Email");
            }
            if (!password) {
                missingFields.push("Password");
            }
            if (!mobileNo) {
                missingFields.push("Mobile Number");
            }
            // alert(Please fill in the field(s): ${missingFields.join(', ')});
            return;
        }

        try {
            await signupUser(firstName, lastName, email, mobileNo, password);
            redirectToLogin();
        } catch (error) {
            console.error('Signup failed:', error);
            // Handle signup failure (display error message or take appropriate action)
        }
    };

    const signupUser = async (firstName, lastName, email, mobileNo, password) => {
        const signupData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobileNo: mobileNo,
            password: password
        };

        try {
            const response = await fetch('http://localhost:3000/user/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupData),
            });
            console.log(signupData);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            console.log('Signup successful:', data);
        } catch (error) {
            throw new Error('Signup failed');
        }
    };

    const redirectToLogin = () => {
        if (!email){
            window.prompt("enter email")
        }

        window.location.href = './Login'; // Update the path as per your folder structure
    };

    return (
       
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow"/>
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Create a new account
                </h2>
                <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                    Or
                    <a href="http://localhost:5173/login"
                        className=" ml-1 font-semibold text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                        login to your account
                    </a>
                </p>
            </div>
        
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form onSubmit={handleSubmit}>
                        <div>
                            <label for="email" className="block text-sm font-medium leading-5  text-gray-700">firstname</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />

                                {/* <input id="name" name="name" placeholder="John Doe" type="text" required="" value="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/> */}
                                <div className=" absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                            clip-rule="evenodd">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
        
                        <div className="mt-6">
                            <label for="username" className="block text-sm font-medium leading-5 text-gray-700">lastname</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
        
                            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"  className="flex-1 form-input pl-3 px-3 py-2 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 "/>

                                {/* <input id="username" name="username" placeholder="john" type="text" required="" value="" className="flex-1 form-input pl-3 px-3 py-2 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                                /> */}
                            </div>
                        </div>
        
                        <div className="mt-6">
                            <label for="email" className="block text-sm font-medium leading-5  text-gray-700">
                    Email address
                  </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                               {/* 
                                <input id="email" name="email" placeholder="user@example.com" type="email" required="" value="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/> */}
                                <div className=" absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
        
                        <div className="mt-6">
                            <label for="password" className="block text-sm font-medium leading-5 text-gray-700">
                        Password
                    </label>
                            <div className="mt-1 rounded-md shadow-sm">
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>

                                {/* <input id="password" name="password" type="password" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/> */}
                          </div>
                        </div>
        
                        <div className="mt-6">
                            <label for="password_confirmation" className="block text-sm font-medium leading-5 text-gray-700">
               mobileNo                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                            <input type="text" id="mobileNo" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} placeholder="Mobile Number" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>

                                {/* <input id="password_confirmation" name="password_confirmation" type="password" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/> */}
                            </div>
                        </div>
        
                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                   {/* <Link to="/login">  */}
                   <button type="submit" onClick={redirectToLogin}  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                      Create account
                    </button>
                    {/* </Link> */}
                  </span>
                        </div>
                    </form>
        
                </div>
            </div>
        </div>
          )
    // );
}

export default SignUpForm;