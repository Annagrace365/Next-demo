import React from 'react'

function page() {
    return (
        <div className="flex flex-col justify-start items-center h-screen bg-gray-900 text-white">
            <h1 className="text-red-700 text-5xl mt-16 mb-8">Home</h1>
            <p className="text-center border border-yellow-500 p-8 w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore ratione ipsam voluptas ab dolor quia quaerat laudantium iusto aut dolores animi provident dolore magni repudiandae, consequatur dicta modi veritatis.</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-8 hover:bg-blue-700"><a href="/">Back</a></button>
        </div>
    )
}

export default page