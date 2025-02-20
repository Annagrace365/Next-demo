import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center h-screen bg-gray-900 text-white mt-16">
      <h1 className="text-red-700 text-5xl mt-16 mb-8">Welcome Page</h1>
      <p className="text-center border border-yellow-500 p-8 w-1/2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dicta beatae at libero nulla illum repellendus qui rem quidem ipsam ut ipsa, nam tenetur. Architecto repellendus minus ipsum autem illum.
      </p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-8 hover:bg-blue-700 ">
        <a href="/home">Home</a>
      </button>
    </div>
  );
}
