import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center h-screen bg-gray-900 text-white mt-16">
      <h1 className="text-yellow-500 text-5xl mt-16 mb-8 font-bold">Welcome to Our Platform</h1>
      <p className="text-center border border-yellow-500 p-8 w-1/2">
        Elevate your experience with our cutting-edge solutions. Whether you're here to explore, learn, or grow, we provide the tools and resources to help you succeed. Join our community today and unlock endless possibilities!
      </p>
      <button className="bg-blue-500 text-white py-2 px-6 rounded mt-8 hover:bg-blue-700 transition duration-300">
        <a href="/home">Get Started</a>
      </button>
    </div>
  );
}
