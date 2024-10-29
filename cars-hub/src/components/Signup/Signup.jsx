import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password || !mobileNo) {
      let missingFields = [];
      if (!firstName) missingFields.push("First Name");
      if (!lastName) missingFields.push("Last Name");
      if (!email) missingFields.push("Email");
      if (!password) missingFields.push("Password");
      if (!mobileNo) missingFields.push("Mobile Number");
      setError(`Please fill in the field(s): ${missingFields.join(', ')}`);
      return;
    }

    try {
      await signupUser(firstName, lastName, email, mobileNo, password);
      redirectToLogin();
    } catch (error) {
      console.error('Signup failed:', error);
      setError('Signup failed. Please try again.');
    }
  };

  const signupUser = async (firstName, lastName, email, mobileNo, password) => {
    const signupData = {
      firstName,
      lastName,
      email,
      mobileNo,
      password,
    };

    try {
      const response = await fetch('http://localhost:3000/user/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || response.statusText);
      }

      const data = await response.json();
      console.log('Signup successful:', data);
    } catch (error) {
      throw new Error('Signup failed');
    }
  };

  const redirectToLogin = () => {
    window.location.href = '/login'; // Update the path as per your folder structure
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
          Or{' '}
          <a href="/login"
            className=" ml-1 font-semibold text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
            login to your account
          </a>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium leading-5 text-gray-700">First Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="lastName" className="block text-sm font-medium leading-5 text-gray-700">Last Name</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="flex-1 form-input pl-3 px-3 py-2 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">Email address</label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="mobileNo" className="block text-sm font-medium leading-5 text-gray-700">Mobile Number</label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  type="tel"
                  id="mobileNo"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  placeholder="Mobile Number"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
              >
                Sign up
              </button>
            </div>
            {error && <p className="mt-4 text-sm text-center text-red-600">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
