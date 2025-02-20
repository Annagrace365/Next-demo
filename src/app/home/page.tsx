import React from 'react';

function Page() {
    return (
        <div className="flex flex-col justify-start items-center h-screen bg-gray-900 text-white">
            <h1 className="text-yellow-500 text-5xl mt-32 mb-8 font-bold">Welcome Home</h1>
            <p className="text-center border border-yellow-500 p-8 w-1/2">
                Discover a world of opportunities with our platform. Whether you're here to learn, explore, or connect, we provide the tools and resources to help you thrive. Join us today and take the next step toward success!
            </p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded mt-8 hover:bg-blue-700 transition duration-300">
                <a href="/">Go Back</a>
            </button>
        </div>
    );
}

export default Page;
